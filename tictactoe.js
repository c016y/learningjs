"use strict";

var numOfMoves = 0;
var whosTurn = 0;

switch(whosTurn) {
	case 0:
	console.log("It's Users Turn"),
	whosTurn = 1
	break;

	case 1:
	console.log("It's NPC's Turn"),
	whosTurn = 0
	break;
}

var buttonClicked = {
	topLeft: false,
	top: false,
	topRight: false,
	left: false,
	center: false,
	right: false,
	bottomLeft: false,
	bottom: false,
	bottomRight: false
}

function gameButtons() {
	document.getElementById("topLeft").addEventListener("click", topLeftB);
	document.getElementById("top").addEventListener("click", topB);
	document.getElementById("topRight").addEventListener("click", topRightB);
	document.getElementById("left").addEventListener("click", leftB);
	document.getElementById("center").addEventListener("click", centerB);
	document.getElementById("right").addEventListener("click", rightB);
	document.getElementById("bottomLeft").addEventListener("click", bottomLeftB);
	document.getElementById("bottom").addEventListener("click", bottomB);
	document.getElementById("bottomRight").addEventListener("click", bottomRightB);
	whosTurn = 0;
	console.log(numOfMoves);
}

function topLeftB() {
	document.getElementById("topLeft").onclick = null;
	console.log("hit1");
	buttonClicked.topLeft = true;
	numOfMoves++
}

function topB() {
	console.log("hit2");
	document.getElementById("top").onclick = null;
	numOfMoves++
}

function topRightB() {
	console.log("hit3");
	document.getElementById("topRight").onclick = null;
	numOfMoves++
}

function leftB() {
	console.log("hit4");
	document.getElementById("left").onclick = null;
	numOfMoves++
}

function centerB() {
	console.log("hit5");
	document.getElementById("center").onclick = null;
	numOfMoves++
}

function rightB() {
	console.log("hit6");
	document.getElementById("right").onclick = null;
	numOfMoves++
}

function bottomLeftB() {
	console.log("hit7");
	document.getElementById("bottomLeft").onclick = null;
	numOfMoves++
}

function bottomB() {
	console.log("hit8");
	document.getElementById("bottom").onclick = null;
	numOfMoves++
}

function bottomRightB() {
	console.log("hit9");
	document.getElementById("bottomRight").onclick = null;
	numOfMoves++
}