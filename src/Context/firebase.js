import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDfD2WVU93Rav0o8tcZM4sFag4B4xxhT_8",  
    authDomain: "twitter-clone-c5f61.firebaseapp.com",
    projectId: "twitter-clone-c5f61",
    storageBucket: "twitter-clone-c5f61.appspot.com",
    messagingSenderId: "692989229283",
    appId: "1:692989229283:web:b5785e02c382ec4b402dd6",
    measurementId: "G-6LQCCB26ND"
  
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };