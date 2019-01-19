//01-15-2019
//cleared page

function webButton() {
	/*
	function getRandomInt() {
		var number1 = { value: Math.floor(Math.random() * 1000) };
		var number2 = { value: Math.floor(Math.random() * 1000) };
		var number3 = { value: Math.floor(Math.random() * 1000) };

		var rgb = (number1.value + ', ' + number2.value + ', ' + number3.value);

		alert("Here's 3 random numbers:" + ' ' + rgb)
	};
	getRandomInt();
	
 
 	// example of a closure (v confusing rn)
 	
	function makeAdder(x) {

		function add(y) {
			return y + x;
		};
		return add;
	}

	var plusOne = makeAdder(1);
	var plusTen = makeAdder(10);

	alert(plusTen(3));
	*/

	//01-16-2019
	//reading "You don't know JS: scope & closures" by Kyle Simpson. 
	/*
	Learning about how when you create a variable, the JS engine utilizes the compiler by lexing the script
	into tokens, which are then parsed into an AST.
	The AST gets generated into machine code to actually allocate memory for the variable.
	The compiler parses the code into what the engine will execute. While doing their processes, 
	both the compiler and the engine utilize "scope" to check if memory has already been allocated
	to that variable. When calling to the scope, the engine will use different "look-ups" to check the scope.
	A LHS (or lefthand-side) is a call to the lefthand-side of the assignment operator. More specificly, 
	it's a call for the "target" of the assignment. The RHS call is a reference to the "source" of the assignment.
	in:
	*/
 
//	function foo(a) {
//		console.log(a); //4
//	}
//
//	foo(4);

	/*
	When executing "console.log(a)", the engine will make a RHS look-up to scope for the "source" of a,
	as well as a RHS look-up to the foo() function
	When passing the 4 paramenter to the foo() function, you are assiging a value to a, when assigning a
	value to a, a LHS look-up is performed.
	*/
	//Quiz: If the engine and compiler where to talk, how would the convo go with this script:

/*	function bar(a) {
		var b = a;
		return a + b;
	}

	var c = bar(2);
*/
	/*
	Engine: RHS c
	Scope: bar()
	Engine: RHS bar()
	Scope: "this" function
	Engine: Executing "that" function
	Engine: RHS a
	Scope: parameter to bar()
	Engine: Assigning 2 to a
	Engine: RHS b
	Scope: a (2)
	Engine: RHS return
	Scope: a (2) + b (2)
	Engine: LHS c
	Scope: a + b (4)

	I need to think abour how the compiler works to get the quiz right, will pick up where
	I left off tomorrow.
	*/ 

//Stayed up late trying to make Rock, Paper, Scissors
//Can't figure out how to validate win conditions, good task for tomorrow

//	var userHand = prompt("Rock, Paper, or Scissors?"); //user input
/*
	var handPicker = Math.floor(Math.random() * 3 + 1 ); //npc input
	var npcHand;

		if (handPicker === 1) {
			npcHand = "Rock";
		} else if (handPicker === 2) {
			npcHand = "Paper";
		} else if (handPicker === 3) {
			npcHand = "Scissors";
		}


	alert(npcHand);
*/

// 01-17-2019
//late night at work, no scripting tonight :[ 
//so far i've re-read yesterdays topic of how the JS engine compiles and executes scripts.
//also want to get back to the rock, paper, scissors game eventually.
//I don't want to not write some JS, so here's something
/*
	var count = 0;

	while (count <= 5) {
		alert(count);
		count++;
	};

	alert("Thanks for clicking :]");
	*/

//01/18/2019
//building on yesterday...

//This is all trash, idk what im doing
/*
	var count = 1;
	var result = "";
	var userInput = prompt("Pick a number 1 - 10");
	var x = userInput;

	while (count <= 10) {
		var result = result + count;
		count++;
	};

	 function selector(x) {
		if (x <= 1 || x >= 10) {
			x--;
			var space = " ";
			alert( x + '^');
		} else if (x > 1 || x < 10) {
			alert("It must be a number between 1 and 10.");
		}
	};

	selector();
*/
//something easier
	
	function time() {
		var d = new Date();
  		var n = d.getHours();
  		
  		console.log(n);

  		if (n < 12) {
  			alert("Good Morning")
  		} else { alert("Good Night") }
  	};

  	time();
};

function contactButton() {
	alert("c016yinbox@gmail.com");
};