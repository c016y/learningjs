"use strict";

// 01-08-2019
/* var cash = 10;

var milk = 2.75;
var butter = 5;
var produce = 4;
var products = milk+butter+produce;
 
alert("Your total is" + " " + "$" + products);

 while (cash<products) {
 	alert("Insuffiecient Funds you need" + " " + "$" + (products-cash) + " " + "more dollars");
 	alert("Pull out a dollar");
 	var cash = cash + 1;
 }
 
 alert("Your change is" + " " + "$" + (cash-products)); */

// 01-09-2019
 /* var a;
 alert(typeof a); //"undefined"

 var a = "Hello, World!";
 alert(typeof a); //"string"

 var a = 42;
 alert(typeof a); //"number"

 var a = true;
 alert(typeof a); //"boolean"

 var a = null;
 alert(typeof a); //"object"

 var a = undefined;
 alert(typeof a); //"undefined"

 var a = { b: "c" };
 alert(typeof a); //"object"

//this one worked
 var myID = {
	name: "Bobby",
	age: 35,
	sex: "Male",
	address: {
		street: 1234,
		city: "Saginaw",
		zipcode: 55555
	}
};

// 01/10/2019

//first array

var arr = [
	"Hello, World!",
	99,
	false
];

var a = "Hello, World!";
var b = 3.14159264358;

alert(a.length); //13

//equality / ineqaulity
var a = "22";
var b = 22;
var c = 23;

alert(a == b); //true
alert(a === b); //false
alert(a != b); //flase
alert(a !== b); //true


alert(a < c); //true

//scopes
function foo() {
	var a = 5;

	if (a >= 5) {
		let b =4

		while (b < 8) {
			let c = b * 2;
			b++;

			alert(a + c);
		}
	}
}
 foo(); //13 15 17 19

//switch
var a = 0;

switch (a) {
	case 1:
	alert("fail");
	break;
	case 2:
	alert("success");
	break;
	default:
	alert("defaulted");
}
//ternary operator
var b = (a > 1) ? "true1" : "false2";
 */