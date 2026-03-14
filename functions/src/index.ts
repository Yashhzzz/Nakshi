import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

const REGION = "asia-south1";

/**
 * Qualifies a referral when a payment is made.
 */
async function qualifyReferral(refereeId: string, planAmount: number) {
  const db = admin.firestore();
  
  // Only qualify if amount >= 1699 (Growth or Pro plans)
  if (planAmount < 1699) return;

  const referralQuery = await db.collection("referrals")
    .where("referee_id", "==", refereeId)
    .where("status", "==", "pending")
    .limit(1)
    .get();

  if (referralQuery.empty) return;

  const referralDoc = referralQuery.docs[0];
  const referralData = referralDoc.data();
  const referrerId = referralData.referrer_id;

  // Check referrer's monthly cap (₹2500 max per month = 10 qualified referrals)
  const today = new Date();
  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  
  const monthlyQualified = await db.collection("referrals")
    .where("referrer_id", "==", referrerId)
    .where("status", "in", ["reward_pending", "reward_issued"])
    .where("qualified_at", ">=", monthStart)
    .get();

  const isUnderCap = monthlyQualified.size < 10;
  const status = isUnderCap ? "reward_pending" : "qualified";

  await referralDoc.ref.update({
    status: status,
    qualified_at: admin.firestore.FieldValue.serverTimestamp(),
    plan_amount: planAmount,
  });

  // Update referrer's aggregate stats
  if (isUnderCap) {
    await db.collection("waitlist").doc(referrerId).update({
      total_rewards_earned: admin.firestore.FieldValue.increment(250),
      total_referrals_qualified: admin.firestore.FieldValue.increment(1),
    });
  }
}

// Function 1: Razorpay Webhook
export const razorpayWebhook = functions.region(REGION).https.onRequest(async (req, res) => {
  const event = req.body;
  
  if (event.event === "subscription.charged" || event.event === "payment.captured") {
    const payload = event.payload;
    const notes = payload.payment?.entity?.notes || payload.subscription?.entity?.notes;
    const whatsappNumber = notes?.whatsapp_number;
    const amount = (payload.payment?.entity?.amount || payload.subscription?.entity?.amount) / 100;

    if (whatsappNumber) {
      const db = admin.firestore();
      const userRef = await db.collection("waitlist").where("whatsapp_number", "==", whatsappNumber).limit(1).get();
      
      if (!userRef.empty) {
        await qualifyReferral(userRef.docs[0].id, amount);
      }
    }
  }
  
  res.status(200).send("OK");
});

// Function 2: Get Referrer Dashboard
export const getReferrerDashboard = functions.region(REGION).https.onRequest(async (req, res) => {
  const whatsappNumber = req.query.whatsapp as string;
  if (!whatsappNumber) {
    res.status(400).send("Missing whatsapp number");
    return;
  }

  const db = admin.firestore();
  const userQuery = await db.collection("waitlist").where("whatsapp_number", "==", whatsappNumber).limit(1).get();

  if (userQuery.empty) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  const userDoc = userQuery.docs[0];
  const userData = userDoc.data();

  // Get referral stats
  const referrals = await db.collection("referrals").where("referrer_id", "==", userDoc.id).get();
  
  const stats = {
    my_referral_code: userData.my_referral_code,
    upi_id: userData.upi_id || null,
    total_rewards_earned: userData.total_rewards_earned || 0,
    pending_count: referrals.docs.filter((d) => d.data().status === "pending").length,
    reward_pending_count: referrals.docs.filter((d) => d.data().status === "reward_pending").length,
    reward_issued_count: referrals.docs.filter((d) => d.data().status === "reward_issued").length,
  };

  res.set("Access-Control-Allow-Origin", "*");
  res.status(200).json(stats);
});

// Function 3: Update UPI ID
export const updateUpiId = functions.region(REGION).https.onRequest(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Methods", "POST");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Allow-Origin", "*");
    res.status(204).send("");
    return;
  }

  const { whatsapp_number: whatsappNumber, upi_id: upiId } = req.body;
  
  if (!whatsappNumber || !upiId) {
    res.status(400).send("Missing parameters");
    return;
  }

  const db = admin.firestore();
  const userQuery = await db.collection("waitlist").where("whatsapp_number", "==", whatsappNumber).limit(1).get();

  if (userQuery.empty) {
    res.status(404).send("User not found");
    return;
  }

  await userQuery.docs[0].ref.update({ upi_id: upiId });
  
  res.set("Access-Control-Allow-Origin", "*");
  res.status(200).json({ success: true });
});

// Function 4: Verify OTP and Register
export const verifyOtpAndRegister = functions.region(REGION).https.onRequest(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Methods", "POST");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Allow-Origin", "*");
    res.status(204).send("");
    return;
  }

  const { idToken } = req.body;
  if (!idToken) {
    res.status(400).send("Missing token");
    return;
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const phoneNumber = decodedToken.phone_number;
    
    if (!phoneNumber) {
      res.status(400).send("Invalid token: no phone number");
      return;
    }

    const db = admin.firestore();
    const cleanPhone = phoneNumber.replace("+", "");
    const userQuery = await db.collection("waitlist").where("whatsapp_number", "==", cleanPhone).get();

    let userId: string;
    let myReferralCode: string;
    let isNew = false;

    if (userQuery.empty) {
      isNew = true;
      const newDoc = await db.collection("waitlist").add({
        whatsapp_number: cleanPhone,
        status: "waitlist",
        total_rewards_earned: 0,
        total_referrals_qualified: 0,
        is_founding_member: false,
        created_at: admin.firestore.FieldValue.serverTimestamp(),
        my_referral_code: "NAK-" + Math.random().toString(36).substring(2, 8).toUpperCase(),
      });
      userId = newDoc.id;
      const docSnapshot = await newDoc.get();
      myReferralCode = docSnapshot.data()?.my_referral_code;
    } else {
      userId = userQuery.docs[0].id;
      myReferralCode = userQuery.docs[0].data().my_referral_code;
    }

    res.set("Access-Control-Allow-Origin", "*");
    res.status(200).json({ userId, myReferralCode, isNew });
  } catch (error) {
    console.error("Auth error:", error);
    res.status(401).send("Unauthorized");
  }
});
