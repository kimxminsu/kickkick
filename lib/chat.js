var chat = `
<!DOCTYPE html>
<html>
<meta charset="utf-8">

<head>
	<title>채팅</title>
	<meta name="viewport" content="width=device-width, initial-scale=1"> 
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
	<link href="http://fonts.googleapis.com/earlyaccess/hanna.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">
	<!--header와 footer를 불러오는 script문 -->
	<script type="text/javascript" src="includeHtml.js"></script>
	<script type="text/javascript">
		function headerCompleted() {
			
		}
		function footerCompleted() {
			
		}
	</script>
	<!--header와 footer를 불러오는 script문 /-->
	<style type="text/css">
		body {
			background-color: #ffffff;
			padding: 50px;
		}
		.title {
			text-align: center;
			font-family: 'Jua', sans-serif;
			color: #000000;
			font-size: 50px;}
		.img {
			width: 50px;
			height: 50px;

		}
		.text {
			text-align: center;
			font-family: 'Jua', sans-serif;
			color: #000000;
			font-size: 15px;
			box-sizing: border-box;
			padding: 10px;
			background-color: #D8D8D8;
			border-radius: 1em;
		}
		.set{
			
		}
	</style>
</head>
<body>
	<div data-role="page" id="bar">

		<!--header-->
	    <include-html target="header.html" completed="headerCompleted"></include-html>
	    		
	    <!--content-->
	    <div data-role="content" id="content">
			
			<div class="set">
				<table>
					<tr>
						<td><img class="img" src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/profile.png"></td>
						<td><div class="text">"안녕하세요 내이름은 김삼순 안녕하세요 내이름은 김삼순 안녕하세요 내이름은 김삼순"<div></td>
					</tr>
					<tr>
						<td><img class="img" src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/profile.png"></td>
						<td><div class="text">"안녕하세요 내이름은 김삼순"<div></td>
					</tr>
					<tr>
						<td><img class="img" src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/profile.png"></td>
						<td><div class="text">"안녕하세요 내이름은 김삼순"<div></td>
					</tr>
					<tr>
						<td><img class="img" src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/profile.png"></td>
						<td><div class="text">"안녕하세요 내이름은 김삼순"<div></td>
					</tr>

				</table>
			</div>
			
			
		</div>

		<!--footer-->
    	<include-html target="footer.html" completed="footerCompleted"></include-html>

	</div>
	<script>includeHtml();</script>  <!-- includeHtml.js를 호출 -->
</body>
</html>
`;

module.exports = chat;