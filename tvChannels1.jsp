<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>HOTEL APP</title>
<link type="text/css" rel="stylesheet" href="../css/base.css" />
<script src="../js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="../js/hcap.js" charset="UTF-8"></script>
<script type="text/javascript" src="../js/channelTest.js" charset="UTF-8"></script>
<script type="text/javascript">
<!--
	var CurrentFocus = "tvChannels-11";

	focusInput = function()
	{
		document.getElementById("tvChannels-11").focus();
	}
	
	function onmouse(that) { 
		document.getElementById(that).focus(); 
		CurrentFocus = that;
	} 

	//onmouse(CurrentFocus);

	function keyDown() {
		//alert(hcap.key.Code.LEFT); //ESC:27 //위로화살표:461 //나가지:1001
		var keycode = event.keyCode;
		var realkey = String.fromCharCode(event.keyCode);
		//alert("start keycode: " + keycode + "\nrealkey: " + realkey+ "\nCurrentFocus: " + CurrentFocus);


		if (CurrentFocus == "main")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("language").focus(); CurrentFocus = "language";}  //hcap.key.Code.LEFT
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels1").focus(); CurrentFocus = "tvChannels1";} //hcap.key.Code.RIGHT
			else if (keycode == hcap.key.Code.UP) {document.getElementById("language").focus(); CurrentFocus = "language";} //hcap.key.Code.UP
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("info-hotel").focus(); CurrentFocus = "info-hotel";} //hcap.key.Code.DOWN			
		}
		else if (CurrentFocus == "info-hotel")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("main").focus(); CurrentFocus = "main";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-11").focus(); CurrentFocus = "tvChannels-11";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("guest-message").focus(); CurrentFocus = "guest-message";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels-11").focus(); CurrentFocus = "tvChannels-11";}
		}
		else if (CurrentFocus == "guest-message")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("info-hotel").focus(); CurrentFocus = "info-hotel";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-11").focus(); CurrentFocus = "tvChannels-11";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("request").focus(); CurrentFocus = "request";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels-11").focus(); CurrentFocus = "tvChannels-11";}
		}
		else if (CurrentFocus == "request")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("guest-message").focus(); CurrentFocus = "guest-message";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-11").focus(); CurrentFocus = "tvChannels-11";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("smartApp_Menu").focus(); CurrentFocus = "smartApp_Menu";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels-11").focus(); CurrentFocus = "tvChannels-11";}
		}
		else if (CurrentFocus == "smartApp_Menu")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("request").focus(); CurrentFocus = "request";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-11").focus(); CurrentFocus = "tvChannels-11";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels").focus(); CurrentFocus = "tvChannels";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels-11").focus(); CurrentFocus = "tvChannels-11";}
		}
		else if (CurrentFocus == "tvChannels")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("smartApp_Menu").focus(); CurrentFocus = "smartApp_Menu";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-11").focus(); CurrentFocus = "tvChannels-11";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("language").focus(); CurrentFocus = "language";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels-11").focus(); CurrentFocus = "tvChannels-11";}			
		}
		else if (CurrentFocus == "language")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("tvChannels").focus(); CurrentFocus = "tvChannels";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-11").focus(); CurrentFocus = "tvChannels-11";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("main").focus(); CurrentFocus = "main";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels-11").focus(); CurrentFocus = "tvChannels-11";}
		}

		else if (CurrentFocus == "tvChannels-11")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("tvChannels-63").focus(); CurrentFocus = "tvChannels-63";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-61").focus(); CurrentFocus = "tvChannels-61";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels-12").focus(); CurrentFocus = "tvChannels-12";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels-21").focus(); CurrentFocus = "tvChannels-21";}
			else if (keycode == hcap.key.Code.ENTER){channelSelect(5,1);}	    ///////////////////////////////////////////////////////////////////okbutton
		}
		else if (CurrentFocus == "tvChannels-12")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("tvChannels-11").focus(); CurrentFocus = "tvChannels-11";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-62").focus(); CurrentFocus = "tvChannels-62";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels-13").focus(); CurrentFocus = "tvChannels-13";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels-22").focus(); CurrentFocus = "tvChannels-22";}
			else if (keycode == hcap.key.Code.ENTER){channelSelect(7,2);}	    ///////////////////////////////////////////////////////////////////okbutton
		}
		else if (CurrentFocus == "tvChannels-13")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("tvChannels-12").focus(); CurrentFocus = "tvChannels-12";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-63").focus(); CurrentFocus = "tvChannels-63";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels-21").focus(); CurrentFocus = "tvChannels-21";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels-23").focus(); CurrentFocus = "tvChannels-23";}
			else if (keycode == hcap.key.Code.ENTER){channelSelect(9,2);}	    ///////////////////////////////////////////////////////////////////okbutton
		}
		else if (CurrentFocus == "tvChannels-21")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("tvChannels-13").focus(); CurrentFocus = "tvChannels-13";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-11").focus(); CurrentFocus = "tvChannels-11";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels-22").focus(); CurrentFocus = "tvChannels-22";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels-31").focus(); CurrentFocus = "tvChannels-31";}
			else if (keycode == hcap.key.Code.ENTER){channelSelect(11,1);}	    ///////////////////////////////////////////////////////////////////okbutton
		}
		else if (CurrentFocus == "tvChannels-22")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("tvChannels-21").focus(); CurrentFocus = "tvChannels-21";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-12").focus(); CurrentFocus = "tvChannels-12";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels-23").focus(); CurrentFocus = "tvChannels-23";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels-32").focus(); CurrentFocus = "tvChannels-32";}
			else if (keycode == hcap.key.Code.ENTER){channelSelect(13,1);}	    ///////////////////////////////////////////////////////////////////okbutton
		}
		else if (CurrentFocus == "tvChannels-23")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("tvChannels-22").focus(); CurrentFocus = "tvChannels-22";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-13").focus(); CurrentFocus = "tvChannels-13";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels-31").focus(); CurrentFocus = "tvChannels-31";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels-33").focus(); CurrentFocus = "tvChannels-33";}
			else if (keycode == hcap.key.Code.ENTER){channelSelect(15,1);}	    ///////////////////////////////////////////////////////////////////okbutton
		}
		else if (CurrentFocus == "tvChannels-31")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("tvChannels-23").focus(); CurrentFocus = "tvChannels-23";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-21").focus(); CurrentFocus = "tvChannels-21";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels-32").focus(); CurrentFocus = "tvChannels-32";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels-41").focus(); CurrentFocus = "tvChannels-41";}
			else if (keycode == hcap.key.Code.ENTER){channelSelect(16,1);}	    ///////////////////////////////////////////////////////////////////okbutton
		}
		else if (CurrentFocus == "tvChannels-32")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("tvChannels-31").focus(); CurrentFocus = "tvChannels-31";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-22").focus(); CurrentFocus = "tvChannels-22";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels-33").focus(); CurrentFocus = "tvChannels-33";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels-42").focus(); CurrentFocus = "tvChannels-42";}
			else if (keycode == hcap.key.Code.ENTER){channelSelect(17,1);}	    ///////////////////////////////////////////////////////////////////okbutton
		}
		else if (CurrentFocus == "tvChannels-33")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("tvChannels-32").focus(); CurrentFocus = "tvChannels-32";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-23").focus(); CurrentFocus = "tvChannels-23";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels-41").focus(); CurrentFocus = "tvChannels-41";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels-43").focus(); CurrentFocus = "tvChannels-43";}
			else if (keycode == hcap.key.Code.ENTER){channelSelect(18,1);}	    ///////////////////////////////////////////////////////////////////okbutton
		}
		else if (CurrentFocus == "tvChannels-41")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("tvChannels-33").focus(); CurrentFocus = "tvChannels-33";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-31").focus(); CurrentFocus = "tvChannels-31";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels-42").focus(); CurrentFocus = "tvChannels-42";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels-51").focus(); CurrentFocus = "tvChannels-51";}
			else if (keycode == hcap.key.Code.ENTER){channelSelect(19,1);}	    ///////////////////////////////////////////////////////////////////okbutton
		}
		else if (CurrentFocus == "tvChannels-42")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("tvChannels-41").focus(); CurrentFocus = "tvChannels-41";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-32").focus(); CurrentFocus = "tvChannels-32";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels-43").focus(); CurrentFocus = "tvChannels-43";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels-52").focus(); CurrentFocus = "tvChannels-52";}
			else if (keycode == hcap.key.Code.ENTER){channelSelect(20,1);}	    ///////////////////////////////////////////////////////////////////okbutton
		}
		else if (CurrentFocus == "tvChannels-43")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("tvChannels-42").focus(); CurrentFocus = "tvChannels-42";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-33").focus(); CurrentFocus = "tvChannels-33";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels-51").focus(); CurrentFocus = "tvChannels-51";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels-53").focus(); CurrentFocus = "tvChannels-53";}
			else if (keycode == hcap.key.Code.ENTER){channelSelect(21,1);}	    ///////////////////////////////////////////////////////////////////okbutton
		}
		else if (CurrentFocus == "tvChannels-51")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("tvChannels-43").focus(); CurrentFocus = "tvChannels-43";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-41").focus(); CurrentFocus = "tvChannels-41";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels-52").focus(); CurrentFocus = "tvChannels-52";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels-61").focus(); CurrentFocus = "tvChannels-61";}
			else if (keycode == hcap.key.Code.ENTER){channelSelect(22,1);}	    ///////////////////////////////////////////////////////////////////okbutton
		}
		else if (CurrentFocus == "tvChannels-52")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("tvChannels-51").focus(); CurrentFocus = "tvChannels-51";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-42").focus(); CurrentFocus = "tvChannels-42";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels-53").focus(); CurrentFocus = "tvChannels-53";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels-62").focus(); CurrentFocus = "tvChannels-62";}
			else if (keycode == hcap.key.Code.ENTER){channelSelect(23,1);}	    ///////////////////////////////////////////////////////////////////okbutton
		}
		else if (CurrentFocus == "tvChannels-53")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("tvChannels-52").focus(); CurrentFocus = "tvChannels-52";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-43").focus(); CurrentFocus = "tvChannels-43";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels-61").focus(); CurrentFocus = "tvChannels-61";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels-63").focus(); CurrentFocus = "tvChannels-63";}
			else if (keycode == hcap.key.Code.ENTER){channelSelect(24,1);}	    ///////////////////////////////////////////////////////////////////okbutton
		}
		else if (CurrentFocus == "tvChannels-61")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("tvChannels-53").focus(); CurrentFocus = "tvChannels-53";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-51").focus(); CurrentFocus = "tvChannels-51";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels-62").focus(); CurrentFocus = "tvChannels-62";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels1").focus(); CurrentFocus = "tvChannels1";}
			else if (keycode == hcap.key.Code.ENTER){channelSelect(25,1);}	    ///////////////////////////////////////////////////////////////////okbutton
		}
		else if (CurrentFocus == "tvChannels-62")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("tvChannels-61").focus(); CurrentFocus = "tvChannels-61";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-52").focus(); CurrentFocus = "tvChannels-52";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels-63").focus(); CurrentFocus = "tvChannels-63";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels1").focus(); CurrentFocus = "tvChannels1";}
			else if (keycode == hcap.key.Code.ENTER){channelSelect(26,1);}	    ///////////////////////////////////////////////////////////////////okbutton
		}
		else if (CurrentFocus == "tvChannels-63")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("tvChannels-62").focus(); CurrentFocus = "tvChannels-62";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-53").focus(); CurrentFocus = "tvChannels-53";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels-11").focus(); CurrentFocus = "tvChannels-11";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels1").focus(); CurrentFocus = "tvChannels1";}
			else if (keycode == hcap.key.Code.ENTER){channelSelect(27,1);}	    ///////////////////////////////////////////////////////////////////okbutton
		}
		else if (CurrentFocus == "tvChannels1")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("tvChannels4").focus(); CurrentFocus = "tvChannels4";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels2").focus(); CurrentFocus = "tvChannels2";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-53").focus(); CurrentFocus = "tvChannels-53";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels").focus(); CurrentFocus = "tvChannels";}
		}
		else if (CurrentFocus == "tvChannels2")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("tvChannels1").focus(); CurrentFocus = "tvChannels1";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels3").focus(); CurrentFocus = "tvChannels3";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-53").focus(); CurrentFocus = "tvChannels-53";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels").focus(); CurrentFocus = "tvChannels";}
		}
		else if (CurrentFocus == "tvChannels3")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("tvChannels2").focus(); CurrentFocus = "tvChannels2";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels4").focus(); CurrentFocus = "tvChannels4";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-53").focus(); CurrentFocus = "tvChannels-53";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels").focus(); CurrentFocus = "tvChannels";}
		}
		else if (CurrentFocus == "tvChannels4")
		{
			if (keycode == hcap.key.Code.LEFT) {document.getElementById("tvChannels3").focus(); CurrentFocus = "tvChannels3";}
			else if (keycode == hcap.key.Code.RIGHT) {document.getElementById("tvChannels1").focus(); CurrentFocus = "tvChannels1";}
			else if (keycode == hcap.key.Code.UP) {document.getElementById("tvChannels-53").focus(); CurrentFocus = "tvChannels-53";}
			else if (keycode == hcap.key.Code.DOWN) {document.getElementById("tvChannels").focus(); CurrentFocus = "tvChannels";}
		}

				
		switch (keycode) {
			case hcap.key.Code.CH_UP :
				location.href = "/procentric/application/tvChannels/channelView.do";
				ChanUP();	
				break;
			case hcap.key.Code.CH_DOWN :
				location.href = "/procentric/application/tvChannels/channelView.do";
				ChanDN();	
				break;
			case hcap.key.Code.PORTAL :															
				//displayOff();
				//clearChannel();
				location.href = "/procentric/application/tvChannels/selectTvChannelsVw.do";	
				displayOff();	
				break;
			case hcap.key.Code.ENTER :
				//location.href = "/procentric/application/main/main.do";
				//displayOff();
				break;
			case hcap.key.Code.INFO :
				
				break;
			case hcap.key.Code.NUM_0 :
				inputVal = 0;
				inputChannel(inputVal);
				break;
			case hcap.key.Code.NUM_1 :
				inputVal = 1;
				inputChannel(inputVal);
				break;
			case hcap.key.Code.NUM_2 :
				inputVal = 2;
				inputChannel(inputVal);
				break;
			case hcap.key.Code.NUM_3 :
				inputVal = 3;
				inputChannel(inputVal);
				break;
			case hcap.key.Code.NUM_4 :
				inputVal = 4;
				inputChannel(inputVal);
				break;
			case hcap.key.Code.NUM_5 :
				inputVal = 5;
				inputChannel(inputVal);
				break;
			case hcap.key.Code.NUM_6 :
				inputVal = 6;
				inputChannel(inputVal);
				break;
			case hcap.key.Code.NUM_7 :
				inputVal = 7;
				inputChannel(inputVal);
				break;
			case hcap.key.Code.NUM_8 :
				inputVal = 8;
				inputChannel(inputVal);
				break;
			case hcap.key.Code.NUM_9 :
				inputVal = 9;
				inputChannel(inputVal);
				break;
			case 96    : /////////////////////////////numpad0		 /// for test
				inputVal = 0;
				inputChannel(inputVal);
				break;
			case 97    : /////////////////////////////numpad1
				inputVal = 1;
				inputChannel(inputVal);
				break;
			case 98    : /////////////////////////////numpad2
				inputVal = 2;
				inputChannel(inputVal);
				break;
			case 99    : /////////////////////////////numpad3
			case 100   : /////////////////////////////numpa4
			case 101   : /////////////////////////////numpad5
			case 102   : /////////////////////////////numpa6
			case 103   : /////////////////////////////numpa7
			case 104   : /////////////////////////////numpa8
			case 105   : /////////////////////////////numpa9
		}
		
		//alert("11111111111111111");
		////alert("last keycode: " + keycode + "\nrealkey: " + realkey+ "\nCurrentFocus: " + CurrentFocus);

	 }

	document.onkeydown = keyDown;

channelSelect = function(major,minor){
	changeChannel(major,minor);	
	location.href = "/procentric/application/tvChannels/channelView.do";		
}

changeChannel = function(major,minor){
	hcap.channel.requestChangeCurrentChannel({
		"channelType":hcap.channel.ChannelType.RF, 
		"majorNumber":Number(major), 
		"minorNumber":Number(minor), 
		"rfBroadcastType":hcap.channel.RfBroadcastType.TERRESTRIAL, 
		"onSuccess":function() {					 
			callback("ok");
		}, 
		"onFailure":function(f) {
			console.log("onFailure : errorMessage = " + f.errorMessage);
		}
	});
}

-->
</script>



</head>		
<body>		
<div id="wrap" class="bg-sub">
	<div id="title">TV CHANNELS</div>
	<!-- container -->
	<div id="container">
		<!-- content -->
		<div id="content">
			<div class="tbl-tvChannels">
			<div id="channel_list_1">
				<a href="#tvChannels-11.html" id="tvChannels-11" onmouseover="onmouse('tvChannels-11');">
					<ul>
						<li>5</li>
						<li><img src="../images/.png" alt=""></li>
						<li>SBS</li>
					</ul>
				</a>
				<a href="#tvChannels-12.html" id="tvChannels-12" onmouseover="onmouse('tvChannels-12');">
					<ul>
						<li>7</li>
						<li><img src="../images/.png" alt=""></li>
						<li>KBS2</li>
					</ul>
				</a>
				<a href="#tvChannels-13.html" id="tvChannels-13" onmouseover="onmouse('tvChannels-13');">
					<ul>
						<li>9</li>
						<li><img src="../images/.png" alt=""></li>
						<li>KBS1</li>
					</ul>
				</a>
				<a href="#tvChannels-21.html" id="tvChannels-21" onmouseover="onmouse('tvChannels-21');">
					<ul>
						<li>11</li>
						<li><img src="../images/.png" alt=""></li>
						<li>MBC</li>
					</ul>
				</a>
				<a href="#tvChannels-22.html" id="tvChannels-22" onmouseover="onmouse('tvChannels-22');">
					<ul>
						<li>13</li>
						<li><img src="../images/.png" alt=""></li>
						<li>EBS</li>
					</ul>
				</a>
				<a href="#tvChannels-23.html" id="tvChannels-23" onmouseover="onmouse('tvChannels-23');">
					<ul>
						<li>15</li>
						<li><img src="../images/.png" alt=""></li>
						<li>Channel A</li>
					</ul>
				</a>
				<a href="#tvChannels-31.html" id="tvChannels-31" onmouseover="onmouse('tvChannels-31');">
					<ul>
						<li>16</li>
						<li><img src="../images/.png" alt=""></li>
						<li>OBS</li>
					</ul>
				</a>
				<a href="#tvChannels-32.html" id="tvChannels-32" onmouseover="onmouse('tvChannels-32');">
					<ul>
						<li>17</li>
						<li><img src="../images/.png" alt=""></li>
						<li>JTBC</li>
					</ul>
				</a>
				<a href="#tvChannels-33.html" id="tvChannels-33" onmouseover="onmouse('tvChannels-33');">
					<ul>
						<li>18</li>
						<li><img src="../images/.png" alt=""></li>
						<li>MBN</li>
					</ul>
				</a>
				<a href="#tvChannels-41.html" id="tvChannels-41" onmouseover="onmouse('tvChannels-41');">
					<ul>
						<li>19</li>
						<li><img src="../images/.png" alt=""></li>
						<li>TV Chosun</li>
					</ul>
				</a>
				<a href="#tvChannels-42.html" id="tvChannels-42" onmouseover="onmouse('tvChannels-42');">
					<ul>
						<li>20</li>
						<li><img src="../images/.png" alt=""></li>
						<li>YTN</li>
					</ul>
				</a>
				<a href="#tvChannels-43.html" id="tvChannels-43" onmouseover="onmouse('tvChannels-43');">
					<ul>
						<li>21</li>
						<li><img src="../images/.png" alt=""></li>
						<li>SBS CNBC</li>
					</ul>
				</a>
				<a href="#tvChannels-51.html" id="tvChannels-51" onmouseover="onmouse('tvChannels-51');">
					<ul>
						<li>22</li>
						<li><img src="../images/.png" alt=""></li>
						<li>매일경제 TV</li>
					</ul>
				</a>
				<a href="#tvChannels-52.html" id="tvChannels-52" onmouseover="onmouse('tvChannels-52');">
					<ul>
						<li>23</li>
						<li><img src="../images/.png" alt=""></li>
						<li>JTBC GOLF</li>
					</ul>
				</a>
				<a href="#tvChannels-53.html" id="tvChannels-53" onmouseover="onmouse('tvChannels-53');">
					<ul>
						<li>24</li>
						<li><img src="../images/.png" alt=""></li>
						<li>SBS GOLF</li>
					</ul>
				</a>
				<a href="#tvChannels-61.html" id="tvChannels-61" onmouseover="onmouse('tvChannels-61');">
					<ul>
						<li>25</li>
						<li><img src="../images/.png" alt=""></li>
						<li>SBS Sport</li>
					</ul>
				</a>
				<a href="#tvChannels-62.html" id="tvChannels-62" onmouseover="onmouse('tvChannels-62');">
					<ul>
						<li>26</li>
						<li><img src="../images/.png" alt=""></li>
						<li>KBS Sport</li>
					</ul>
				</a>
				<a href="#tvChannels-63.html" id="tvChannels-63" onmouseover="onmouse('tvChannels-63');">
					<ul>
						<li>27</li>
						<li><img src="../images/.png" alt=""></li>
						<li>MBC Sport+</li>
					</ul>
				</a>				
			</div>

<!--
			<div id="channel_list_2">
				<a href="#tvChannels-11.html" id="tvChannels-11" onmouseover="onmouse('tvChannels-11');">
					<ul>
						<li>5</li>
						<li><img src="../images/.png" alt=""></li>
						<li>SBS</li>
					</ul>
				</a>
				<a href="#tvChannels-12.html" id="tvChannels-12" onmouseover="onmouse('tvChannels-12');">
					<ul>
						<li>7</li>
						<li><img src="../images/.png" alt=""></li>
						<li>KBS2</li>
					</ul>
				</a>
				<a href="#tvChannels-13.html" id="tvChannels-13" onmouseover="onmouse('tvChannels-13');">
					<ul>
						<li>9</li>
						<li><img src="../images/.png" alt=""></li>
						<li>KBS1</li>
					</ul>
				</a>
				<a href="#tvChannels-21.html" id="tvChannels-21" onmouseover="onmouse('tvChannels-21');">
					<ul>
						<li>11</li>
						<li><img src="../images/.png" alt=""></li>
						<li>MBC</li>
					</ul>
				</a>
				<a href="#tvChannels-22.html" id="tvChannels-22" onmouseover="onmouse('tvChannels-22');">
					<ul>
						<li>13</li>
						<li><img src="../images/.png" alt=""></li>
						<li>EBS</li>
					</ul>
				</a>
				<a href="#tvChannels-23.html" id="tvChannels-23" onmouseover="onmouse('tvChannels-23');">
					<ul>
						<li>15</li>
						<li><img src="../images/.png" alt=""></li>
						<li>Channel A</li>
					</ul>
				</a>
				<a href="#tvChannels-31.html" id="tvChannels-31" onmouseover="onmouse('tvChannels-31');">
					<ul>
						<li>16</li>
						<li><img src="../images/.png" alt=""></li>
						<li>OBS</li>
					</ul>
				</a>
				<a href="#tvChannels-32.html" id="tvChannels-32" onmouseover="onmouse('tvChannels-32');">
					<ul>
						<li>17</li>
						<li><img src="../images/.png" alt=""></li>
						<li>JTBC</li>
					</ul>
				</a>
				<a href="#tvChannels-33.html" id="tvChannels-33" onmouseover="onmouse('tvChannels-33');">
					<ul>
						<li>18</li>
						<li><img src="../images/.png" alt=""></li>
						<li>MBN</li>
					</ul>
				</a>
				<a href="#tvChannels-41.html" id="tvChannels-41" onmouseover="onmouse('tvChannels-41');">
					<ul>
						<li>19</li>
						<li><img src="../images/.png" alt=""></li>
						<li>TV Chosun</li>
					</ul>
				</a>
				<a href="#tvChannels-42.html" id="tvChannels-42" onmouseover="onmouse('tvChannels-42');">
					<ul>
						<li>20</li>
						<li><img src="../images/.png" alt=""></li>
						<li>YTN</li>
					</ul>
				</a>
				<a href="#tvChannels-43.html" id="tvChannels-43" onmouseover="onmouse('tvChannels-43');">
					<ul>
						<li>21</li>
						<li><img src="../images/.png" alt=""></li>
						<li>SBS CNBC</li>
					</ul>
				</a>
				<a href="#tvChannels-51.html" id="tvChannels-51" onmouseover="onmouse('tvChannels-51');">
					<ul>
						<li>22</li>
						<li><img src="../images/.png" alt=""></li>
						<li>매일경제 TV</li>
					</ul>
				</a>
				<a href="#tvChannels-52.html" id="tvChannels-52" onmouseover="onmouse('tvChannels-52');">
					<ul>
						<li>23</li>
						<li><img src="../images/.png" alt=""></li>
						<li>JTBC GOLF</li>
					</ul>
				</a>
				<a href="#tvChannels-53.html" id="tvChannels-53" onmouseover="onmouse('tvChannels-53');">
					<ul>
						<li>24</li>
						<li><img src="../images/.png" alt=""></li>
						<li>SBS GOLF</li>
					</ul>
				</a>
				<a href="#tvChannels-61.html" id="tvChannels-61" onmouseover="onmouse('tvChannels-61');">
					<ul>
						<li>25</li>
						<li><img src="../images/.png" alt=""></li>
						<li>SBS Sport</li>
					</ul>
				</a>
				<a href="#tvChannels-62.html" id="tvChannels-62" onmouseover="onmouse('tvChannels-62');">
					<ul>
						<li>26</li>
						<li><img src="../images/.png" alt=""></li>
						<li>KBS Sport</li>
					</ul>
				</a>
				<a href="#tvChannels-63.html" id="tvChannels-63" onmouseover="onmouse('tvChannels-63');">
					<ul>
						<li>27</li>
						<li><img src="../images/.png" alt=""></li>
						<li>MBC Sport+</li>
					</ul>
				</a>				
			</div>


			<div id="channel_list_3">
				<a href="#tvChannels-11.html" id="tvChannels-11" onmouseover="onmouse('tvChannels-11');">
					<ul>
						<li>5</li>
						<li><img src="../images/.png" alt=""></li>
						<li>SBS</li>
					</ul>
				</a>
				<a href="#tvChannels-12.html" id="tvChannels-12" onmouseover="onmouse('tvChannels-12');">
					<ul>
						<li>7</li>
						<li><img src="../images/.png" alt=""></li>
						<li>KBS2</li>
					</ul>
				</a>
				<a href="#tvChannels-13.html" id="tvChannels-13" onmouseover="onmouse('tvChannels-13');">
					<ul>
						<li>9</li>
						<li><img src="../images/.png" alt=""></li>
						<li>KBS1</li>
					</ul>
				</a>
				<a href="#tvChannels-21.html" id="tvChannels-21" onmouseover="onmouse('tvChannels-21');">
					<ul>
						<li>11</li>
						<li><img src="../images/.png" alt=""></li>
						<li>MBC</li>
					</ul>
				</a>
				<a href="#tvChannels-22.html" id="tvChannels-22" onmouseover="onmouse('tvChannels-22');">
					<ul>
						<li>13</li>
						<li><img src="../images/.png" alt=""></li>
						<li>EBS</li>
					</ul>
				</a>
				<a href="#tvChannels-23.html" id="tvChannels-23" onmouseover="onmouse('tvChannels-23');">
					<ul>
						<li>15</li>
						<li><img src="../images/.png" alt=""></li>
						<li>Channel A</li>
					</ul>
				</a>
				<a href="#tvChannels-31.html" id="tvChannels-31" onmouseover="onmouse('tvChannels-31');">
					<ul>
						<li>16</li>
						<li><img src="../images/.png" alt=""></li>
						<li>OBS</li>
					</ul>
				</a>
				<a href="#tvChannels-32.html" id="tvChannels-32" onmouseover="onmouse('tvChannels-32');">
					<ul>
						<li>17</li>
						<li><img src="../images/.png" alt=""></li>
						<li>JTBC</li>
					</ul>
				</a>
				<a href="#tvChannels-33.html" id="tvChannels-33" onmouseover="onmouse('tvChannels-33');">
					<ul>
						<li>18</li>
						<li><img src="../images/.png" alt=""></li>
						<li>MBN</li>
					</ul>
				</a>
				<a href="#tvChannels-41.html" id="tvChannels-41" onmouseover="onmouse('tvChannels-41');">
					<ul>
						<li>19</li>
						<li><img src="../images/.png" alt=""></li>
						<li>TV Chosun</li>
					</ul>
				</a>
				<a href="#tvChannels-42.html" id="tvChannels-42" onmouseover="onmouse('tvChannels-42');">
					<ul>
						<li>20</li>
						<li><img src="../images/.png" alt=""></li>
						<li>YTN</li>
					</ul>
				</a>
				<a href="#tvChannels-43.html" id="tvChannels-43" onmouseover="onmouse('tvChannels-43');">
					<ul>
						<li>21</li>
						<li><img src="../images/.png" alt=""></li>
						<li>SBS CNBC</li>
					</ul>
				</a>
				<a href="#tvChannels-51.html" id="tvChannels-51" onmouseover="onmouse('tvChannels-51');">
					<ul>
						<li>22</li>
						<li><img src="../images/.png" alt=""></li>
						<li>매일경제 TV</li>
					</ul>
				</a>
				<a href="#tvChannels-52.html" id="tvChannels-52" onmouseover="onmouse('tvChannels-52');">
					<ul>
						<li>23</li>
						<li><img src="../images/.png" alt=""></li>
						<li>JTBC GOLF</li>
					</ul>
				</a>
				<a href="#tvChannels-53.html" id="tvChannels-53" onmouseover="onmouse('tvChannels-53');">
					<ul>
						<li>24</li>
						<li><img src="../images/.png" alt=""></li>
						<li>SBS GOLF</li>
					</ul>
				</a>
				<a href="#tvChannels-61.html" id="tvChannels-61" onmouseover="onmouse('tvChannels-61');">
					<ul>
						<li>25</li>
						<li><img src="../images/.png" alt=""></li>
						<li>SBS Sport</li>
					</ul>
				</a>
				<a href="#tvChannels-62.html" id="tvChannels-62" onmouseover="onmouse('tvChannels-62');">
					<ul>
						<li>26</li>
						<li><img src="../images/.png" alt=""></li>
						<li>KBS Sport</li>
					</ul>
				</a>
				<a href="#tvChannels-63.html" id="tvChannels-63" onmouseover="onmouse('tvChannels-63');">
					<ul>
						<li>27</li>
						<li><img src="../images/.png" alt=""></li>
						<li>MBC Sport+</li>
					</ul>
				</a>				
			</div>


			<div id="channel_list_4">
				<a href="#tvChannels-11.html" id="tvChannels-11" onmouseover="onmouse('tvChannels-11');">
					<ul>
						<li>5</li>
						<li><img src="../images/.png" alt=""></li>
						<li>SBS</li>
					</ul>
				</a>
			</div>
-->

			</div>
			<ul class="pager">
				<li class="active"><a href="/procentric/application/tvChannels/tvChannels1.do" id="tvChannels1" onmouseover="onmouse('tvChannels1');">1</a></li>
				<li><a href="/procentric/application/tvChannels/tvChannels2.do" id="tvChannels2" onmouseover="onmouse('tvChannels2');">2</a></li>
				<li><a href="/procentric/application/tvChannels/tvChannels3.do" id="tvChannels3" onmouseover="onmouse('tvChannels3');">3</a></li>
				<li><a href="/procentric/application/tvChannels/tvChannels4.do" id="tvChannels4" onmouseover="onmouse('tvChannels4');">4</a></li>
			</ul>
		</div>
		<!-- //content -->
	</div>
	<!-- //container -->
	
	<!-- gnb -->
	<div id="gnb">
		<ul>
			<a href="/procentric/application/main/main.do" id="main" onmouseover="onmouse('main');"><li class="gnb-01"></li></a>
			<a href="/procentric/application/info/selectInfoHotelVw.do" id="info-hotel" onmouseover="onmouse('info-hotel');"><li class="gnb-02"><span class="icon-gnb"></span><br>INFORMATION</li></a>
			<a href="/procentric/application/guest/selectGuestMessageVw.do" id="guest-message" onmouseover="onmouse('guest-message');"><li class="gnb-03"><span class="icon-gnb"></span><br>GUEST SERVICE</li></a>
			<a href="/procentric/application/request/selectRequestVw.do" id="request" onmouseover="onmouse('request');"><li class="gnb-04"><span class="icon-gnb"></span><br>REQUEST</li></a>
			<a href="/procentric/application/smartApp/selectSmartAppVw.do" id="smartApp_Menu" onmouseover="onmouse('smartApp_Menu');"><li class="gnb-05"><span class="icon-gnb"></span><br>SMART APP</li></a>
			<a href="/procentric/application/tvChannels/selectTvChannelsVw.do" id="tvChannels" onmouseover="onmouse('tvChannels');"><li class="gnb-06"><span class="icon-gnb"></span><br>TV CHANNEL</li></a>
			<a href="/procentric/application/language/selectLanguageVw.do" id="language" onmouseover="onmouse('language');"><li class="gnb-07"><span class="icon-gnb"></span><br>LANGUAGE</li></a>
			<li class="gnb-08"></li>
		</ul>
	</div>
	<!-- //gnb -->
	
</div>

</body>
</html>

<script>
document.getElementById("tvChannels-11").focus();
</script>