// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrVye9GRe5h5SirzZBqztjEhcLTqtSX3I",
  authDomain: "the-news-dragon-b9c77.firebaseapp.com",
  projectId: "the-news-dragon-b9c77",
  storageBucket: "the-news-dragon-b9c77.appspot.com",
  messagingSenderId: "5882148902",
  appId: "1:5882148902:web:3da091ad00230f2776cee7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;