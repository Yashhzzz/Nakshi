
import { db } from './lib/firebase.js';
import { doc, setDoc, getDoc } from 'firebase/firestore';

async function initStats() {
  const statsRef = doc(db, 'public_stats', 'waitlist');
  const statsSnap = await getDoc(statsRef);
  
  if (!statsSnap.exists()) {
    console.log('Initializing public_stats/waitlist with count: 0');
    await setDoc(statsRef, { count: 0 });
    console.log('Initialization complete.');
  } else {
    console.log('public_stats/waitlist already exists.');
  }
}

initStats().catch(console.error);
