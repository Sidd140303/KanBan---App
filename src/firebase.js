import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyA_GZ5irLJ8nrf5EY4S1t8LQBb01zTrxl4",
    authDomain: "kanban-app-904bb.firebaseapp.com",
    projectId: "kanban-app-904bb",
    storageBucket: "kanban-app-904bb.appspot.com",
    messagingSenderId: "1047032645542",
    appId: "1:1047032645542:web:82c0f02e5bdf2627463167"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);

if (process.env.NODE_ENV === "development") {
    connectAuthEmulator(auth, "http://localhost:9099");
    connectFirestoreEmulator(db, "localhost", 8080);
    connectFunctionsEmulator(fbFunctions, "localhost", 5001);
}