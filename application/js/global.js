function nextFocus() {
  // console.log(elem.length);
  for (let i = 0; i < menus.length; i++) {
    if (menus[i] == document.activeElement) {
      currentFocus = i;
      break;
    }
  }
  if (currentFocus < cntMenu) {
    menus[currentFocus + 1].focus();
    currentFocus++;
    console.log(currentFocus);
  }
}

function previousFocus() {
  console.log(currentFocus);
  if (currentFocus > 0) {
    menus[currentFocus - 1].focus();
    currentFocus--;
  }
}

function keyNav(e) {
  // log.textContent += ` ${e.keyCode}`;
  let keyValue = e.keyCode;
  switch (keyValue) {
    case 13:
      //   logMsg(" Enter key");
      break;
    case 37:
      // logMsg(" Left key");
      previousFocus();
      break;
    case 38:
      logMsg(" Up key");
      break;
    case 39:
      // logMsg(" Right key");
      nextFocus();
      break;
    case 40:
      break;
    case 602:
      reload();
      break;
    case 406:
      reload();
      break;
    case 427:
      changeChannelUHD();
      logMsg("pressed CH+");
      break;
    case 428:
      changeChannel();
      logMsg("pressed CH-");
      break;
    default:
      logMsg(keyValue + " Unknown key");

      break;
  }
}

function logMsg(msg) {
  logmsg.textContent += msg;
}

function reload() {
  location.replace("index.html");
}

function changeChannelUHD() {
  hcap.channel.requestChangeCurrentChannel({
    channelType: hcap.channel.ChannelType.RF,
    majorNumber: 53,
    minorNumber: 1,
    rfBroadcastType: hcap.channel.RfBroadcastType.TERRESTRIAL_ATSC3,
    onSuccess: function () {
      console("onSuccess");
    },
    onFailure: function (f) {
      console.log("onFailure : errorMessage = " + f.errorMessage);
    },
  });
}
function changeChannel() {
  hcap.channel.requestChangeCurrentChannel({
    channelType: hcap.channel.ChannelType.RF,
    majorNumber: 17,
    minorNumber: 2,
    rfBroadcastType: hcap.channel.RfBroadcastType.TERRESTRIAL,
    onSuccess: function () {
      console("onSuccess");
    },
    onFailure: function (f) {
      console.log("onFailure : errorMessage = " + f.errorMessage);
    },
  });
}

//*******************************************************************************
//
//	 Following id definitions and value assignments are for preloadedApplication.
//
//*******************************************************************************
const ID_YOUTUBE = "144115188075859002";
const ID_SCREENSHARE = "144115188075855880";
const ID_BLUETOOTH = "244115188075859015";
const ID_NETFLIX = "244115188075859013";
