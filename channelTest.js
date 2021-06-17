

///////////////////////////////////////////////////////////////////////////////////Setting
hcap.property.setProperty({    //0 : AV Show + P:C App Show   1 : Pro:Centric App Show Only
     "key":"boot_sequence_option", 
     "value":"1"
});
hcap.property.setProperty({   //0 : Application has the channel map and change the channel   1 : TV has the channel map and change the channel.   2 : Default initial setting.
     "key":"tv_channel_control", 
     "value":"0"
});

//hcap.property.setProperty({
//     "key":"application_channel_control", 
//     "value":"0"
//});

//hcap.volume.setVolumeLevel({
//     "level":8, 
//     "onSuccess":function() {
//         console.log("setVolumeLevel : 8");
//     }, 
//     "onFailure":function(f) {
//         console.log("onFailure : errorMessage = " + f.errorMessage);
//     }
//});


////////////////////////////////////////////////////////////////////////////////init END



var channelListTest = [
			"5-1-SBS",
			"7-2-KBS2",
			"9-2-KBS1",
			"11-1-MBC",
			"13-1-EBS1",
			"15-1-Channel A",
			"16-1-OBS",
			"17-1-JTBC",
			"18-1-MBN",
			"19-1-TV Chosun",
			"20-1-YTN",
			"21-1-SBS CNBC",
			"22-1-매일경제 TV",
			"23-1-JTBC GOLF",
			"24-1-SBS GOLF",
			"25-1-SBS Sport",
			"26-1-KBS Sport",
			"27-1-MBC Sport+",
			"28-1-스카이 Sport",
			"30-1-채널 CGV",
			"31-1-OCN",
			"32-1-TVN",
			"33-1-On Style",
			"34-1-O'live",
			"35-1-M.net",
			"36-1-EBS U",
			"37-1-KBS Kids",
			"38-1-Tooniverse",
			"39-1-Catoon Network",
			"40-1-AniOne",
			"41-1-Disney Channel",
			"43-1-아리랑 TV",
			"44-1-CNBC",
			"46-1-CNN",
			"47-1-BBC World",
			"48-1-Discovey",
			"49-1-Blomberg",
			"50-1-Star Sports",
			"51-1-CCTV News",
			"52-1-CCTV4",
			"53-1-CCTV9",
			"54-1-Phoenix Chinese",
			"55-1-Channel V Chinese",
			"56-1-후난위성TV",
			"57-1-Channel Chinese",
			"58-1-중화 TV",
			"59-1-NHK World TV",
			"60-1-NHK World Premium",
			"61-1-NHK BS1",
			"62-1-NHK BS2",
			"63-1-FUJI TV",
			"64-1-AHAHI TV",
			"65-1-AUAZEERA English",
			"66-1-AUAZEERA",
			"67-1-DUBAI Sports",
			"69-1-DW",
			"70-1-French24",
			"71-1-International Arrival",
			"72-1-International Departure",
			"73-1-항공운항정보 화물도착",
			"74-1-항공운항정보 화물출발"];


var channelNm = "";
var CurrentChannel;
var ChannelUP;
var ChannelDN;
var lastChannel;
var timer;
var tempNum = "";	
var curChannel;

	showChannel = function(){      
		getCurrentChannel(function(result){											// 현재 채널의 정보를 가져온다(콜백				
			clearTimeout(timer);                                                    // 시간 초기화
			document.getElementById("visual").style.display="block";		        // 채널정보란을 보이게 한다.
			document.getElementById("visual").innerHTML=result.split("-")[0] + " " + channelNm;		// [0] = 채널번호 [2] = 채널명(추가예정
			timer = setTimeout("clearChannel()", 1000);								//////////////////////////////////////////////////////////////// 4초뒤

		});
	};

	clearChannel = function(requestedChannel){
		document.getElementById("visual").style.display="none";		                // 감춘다
		if(requestedChannel.lenth==0){												// 채널을 1자리라도 입력받았으면
		}else{
			changeByNumber(requestedChannel);										// 채널 바꿔준다
		}
		tempNum = "";
	};	
	
	inputChannel = function(inputVal){						
		clearTimeout(timer);														// 시간 초기화
		if(document.getElementById("visual").style.display=="none"){				// 채널정보가 안보일경우
			tempNum = inputVal;														   
			document.getElementById("visual").style.display="block";				// 채널정보 감추기							
		}else{																		   
			tempNum = tempNum +""+ inputVal;										// 문자열 붙이기
			
		}
		document.getElementById("visual").innerHTML=tempNum;
		clearTimeout(timer);
		timer = setTimeout("clearChannel(tempNum)", 3000);	
		
	}

	changeByNumber = function(requestedChannel){			
		for(var i=0;i<channelListTest.length;i++){									// 배열확인		
			if(channelListTest[i].split("-")[0] == requestedChannel){						// 일치하는 채널이 있으면
				//alert('111111111111=======>>'+ requestedChannel);
				requestChannel(channelListTest[i].split("-")[0],channelListTest[i].split("-")[1]);		// 채널 요청				
				break;
			}		
		}	
		showChannel();	
	}

	requestChannel = function(major,minor){											//채널변경
		hcap.channel.requestChangeCurrentChannel({
			 "channelType":hcap.channel.ChannelType.RF, 
			 "majorNumber":Number(major), 
			 "minorNumber":Number(minor), 
			 "rfBroadcastType":hcap.channel.RfBroadcastType.CABLE, 
			 "onSuccess":function() {		
				 sendKey();
				 //alert("channel change ok");
			 }, 
			 "onFailure":function(f) {
				 sendKey();
				 console.log("onFailure : errorMessage = " + f.errorMessage);
			 }
		});

	}
	getChannelInfo = function(){
		hcap.channel.getCurrentChannel({
		 "onSuccess":function(s) {
			 alert("onSuccess :" + 
				 "\n channel status    : " + s.channelStatus   +
				 "\n channel type      : " + s.channelType     +
				 "\n logical number    : " + s.logicalNumber   +
				 "\n frequency         : " + s.frequency       +
				 "\n program number    : " + s.programNumber   +
				 "\n major number      : " + s.majorNumber     +
				 "\n minor number      : " + s.minorNumber     +
				 "\n satellite ID      : " + s.satelliteId     +
				 "\n polarization      : " + s.polarization    +
				 "\n rf broadcast type : " + s.rfBroadcastType +
				 "\n ip                : " + s.ip              +
				 "\n port              : " + s.port            +
				 "\n ip broadcast type : " + s.ipBroadcastType +
				 "\n symbol rate       : " + s.symbolRate      +
				 "\n pcr pid           : " + s.pcrPid          +
				 "\n video pid         : " + s.videoPid        +
				 "\n video stream type : " + s.videoStreamType +
				 "\n audio pid         : " + s.audioPid        +
				 "\n audio stream type : " + s.audioStreamType +
				 "\n signal strength   : " + s.signalStrength  +
				 "\n source address    : " + s.sourceAddress);
		 }, 
		 "onFailure":function(f) {
			 console.log("onFailure : errorMessage = " + f.errorMessage);
		 }
		});
	}

///////////////////////////////////////////////////////////////////////////End of Channel List

	function keyDown() {
		//console.log(hcap.key.Code.LEFT); //ESC:27 //위로화살표:461 //나가지:1001
		var keycode = event.keyCode;
		var realkey = String.fromCharCode(event.keyCode);

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
				//alert('zzzzzzzzzzzzzzzzzzz');				
				displayOff();
				//clearChannel();
				location.href = "/procentric/application/tvChannels/selectTvChannelsVw.do";	
				displayOff();	
				break;
			case hcap.key.Code.ENTER :
				//location.href = "main_info.html";
				//displayOff();
				break;
			case hcap.key.Code.INFO :
				//
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
	}
document.onkeydown = keyDown;

displayOff = function(){
	hcap.channel.stopCurrentChannel({
     "onSuccess":function() {	
		 console.log("onSuccess");
     }, 
     "onFailure":function(f) {
         console.log("onFailure : errorMessage = " + f.errorMessage);
     }
	});
}

displayOn = function(){
	hcap.channel.replayCurrentChannel({
     "onSuccess":function() {
         console.log("onSuccess");		
     }, 
     "onFailure":function(f) {
         console.log("onFailure : errorMessage = " + f.errorMessage);
     }
});
}


var getCurrentChannel = function(callback){
	hcap.channel.getCurrentChannel({
		 "onSuccess":function(s) {
			 if(s.majorNumber != 0){
				 for(var i=0;i<channelListTest.length;i++){
					 if(s.majorNumber == channelListTest[i].split("-")[0]){
						 channelNm = channelListTest[i].split("-")[2];
					 }
					 CurrentChannel = s.majorNumber+"-"+s.minorNumber+"-"+channelNm;
				 }
			 }
			 else{
				 CurrentChannel = channelListTest[0];
			 }
			 callback(CurrentChannel);
		 }, 
		 "onFailure":function(f) {
			 console.log("onFailure : CURCHA = " + f.errorMessage);
		 }
	});	
}



var channelChange = function(callback){
	getCurrentChannel(function(result){
		for(var i=0;i<channelListTest.length;i++){									// 배열확인							
			if(channelListTest[i] == result){			
				curChannel = channelListTest[i].split("-");		
				if(i == channelListTest.length-1){
					ChannelUP = channelListTest[0].split("-");								
					ChannelDN = channelListTest[i-1].split("-");
				}else if(i == 0){
					ChannelUP = channelListTest[1].split("-");
					ChannelDN = channelListTest[channelListTest.length-1].split("-")
				}else{
					ChannelUP = channelListTest[i+1].split("-");
					ChannelDN = channelListTest[i-1].split("-");			
				}
				callback(ChannelUP,ChannelDN);
			}
		}	
	});	
}


var setChanUP = function(callback){
	
	channelChange(function(Chup,Chdn){	
		hcap.channel.requestChangeCurrentChannel({
			 "channelType":hcap.channel.ChannelType.RF, 
			 "majorNumber":Number(Chup[0]), 
			 "minorNumber":Number(Chup[1]), 
			 "rfBroadcastType":hcap.channel.RfBroadcastType.CABLE, 
			 "onSuccess":function() {					 
				 callback("ok");
			 }, 
			 "onFailure":function(f) {
				 console.log("onFailure : errorMessage = " + f.errorMessage);
			 }
		});
	});

}

var setChanDN = function(callback){	
	channelChange(function(Chup,Chdn){		
	// RF channel class 3 change request
		hcap.channel.requestChangeCurrentChannel({
			 "channelType":hcap.channel.ChannelType.RF, 
			 "majorNumber":Number(Chdn[0]), 
			 "minorNumber":Number(Chdn[1]), 
			 "rfBroadcastType":hcap.channel.RfBroadcastType.CABLE, 
			 "onSuccess":function() {
				 callback("ok");
			 }, 
			 "onFailure":function(f) {
				 console.log("onFailure : errorMessage = " + f.errorMessage);
			 }
		});
	});
}

ChanUP = function() {
	setChanUP(function(result){	
	});
}
ChanDN = function() {
	setChanDN(function(result){
	});
}

var getProgramInfo = function(){
	hcap.channel.getProgramInfo({
     "onSuccess":function(s) {
         alert("onSuccess :" + 
             "\n currentProgram title = " + s.currentProgram.title +
             "\n currentProgram startTime = " + s.currentProgram.startTime.year + 
                     "-" + s.currentProgram.startTime.month +
                     "-" + s.currentProgram.startTime.day +
                     " " + s.currentProgram.startTime.hour +
                     ":" + s.currentProgram.startTime.minute +
                     ":" + s.currentProgram.startTime.second +
             "\n currentProgram length = " + s.currentProgram.lengthInSeconds + "second(s)" +
             "\n nextProgram title = " + s.nextProgram.title +
             "\n nextProgram startTime = " + s.nextProgram.startTime.year + 
                     "-" + s.nextProgram.startTime.month +
                     "-" + s.nextProgram.startTime.day +
                     " " + s.nextProgram.startTime.hour +
                     ":" + s.nextProgram.startTime.minute +
                     ":" + s.nextProgram.startTime.second +
             "\n nextProgram length = " + s.nextProgram.lengthInSeconds + "second(s)");
     }, 
     "onFailure":function(f) {
         console.log("onFailure : errorMessage = " + f.errorMessage);
     }
	});
}

sendKey = function(){
	hcap.key.sendKey({
		 "virtualKeycode":hcap.key.Code.ENTER,
		 "onSuccess":function() {
			 console.log("onSuccess");
		 }, 
		 "onFailure":function(f) {
		 console.log("onFailure : errorMessage = " + f.errorMessage);
		 }
	});
}