//01-20-2019
//cleared page
//need to fix rock paper scissors

	function webButton() {
/*
	alert("*broken* Rock, Paper, Scissors!")
	
	var userHand = prompt("Rock, Paper, or Scissors?"); //user input
	var handPicker = Math.floor(Math.random() * 3 + 1 ); //npc input
	var stopWin = false;

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
			} else { 
				win = false; 

		} else if (userScore + npcScore === 4) { //rock & scissors
			if (userScore < npcScore) {
				win = true;
			} else {
				win = false;

		} else if (userScore + npcScore === 5) { //paper & scissors
			if (userScore > npcScore) {
				 win = true;
			} else {  
				win = false; 
			}

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
*/

//01-21-2019
//Will return tp rpc later. Want to explore scopes a bit.
//I've already spent an hour trying to fix the WAMP server im running >:[
//Very distracted night :( Didn't do much other than mess with the rpc

//01-22-2019
//Exploring scopes like I meant to last night
//Started working on a "payoff calculator", will upload to Github
//The html part is nearly done
//need to figure out how to properly pull data from HTML forms

	var x = {
		foo: 1,
		bar: 2,
		baz: 3
	};

	function changeX() {
		x.foo++
	}

	changeX();
	alert(x.foo);

//Started doing the math needed for the Pay-Off calculator, still can't pull the data from the HTML into
// javascript, will research tomorrow.

};

	function contactButton() {
		alert("c016yinbox@gmail.com");
	};
