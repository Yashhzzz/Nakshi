
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, updateDoc, increment, getDoc } from 'firebase/firestore';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function sync() {
  const statsRef = doc(db, 'public_stats', 'waitlist');
  const snap = await getDoc(statsRef);
  
  if (!snap.exists()) {
    console.log('Creating doc...');
    await setDoc(statsRef, { count: 5 }); // 47 + 5 = 52
  } else {
    console.log('Updating doc...');
    await updateDoc(statsRef, { count: 5 });
  }
  console.log('Done! Counter should now show 52 (47 + 5)');
}

sync().catch(console.error);
