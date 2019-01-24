"use strict";

function formData() { // user input from HTML form
	let loanAmount_input = parseFloat(document.getElementById("loan_amount").value);
	let interestRate_input = parseFloat(document.getElementById("interest_rate").value);
	let paymentAmount_input = parseFloat(document.getElementById("payment_amount").value);
	var totalAmount = loanAmount_input + loanAmount_input * interestRate_input;
	var payoffTime = totalAmount / paymentAmount_input;

	alert();

};
