<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Tic-Tac-Toe</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="/website/styles/tictactoe.css" />
    <script src="/website/script/tictactoe.js"></script>
</head>
<body>
    <div class="tictacToe">

				<h2 style="text-align: center;">Tic-Tac Toe</h2>

					<div id="winImgs"> <!--imgs to display after a win -->
						<img id="leftWinImg" class="winImg" src="/website/img/left.png" style="opacity: 0.0">
						<img id="vertCenterWinImg" class="winImg" src="/website/img/vert_center.png" style="opacity: 0.0">
						<img id="rightWinImg" class="winImg" src="/website/img/right.png" style="opacity: 0.0">
						<img id="topWinImg" class="winImg" src="/website/img/top.png" style="opacity: 0.0">
						<img id="horzCenterWinImg" class="winImg" src="/website/img/horz_center.png" style="opacity: 0.0">
						<img id="bottomWinImg" class="winImg" src="/website/img/bottom.png" style="opacity: 0.0">
						<img id="diagUpWinImg" class="winImg" src="/website/img/daig_up.png" style="opacity: 0.0">
						<img id="diagDownWinImg" class="winImg" src="/website/img/diag_down.png" style="opacity: 0.0">
					</div>

						<table> <!-- Gameboard -->
							<tr>
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

						<script src="/website/script/tictactoe.js"></script>
						<br>
						<div id="resetButtonStyle">
							<button class="resetButton" id="resetButton" onclick="tictactoeReset()"><b>RESET</b></button>
						</div>
				</div>
</body>
</html>