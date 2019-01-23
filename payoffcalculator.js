"use strict";

let loanAmount_input = document.getElementById("loan_amount");
let interestRate_input = document.getElementById("interest_rate");
let paymentAmount_input = document.getElementById("payment_amount");


/* var loan_amount = 12432.16;
var interest_rate = .0753;
var payment_amount = 267; */
var totalAmount = (loanAmount_input + (loanAmount_input * interestRate_input));
var payoffTime = totalAmount / paymentAmount_input;
var remainder = (payoffTime - payoffTime.toFixed(0)) * paymentAmount_input;


function test() {
	alert(loanAmount_input);
}