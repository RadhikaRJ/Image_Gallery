import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../lib/firebase.config";

const provider = new GoogleAuthProvider();

const FirebaseAuth = {
  signIn: () => {
    return new Promise(async (resolve) => {
      try {
        await signInWithPopup(auth, provider).then((response) => {
          resolve(response.user);
        });
      } catch (e) {
        console.log(e);
      }
    });
  },
  signOut: () => {
    return new Promise((resolve) => {
      signOut(auth)
        .then(() => {
          console.log("user logged out");
          resolve();
        })
        .catch(console.error);
    });
  },
};

export default FirebaseAuth;
