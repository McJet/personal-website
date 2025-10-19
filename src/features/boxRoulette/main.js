import { createApp, ref } from "vue";
import "./style.css";
import App from "./App.vue";
import gameController from "./gameController.js";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  connectAuthEmulator,
} from "firebase/auth";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3VlGn5lyf7qQVDmBEmk-alRa77VnzlW4",
  authDomain: "box-roulette.firebaseapp.com",
  projectId: "box-roulette",
  storageBucket: "box-roulette.appspot.com",
  messagingSenderId: "511364552129",
  appId: "1:511364552129:web:c1ea309e817621f9e7cb40",
  measurementId: "G-K0XRT6SRJD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const isUserSignedIn = ref(false);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
if (location.hostname === "localhost") {
  // Point to the RTDB emulator running on localhost.
  connectAuthEmulator(auth, "http://localhost:9099");
}

const provider = new GoogleAuthProvider();

// Listen for changes to the user's sign-in state
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in");
    console.log(user);
    isUserSignedIn.value = true;
  } else {
    console.log("User is signed out");
    gameController.isSignedIn = false;
    isUserSignedIn.value = false;
  }
});

// Sign in with Google using redirect
export async function signIn() {
  signInWithRedirect(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Initialize the Vue app
createApp(App).mount("#app");
