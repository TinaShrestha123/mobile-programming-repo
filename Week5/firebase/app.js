import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAiKdXyRuGZYaafTnoYahd20D1mrIlVl_w",
  authDomain: "mobile-prog-c07cc.firebaseapp.com",
  projectId: "mobile-prog-c07cc",
  storageBucket: "mobile-prog-c07cc.firebasestorage.app",
  messagingSenderId: "119234739682",
  appId: "1:119234739682:web:8d7d93f0736cf493b8cdbb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// SET
function addUser() {
  set(ref(db, "users/1"), {
    firstName: "Tina",
    lastName: "Shrestha",
    email: "tina@gmail.com",
    address: "Kathmandu",
    phoneNumber: "9812345678",
    age: 22,
    gender: "Female",
    nationality: "Nepali",
    language: "English",
    subject: "Cyber Security",
  }).then(() => {
    document.getElementById("output").textContent = "User Added";
  });
}

// GET
function getUser() {
  get(ref(db, "users/1")).then((snapshot) => {
    if (snapshot.exists()) {
      document.getElementById("output").textContent = JSON.stringify(
        snapshot.val(),
        null,
        2,
      );
    } else {
      document.getElementById("output").textContent = "No Data Found";
    }
  });
}

// UPDATE
function updateUser() {
  update(ref(db, "users/1"), {
    age: 23,
    subject: "Network Security",
  }).then(() => {
    document.getElementById("output").textContent = "User Updated";
  });
}

// REMOVE
function deleteUser() {
  remove(ref(db, "users/1")).then(() => {
    document.getElementById("output").textContent = "User Deleted";
  });
}

// Make functions accessible from HTML
window.addUser = addUser;
window.getUser = getUser;
window.updateUser = updateUser;
window.deleteUser = deleteUser;
