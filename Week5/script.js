  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
  import { getDatabase, get } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAiKdXyRuGZYaafTnoYahd20D1mrIlVl_w",
    authDomain: "mobile-prog-c07cc.firebaseapp.com",
    projectId: "mobile-prog-c07cc",
    storageBucket: "mobile-prog-c07cc.firebasestorage.app",
    messagingSenderId: "119234739682",
    appId: "1:119234739682:web:8d7d93f0736cf493b8cdbb"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
    const db = getDatabase(app)

console.log(db) //output print garcha
