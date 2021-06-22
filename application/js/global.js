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
      channelUp();
      logMsg("pressed CH+");
      break;
    case 428:
      channelDn();
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

// CHANNEL CONTROL

function getCurrentCH() {
  var chInfo = "";

  hcap.channel.getCurrentChannel({
    onSuccess: function (s) {
      // logMsg(s.majorNumber + ":" + s.minorNumber);
      chInfo = s.majorNumber + "::::" + s.minorNumber;
      logMsg(chInfo);
    },
    onFailure: function (f) {
      logMsg("onFailure : errorMessage = " + f.errorMessage);
    },
  });
  // logMsg(chInfo);
  return chInfo;
}

function channelUp() {
  hcap.channel.getCurrentChannel({
    onSuccess: function (s) {
      // logMsg(s.majorNumber + ":" + s.minorNumber);
      let nextCh = getNextCh(s.majorNumber, s.minorNumber);

      showChBar(nextCh.channelName);

      if (nextCh.type == "TERRESTRIAL_ATSC3") {
        changeChannelUHD(nextCh.major, nextCh.minor);
      } else {
        changeChannel(nextCh.major, nextCh.minor);
      }
    },
    onFailure: function (f) {
      logMsg("onFailure : errorMessage = " + f.errorMessage);
    },
  });
}

function getNextCh(major, minor) {
  let value;
  channelList.forEach((ch, index) => {
    if (ch.major === major && ch.minor === minor) {
      if (index < channelList.length - 1) {
        value = channelList[index + 1];
      } else {
        value = channelList[0];
      }
    }
  });
  return value;
}

function channelDn() {
  hcap.channel.getCurrentChannel({
    onSuccess: function (s) {
      // logMsg(s.majorNumber + ":" + s.minorNumber);
      let preCh = getPreCh(s.majorNumber, s.minorNumber);

      showChBar(preCh.channelName);

      if (preCh.type == "TERRESTRIAL_ATSC3") {
        changeChannelUHD(preCh.major, preCh.minor);
      } else {
        changeChannel(preCh.major, preCh.minor);
      }
    },
    onFailure: function (f) {
      logMsg("onFailure : errorMessage = " + f.errorMessage);
    },
  });
}

function getPreCh(major, minor) {
  let value;
  channelList.forEach((ch, index) => {
    if (ch.major === major && ch.minor === minor) {
      if (index > 0) {
        value = channelList[index - 1];
      } else {
        value = channelList[channelList.length - 1];
      }
    }
  });
  return value;
}

function changeChannelUHD(major, minor) {
  hcap.channel.requestChangeCurrentChannel({
    channelType: hcap.channel.ChannelType.RF,
    majorNumber: major,
    minorNumber: minor,
    rfBroadcastType: hcap.channel.RfBroadcastType.TERRESTRIAL_ATSC3,
    onSuccess: function () {
      console("onSuccess");
    },
    onFailure: function (f) {
      console.log("onFailure : errorMessage = " + f.errorMessage);
    },
  });
}
function changeChannel(major, minor) {
  hcap.channel.requestChangeCurrentChannel({
    channelType: hcap.channel.ChannelType.RF,
    majorNumber: major,
    minorNumber: minor,
    rfBroadcastType: hcap.channel.RfBroadcastType.TERRESTRIAL,
    onSuccess: function () {
      console("onSuccess");
    },
    onFailure: function (f) {
      console.log("onFailure : errorMessage = " + f.errorMessage);
    },
  });
}

function showChBar(chName) {
  document.querySelector("#channel_name").textContent = chName;
  document.querySelector(".channelbar").style.display = "block";
  setTimeout(() => {
    document.querySelector(".channelbar").style.display = "none";
  }, 1500);
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

let channelList = [
  { channelName: "SBS", major: 44, minor: 1, type: "TERRESTRIAL" },
  { channelName: "KBS 2", major: 17, minor: 2, type: "TERRESTRIAL" },
  { channelName: "KBS 1", major: 22, minor: 2, type: "TERRESTRIAL" },
  { channelName: "MBC", major: 50, minor: 1, type: "TERRESTRIAL" },
  { channelName: "SBS UHD", major: 53, minor: 1, type: "TERRESTRIAL_ATSC3" },
  { channelName: "KBS 2 UHD", major: 56, minor: 1, type: "TERRESTRIAL_ATSC3" },
  { channelName: "KBS 1 UHD", major: 52, minor: 1, type: "TERRESTRIAL_ATSC3" },
  { channelName: "MBC UHD", major: 55, minor: 1, type: "TERRESTRIAL_ATSC3" },
];
