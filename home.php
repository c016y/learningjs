<!DOCTYPE html>
<html>
<head>
	<title>home</title>
	<script src="/website/script/scratchsheeet.js"></script>
	<link rel="stylesheet" type="text/css" href="/website/styles.css">
</head>
<body>

<!-- Info/Home -->
	<header class="header">
		<h3> My name is <b> Colby</b> and I'm trying to get a <b>dev job</b> </h3>
		<h4> This is my website to show you what I know </h4>
	</header>

	<div id="basic_info">
		<p>I am currently learning Javascript. You can find what I've written on <b><a href="https://github.com/c016y">GitHub</a></b></p>

		<button onclick="pracButton()">Run my practice Javascript!</button> 
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
			<script src="/website/script/payoffcalculator.js"></script>
		</div>
	<br>

<!-- Tic-Tac-Toe -->

		<div class="tictacToe">

			<h3>Tic-Tac Toe</h3>
					<table> <!-- Gameboard -->
						<tr class="rowOne">
							<td style="border-right: 3px solid ; border-bottom: 3px solid">
								<button class="inputBox" id= "topLeft" onclick="tictactoeButton('topLeft');  tictactoeRef()"></button>
							</td>
							<td style="border-left: 3px solid ; border-right: 3px solid ; border-bottom: 3px solid">
								<button class="inputBox" id="top" onclick="tictactoeButton('top'); tictactoeRef()"></button>
							</td>
							<td style="border-left: 3px solid ; border-bottom: 3px solid">
								<button class="inputBox" id="topRight" onclick="tictactoeButton('topRight'); tictactoeRef()"></button>
							</td>
						</tr>

						<tr>
							<td style="border-top: 3px solid ; border-right: 3px solid ; border-bottom: 3px solid">
								<button class="inputBox" id="left" onclick="tictactoeButton('left'); tictactoeRef()"></button>
							</td>
							<td style="border: 3px solid">
								<button class="inputBox" id="center" onclick="tictactoeButton('center');  tictactoeRef()"></button>
							</td>
							<td style="border-top: 3px solid ; border-left: 3px solid ; border-bottom: 3px solid">
								<button class="inputBox" id="right" onclick="tictactoeButton('right');  tictactoeRef()"></button>
							</td>
						</tr>

						<tr>
							<td style="border-right: 3px solid ; border-top: 3px solid">
								<button class="inputBox" id="bottomLeft" onclick="tictactoeButton('bottomLeft'); tictactoeRef()"></button>
							</td>
							<td style="border-left: 3px solid ; border-right: 3px solid ; border-top: 3px solid">
								<button class="inputBox" id="bottom" onclick="tictactoeButton('bottom'); tictactoeRef()"></button>
							</td>
							<td style="border-left: 3px solid ; border-top: 3px solid">
								<button class="inputBox" id="bottomRight" onclick="tictactoeButton('bottomRight');  tictactoeRef()"></button>
							</td>
						</tr>
					</table>
					<script src="/website/script/tictacToe.js"></script>
		</div>
		<br>
		<div id="gameOptions">
			<button class="gameOptionsButton" id="resetButton" onclick="tictactoeReset()">RESET</button>
		</div>

	</div>
	
</body>
</html>