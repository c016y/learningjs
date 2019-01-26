"use strict";
/*
	Loan Pay-Off Calculator
	@Colby Pierce
	@01-26-2019
*/

function formData() { // user input from HTML form
	
	let loanAmount_input = parseFloat(document.getElementById("loan_amount").value);
	let interestRate_input = parseFloat(document.getElementById("interest_rate").value) / 100;
	let paymentAmount_input = parseFloat(document.getElementById("payment_amount").value);
	var totalAmount = loanAmount_input + loanAmount_input * interestRate_input; //loan + interest
	var payoffTime = totalAmount / paymentAmount_input; //in monthly payments
	var interestTotal = loanAmount_input * interestRate_input //total cost in interest
	var greenLight = false; //errorDetector flips value if no errors are detected

	var errorFlagger = { //label inputs that are valid
		la: false,
		ir: false,
		pa: false
		};

//Error Check
	function errorDetector() {

			if (!isNaN(loanAmount_input) && loanAmount_input > 0 ) {
				errorFlagger.la = true;
			} else {
				errorFlagger.la = false;
			};

			if (!isNaN(interestRate_input) && interestRate_input > 0 ) {
				errorFlagger.ir = true;
			} else {
				errorFlagger.ir = false;
			};

			if (!isNaN(paymentAmount_input) && paymentAmount_input > 0 ) {
				errorFlagger.pa = true;
			} else {
				errorFlagger.pa = false;
			};

			if ((errorFlagger.la == true) && (errorFlagger.ir = true) && (errorFlagger.pa = true)) { //if all conditions are true
				greenLight = true;
			}; 
	};
//Advice
 	function alertAdvice() {

	 	var newPaymentAmount_input = paymentAmount_input + 250; //increase payments
		var newPayoffTime = totalAmount / newPaymentAmount_input; //decrease payoffTime

		if (Math.floor(newPayoffTime) !== newPayoffTime) { //last month included
			newPayoffTime = newPayoffTime.toFixed(0);
		}

		alert("If you increse you payments to $" + newPaymentAmount_input + ", you could pay off your loan in " + newPayoffTime + " months.")

 	};

	errorDetector();

	if (Math.floor(payoffTime) !== payoffTime) { //last month included
		payoffTime = payoffTime.toFixed(0);
	};

	if (greenLight === true) {
	alert("It will take you " + payoffTime + " months to pay off your loan" + " and you're paying $" + interestTotal.toFixed(2) + " in interest");
	alertAdvice();
	} else {
		alert("There is an invalid input, error occured.");
	}

};
