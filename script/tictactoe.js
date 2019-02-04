var numOfMoves = 0;
var currentPlayer = checkPlayer();
var currentMove = undefined;
var xScore = 0;
var oScore = 0;

var topL = document.getElementById("topLeft");
var topC = document.getElementById("top"); 
var topR = document.getElementById("topRight");
var left = document.getElementById("left");
var center = document.getElementById("center");
var right = document.getElementById("right");
var bottomL = document.getElementById("bottomLeft");
var bottomC = document.getElementById("bottom");
var bottomR = document.getElementById("bottomRight");

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
	
	var topLValue = topL.innerHTML
	var topValue = topC.innerHTML
	var topRValue = topR.innerHTML
	var leftValue =  left.innerHTML
	var centerValue = center.innerHTML
	var rightValue = right.innerHTML
	var bottomLValue = bottomL.innerHTML
	var bottomValue = bottomC.innerHTML
	var bottomRValue = bottomR.innerHTML

	function checkWin(x, y, z, move) {
			if (x == "X" && y == "X" && z == "X") { 
				alert("X Wins!");
				switchTictactoeButtons(true);
				xScore++
				var winningMove = move;
				drawLine();
				console.log(winningMove);
			 }
			else if (x == "O" && y == "O" && z == "O") {
				alert("O Wins!");
				switchTictactoeButtons(true);
				oScore++
				var winningMove = move;
				drawLine();
				console.log(winningMove);
			}

	function drawLine() {
		switch (winningMove) {
			case 4: document.getElementById("leftWinImg").style.opacity = 1; break;
			case 5: document.getElementById("vertCenterWinImg").style.opacity = 1; break;
			case 6: document.getElementById("rightWinImg").style.opacity = 1; break;
			case 1: document.getElementById("topWinImg").style.opacity = 1; break;
			case 2: document.getElementById("horzCenterWinImg").style.opacity = 1; break;
			case 3: document.getElementById("bottomWinImg").style.opacity = 1; break;
			case 8: document.getElementById("diagUpWinImg").style.opacity = 1; break;
			case 7: document.getElementById("diagDownWinImg").style.opacity = 1; break;
			}
		};
	};

	checkWin(topLValue, topValue, topRValue, 1)//horizontal
	checkWin(leftValue, centerValue, rightValue, 2);
	checkWin(bottomLValue, bottomValue, bottomRValue, 3);
	checkWin(topLValue, leftValue, bottomLValue, 4);//verticle
	checkWin(topValue, centerValue, bottomValue, 5);
	checkWin(topRValue, rightValue, bottomRValue, 6);
	checkWin(topLValue, centerValue, bottomRValue, 7);//diagonal
	checkWin(bottomLValue, centerValue, topRValue, 8);

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
	topL.disabled = state; //activate buttons
	topC.disabled = state;
	topR.disabled = state;
	left.disabled = state;
	center.disabled = state;
	right.disabled = state;
	bottomL.disabled = state;
	bottomC.disabled = state;
	bottomR.disabled = state;
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
