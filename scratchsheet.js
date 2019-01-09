'use strict';

var cash = 10;

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
 
 alert("Your change is" + " " + "$" + (cash-products));