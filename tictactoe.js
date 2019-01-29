"use strict";

var numOfMoves = 0;
var currentPlayer = checkPlayer();

var buttonClicked = { //has the button already been clicked?
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

function checkPlayer() { //Should I place an X or an O?
	if  (numOfMoves == 1 || numOfMoves == 3 || numOfMoves == 5 || numOfMoves == 7) {
		currentPlayer = "O";
	} else {
		currentPlayer = "X";
	}

	if (numOfMoves >= 9) {
		resetGame()
		console.log("game would reset");
	}
	return currentPlayer;
}

function resetGame() { //clear currentPlayer and buttonClicked values
	currentPlayer = " ";
	numOfMoves = 0;
	//reset game-board
	document.getElementById("topLeft").innerHTML = currentPlayer;
	document.getElementById("top").innerHTML = currentPlayer;
	document.getElementById("topRight").innerHTML = currentPlayer;
	document.getElementById("left").innerHTML = currentPlayer;
	document.getElementById("center").innerHTML = currentPlayer;
	document.getElementById("right").innerHTML = currentPlayer;
	document.getElementById("bottomLeft").innerHTML = currentPlayer;
	document.getElementById("bottom").innerHTML = currentPlayer;
	document.getElementById("bottomRight").innerHTML = currentPlayer;
	currentPlayer = "X";

	//reset buttonClicked to reset clicked button validation
	buttonClicked.topLeft = false;
	buttonClicked.top = false;
	buttonClicked.topRight = false;
	buttonClicked.left = false;
	buttonClicked.center = false;
	buttonClicked.right = false;
	buttonClicked.bottomLeft = false;
	buttonClicked.bottom = false;
	buttonClicked.bottomRight = false;
}

function gameButtons() { //redirects web button to function(...) after click
	checkPlayer();
	document.getElementById("topLeft").addEventListener("click", topLeftB);
	document.getElementById("top").addEventListener("click", topB);
	document.getElementById("topRight").addEventListener("click", topRightB);
	document.getElementById("left").addEventListener("click", leftB);
	document.getElementById("center").addEventListener("click", centerB);
	document.getElementById("right").addEventListener("click", rightB);
	document.getElementById("bottomLeft").addEventListener("click", bottomLeftB);
	document.getElementById("bottom").addEventListener("click", bottomB);
	document.getElementById("bottomRight").addEventListener("click", bottomRightB);
	console.log(numOfMoves);
}

//What the buttons get redirectred to

function topLeftB() {
	if (buttonClicked.topLeft == false) {
		numOfMoves++
		document.getElementById("topLeft").innerHTML = currentPlayer;
		console.log("hit1");
		buttonClicked.topLeft = true;
	}
}

function topB() {
	if (buttonClicked.top == false) {
		numOfMoves++
		document.getElementById("top").innerHTML = currentPlayer;
		console.log("hit2");
		buttonClicked.top = true;
	}
}

function topRightB() {
	if (buttonClicked.topRight == false) {
		numOfMoves++
		document.getElementById("topRight").innerHTML = currentPlayer;
		console.log("hit3");
		buttonClicked.topRight = true;
	};	
};

function leftB() {
	if (buttonClicked.left == false) {
		numOfMoves++
		document.getElementById("left").innerHTML = currentPlayer;
		console.log("hit4");
		buttonClicked.left = true;
	};
};

function centerB() {
	if (buttonClicked.center == false) {
		numOfMoves++
		document.getElementById("center").innerHTML = currentPlayer;
		console.log("hit5");
		buttonClicked.center = true;
	};	
};

function rightB() {
	if (buttonClicked.right == false) {
		numOfMoves++
		document.getElementById("right").innerHTML = currentPlayer;
		console.log("hit6");
		buttonClicked.right = true;
	};
};

function bottomLeftB() {
	if (buttonClicked.bottomLeft == false) {
		numOfMoves++
		document.getElementById("bottomLeft").innerHTML = currentPlayer;
		console.log("hit7");
		buttonClicked.bottomLeft = true;
	};
};

function bottomB() {
	if (buttonClicked.bottom == false) {
		numOfMoves++
		document.getElementById("bottom").innerHTML = currentPlayer;
		console.log("hit8");
		buttonClicked.bottom = true;
	};
};

function bottomRightB() {
	if (buttonClicked.bottomRight == false) {
		numOfMoves++
		document.getElementById("bottomRight").innerHTML = currentPlayer;
		console.log("hit9");
		buttonClicked.bottomRight = true;
	};
};