# ✦ NAKSHI AI (नक्शी) — Complete Master Document
### AI-Powered WhatsApp Photography Bot for Indian Jewelers
> Version 1.0 · Confidential · Internal Use Only

---

## TABLE OF CONTENTS

1. [The Idea](#1-the-idea)
2. [The Problem We Solve](#2-the-problem-we-solve)
3. [Why Now](#3-why-now)
4. [The Product — Features](#4-the-product--features)
5. [How The Bot Works — User Flow](#5-how-the-bot-works--user-flow)
6. [Onboarding & Jeweler Verification](#6-onboarding--jeweler-verification)
7. [Pricing Architecture](#7-pricing-architecture)
8. [Go-To-Market Strategy](#8-go-to-market-strategy)
9. [Revenue & Unit Economics](#9-revenue--unit-economics)
10. [Competitive Landscape](#10-competitive-landscape)
11. [Brand — Nakshi AI](#11-brand--nakshi-ai)
12. [Brand Voice & Messaging](#12-brand-voice--messaging)
13. [Copy Bank](#13-copy-bank)
14. [Week 1 Build Plan](#14-week-1-build-plan)
15. [Risks & How To Hedge Them](#15-risks--how-to-hedge-them)
16. [The 30-Day Validation Sprint](#16-the-30-day-validation-sprint)
17. [Roadmap — Features Coming Soon](#17-roadmap--features-coming-soon)
18. [The One-Page Pitch](#18-the-one-page-pitch)

---

## 1. THE IDEA

**Nakshi AI is a WhatsApp-native AI bot built exclusively for jewelry businesses in India.**

A jeweler clicks a photo of any piece on their phone and sends it to the Nakshi AI WhatsApp number. Within 60 seconds, the same jewelry appears on a professional model — photorealistic, ready to send to customers, ready to post on Instagram. No studio. No photographer. No app to download. No prompting. Just buttons.

The entire experience lives inside WhatsApp — the app every jeweler in India already uses to run their business.

---

## 2. THE PROBLEM WE SOLVE

### The Core Pain

Jewelry does not sell well from a flat surface. Customers want to see it worn. But getting jewelry photographed on a model requires:

| What It Takes Today | Cost | Time |
|---|---|---|
| Professional studio shoot | ₹15,000 – ₹50,000 per session | 2–5 days |
| Freelance Photoshop editor | ₹30 – ₹80 per image | 1–3 days per batch |
| In-house photographer | ₹15,000 – ₹25,000/month salary | Ongoing overhead |

For a small jeweler selling on Instagram and WhatsApp — which is most of India's jewelry market — this is not viable every week. Their product photos look amateur. They lose customers to better-looking competitors.

### The Secondary Pain — Gemstone Variants

A jeweler makes one ring. A customer wants to see it in Ruby. Another wants Emerald. Another wants Sapphire. Today the jeweler either:
- Makes 3 physical pieces (expensive)
- Loses the sale (common)
- Describes it in words (ineffective)

Nakshi AI solves this with an AI gemstone color swap — one piece shown in every stone variant instantly.

### The Painkiller Test

> **This is a painkiller, not a vitamin.** The pain is acute, recurring, and directly tied to revenue loss. Jewelers feel it every single week.

---

## 3. WHY NOW

Three forces converged in 2024–2025 to make this viable today and not 3 years ago:

**① Generative image AI crossed the quality threshold**
Models like Flux and fine-tuned Stable Diffusion can now place jewelry on photorealistic human models with enough fidelity that customers actually buy. This was not true in 2022.

**② WhatsApp Business API matured**
Button-based conversational flows, media replies, and webhooks are now reliable, cheap, and developer-friendly. Building a full product experience inside WhatsApp is genuinely possible today.

**③ Post-COVID jewelry market moved online permanently**
Instagram and WhatsApp selling is now mainstream for jewelers who would never have touched digital tools in 2019. The behavior change already happened — Nakshi AI meets them exactly where they are.

---

## 4. THE PRODUCT — FEATURES

### Version 1 (Launch — Week 1)
> Single feature. Done exceptionally well.

- **Jewelry on Model** — Send a jewelry photo → AI places it on a professional model → delivered back in WhatsApp in 60 seconds

### Version 2 (Month 2–3)
- **Gemstone Color Swap** — Change Ruby to Emerald to Sapphire to Diamond in one tap
- **Metal Finish Swap** — Yellow gold → Rose gold → White gold / Silver
- **Batch Processing** — Send up to 10 images at once → all 10 back on models in under 1 minute

### Version 3 (Month 4–6)
- **Catalog Shoot Mode** — Structured shoot flow for photographing an entire collection
- **Custom Prompts** — Advanced users can write their own image generation instructions
- **Diamond Rate Calculator** — Input stone details → bot calculates rate closest to wrap (market price)
- **Image Library** — Web portal to access, download, and organize all past generated images

### Non-Negotiable Design Principle
> **The entire bot requires zero prompting. Every action is driven by buttons. A jeweler who has never used AI in their life can use this on Day 1.**

---

## 5. HOW THE BOT WORKS — USER FLOW

```
JEWELER sends photo to Nakshi AI WhatsApp number
                    ↓
BOT checks: Is this number registered?
                    ↓
        [YES]                   [NO]
          ↓                       ↓
  Check free images          Onboarding flow
  remaining                  (see Section 6)
          ↓
  [Images > 0]           [Images = 0, unpaid]
          ↓                       ↓
"Processing your         Payment gate message
 image... 60 sec ✨"     with plan options
          ↓
  AI generates image
          ↓
BOT sends back result photo
          ↓
"Here's your jewelry on a model! ✨
 Images remaining: X/10
 [📸 Send another] [💡 See plans]"
```

### The Payment Gate Moment (Image 10 — Last Free One)

The bot sends the result first. Then immediately:

```
"🎉 That was your 10th free image — and your 
jewelry looked incredible.

Your competitors are still paying ₹500/image 
to freelancers and waiting 2 days.

You just did it in 45 seconds.

Ready to keep going?

[🚀 Start for ₹699/month]
[📞 Talk to us first]"
```

> **"Talk to us first" is critical.** Some jewelers will not pay a bot. They will pay a person. That button opens a direct WhatsApp chat with the founder. Close them manually. These are your first 20 customers.

---

## 6. ONBOARDING & JEWELER VERIFICATION

### The Core Problem
The bot number will eventually be shared publicly. Random people cannot be allowed to burn the free image quota.

### The Solution — Frictionless Self-Qualification
No OTP. No ID. No proof required. The friction of the questions self-selects non-jewelers out. Nobody lies to get into a jewelry photography bot.

### The Onboarding Flow

```
USER sends first message
        ↓
"Namaste! Welcome to Nakshi AI 🪙
 Are you a jewelry business owner or seller?

 [✅ Yes, I sell jewelry]
 [❌ No, just curious]"
        ↓
[NO] → "This bot is built for jewelry businesses. 
        Come back if you start one! 🙏"
        → END

[YES] → "What type of jewelry do you primarily sell?
         [Gold 💛] [Diamond 💎] [Silver ⚪] 
         [Imitation 💍] [All of the above]"
        ↓
       "What's your shop or business name?"
       [Free text]
        ↓
       "Which city are you based in?"
       [Free text]
        ↓
  ✅ ACCOUNT CREATED IN DATABASE
        ↓
"You're all set! 🎉

You have 10 FREE image generations.

📸 Just send me a photo of any jewelry piece 
and I'll put it on a model in under 60 seconds.

Send your first photo now 👇"
```

### Minimum Database Schema (Day 1)

```
User {
  whatsapp_number    // primary key (auto-captured)
  shop_name
  jewelry_category
  city
  registered_at
  free_images_used   // 0–10
  subscription_tier  // null / starter / growth / pro
  subscription_start
  subscription_end
  total_images_generated
  last_active
}
```

---

## 7. PRICING ARCHITECTURE

### The Value Anchor — Always Lead With This

| What They Pay Today | Cost |
|---|---|
| Studio shoot (model + photographer) | ₹15,000 – ₹50,000 per session |
| Freelance Photoshop per image | ₹30 – ₹80 per image |
| Nakshi AI | ₹699 – ₹3,999 per month |

**Nakshi AI replaces a ₹15,000 expense. Even at ₹3,999/month the jeweler saves ₹10,000+ every month.**

---

### Pricing Tiers

| Tier | Price | Images/Month | Key Features |
|---|---|---|---|
| **Starter** | ₹699/month | 40 | Model try-on, 3 model options, gemstone swap, standard speed |
| **Growth** ⭐ | ₹1,799/month | 150 | 8 model options, metal swap, batch up to 5, priority queue (<60s), diamond calculator, web image library (30 days) |
| **Pro** | ₹3,999/month | 400 | Batch up to 10, catalog mode, custom prompts, no watermark, library 90 days, early feature access |
| **Studio (Annual)** | ₹34,999/year | 400 | Everything in Pro, ~27% saving, onboarding call, GST invoicing |

> ⭐ Growth is the target tier. The "Most Popular" badge goes here.

---

### Price Anchoring Logic

```
₹699/month   →  "What's the risk? Let me try."       ← ENTRY
₹1,799/month →  "This is what serious sellers use."  ← TARGET
₹3,999/month →  "Enterprise. Not for me."            ← DECOY (makes Growth feel rational)
```

The Pro tier exists primarily to make Growth feel like the obvious, affordable choice. This is the decoy effect.

---

### Free Trial Structure

> **10 free images. No credit card. No expiry pressure.**

- 10 images is enough for a full small product line
- The moment a jeweler gets a customer inquiry based on an AI image, they are sold
- Capture WhatsApp number at registration (automatic)
- Day 7 follow-up: "Here's what you created. Want to keep going?" — include their actual output images

---

### Annual Pricing Framing

Never say: *"₹34,999/year"*

Always say: **"₹2,916/month, billed annually"** + **"Save ₹13,000 vs monthly"**

---

### Psychological Pricing Tactics In Use

| Tactic | How It's Applied |
|---|---|
| **Decoy Effect** | Pro at ₹3,999 makes Growth at ₹1,799 feel rational |
| **Charm Pricing** | ₹699, ₹1,799 (9s below ₹1,000; clean above) |
| **Most Popular Badge** | On Growth — self-fulfilling social proof |
| **Loss Framing** | "You've used 38/40 images. You'll run out by the 22nd." |
| **Annual Monthly Equivalent** | Show ₹2,916/month, not ₹34,999/year |
| **Value Comparison Anchor** | Always mention the ₹15,000 studio shoot first |

---

### Pricing Sensitivity by Segment

| Segment | WTP | Key Objection | Counter |
|---|---|---|---|
| Small Instagram jeweler, Tier 2/3 | ₹499–999/month | "My Photoshop guy charges ₹20/image" | "Your guy takes 2 days. This takes 60 seconds." |
| Mid-size jeweler, 1 store | ₹1,500–2,500/month | "Need to show my partner" | Send free trial output for them to share |
| Wholesale exporter | ₹3,000–6,000/month | "Volume deal?" | Annual Studio plan |
| Multi-store chain | ₹10,000+/month | "ERP integration?" | Enterprise conversation |

---

### Price Increase Playbook (When You Need to Raise)

1. **Announce 2–3 new features in the same message as the price increase** — brain anchors on more value, not higher cost
2. **Grandfather existing customers for 90 days** — frame it as a gift, not a warning
3. **Offer annual lock-in as an escape valve** — they pay more upfront, you win either way
4. **Message formula:** *"We're adding [X] and [Y]. Pricing goes from ₹[old] to ₹[new] on [DATE]. Your plan stays at ₹[old] until [DATE+90]. Lock in forever with annual."*
5. **Expected churn on a 20–25% increase:** 8–15% — acceptable if new customers onboard at the higher rate

---

## 8. GO-TO-MARKET STRATEGY

### Phase 1 — Founder-Led (Weeks 1–4)

**The asset:** Direct connections to Indian jewelry market + access to jeweler WhatsApp groups

**The play:**
1. Message 5 personal contacts today: *"Testing something new — send me a jewelry photo, I'll send it back on a model in an hour, completely free, just want your honest opinion."*
2. Process manually using existing AI tools (Photoroom, Midjourney, etc.) — validate quality and demand before writing a line of code
3. If 3 out of 5 react positively, build the bot
4. Drop the bot link into 3 WhatsApp jeweler groups with a before/after image
5. Give your personal network 30 free images as a genuine gift — these become your first case studies

**Metric to obsess over:** What % of free users pay when they hit image 10?

---

### Phase 2 — Reseller Network (Month 2–3)

> **This is the highest-leverage GTM move given the founder's existing network.**

Identify 20–30 "connector" jewelers:
- WhatsApp group admins
- Jewelry association leaders
- Mandi/market leaders in Jaipur, Surat, Mumbai

**The offer:** Give them a reseller account. They promote Nakshi AI to their network. They earn 20–30% commission on every customer they bring in. You take 70–80%.

**Why this works:** The connector's word carries more credibility in their group than any ad. You scale distribution without scaling your sales team.

---

### Phase 3 — Paid + Content (Month 4+)

- Instagram before/after reels (jewelry → model shot) — the content markets itself
- Facebook/Instagram ads targeting jewelry business owners in India
- YouTube Shorts showing the 60-second transformation
- Influencer partnerships with jewelry Instagram accounts

---

### Distribution Priority Order

```
1. Personal network (free conversions, case study material)
2. WhatsApp group drops (founder's access)
3. Reseller network (scalable, community-trusted)
4. Instagram organic (before/after content)
5. Paid ads (only after proven conversion rate)
```

---

## 9. REVENUE & UNIT ECONOMICS

### Estimated COGS Per Customer/Month

| Cost Item | Estimate |
|---|---|
| Image generation (per image, AI compute) | ₹2–8 |
| WhatsApp Business API (per message) | ₹0.40–0.80 |
| Infrastructure/hosting per customer | ₹150–400/month |
| Support (early stage) | ₹200–500/month |
| **Total COGS at 100–200 generations/month** | **₹500–1,200/month** |

**Target Gross Margin:** 65–75%
**Below 60%:** Not a fundable business — fix the AI compute costs first

---

### Revenue Model at Scale

| Scenario | Paying Customers | Avg Revenue/Customer | MRR |
|---|---|---|---|
| End of Month 3 | 50 | ₹1,200 | ₹60,000 |
| End of Month 6 | 200 | ₹1,400 | ₹2,80,000 |
| End of Year 1 | 700 | ₹1,600 | ₹11,20,000 |
| End of Year 2 | 2,500 | ₹1,800 | ₹45,00,000 |

**Year 1 ARR target:** ₹1–1.5 CR (conservative, founder-led)
**Year 2 ARR target:** ₹4–6 CR (with reseller network active)

---

## 10. COMPETITIVE LANDSCAPE

| Competitor | Threat Level | Their Gap | Our Edge |
|---|---|---|---|
| **Photoroom** | High | No model try-on, no WhatsApp, not jewelry-specific | WhatsApp-native + jewelry-specific fine-tuning |
| **Botika / Zyler** | Medium | Not WhatsApp native, not India-focused, expensive | ₹699 entry point, vernacular onboarding |
| **Canva AI** | Medium-High | No try-on feature (yet), no WhatsApp | Speed-to-market + category specificity |
| **Local Photoshop editors** | Underrated | Speed (2 days minimum), can't do gemstone swaps | 60 seconds vs 2 days — not even close |
| **Meesho/IndiaMART native tools** | Future threat | Don't exist yet | Build loyalty before they move |

### The Most Dangerous Competitor
Not a startup. It's **Photoroom or Canva** deciding jewelry model try-on is worth one engineering sprint. The hedge: move fast, fine-tune the model on jewelry-specific data, and build switching costs through the image library and workflow integrations.

### The Real Moat (Long-Term)
Every jewelry image processed = training data. A model fine-tuned on 500,000 jewelry-on-model images will dramatically outperform any generic tool. That gap compounds every month.

---

## 11. BRAND — NAKSHI AI

### The Name

**NAKSHI AI (नक्शी)**

*Naksha* in Rajasthani/Hindi means a design, a blueprint, a hand-crafted pattern. It is the exact word artisan jewelers use for engraving work. The name collides ancient Indian craftsmanship with modern AI technology.

- Pronounces cleanly in Hindi, Gujarati, Marwadi, and English
- Handle: @NakshiAI — clean across platforms
- The 'N' logo can incorporate a Kundan motif or geometric Rajasthani pattern

### Brand Name Shortlist (Evaluated)

| Name | Meaning | Verdict |
|---|---|---|
| **NAKSHI AI ✦** | Design / craftsmanship (Rajasthani) | **RECOMMENDED** |
| Zevar AI | Jewelry (Hindi/Urdu) | Strong backup |
| Kundan AI | Traditional Rajasthani gold setting | Too niche |
| Chamak AI | Sparkle / shine | Too generic |
| Haar.ai | Necklace (also means 'defeat' in Hindi) | Risky double meaning |
| Motiwala AI | Classic Marwadi pearl merchant surname | Too surname-like |

---

### Brand Personality

| Trait | What It Means | What It Does NOT Mean |
|---|---|---|
| **SHARP** | Get to the point fast. No fluff. Every message has a purpose. | Blunt or rude. Sharpness is precision. |
| **WARM** | Speak like a trusted seth — a knowledgeable insider who wants your success. | Overly formal or cold. Not a corporate chatbot. |
| **PROUD** | Celebrate Indian craftsmanship and the jeweler's skill. | Arrogant. Pride is in the craft, not in chest-beating. |
| **MODERN** | Clean, clear, 2025 language. Free of jargon. | Trendy or trying too hard. No forced Gen-Z energy. |

**If Nakshi AI were a person:**
> A young, sharp Marwadi entrepreneur who grew up watching their family's jewelry business and decided to fix it with technology. They respect the trade deeply. They speak directly. They would never waste your time.

**Formality:** 4/10 — Conversational, warm, never stiff
**Energy:** 7/10 — Confident, fast-moving, not hyperactive
**Core Feeling:** *Empowered.* After reading any Nakshi AI message, the jeweler should feel: *"I can compete with the big players now."*

---

## 12. BRAND VOICE & MESSAGING

### Taglines (Three for Three Contexts)

| Use Context | Tagline |
|---|---|
| **WhatsApp / Vernacular** | Aapka Zevar. Model Pe. 60 Second Mein. |
| **Website / Ads** | Studio-Quality Photography. No Studio Required. |
| **Brand Story / Press** | Craft is Yours. The Camera is Ours. |

---

### Elevator Pitches

**30-Second Version**
> Nakshi AI is a WhatsApp bot built specifically for jewelry businesses in India. You send a photo of your jewelry. In 60 seconds, it comes back on a professional model — no studio, no photographer, no waiting 3 days. Studio shoots cost ₹15,000–50,000. Nakshi AI costs ₹699 a month. Your whole catalog, on a model, from your phone.

**60-Second Version**
> Every jeweler knows the problem: you make a beautiful piece, but to sell it online you need photos on a model. That means booking a shoot, coordinating with a photographer, waiting days for edits, spending ₹15,000 minimum. For a small jeweler, that's not viable every week.
>
> Nakshi AI is a WhatsApp-native AI bot built for exactly this problem. You click a photo of your piece on your phone and send it to our bot — no app download, no login, nothing new to learn. Within 60 seconds, the same jewelry appears on a professional model, ready to send to customers.
>
> We also let you swap gemstone colors — so one piece can be shown in ruby, emerald, and sapphire instantly. And we do batch processing: send 10 images, get 10 model photos back in under a minute. All of this via WhatsApp. No new app. No prompts to learn. Starts at ₹699 a month.

---

### Value Propositions by Persona

**Persona 1 — Small Instagram Jeweler, Tier 2 city**
> For ₹699/month, your jewelry looks like it came from a Mumbai studio. Shot on your phone. Ready in 60 seconds. Your competitors won't know how you did it.

**Persona 2 — Mid-size jeweler, 1 store, seasonal launches**
> Send your entire new collection in one batch. 10 images at a time, back in under a minute. Launch your season while competitors are still waiting for their photographer.

**Persona 3 — Wholesale / Exporter showing variants to buyers**
> One piece. Three gemstone variants. All AI-generated, all photorealistic, all in WhatsApp. Close international deals without making a single extra piece.

---

### Tone — Before / After

| ❌ Generic Bot | ✅ Nakshi AI |
|---|---|
| "Welcome to our AI jewelry photography service! Please follow the instructions." | "Namaste! 🙏 Send us your first photo — we'll put it on a model in 60 seconds. 10 images free." |
| "You have used all your free images. Please subscribe to continue." | "You've used all 10 free images — and your jewelry looked stunning on every single one. Ready to keep going?" |
| "Error: Your image could not be processed. Please try again." | "Hmm, something went sideways 🤔. Try again — still stuck? Reply HELP and we'll sort it within the hour." |
| "You have reached your monthly image limit. Upgrade your plan." | "You've used 38/40 images. At this pace, you'll run out by the 22nd. Upgrade to Growth for 150 images." |

---

### Channel-by-Channel Tone Guide

| Channel | Formality | Length Rule | Key Principle |
|---|---|---|---|
| **WhatsApp Bot** | 4/10 | Max 4 lines per message | One idea per message. Buttons over paragraphs. |
| **Website** | 6/10 | Headlines: 5–7 words. Body: 2–3 sentences. | Lead with transformation, not technology. |
| **Instagram** | 3/10 | 1 hook + 2–3 lines + CTA | Image does 80% of the work. Caption closes the deal. |
| **Email** | 5/10 | Subject: under 7 words. Body: 150–200 words. | One email = one idea. Never bundle features. |
| **Sales DMs** | 4/10 | Lead with a question | Ask their pain first. Position as their specific solution. |
| **Support** | 4/10 | Acknowledge in 1 line. Fix in 2 lines. | Own the problem immediately. Fix first, explain later. |

---

## 13. COPY BANK

### Website Headline
```
Your Jewelry. On a Model. In 60 Seconds.

Nakshi AI turns your phone photos into professional 
model shots — right in WhatsApp. No studio. No wait.
```

### Primary CTAs
| Context | CTA |
|---|---|
| Website hero | Try 10 Images Free |
| WhatsApp bot opener | Send Your First Photo 👇 |
| Payment gate | Start for ₹699/month |
| Instagram bio | DM us a jewelry photo — see the magic |

### WhatsApp Onboarding Message
```
Namaste! 🙏 Welcome to Nakshi AI.

You've just unlocked AI-powered jewelry photography 
— right here in WhatsApp.

✅ 10 FREE image generations
📸 Jewelry on a model in 60 seconds
💎 Gemstone color swaps
📦 Batch processing up to 10 images

Send me a photo of any jewelry piece to start 👇
```

### Error Message
```
Hmm — that one didn't come out right 🤔

Try sending the photo again — sometimes lighting 
or file size throws us off.

Still not working? Reply HELP and we'll sort it 
within the hour. This image won't count against 
your free quota. 🙏
```

### Downtime / Maintenance Message
```
Quick heads up from Nakshi AI 🙏

We're doing a maintenance update — processing 
will be paused for [X] hours, from [TIME] to [TIME].

Your images will be first in queue when we're back.
Thank you for your patience. 🙏
```

### Price Increase Email
```
Subject: A small change + two new features for you

Namaste [Name],

We're adding [Feature 1] and [Feature 2] to all plans.

To support these upgrades, pricing is going up from 
₹[old] to ₹[new] starting [DATE].

Because you've been with us from the beginning: 
your plan stays at ₹[old] until [DATE + 90 days]. 
You can also lock in the current rate permanently 
by switching to an annual plan.

Thank you for building your business with us. 🙏

Team Nakshi AI
```

---

### Word Bank

**Use these 20 words:**
`Zevar` · `Your catalog` · `60 seconds` · `On a model` · `Batch` · `Studio-quality` · `No app needed` · `Just send` · `Swap` · `Namaste 🙏` · `Free images` · `Your business` · `Photorealistic` · `Instant` · `Craft` · `Compete` · `Variant` · `₹X/month` · `Try it free` · `Sorted`

**Never use these 20 words:**
`Leverage` · `Cutting-edge` · `Revolutionary` · `AI-powered solution` · `Please be informed` · `User` · `Utilize` · `State-of-the-art` · `Kindly` · `Subscription plan` · `Error codes` · `Click here` · `We are happy to announce` · `Innovative` · `Bespoke` · `Disrupt` · `ASAP` · `Seamless` · `Going forward` · `Apologies for the inconvenience`

---

### The Gut-Check Test

> **Before publishing anything, ask:**
> *"Would a busy jeweler in Jaipur, reading this on his phone between customers, immediately understand what to do next?"*

If yes — publish. If no — simplify until the answer is yes.

**Four sub-questions:**
1. Is it clear? (One pass, no re-reading)
2. Is it specific? (Real number, real outcome, real action)
3. Is it ours? (Sounds like Nakshi AI, not any other brand)
4. Does it move someone? (Makes them want to act right now)

---

## 14. WEEK 1 BUILD PLAN

> **Founder is technical. Goal: working bot in 7 days.**

| Day | Task |
|---|---|
| **Day 1** | WhatsApp Business API setup + webhook configuration |
| **Day 2** | Onboarding flow — registration button sequence, database write |
| **Day 3** | Image receive → AI model pipeline → image return to WhatsApp |
| **Day 4** | Free image counter logic + payment gate message trigger |
| **Day 5** | UPI payment link integration + manual payment confirmation flow |
| **Day 6** | End-to-end test with 5 real jewelers from personal network |
| **Day 7** | Fix what broke. Launch to 3 WhatsApp groups. |

### Tech Decisions to Make Before Day 1

- **Which AI model/API for jewelry-on-model generation?** (Flux, Stable Diffusion fine-tuned, or via a third-party API) — test 50 real jewelry images privately before deciding
- **WhatsApp BSP:** Which Business Solution Provider? (Interakt, WATI, or direct Meta API)
- **Database:** Simple Postgres or Firebase for MVP — don't over-engineer
- **Payment:** Razorpay UPI links for Day 1 — no custom payment page needed yet

---

## 15. RISKS & HOW TO HEDGE THEM

| Risk | Probability | Impact | Hedge |
|---|---|---|---|
| AI output quality inconsistent (warped jewelry, bad hands) | High | High | Test 50 images privately before any public launch. Know your quality floor. Never promise what you can't deliver. |
| Free users don't convert to paid | Medium | High | "Talk to us first" button at payment gate. Manual close for first 20 customers. |
| Personal network feels used by hard paywall | Medium | High | Give your inner circle 30 free images as a gift. Convert on relationship, not pressure. |
| WhatsApp bans the bot number for spam | Low | Critical | Follow Meta BSP guidelines strictly. Never blast unsolicited. Opt-in only. |
| Photoroom or Canva builds this feature | Medium | High | Move fast, fine-tune model on jewelry data, build image library switching cost |
| Price sensitivity — Tier 2/3 jewelers won't pay ₹699 | Medium | Medium | Concierge close manually. Demonstrate ₹ ROI: "₹699 vs ₹15,000 shoot" |

---

## 16. THE 30-DAY VALIDATION SPRINT

**The one assumption that matters most:**
> *Will a jeweler pay BEFORE seeing perfect output — based on the trial experience alone?*

### Week 1 — Manual Validation (Before Full Bot)
- Message 5 personal contacts today
- Process images manually using Photoroom + AI tools
- Deliver via WhatsApp personally
- Ask for ₹199 on image 6 (intentionally low — this validates intent, not price)
- **Pass condition:** 3 out of 5 pay

### Week 2 — Bot Launch (If Week 1 Passes)
- Launch single-feature bot to 3 WhatsApp groups
- 10 free images per jeweler
- Payment gate on image 11
- **Metric:** Conversion rate free → paid

### Week 3–4 — Optimize
- Interview every person who paid: *"What made you decide to pay?"*
- Interview every person who didn't: *"What would have made you pay?"*
- Adjust pricing, messaging, or free image count based on answers

### Success Metrics at Day 30
| Metric | Minimum Pass | Strong Signal |
|---|---|---|
| Free trial signups | 50 | 150+ |
| % who use all 10 free images | 60% | 80%+ |
| % who pay after trial | 15% | 30%+ |
| Manual "Talk to us" conversions | 5 | 15+ |
| Net Promoter (informal) | Positive word-of-mouth in 1 group | Unsolicited sharing |

---

## 17. ROADMAP — FEATURES COMING SOON

```
NOW (Week 1 Launch)
└── Jewelry on Model (single image)

SOON (Month 2–3)
├── Gemstone color swap
├── Metal finish swap (gold/silver/rose gold)
├── Batch processing (up to 10 images, <1 minute)
└── Priority queue tier

NEXT (Month 4–6)
├── Catalog shoot mode
├── Diamond rate calculator
├── Custom prompt mode (advanced users)
├── Web image library portal
└── WhatsApp to Instagram direct publish

LATER (Month 7–12)
├── Reseller / agency accounts
├── API access (enterprise)
├── Multi-language support (Gujarati, Marwadi)
├── Analytics dashboard for jewelers
└── Background / setting customization
```

---

## 18. THE ONE-PAGE PITCH

```
┌─────────────────────────────────────────────────────────┐
│                                                          │
│              ✦  NAKSHI AI  (नक्शी)  ✦                  │
│                                                          │
│   PROBLEM                                                │
│   Studio shoots cost ₹15,000–50,000 and take 3 days.   │
│   Small jewelers can't afford this. They lose sales.    │
│                                                          │
│   SOLUTION                                               │
│   WhatsApp bot. Send a jewelry photo.                    │
│   Get it back on a model in 60 seconds.                  │
│   No app. No studio. No prompts. Just buttons.          │
│                                                          │
│   PRICING                                                │
│   Starter     ₹699/month   →  40 images                 │
│   Growth  ⭐  ₹1,799/month  →  150 images               │
│   Pro         ₹3,999/month  →  400 images + batch       │
│   Annual      ₹34,999/year  →  Save ₹13,000             │
│                                                          │
│   FREE TRIAL: 10 images. No credit card.                 │
│                                                          │
│   WHY NOW                                                │
│   AI image quality just crossed the threshold.          │
│   WhatsApp API just became reliable enough.             │
│   India's jewelry market just moved online.             │
│                                                          │
│   THE MOAT                                               │
│   Every image processed = fine-tuning data.             │
│   500,000 jewelry images → unbeatable quality.         │
│   WhatsApp-native = zero behavior change for customers. │
│                                                          │
│   THE ASK                                               │
│   50 paying customers before anything else.             │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## APPENDIX — QUICK REFERENCE

### Pricing at a Glance
| | Starter | Growth ⭐ | Pro | Annual |
|---|---|---|---|---|
| Price | ₹699/mo | ₹1,799/mo | ₹3,999/mo | ₹34,999/yr |
| Images | 40 | 150 | 400 | 400 |
| Batch | ✗ | Up to 5 | Up to 10 | Up to 10 |
| Speed | Standard | <60 sec | <60 sec | <60 sec |
| Model options | 3 | 8 | 8 | 8 |
| Gem swap | ✓ | ✓ | ✓ | ✓ |
| Metal swap | ✗ | ✓ | ✓ | ✓ |
| Custom prompts | ✗ | ✗ | ✓ | ✓ |
| Catalog mode | ✗ | ✗ | ✓ | ✓ |
| Image library | ✗ | 30 days | 90 days | 90 days |
| Watermark | Yes | Yes | No | No |

### Brand Personality at a Glance
```
WE ARE:          Sharp · Warm · Proud · Modern
WE ARE NOT:      Corporate · Hyped · Robotic · Formal
FORMALITY:       4/10
ENERGY:          7/10
CORE FEELING:    Empowered
```

### The Numbers That Matter
```
₹15,000  — what a studio shoot costs (your value anchor)
60       — seconds to deliver a result
10       — free trial images
₹699     — lowest barrier to entry
65–75%   — target gross margin
50       — paying customers before raising money
```

---

*Nakshi AI — नक्शी · Brand Master Document v1.0 · Confidential*
