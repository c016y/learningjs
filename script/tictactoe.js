"use strict";

var numOfMoves = 0;
var currentPlayer = checkPlayer();

function checkPlayer() { //Should I place an X or an O?
	if  (numOfMoves == 1 || numOfMoves == 3 || numOfMoves == 5 || numOfMoves == 7) {
		currentPlayer = "O";
	} else {
		currentPlayer = "X";
	}

	if (numOfMoves >= 9) {
		//alert(winnerAnnounce)
	}
	return currentPlayer;
};

function gameReset() { //clear currentPlayer and buttonClicked values
	currentPlayer = " "; //clearing values
	numOfMoves = 0;

	//activate buttons
	document.getElementById("topLeft").disabled = false;
	document.getElementById("top").disabled = false;
	document.getElementById("topRight").disabled = false;
	document.getElementById("left").disabled = false;
	document.getElementById("center").disabled = false;
	document.getElementById("right").disabled = false;
	document.getElementById("bottomLeft").disabled = false;
	document.getElementById("bottom").disabled = false;
	document.getElementById("bottomRight").disabled = false;

	//reseting game-board
	document.getElementById("topLeft").innerHTML = currentPlayer;
	document.getElementById("top").innerHTML = currentPlayer;
	document.getElementById("topRight").innerHTML = currentPlayer;
	document.getElementById("left").innerHTML = currentPlayer;
	document.getElementById("center").innerHTML = currentPlayer;
	document.getElementById("right").innerHTML = currentPlayer;
	document.getElementById("bottomLeft").innerHTML = currentPlayer;
	document.getElementById("bottom").innerHTML = currentPlayer;
	document.getElementById("bottomRight").innerHTML = currentPlayer;
	currentPlayer = "X"; //starting next round
}

function webButton(element) { // display player move
		checkPlayer();
		document.getElementById(element).innerHTML = currentPlayer;
		console.log(numOfMoves)
}

function webButtonOff(element) { //deactivate button, no changing values till next game
	numOfMoves++
	document.getElementById(element).disabled = true;
};



