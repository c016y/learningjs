<!DOCTYPE html>
<html>
<head>
	<title>Test</title>
	<script src="/website/scratchsheeet.js"></script>
</head>

<style type="text/css">

	body {
		font-family: arial;
		text-align: center;
	}

	.projects {
		background.color: black;
	}

	#payoffCalc {
		border-style: solid;
		margin-bottom: 10;
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
		<br><br>
		<button onclick="contactButton()">Contact Me</button>
	</div>

	<div id="examples" class="projects">
		<h2>Projects</h2>

		<!-- Pay-Off Calculator-->
		<div id="payoffCalc">
			<h3>Pay-Off Calculator</h3>
			Let's get some more info about your loan.
			<form id="payoffForm">
					I currently owe $<input type="text" name="loan_amount" id="loan_amount"> on my loan, <br> 
					with an interest rate of <input type="text" name="interest_rate" id="interest_rate">%, and <br>
					I pay $<input type="text" name="payment_amount" id="payment_amount"> every month towards this loan. <br><br>
					<input style="margin-bottom: 20px" type="submit" onclick="formData()" value="Calculate">
			</form>
			<script src="/website/payoffcalculator.js"></script>
		</div>

	</div>

	
</body>
</html>