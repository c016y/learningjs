<!DOCTYPE html>
<html>
<head>
	<title>Test</title>
	<script src="/website/scratchsheeet.js"></script>
	<script src="/website/payoffcalculator.js"></script>
</head>

<style type="text/css">

	body {
		font-family: arial;
		text-align: center;
	}

	.projects {
		background.color: black;
	}

</style>
<body>

	<header class="header">
		<h3> My name is <b> Colby</b> and I'm trying to get a <b>dev job</b> </h3>
		<h4> This is my website to show you what I know </h4>
	</header>

	<div id="basic_info">
		<p>I am currently learning Javascript. You can find what I've written on <b><a href="https://github.com/c016y">GitHub</a></b></p>

		<button onclick="webButton()">Run my practice Javascript!</button> 
		<br>
		<button onclick="contactButton()">Contact Me</button>
	</div>

	<div id="examples" class="projects">
		<h2>Projects</h2>

		<!-- Pay-Off Calculator-->
		<div id="payoffCalc">
			<h3>Pay-Off Calculator</h3>
			Let's get some more info about your loan.
			<form>
				<p>
					I currently owe <input type="text" id="loan_amount"> on my loan, <br> 
					with an interest rate of <input type="text" id="interest_rate">, and <br>
					I pay <input type="text" id="payment_amount"> every month towards this loan. <br>
				</p>
			</form>
			<button onclick="test()">Calculate</button>
		</div>

	</div>

	
</body>
</html>