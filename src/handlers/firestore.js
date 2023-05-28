import {
  serverTimestamp,
  setDoc,
  doc,
  getDocs,
  collection,
} from "firebase/firestore";

import { db } from "../lib/firebase.config";

const Firestore = {
  readDocs: (...args) => {
    let docs = [];
    const ref = collection(db, "stocks");
    return new Promise(async (resolve) => {
      try {
        const snapshots = await getDocs(ref);
        snapshots.forEach((doc) => {
          const d = { ...doc.data() };
          docs.push(d);
        });
        resolve(docs);
      } catch (e) {
        console.log(e);
      }
    });
  },
  writeDoc: (...args) => {
    const [inputs] = args;

    return new Promise(async (resolve) => {
      const randomIndex = Math.floor(Math.random() * 1000000000);

      try {
        const docRef = doc(db, "stocks", `${randomIndex}`);
        await setDoc(docRef, {
          title: inputs.title,
          path: inputs.path,
          createdAt: serverTimestamp(),
          user: inputs.user,
        });
        resolve(`new doc successfully inserted`);
      } catch (e) {
        console.error();
      }
    });
  },
};

export default Firestore;
