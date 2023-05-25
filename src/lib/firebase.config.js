// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY, //confidential
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID, //confidential
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

export default app;
