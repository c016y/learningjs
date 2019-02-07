<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Practice Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="/website/styles/practicelog.css" />
    <script src="/website/script/practicelog.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head> 
<body>
    <div class="top_column">
        <div id="main_content">
            <p>YO</p>
        </div>
        <div id="recom">
            <button id="btn_1">1</button>
            <button id="btn_2">2</button>
            <button id="btn_3">3</button>
        </div>
    </div>

    <script>
        $(function(YO) {
            $('#main_content p').on('mouseover', function() {
                $('#main_content p').css({color:'red'});
            });
            $('#main_content p').on('click', function() {
                $('#main_content p').css({color:'white'});
            });
        });

        $(function(One) {
            $("#btn_1").on('click', function() {
                $("#btn_1").slideUp(500);
            })
            $("#btn_1").on('click', function() {
                $("#btn_1").slideDown(500);
            });

            $("#btn_2").on('click', function() {
                $("#btn_2").slideDown(500);
            });
            $("#btn_2").on('click', function() {
                $("#btn_2").slideUp(500);
            });
        })
    </script>
</body>
</html>