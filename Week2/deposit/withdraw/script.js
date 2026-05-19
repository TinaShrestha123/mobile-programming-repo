// script.js

let balance = 10000;
let pin = "1234";

function withdrawMoney() {

    let amount = Number(document.getElementById("amount").value);

    // Check multiple of 100
    if (amount % 100 != 0) {
        document.getElementById("message").innerHTML =
        "Amount must be multiple of 100";
        return;
    }

    // Ask PIN
    let enteredPin = prompt("Enter PIN");

    if (enteredPin == pin) {

        if (amount <= balance) {
            balance = balance - amount;

            document.getElementById("balance").innerHTML = balance;

            document.getElementById("message").innerHTML =
            "Withdrawal Successful";
        }
        else {
            document.getElementById("message").innerHTML =
            "Insufficient Balance";
        }

    }
    else {
        document.getElementById("message").innerHTML =
        "Wrong PIN";
    }
}


function depositMoney() {

    let amount = Number(document.getElementById("amount").value);

    // Check multiple of 100
    if (amount % 100 != 0) {
        document.getElementById("message").innerHTML =
        "Amount must be multiple of 100";
        return;
    }

    // Ask PIN
    let enteredPin = prompt("Enter PIN");

    if (enteredPin == pin) {

        balance = balance + amount;

        document.getElementById("balance").innerHTML = balance;

        document.getElementById("message").innerHTML =
        "Deposit Successful";
    }
    else {
        document.getElementById("message").innerHTML =
        "Wrong PIN";
    }
}