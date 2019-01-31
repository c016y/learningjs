"use strict";

var numOfMoves = 0;
var currentPlayer = checkPlayer();
var currentMove = undefined;

function tictactoeButton(element) { // display player move
		checkPlayer();
		document.getElementById(element).innerHTML = currentPlayer;
		document.getElementById(element).disabled = true;
}

function checkPlayer() { //Should I place an X or an O?
	if  (numOfMoves == 1 || numOfMoves == 3 || numOfMoves == 5 || numOfMoves == 7) {
		currentPlayer = "O";
	} else {
		currentPlayer = "X";
	}

};

function tictactoeRef() { //runs to add value to player moves and check for win
	var topL = document.getElementById("topLeft").innerHTML
	var top = document.getElementById("top").innerHTML 
	var topR = document.getElementById("topRight").innerHTML
	var left = document.getElementById("left").innerHTML
	var center = document.getElementById("center").innerHTML
	var right = document.getElementById("right").innerHTML
	var bottomL = document.getElementById("bottomLeft").innerHTML
	var bottom = document.getElementById("bottom").innerHTML
	var bottomR = document.getElementById("bottomRight").innerHTML

	function checkWin(x, y, z) {
			if (x == "X" && y == "X" && z == "X") { alert("X Wins!"); } 
			else if (x == "O" && y == "O" && z == "O") { alert("O Wins!"); }
	}

	checkWin(topL, top, topR); //horizontal
	checkWin(left, center, right);
	checkWin(bottomL, bottom, bottomR);
	checkWin(topL, left, bottomL); //verticle
	checkWin(top, center, bottom);
	checkWin(topR, right, bottomR); 
	checkWin(topL, center, bottomR); //diagonal
	checkWin(bottomL, center, topR);

	numOfMoves++
};

function tictactoeReset() { //clear currentPlayer and buttonClicked values
	currentPlayer = " "; //clearing values
	numOfMoves = 0;

	document.getElementById("topLeft").disabled = false; //activate buttons
	document.getElementById("top").disabled = false;
	document.getElementById("topRight").disabled = false;
	document.getElementById("left").disabled = false;
	document.getElementById("center").disabled = false;
	document.getElementById("right").disabled = false;
	document.getElementById("bottomLeft").disabled = false;
	document.getElementById("bottom").disabled = false;
	document.getElementById("bottomRight").disabled = false;

	document.getElementById("topLeft").innerHTML = currentPlayer; //reseting game-board
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



