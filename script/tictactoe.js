"use strict";

var numOfMoves = 0;
var currentPlayer = checkPlayer();
var currentMove = undefined;
var xScore = 0;
var oScore = 0;

function tictactoeButton(element) { // display player move
		checkPlayer();
		document.getElementById(element).innerHTML = currentPlayer;
		document.getElementById(element).disabled = true;
};

function checkPlayer() { //Should I place an X or an O?
	if  (numOfMoves == 1 || numOfMoves == 3 || numOfMoves == 5 || numOfMoves == 7) {
		currentPlayer = "O";
	} else {
		currentPlayer = "X";
	}

};

function tictactoeRef() { //runs to add value to player moves and check for win

	var winningMove = 0;
	
	var topL = document.getElementById("topLeft").innerHTML
	var top = document.getElementById("top").innerHTML 
	var topR = document.getElementById("topRight").innerHTML
	var left = document.getElementById("left").innerHTML
	var center = document.getElementById("center").innerHTML
	var right = document.getElementById("right").innerHTML
	var bottomL = document.getElementById("bottomLeft").innerHTML
	var bottom = document.getElementById("bottom").innerHTML
	var bottomR = document.getElementById("bottomRight").innerHTML

	function checkWin(x, y, z, move) {
			if (x == "X" && y == "X" && z == "X") { 
				alert("X Wins!");
				switchTictactoeButtons(true);
				xScore++
				winningMove = move;
			 }
			else if (x == "O" && y == "O" && z == "O") {
				alert("O Wins!");
				switchTictactoeButtons(true);
				oScore++
				winningMove = move;
			}
	}

	checkWin(topL, top, topR, 1)//horizontal
	checkWin(left, center, right, 2);
	checkWin(bottomL, bottom, bottomR, 3);
	checkWin(topL, left, bottomL, 4);//verticle
	checkWin(top, center, bottom, 5);
	checkWin(topR, right, bottomR, 6);
	checkWin(topL, center, bottomR, 7);//diagonal
	checkWin(bottomL, center, topR, 8);

	document.getElementById("leftWinImg")
	document.getElementById("vertCenterWinImg")
	document.getElementById("rightWinImg")
	document.getElementById("topWinImg")
	document.getElementById("horzCenterWinImg")
	document.getElementById("bottomWinImg")
	document.getElementById("diagUpWinImg")
	document.getElementById("diagDownWinImg")

	numOfMoves++
};

function tictactoeReset() { //clear currentPlayer and buttonClicked values
	currentPlayer = " "; //clearing values
	numOfMoves = 0;

	switchTictactoeButtons(false);

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
};

function switchTictactoeButtons(state) {
	document.getElementById("topLeft").disabled = state; //activate buttons
	document.getElementById("top").disabled = state;
	document.getElementById("topRight").disabled = state;
	document.getElementById("left").disabled = state;
	document.getElementById("center").disabled = state;
	document.getElementById("right").disabled = state;
	document.getElementById("bottomLeft").disabled = state;
	document.getElementById("bottom").disabled = state;
	document.getElementById("bottomRight").disabled = state;
};
