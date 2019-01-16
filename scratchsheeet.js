//01-15-2019
//cleared page

function webButton() {

	function getRandomInt() {
		var number1 = { value: Math.floor(Math.random() * 1000) };
		var number2 = { value: Math.floor(Math.random() * 1000) };
		var number3 = { value: Math.floor(Math.random() * 1000) };

		var rgb = (number1.value + ', ' + number2.value + ', ' + number3.value);

		alert("Here's 3 random numbers:" + ' ' + rgb)
	};
	getRandomInt();
	
 
 	// example of a closure (v confusing rn)
 	/*
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
};

