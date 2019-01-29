<!DOCTYPE html>
<html>
<head>
	<title>home</title>
	<script src="/website/scratchsheeet.js"></script>
</head>

<style>

	body {
		font-family: arial;
		text-align: center;
	}

	#payoffCalc {
		border-style: solid;
		margin-bottom: 10;
	}

	.tictacToe {
		margin: 0 auto;
		width: 206px;
		background:red;
	}

	.inputBox {
		padding: 30px;
		border: none;
		font-weight: bold;
		font-size: 20pt;
		background-color: white;
		width:15px;
		height: 15px;
	}

</style>
<body>

<!-- Info/Home -->
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
					<input style="margin-bottom: 20px" type="submit" onclick="calcLoan()" value="Calculate">
			</form>
			<script src="/website/payoffcalculator.js"></script>
		</div>

		<br>
<!-- Tic-Tac-Toe -->
		<div class="tictacToe">

			<h3>Tic-Tac Toe</h3>
					<table>
						<tr class="rowOne">
							<th style="border-right: 3px solid ; border-bottom: 3px solid">
								<button class="inputBox" id="topLeft" onclick="gameButtons()"></button>
							</th>
							<th style="border-left: 3px solid ; border-right: 3px solid ; border-bottom: 3px solid">
								<button class="inputBox" id="top" onclick="gameButtons()"></button>
							</th>
							<th style="border-left: 3px solid ; border-bottom: 3px solid">
								<button class="inputBox" id="topRight" onclick="gameButtons()"></button>
							</th>
						</tr>

						<tr>
							<th style="border-top: 3px solid ; border-right: 3px solid ; border-bottom: 3px solid">
								<button class="inputBox" id="left" onclick="gameButtons()"></button>
							</th>
							<th style="border: 3px solid">
								<button class="inputBox" id="center" onclick="gameButtons()"></button>
							</th>
							<th style="border-top: 3px solid ; border-left: 3px solid ; border-bottom: 3px solid">
								<button class="inputBox" id="right" onclick="gameButtons()"></button>
							</th>
						</tr>

						<tr>
							<th style="border-right: 3px solid ; border-top: 3px solid">
								<button class="inputBox" id="bottomLeft" onclick="gameButtons()"></button>
							</th>
							<th style="border-left: 3px solid ; border-right: 3px solid ; border-top: 3px solid">
								<button class="inputBox" id="bottom" onclick="gameButtons()"></button>
							</th>
							<th style="border-left: 3px solid ; border-top: 3px solid">
								<button class="inputBox" id="bottomRight" onclick="gameButtons()"></button>
							</th>
						</tr>
					</table>
					<script src="/website/tictacToe.js"></script>
		</div>

	</div>
	
</body>
</html>