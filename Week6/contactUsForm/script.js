import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getDatabase,
  ref,
  set,
  get,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAiKdXyRuGZYaafTnoYahd20D1mrIlVl_w",
  authDomain: "mobile-prog-c07cc.firebaseapp.com",
  databaseURL: "https://mobile-prog-c07cc-default-rtdb.firebaseio.com/",
  projectId: "mobile-prog-c07cc",
  storageBucket: "mobile-prog-c07cc.firebasestorage.app",
  messagingSenderId: "119234739682",
  appId: "1:119234739682:web:8d7d93f0736cf493b8cdbb",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const addressInput = document.getElementById("address");
const messageInput = document.getElementById("message");
const output = document.getElementById("output");

// SAVE DATA
document.getElementById("saveBtn").addEventListener("click", () => {
  set(ref(db, "contacts/contact1"), {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    address: addressInput.value,
    message: messageInput.value,
  })
    .then(() => {
      output.textContent = "Data Saved Successfully!";
    })
    .catch((error) => {
      output.textContent = error;
    });
});

// READ DATA
document.getElementById("readBtn").addEventListener("click", () => {
  get(ref(db, "contacts/contact1"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();

        output.textContent =
          "Name: " +
          data.name +
          " | Email: " +
          data.email +
          " | Phone: " +
          data.phone +
          " | Address: " +
          data.address +
          " | Message: " +
          data.message;
      } else {
        output.textContent = "No data found.";
      }
    })
    .catch((error) => {
      output.textContent = error;
    });
});

// UPDATE DATA
document.getElementById("updateBtn").addEventListener("click", () => {
  update(ref(db, "contacts/contact1"), {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    address: addressInput.value,
    message: messageInput.value,
  })
    .then(() => {
      output.textContent = "Data Updated!";
    })
    .catch((error) => {
      output.textContent = error;
    });
});

// DELETE DATA
document.getElementById("deleteBtn").addEventListener("click", () => {
  remove(ref(db, "contacts/contact1"))
    .then(() => {
      output.textContent = "Data Deleted!";
    })
    .catch((error) => {
      output.textContent = error;
    });
});
