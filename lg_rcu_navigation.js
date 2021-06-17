/*lg_rcuNavGroup class*/
/* lg_rcuNavGroup is a class which manages 4 direction key, ok key and mouse
 * navigation among members it has. Developer can create an object of lg_rcuNavGroup
 * class and add members to it.
 * "gotFocus" function will be executed when a group newly got focus
 * "lostFocus" function will be executed when a group lost focus
 */
var lg_rcuNavGroup = function(){
	this.curFocusX = null; //int
	this.curFocusY = null; //int
	this.curFocusMember = null; //lg_rcuNavMember
	this.members = new Array(); //array of lg_rcuNavMember
	this.gotFocus = null; //function
	this.lostFocus = null; //function
}
  
/*lg_rcuNavMember class*/
var lg_rcuNavMember = function(){
	this.eventObject = null;
  this.fromX = null;
  this.toX = null;
  this.fromY = null;
  this.toY = null;
  this.showFocus = null;
  this.handleMouseOver = null;
  this.showUnfocus = null;
  this.doWork = null;
  this.navLeft = null;
  this.navRight = null;
  this.navUp = null;
  this.navDown = null;
}
  
/*addMember to lg_rcuNavGroup*/
/* param : pEventObject - Optional. If this is not null, "onmouseover" and "onclick" event will be set automatically.
 *         pFromX - Start row of area one member occupy. Relative to other members, smaller means upper. "int" only
 *         pToX - End row of area one member occupy. Relative to other members, smaller means upper. "int" only
 *         pFromY - Start column of area one member occupy. Relative to other members, smaller means left. "int" only
 *         pToY - End column of area one member occupy. Relative to other members, smaller means left. "int" only
 *         pShowFocus - Function need to be executed to show focus on designated member
 *         pShowUnfocus - Function need to be executed to show unfocus on designated member
 *         pDoWork - Function need to be executed when a member is clicked or ok button is pressed when it has focus
 *         pNavLeft - Optional. Function need to be executed to do something rather than normal 4 direction key navigation.
 *         pNavRight - Optional. Function need to be executed to do something rather than normal 4 direction key navigation.
 *         pNavUp - Optional. Function need to be executed to do something rather than normal 4 direction key navigation.
 *         pNavDown - Optional. Function need to be executed to do something rather than normal 4 direction key navigation.
 */
lg_rcuNavGroup.prototype.addMember = function(pEventObject, pFromX, pToX, pFromY, pToY, pShowFocus, pShowUnfocus, pDoWork, pNavLeft, pNavRight, pNavUp, pNavDown){
  /*check if index values are integer*/
	if((pFromX - Math.floor(pFromX)) != 0){alert("Index should be integer.\n" + pFromX + " is not acceptable.\nIgnored."); return;}
	if((pToX - Math.floor(pToX)) != 0){alert("Index should be integer.\n" + pToX + " is not acceptable.\nIgnored."); return;}
	if((pFromY - Math.floor(pFromY)) != 0){alert("Index should be integer.\n" + pFromY + " is not acceptable.\nIgnored."); return;}
	if((pToY - Math.floor(pToY)) != 0){alert("Index should be integer.\n" + pToY + " is not acceptable.\nIgnored."); return;}
	/*check whether the range is correct*/
	if(pFromX > pToX){alert("toX shoule be bigger than fromX\nfromX : " + pFromX + "\ntoX : " + pToX + "\nIgnored."); return;}
	if(pFromY > pToY){alert("toY shoule be bigger than fromY\nfromY : " + pFromY + "\ntoY : " + pToY + "\nIgnored."); return;}
	/*check if specified area is already occupied*/
	for(var i = 0; i < this.members.length ; i++){
		if(
		(
		((Number(this.members[i].fromX) <= Number(pFromX)) && (Number(pFromX) <= Number(this.members[i].toX)))
		||
		((Number(this.members[i].fromX) <= Number(pToX)) && (Number(pToX) <= Number(this.members[i].toX)))
		)
    &&
    (
		((Number(this.members[i].fromY) <= Number(pFromY)) && (Number(pFromY) <= Number(this.members[i].toY)))
		||
		((Number(this.members[i].fromY) <= Number(pToY)) && (Number(pToY) <= Number(this.members[i].toY)))
    )
    )
		{
	    alert(pFromX + ", " + pToX + ", " + pFromY + ", " + pToY + " overlaps existing one.\nIgnored.");
	    return;
		}
	}
  var newMember = new lg_rcuNavMember();
  newMember.eventObject = pEventObject;
  newMember.fromX = pFromX;
  newMember.toX = pToX;
  newMember.fromY = pFromY;
  newMember.toY = pToY;
  newMember.showFocus = pShowFocus;
  newMember.showUnfocus = pShowUnfocus;
  newMember.doWork = pDoWork;
  newMember.navLeft = pNavLeft;
  newMember.navRight = pNavRight;
  newMember.navUp = pNavUp;
  newMember.navDown = pNavDown;
  this.members[this.members.length] = newMember;
  
  /*set onmouseover and onclick event handler*/
  if(pEventObject){
  	if(pShowFocus){
  		var thisGroup = this;
  		var xIndexToSet = Math.floor((pFromX + pToX)/2);
  		var yIndexToSet = Math.floor((pFromY + pToY)/2);
  		newMember.handleMouseOver = function(){
  			if(thisGroup.curFocusMember && thisGroup.curFocusMember.showUnfocus){
  				thisGroup.curFocusMember.showUnfocus();
  			}else{
  				if(thisGroup.gotFocus){thisGroup.gotFocus();}
  			}
        thisGroup.curFocusX = xIndexToSet;
	      thisGroup.curFocusY = yIndexToSet;
	      thisGroup.curFocusMember = newMember;
  			pShowFocus();}
  		addEventHandler(pEventObject, "mouseover", newMember.handleMouseOver);
  	}
  	if(pDoWork){addEventHandler(pEventObject, "click", newMember.doWork);}
  }
}
  
/*delete member from lg_rcuNavGroup*/
/* param : xIndex - x(row) point of a member to delete
 *         yIndex - y(column) point of a member to delete
 * deleteMember(xIndex, yIndex) will delete a member of which area contain designated point from it's group.
 * If no member was found, nothing will be done.
 * If found member is currently focused, it's group will release focus.
 */
lg_rcuNavGroup.prototype.deleteMember = function(xIndex, yIndex){
	for(var i = 0; i < this.members.length ; i++){
		if((Number(xIndex) >= Number(this.members[i].fromX))
		&& (Number(xIndex) <= Number(this.members[i].toX))
		&& (Number(yIndex) >= Number(this.members[i].fromY))
		&& (Number(yIndex) <= Number(this.members[i].toY))){
			var memberToDelete = this.members[i];
			/*remove registered event handler*/
      if(memberToDelete.eventObject){
      	if(memberToDelete.showFocus){removeEventHandler(memberToDelete.eventObject, "mouseover", memberToDelete.handleMouseOver);}
  	    if(memberToDelete.doWork){removeEventHandler(memberToDelete.eventObject, "click", memberToDelete.doWork);}
			}
			/*if the member to delete is currently focused, release focus*/
			if(this.curFocusMember == memberToDelete){this.releaseFocus();}
	    this.members = this.members.slice(0, i).concat(this.members.slice(i + 1));
		}
	}
}

/*clear members from lg_rcuNavGroup*/
/* clear members will delete all member of a group.
 * group will release focus.
 */
lg_rcuNavGroup.prototype.clearMembers = function(){
	//release focus
	this.releaseFocus();
	for(var i = 0; i < this.members.length ; i++){
    var memberToDelete = this.members[i];
		/*remove registered event handler*/
    if(memberToDelete.eventObject){
      if(memberToDelete.showFocus){removeEventHandler(memberToDelete.eventObject, "mouseover", memberToDelete.handleMouseOver);}
  	  if(memberToDelete.doWork){removeEventHandler(memberToDelete.eventObject, "click", memberToDelete.doWork);}
		}
	}
	//initiate members array
	this.members = new Array();
}

/*click member*/
/* param : xIndex - x(row) point of a member to execute
 *         yIndex - y(column) point of a member to execute
 * clickMember(xIndex, yIndex) will execute "doWork" function of a member whose area contains designated point.
 * If no member was found, nothing will be done.
 * If no function is defined as "doWork" of found member, nothing will be done.
 */
//lg_rcuNavGroup.prototype.clickMember = function(xIndex, yIndex){
//	for(var i = 0; i < this.members.length ; i++){
//		if((Number(xIndex) >= Number(this.members[i].fromX))
//		&& (Number(xIndex) <= Number(this.members[i].toX))
//		&& (Number(yIndex) >= Number(this.members[i].fromY))
//		&& (Number(yIndex) <= Number(this.members[i].toY))){
//	    if(this.members[i].doWork){this.members[i].doWork();}
//		}
//	}
//}
  
/*handle focus*/
/* param : xIndex - x(row) point of a member to focus
 *         yIndex - y(column) point of a member to focus
 * focusMember(xIndex, yIndex) will focus a member whose area contain designated point.
 * If no member was found, nothing will be done.
 * If a member found, currently focused member will be unfocused.
 */
lg_rcuNavGroup.prototype.focusMember = function(xIndex, yIndex){
	/*If a group get a focus newly and "gotFocus" function is not null,call it.*/
	//alert("this.curFocusX : " + this.curFocusX + "\nthis.curFocusY : " + this.curFocusY + "\nthis.curFocusMember : " + this.curFocusMember + "\nthis.gotFocus : " + this.gotFocus);
  //if(this.curFocusX == null && this.curFocusY == null && this.curFocusMember == null && this.gotFocus != null){
  if(this.curFocusMember == null && this.gotFocus != null){this.gotFocus();}
	if(xIndex != null && yIndex != null){
		/*check if specified index is in range of a member*/
	  for(var i = 0; i < this.members.length ; i++){
		  if((Number(xIndex) >= Number(this.members[i].fromX))
		  && (Number(yIndex) >= Number(this.members[i].fromY))
		  && (Number(xIndex) <= Number(this.members[i].toX))
		  && (Number(yIndex) <= Number(this.members[i].toY))){
      	/*unfocus current focus*/
      	this.releaseFocus();
        /*focus new one*/
		    this.curFocusX = xIndex;
	    	this.curFocusY = yIndex;
   			this.curFocusMember = this.members[i];
   		  if(this.curFocusMember.showFocus != null){this.curFocusMember.showFocus();}
	      break;
  		}
  	}
	}
}

/*handle key input*/
/* param : keyInput - VK_LEFT, VK_UP, VK_RIGHT, VK_DOWN, VK_ENTER
 *
 * HandleKeyInput(keyInput) manages navigation by key input.
 * If the keyInput is one of four direction key(VK_LEFT, VK_UP, VK_RIGHT, VK_DOWN) it will move focus to
 * designated direction. The navigation logic works in general manner. The focus will be moved to the 
 * closest member in designated direction. Even if a member occupies an area rather than one point,
 * focus is always one point internally. Which mean event if in case the focused member is same,
 * movement of focus can differ as the internal focus is different case by case. If there is no other
 * member to designated direction, nothing will be done.
 *
 * To make an exception rather than general focus movement, "navLeft", "navRight", "navUp" or "navDown" can be
 * defined to each member's each direction when add a member to a group. This also can be used to move focus
 * out of a group. Be sure to release focus of a group when move focus out of the group.
 *
 * If the keyInput is VK_ENTER, "doWork" function of focused member, which is set when add a member, will be executed.
 */
lg_rcuNavGroup.prototype.handleKeyInput = function(keyInput){
	/*if there is no focus in this group at the moment, ignore key input*/
	if(this.curFocusX == null || this.curFocusY == null || this.curFocusMember == null){return;}
	else if(keyInput == VK_LEFT){
		if(this.curFocusMember.navLeft != null){
			//var tempNavLeft = this.curFocusMember.navLeft;
			//this.releaseFocus();
			//tempNavLeft();
			this.curFocusMember.navLeft();
		}else{
			/*check if there is member to the left of currently focused member(X : in range, Y : biggest among smaller)*/
			var xToMove = null;
			var yToMove = null;
			var foundMemberIndex = null;
			var xToScan = this.curFocusX;
			var leftEnd = false;
			var rightEnd = false;
      for(var adj = 0, swing = 1 ; !(leftEnd && rightEnd) ; adj++, swing *= -1){
			  xToScan += (adj * swing);
			  if(xToScan < this.curFocusMember.fromX){leftEnd = true; continue;}
			  else if(xToScan > this.curFocusMember.toX){rightEnd = true; continue;}
	      for(var i = 0 ; i < this.members.length ; i++){
		      if((Number(xToScan) >= Number(this.members[i].fromX))
  		     &&(Number(xToScan) <= Number(this.members[i].toX))
  		     &&(Number(this.curFocusY) > Number(this.members[i].toY))){
  		    	if(yToMove == null){
  		    		yToMove = Number(this.members[i].toY);
  		    		xToMove = xToScan;
  		    		foundMemberIndex = i;
  		    	}else{
  		    		if(yToMove < Number(this.members[i].toY)){
  		    			yToMove = Number(this.members[i].toY);
  		    		  xToMove = xToScan;
  		    		  foundMemberIndex = i;
  		    		}
  		    	}
  		    }
  		  }
  		}
  		/*if nearest member found, focus it*/
  		if(yToMove != null && xToMove != null){
	    	this.curFocusY = yToMove;
	    	this.curFocusX = xToMove;
	    	if(this.curFocusMember.showUnfocus != null){this.curFocusMember.showUnfocus();}
   			this.curFocusMember = this.members[foundMemberIndex];
   		  if(this.curFocusMember.showFocus != null){this.curFocusMember.showFocus();}
  		}
		}
	}else if(keyInput == VK_RIGHT){
		if(this.curFocusMember.navRight != null){
			//var tempNavRight = this.curFocusMember.navRight;
			//this.releaseFocus();
			//tempNavRight();
			this.curFocusMember.navRight();
		}else{
			/*check if there is member to the right of currently focused member(X : in range, Y : smallest among bigger)*/
			var xToMove = null;
			var yToMove = null;
			var foundMemberIndex = null;
			var xToScan = this.curFocusX;
			var leftEnd = false;
			var rightEnd = false;
      for(var adj = 0, swing = 1 ; !(leftEnd && rightEnd) ; adj++, swing *= -1){
			  xToScan += (adj * swing);
			  if(xToScan < this.curFocusMember.fromX){leftEnd = true; continue;}
			  else if(xToScan > this.curFocusMember.toX){rightEnd = true; continue;}
  	    for(var i = 0; i < this.members.length ; i++){
  		    if((Number(xToScan) >= Number(this.members[i].fromX))
    		   &&(Number(xToScan) <= Number(this.members[i].toX))
    		   &&(Number(this.curFocusY) < Number(this.members[i].fromY))){
    		  	if(yToMove == null){
    		  		yToMove = Number(this.members[i].fromY);
    		  		xToMove = xToScan;
    		  		foundMemberIndex = i;
    		  	}else{
    		  		if(yToMove > Number(this.members[i].fromY)){
    		  			yToMove = Number(this.members[i].fromY);
    		  			xToMove = xToScan;
    		  		  foundMemberIndex = i;
    		  		}
    		  	}
    		  }
    		}
    	}
  		/*if nearest member found, focus it*/
  		if(yToMove != null && xToMove != null){
	    	this.curFocusY = yToMove;
	    	this.curFocusX = xToMove;
	    	if(this.curFocusMember.showUnfocus != null){this.curFocusMember.showUnfocus();}
   			this.curFocusMember = this.members[foundMemberIndex];
   		  if(this.curFocusMember.showFocus != null){this.curFocusMember.showFocus();}
  		}
		}
  }else if(keyInput == VK_UP){
		if(this.curFocusMember.navUp != null){
			//var tempNavUp = this.curFocusMember.navUp;
			//this.releaseFocus();
			//tempNavUp();
			this.curFocusMember.navUp();
		}else{
			/*check if there is member to the up of currently focused member(X : biggest among smaller, Y : in range)*/
			var xToMove = null;
			var yToMove = null;
			var foundMemberIndex = null;
			var yToScan = this.curFocusY;
			var leftEnd = false;
			var rightEnd = false;
      for(var adj = 0, swing = 1 ; !(leftEnd && rightEnd) ; adj++, swing *= -1){
			  yToScan += (adj * swing);
			  if(yToScan < this.curFocusMember.fromY){leftEnd = true; continue;}
			  else if(yToScan > this.curFocusMember.toY){rightEnd = true; continue;}
  	    for(var i = 0; i < this.members.length ; i++){
  		    if((Number(yToScan) >= Number(this.members[i].fromY))
    		   &&(Number(yToScan) <= Number(this.members[i].toY))
    		   &&(Number(this.curFocusX) > Number(this.members[i].toX))){
    		  	if(xToMove == null){
    		  		xToMove = Number(this.members[i].toX);
    		  		yToMove = yToScan;
    		  		foundMemberIndex = i;
    		  	}else{
    		  		if(xToMove < Number(this.members[i].toX)){
    		  			xToMove = Number(this.members[i].toX);
      		  		yToMove = yToScan;
    		  		  foundMemberIndex = i;
    		  		}
    		  	}
    		  }
    		}
    	}
  		/*if nearest member found, focus it*/
  		if(xToMove != null && yToMove != null){
	    	this.curFocusX = xToMove;
	    	this.curFocusY = yToMove;
	    	if(this.curFocusMember.showUnfocus != null){this.curFocusMember.showUnfocus();}
   			this.curFocusMember = this.members[foundMemberIndex];
   		  if(this.curFocusMember.showFocus != null){this.curFocusMember.showFocus();}
  		}
		}
  }else if(keyInput == VK_DOWN){
		if(this.curFocusMember.navDown != null){
			//var tempNavDown = this.curFocusMember.navDown;
			//this.releaseFocus();
			//tempNavDown();
			this.curFocusMember.navDown();
		}else{
			/*check if there is member to the up of currently focused member(X : smallest among bigger, Y : in range)*/
			var xToMove = null;
			var yToMove = null;
			var foundMemberIndex = null;
			var yToScan = this.curFocusY;
			var leftEnd = false;
			var rightEnd = false;
      for(var adj = 0, swing = 1 ; !(leftEnd && rightEnd) ; adj++, swing *= -1){
			  yToScan += (adj * swing);
			  if(yToScan < this.curFocusMember.fromY){leftEnd = true; continue;}
			  else if(yToScan > this.curFocusMember.toY){rightEnd = true; continue;}
  	    for(var i = 0; i < this.members.length ; i++){
  		    if((Number(yToScan) >= Number(this.members[i].fromY))
    		   &&(Number(yToScan) <= Number(this.members[i].toY))
    		   &&(Number(this.curFocusX) < Number(this.members[i].fromX))){
    		  	if(xToMove == null){
    		  		xToMove = Number(this.members[i].fromX);
    		  		yToMove = yToScan;
    		  		foundMemberIndex = i;
    		  	}else{
    		  		if(xToMove > Number(this.members[i].fromX)){
    		  			xToMove = Number(this.members[i].fromX);
                yToMove = yToScan;
    		  		  foundMemberIndex = i;
    		  		}
    		  	}
    		  }
    		}
    	}
  		/*if nearest member found, focus it*/
  		if(xToMove != null){
	    	this.curFocusX = xToMove;
	    	this.curFocusY = yToMove;
	    	if(this.curFocusMember.showUnfocus != null){this.curFocusMember.showUnfocus();}
   			this.curFocusMember = this.members[foundMemberIndex];
   		  if(this.curFocusMember.showFocus != null){this.curFocusMember.showFocus();}
  		}
		}
  }else if(keyInput == VK_ENTER){
  	if(this.curFocusMember != null && this.curFocusMember.doWork != null){this.curFocusMember.doWork();}
  }else{
  	alert("keyInput should be one of VK_LEFT, VK_UP, VK_RIGHT, VK_DOWN, VK_ENTER");
  }
}

/*ask group to release it's focus*/
lg_rcuNavGroup.prototype.releaseFocus = function(){
	if(this.curFocusMember != null && this.curFocusMember.showUnfocus != null){this.curFocusMember.showUnfocus();}
	this.curFocusX = null;
	this.curFocusY = null;
	this.curFocusMember = null;
	//if "lostFocus" function is not null, execute it
	if(this.lostFocus != null){this.lostFocus();}
}
