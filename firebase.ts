import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuiJa6uNt9os8uHWcfdrt7p5IMCDjFtDo",
  authDomain: "zenzebra-website.firebaseapp.com",
  projectId: "zenzebra-website",
  storageBucket: "zenzebra-website.firebasestorage.app",
  messagingSenderId: "745689009145",
  appId: "1:745689009145:web:72683a8d5ac241d673cb28",
  databaseURL: "https://zenzebra-website-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);