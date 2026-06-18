import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

// Your Firebase Configuration
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

// Initialize Realtime Database
const db = getDatabase(app);

console.log("Firebase Connected Successfully");

function createUser() {
  const userId = document.getElementById("userId").value;

  const userData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    age: document.getElementById("age").value,
    gender: document.getElementById("gender").value,
    nationality: document.getElementById("nationality").value,
    language: document.getElementById("language").value,
    subject: document.getElementById("subject").value,
  };

  set(ref(db, "users/" + userId), userData)
    .then(() => alert("User Added"))
    .catch((err) => console.log(err));
}

window.createUser = createUser;

function fetchUser() {
  const userId = document.getElementById("userId").value;

  get(ref(db, "users/" + userId))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const user = snapshot.val();

        document.getElementById("firstName").value = user.firstName || "";
        document.getElementById("lastName").value = user.lastName || "";
        document.getElementById("email").value = user.email || "";
        document.getElementById("address").value = user.address || "";
        document.getElementById("phoneNumber").value = user.phoneNumber || "";
        document.getElementById("age").value = user.age || "";
        document.getElementById("gender").value = user.gender || "";
        document.getElementById("nationality").value = user.nationality || "";
        document.getElementById("language").value = user.language || "";
        document.getElementById("subject").value = user.subject || "";

        document.getElementById("output").textContent = JSON.stringify(
          user,
          null,
          2,
        );
      } else {
        alert("User not found");
      }
    })
    .catch((err) => console.log(err));
}

window.fetchUser = fetchUser;

function updateUser() {
  const userId = document.getElementById("userId").value;

  const updatedData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    age: document.getElementById("age").value,
    gender: document.getElementById("gender").value,
    nationality: document.getElementById("nationality").value,
    language: document.getElementById("language").value,
    subject: document.getElementById("subject").value,
  };

  update(ref(db, "users/" + userId), updatedData)
    .then(() => alert("User Updated"))
    .catch((err) => console.log(err));
}

window.updateUser = updateUser;

function readAllUsers() {
  get(ref(db, "users"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        document.getElementById("output").textContent = JSON.stringify(
          snapshot.val(),
          null,
          2,
        );
      } else {
        document.getElementById("output").textContent = "No data found";
      }
    })
    .catch((err) => console.log(err));
}

window.readAllUsers = readAllUsers;

function deleteUser() {
  const userId = document.getElementById("userId").value;

  remove(ref(db, "users/" + userId))
    .then(() => alert("User Deleted"))
    .catch((err) => console.log(err));
}

window.deleteUser = deleteUser;
