//01-20-2019
//cleared page
//need to fix rock paper scissors

	//function pracButton() {
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

/*
	var x = {
		foo: 1,
		bar: 2,
		baz: 3
	};

	var y = {
		foo: 10,
		bar: 20,
		baz: 30
	}

	function changeX() {
		z = 0;
		function math() {
		z = x.foo * y.bar
	}
	math();
	}

	changeX();
	alert(z);
*/

//Started doing the math needed for the Pay-Off calculator, still can't pull the data from the HTML into
// javascript, will research tomorrow.

//01-23-2019 : in reference to payoffcalculator.js
//Found out what was wrong with last nights script. I was referencing the .js file before the HTML could assign
//user input (doh).
//documentGetById() will not pull data from home.php unless the js is in a function (?)
//Now i've found out I need to explicitly coerce a string to an interger because the HTML forms output strings
//found the parseFloat() and parseInt() functions that will do that ^^^
//Had to removed remainder because the remainder variable because it sometimes rounds numbers, which is no good.

//01-24-2019
//Cleaned up some stuff from yesterday
//spent most of today creating a valid input checker
//Almost works but i'm having trouble actually making it spit out the right thing
//will fix tomorrow

//01-26-2018
//need to test some things
//I finished the Pay-Off Calculator! Next I think I will redo the Rock, Paper, Scissors game to hopefully cleanup
//what I've already written and get it working properly, maybe just start over
//Some other project ideas:
/*
	Tic-Tac Toe
	Random background color-changer
	Clicker counter game
	Start getting into RSS feed / API / Web-shit
	Dice
	Deck of Cards / Black Jack?

//good short day tonight, its the next day so I'll commit later too

var bar = 1;
var checker = false;

function changeBar() {
	bar ++
	checker = true;
}

changeBar();

if (checker == true) {
	alert(bar);
}
*/

//01-27-2019
//Having trouble figuring out how to switch between placing X's and O's
//Feels like im missing something in the ol' dev toolbox to know how to do this
//Thought this would be eaiser/make more sense :,[
//More research later today

//01-28-2019
//after a long day of Rocket League, I've managed to figure out how to make Tic-Tac-Toe work
//rather simple, just had to think about it (duh)
//Game currently switches players after each turn and resets after user clicks the board after all possible moves have been made
//tomorrow, I will try and make it more user friendly by adding a Start Game button and a Reset Game button
//Also need to make Win Conditions so the game will actually work

//01-29-2019
//Great day today. Reworked Tic-Tac-Toe and managed to heavily reduce redunancy
//Leaving today with the same product of last night, but much MUCH cleaner, and thus I can rest easy
//I finally sort of understood how to use a contructor and got rid of all 9 of those hand written buttons
//added a function to deactivated the buttons so players can't change the value of an already claimed space
//just realized it's 12:00AM so I can't commit today, I'll have to commit on the 30th :,(
//TOMORROW I FIGURE OUT WIN CONDITIONS


/*
function Car(make, model, year) {};

var corolla = new Car("Toyota", "Corolla", "2015")
alert(corolla.make)


function webButton(element) {
	if (buttonClicked.topLeft == false) {
		numOfMoves++
		document.getElementById(toString(element)).innerHTML = currentPlayer;
		console.log("hit1");
		buttonClicked.element = true;
}

var topLeftB = new webButton(topLeft)

alert(topLeftB)



var foo = "bar"

var foo = window[foo]

alert(typeof foo)
*/

//01-30-2019
//started working on win conditions.
//need to assign which button was clicked by who to compare it to some sort of meta
//disabled buttons after win
//the last move before a win does not apear on the game board until after the win alert is triggered, needs to be fixed
//find a way to draw a line thru the winning moves after win
//clean it up and add more styles
//after this project I want to work on my web design, layouts, responsivness, etc. Need to build a real website.

//alert("This button just shows this message right now :]");

//01-31-2019
//very tired today, cannot think straight
//added numbers to the paremeters for checkWin() so I can tell what move won the game
//need to find a way to use those values to make the line come up
//can't do much else today, brain is fried

//02-01-2019
//oops didn't write anything yesterday
//Cleaned up stuff I think refer to GitHub

//02-02-2019
//I need to call tic-tac-toe quits. It's working so Im gonna leave it how it is, I will come back and improve later
//nothing today really, research for my next project

//02-03-2019
//should have commited earlier, doing some restructoring so my scripts don't get to clustered.
//switched from Sublime to VS Code and don't have to many complaints except it wont autofill, but theres an extension for that
//just commited but didn't even mention that I started work on my next project, navbars. I want to get good at navbars.
//finally sort of done with that, moving on to making a navbar
//making a navbar with a unordered list and flexbox, have a basic layout ready for messing with, want to work on responsiveness
//will start tomorrow.

//02-04-2019
//Messed with navbar a little
//tried to add an image and center some text on the image but failed and didn't try that hard honestly
//kind of lolly-gagged today and played with Trello.
//need to work much harder tomorrow and stay focused
//YOU CAN DO IT. 

/*
var pushupAmount = prompt("How many pushups can you do?");

if (pushupAmount < 10) {	
	alert("You should do more pushups")
} else if (pushupAmount > 10 && pushupAmount < 30) {
	alert("Yeah dawg me too")
} else if (pushupAmount > 30) {
	alert("Damn B, you strong as hell")
} else {
	alert("Please enter a number that is greater than -1");
}
*/

//02-05-2019
//Today I want to focus on CSS, I will be messing around with things and watching videos :]
//So far I've learned about the box model. Which is a box that wraps around every element in HTML.
//This box consists of the content itself, padding, border, then margin. This helps understand the box-sizing style
//Which includes parts of the box model as the content itself.
//Next thing I learned was about Specificity. Specificity is the rules that govern which style to apply if there are
//2 confliciting things assining styles. 
//1: !important at the end of a style decloration will tell the browser to use that style. 
//2: ID has second most priority over
//3: Class which has more priority over
//unlabled elements such as div, nav, etc.
//The next thing I learned is great because it answered a problem I ran into last night.
//The goal is to center an element inside another element. There are several ways to do this, but a plain css way will work.
//The simplest way is the set top, left, bottom, adn right to 0 (top: 0; left: 0; bottom: 0; right: 0;)\
//and set margin to auto (margin: auto;)
//Next thing is the difference between static, relative, absolute, and fixed positioning.
//static referes to the default styling inside of HTML.
//relative refers to positioning an element itself, without effecting other elements.
//absolute refers to positioning an element itself, with effecting other elements.
//fixed refers to to positioning an item on screen that is not effected by scrolling.
//Lastly, the difference between visibility: hidden; and display: none;
//Very simple, Visibility: hidden; leaves spacing for the hidden element as if it is still there, just invisible.
//Display: none; removes the element from the page, including the space it occupyed. NOTE: The element still exists within the DOM
//I need to learn as much about css for the rest of the week, and then get started on some Jquery so I can start working with API's
//Optionally, working with a CMS is something else I need to learn.

//02-06-2019
//not feeling as confident in my css and html skills rn. I get the concepts but styling them is proving harder than I thought.
//Purcahsed a CSS related book on amazon, will be reading up when it comes in
 //checking out jquery finally
 //its getting late
 //wrote my first jquery today, just messing around right now.
 //better CSS is coming, so hopefully I can make prettier things.
 //jquery seems to make javascript easier to use

 //02/07/2019
 //Was feeling a little burned out from code today, took a break to focus on some design things. I downloaded Adobe Xd and started
 //working on some graphics and whathave you. First thing I learned is that there needs to be tons of whitespace because when
 //your web elements are to big it makes the webpage look kinda clunky, will need to improve that at some point.
 //I want to actually launch a website sooner than later so i nned to focus on making a personal / portfolio site
 //I may add some sort of blog to replace the this log I've been updating inside this .js file.

//  $(function() {
// 	 $('#main_content p').css({ color: 'red' });
	
// 	// on('click', function() {
		
// 	// })
//  });

//};
	function contactButton() {
		alert("c016yinbox@gmail.com");
	};