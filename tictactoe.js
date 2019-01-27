"use strict";

var player = "X";
var turn = 0;

//Buttons
function topLeftB() {
	document.getElementById("topLeft").onclick = null;
	document.getElementById("topLeft").value = "X";
	console.log("hit1");
}

function topB() {
	document.getElementById("top").onclick = null;
	document.getElementById("top").value = "X";
	console.log("hit2");
}

function topRightB() {
	document.getElementById("topRight").onclick = null;
	document.getElementById("topRight").value = "X";
	console.log("hit3");
}

function leftB() {
	document.getElementById("left").onclick = null;
	document.getElementById("left").value = "X";
	console.log("hit4");
}

function centerB() {
	document.getElementById("center").onclick = null;
	document.getElementById("center").value = "X";
	console.log("hit5");
}

function rightB() {
	document.getElementById("right").onclick = null;
	document.getElementById("right").value = "X";
	console.log("hit6");
}

function bottomLeftB() {
	document.getElementById("bottomLeft").onclick = null;
	document.getElementById("bottomLeft").value = "X";
	console.log("hit7");
}

function bottomB() {
	document.getElementById("bottom").onclick = null;
	document.getElementById("bottom").value = "X";
	console.log("hit8");
}

function bottomRightB() {
	document.getElementById("bottomRight").onclick = null;
	document.getElementById("bottomRight").value = "X";
	console.log("hit9");
}