//01-15-2019
//cleared page

function webButton() {

//01-20-2019
//cleared page
//need to fix rock paper scissors

	alert("*broken* Rock, Paper, Scissors!")
	
	var userHand = prompt("Rock, Paper, or Scissors?"); //user input
	var handPicker = Math.floor(Math.random() * 3 + 1 ); //npc input
	var stopWin = false;

		//user value assigner
		if (userHand == "Rock") {
			var userScore = 1;

		} else if (userHand == "Paper") {
			var userScore = 2;

		} else if (userHand == "Scissors") {
			var userScore = 3;
		};

		//npc value assigner
		if (handPicker === 1) {
			npcHand = "Rock";
			var npcScore = 1;

		} else if (handPicker === 2) {
			npcHand = "Paper";
			var npcScore = 2;

		} else if (handPicker === 3) {
			npcHand = "Scissors";
			npcScore = 3;
		};

		//win validation
		if (userScore == npcScore) { //tie
			win = undefined;

		} else if (userScore + npcScore === 3) { //rock & paper
			if (userScore < npcScore) {
				win = true;
			} else (userScore > npcScore){  win = false; }

		else if (userScore + npcScore === 4) { //rock & scissors
			if (userScore < npcScore) {
				win = true;
			} else {  win = false; }

		else if (userScore + npcScore === 5) { //paper & scissors
			if (userScore > npcScore) {
				 win = true;
			} else {  win = false; }

		} else if (userScore != "Rock" || userScore != "Paper" || userScore != "Scissors") {
			var stopWin = true;
			alert("Invalid Input");
		};

		//announce win
		if (win === undefined) {
			stateWin = "Tie!";

		} else if (win = true) {
			stateWin = "You Win!";

		} else if (win = false) {
			stateWin = "You Lose!";
		};

		if (stopWin === false) {
			alert("You:" + " " + userHand + "      " + stateWin + "      " + "NPC:" + " " + npcHand);
		} else {
			alert("Try Again!")
		}

//Its way too late, lets leave it at this, more tomorrow

};

function contactButton() {
	alert("c016yinbox@gmail.com");
};