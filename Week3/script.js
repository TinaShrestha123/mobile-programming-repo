// script.js

let balance = 10000;
let pin = "1234";

// ----------------------
// Withdraw Function
// ----------------------

function withdrawMoney() {

    let amount = Number($("#amount").val());

    // Check multiple of 100
    if (amount % 100 != 0) {

        $("#message").html("Amount must be multiple of 100");

        return;
    }

    // Ask PIN
    let enteredPin = prompt("Enter PIN");

    if (enteredPin == pin) {

        if (amount <= balance) {

            balance = balance - amount;

            $("#balance").html(balance);

            $("#message").html("Withdrawal Successful");
        }

        else {

            $("#message").html("Insufficient Balance");
        }
    }

    else {

        $("#message").html("Wrong PIN");
    }
}


// ----------------------
// Deposit Function
// ----------------------

function depositMoney() {

    let amount = Number($("#amount").val());

    // Check multiple of 100
    if (amount % 100 != 0) {

        $("#message").html("Amount must be multiple of 100");

        return;
    }

    // Ask PIN
    let enteredPin = prompt("Enter PIN");

    if (enteredPin == pin) {

        balance = balance + amount;

        $("#balance").html(balance);

        $("#message").html("Deposit Successful");
    }

    else {

        $("#message").html("Wrong PIN");
    }
}


// ----------------------
// Eye Icon Show/Hide
// ----------------------

let visible = true;

$("#toggleEye").click(function () {

    if (visible == true) {

        // Hide balance
        $("#balance").html("XXXX");

        // Change eye icon
        $("#toggleEye")
        .removeClass("fa-eye")
        .addClass("fa-eye-slash");

        visible = false;
    }

    else {

        // Show balance
        $("#balance").html(balance);

        // Change icon back
        $("#toggleEye")
        .removeClass("fa-eye-slash")
        .addClass("fa-eye");

        visible = true;
    }

});