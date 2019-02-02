"use strict";

var numOfMoves = 0;
var currentPlayer = checkPlayer();
var currentMove = undefined;
var xScore = 0;
var oScore = 0;

// const topL = document.getElementById("topLeft");
// const top = document.getElementById("top"); 
// const topR = document.getElementById("topRight");
// const left = document.getElementById("left");
// const center = document.getElementById("center");
// const right = document.getElementById("right");
// const bottomL = document.getElementById("bottomLeft");
// const bottom = document.getElementById("bottom");
// const bottomR = document.getElementById("bottomRight");

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
	
	var topLValue = document.getElementById("topLeft").innerHTML
	var topValue = document.getElementById("top").innerHTML 
	var topRValue = document.getElementById("topRight").innerHTML
	var leftValue = document.getElementById("left").innerHTML
	var centerValue = document.getElementById("center").innerHTML
	var rightValue = document.getElementById("right").innerHTML
	var bottomLValue = document.getElementById("bottomLeft").innerHTML
	var bottomValue = document.getElementById("bottom").innerHTML
	var bottomRValue = document.getElementById("bottomRight").innerHTML

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

	checkWin(topLValue, topValue, topRValue, 1)//horizontal
	checkWin(leftValue, centerValue, rightValue, 2);
	checkWin(bottomLValue, bottomValue, bottomRValue, 3);
	checkWin(topLValue, leftValue, bottomLValue, 4);//verticle
	checkWin(topValue, centerValue, bottomValue, 5);
	checkWin(topRValue, rightValue, bottomRValue, 6);
	checkWin(topLValue, centerValue, bottomRValue, 7);//diagonal
	checkWin(bottomLValue, centerValue, topRValue, 8);

	function drawLine() {
		switch (winningMove) {
		case 4: document.getElementById("leftWinImg").style.opacity = 1; 
		case 5: document.getElementById("vertCenterWinImg").style.opacity = 1;
		case 6: document.getElementById("rightWinImg").style.opacity = 1;
		case 1: document.getElementById("topWinImg").style.opacity = 1;
		case 2: document.getElementById("horzCenterWinImg").style.opacity = 1;
		case 3: document.getElementById("bottomWinImg").style.opacity = 1;
		case 8: document.getElementById("diagUpWinImg").style.opacity = 1;
		case 7: document.getElementById("diagDownWinImg").style.opacity = 1;
		}
	}

	numOfMoves++
};

function tictactoeReset() { //clear currentPlayer and buttonClicked values
	currentPlayer = " "; //clearing values
	numOfMoves = 0;

	switchTictactoeButtons(false);

	clearImages();

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

function clearImages() {
	document.getElementById("leftWinImg").style.opacity = 0; 
	document.getElementById("vertCenterWinImg").style.opacity = 0;
	document.getElementById("rightWinImg").style.opacity = 0;
	document.getElementById("topWinImg").style.opacity = 0;
	document.getElementById("horzCenterWinImg").style.opacity = 0;
	document.getElementById("bottomWinImg").style.opacity = 0;
	document.getElementById("diagUpWinImg").style.opacity = 0;
	document.getElementById("diagDownWinImg").style.opacity = 0;
};
