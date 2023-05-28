// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY, //confidential
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID, //confidential
  appId: process.env.REACT_APP_APP_ID, //confidential
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Testing connection:
// const app = () => {
//   if (!firebaseConfig || !firebaseConfig.apiKey) {
//     throw new ErrorEvent(
//       `No firebase configuration object provided.` +
//         `\n` +
//         `Add yout web app\'s configuration object to firebase-config.js`
//     );
//   } else {
//     console.log("Firebase initialised");
//   }
//   return initializeApp(firebaseConfig);
// };

export const db = getFirestore(app);
export const storage = getStorage(app);

export const auth = getAuth(app);
export default app;
