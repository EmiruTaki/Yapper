
//########

scriptActive = "yes"
disconnected = ""
youtubeSearch = ""
link = ""
botRoom = 206206
botTextColor = "ffg0g0"
owner = ["100942"]
blocked = [""]
lastReadIndex = messagesRoom[activeRoom].length - 1 
allowed = null
owner.name = "owner"
regular = "regular"
currentRoom = activeRoom
message = ""
lastUsername = null
lastCharacter = null
messageBar = ""
lastCharacterBar = null
lastUsernameBar = null
lastReadIndexBar = messagesRoom[2].length + 1 
link = null
loggedBar = false

function r(str, len) {
	var colors = ["ffg0g0", "ffffg0", "00ffg0", "g0ffg0", "g0ff00", "g0ffff", "g000ff", "g0g0ff", "00g0ff", "ffg0ff", "ffg000"];
	var cIndex = 0;
        var incriment = true;
 
        for (var i = 0; i < len; i++) {
	// Determine which direction to parse colors array.
		if (incriment) {
			cIndex++;
		} 
		else {
			cIndex--;
		}
 
		// Send message with delay. Delay time multiplied by index.
		setTimeout(backend_sendmessage(0, 0, activeRoom, 0, str, false, colors[cIndex], false), 200 * i);
 
		// Recalculate loop direction for colors.
		if (cIndex >= colors.length - 1) {
        	        incriment = false;
		} 
		else if (cIndex <= 0) {
         	       incriment = true;
		}
        }
}

function userAge() {
	accessLevel(regular)
	if (allowed == true) {
		a = 1
		whole = ""
		piece = ""
		nara = Object.values(roomUserlistCache[activeRoom])
		aran = Object.values(userdataCache)
		for (i=0;i < aran.length;i++) {
			if (typeof aran[i] == 'undefined') {
				continue
			}
			if (nara.includes(parseInt(aran[i][0])) == true) {
				
				piece = a + ": " + aran[i][0] + " " + aran[i][1] + ", "
				whole = whole.concat(piece)
				a++
			}

		}
		whole.substring(0, whole.length - 2)
		backend_sendmessage(0,0,activeRoom, lastUsername,whole,false,botTextColor,false)
	}
}

function test() {
	accessLevel(regular)
	if (allowed == true) {
		backend_sendmessage(0,0,activeRoom,0,"Pass.",false,botTextColor,false)
	}
}

function changeColor() {
	accessLevel(regular)
	if (allowed == true) {
		message = message.substring(message.indexOf("!color ") + 7)
		switch (message) {
			case 'red':
				botTextColor = "ffg0g0"
				break;
			case 'orange':
				botTextColor = "ff00g0"
				break;
			case 'yellow':
				botTextColor = "ffffg0"
				break;
			case 'lime':
				botTextColor = "00ffg0"
				break;
			case 'green':
				botTextColor = "g0ffg0"
				break;
			case 'aqua':
				botTextColor = "g0ff00"
				break;
			case 'cyan':
				botTextColor = "g0ffff"
				break;
			case 'blue':
				botTextColor = "g000ff"
				break;
			case 'indigo':
				botTextColor = "g0g0ff"
				break;
			case 'purple':
				botTextColor = "00g0ff"
				break;
			case 'magenta':
				botTextColor = "ffg0ff"
				break;
			case 'rose':
				botTextColor = "ffg000"
				break;
		}
	}
}

function getID() {
	accessLevel(regular)
	if (allowed == true) {
		message = message.substring(message.indexOf("!getid ") + 7);
		usersID = getUserIdFromName(message)
		backend_sendmessage(0,0,activeRoom,0,message + "\'s user id is " + usersID + ".",false,botTextColor,false)
	}
}

function hi() {
	accessLevel(regular)
	if (allowed == true) {
		if (lastCharacter == null) {
			backend_sendmessage(0,0,activeRoom,0,"Hi there, " + lastUsername + "!",false,botTextColor,false)
		}
		else {
			backend_sendmessage(0,0,activeRoom,0,"Hi there, " + lastCharacter + "!",false,botTextColor,false)
		}
	}
}

function exit() {
	accessLevel(owner)
	if (allowed == true) {
		backend_sendmessage(0,0,activeRoom,0," is shutting down.",true,botTextColor,false)
		return
	}
}

function slap() {
	accessLevel(regular)
	if (allowed == true) {
		message = message.substring(message.indexOf("!slap ") + 6);
		backend_sendmessage(0,0,activeRoom,0,"smacks " + message + " in the face with a smelly fish!",true,botTextColor,false)
	}
}

function rainbow() {
	accessLevel(regular)
	if (allowed == true) {
		setTimeout(function () {backend_sendmessage(0,0,activeRoom,0," ",false,"ffg0g0",false)}, 200)
		setTimeout(function () {backend_sendmessage(0,0,activeRoom,0,"R",false,"ffg0g0",false)}, 400)
		setTimeout(function () {backend_sendmessage(0,0,activeRoom,0,"A",false,"ff00g0",false)}, 600)
		setTimeout(function () {backend_sendmessage(0,0,activeRoom,0,"A",false,"ffffg0",false)}, 800)
		setTimeout(function () {backend_sendmessage(0,0,activeRoom,0,"I",false,"00ffg0",false)}, 1000)
		setTimeout(function () {backend_sendmessage(0,0,activeRoom,0,"N",false,"g0ffg0",false)}, 1200)
		setTimeout(function () {backend_sendmessage(0,0,activeRoom,0,"B",false,"g0ff00",false)}, 1400)
		setTimeout(function () {backend_sendmessage(0,0,activeRoom,0,"O",false,"g0ffff",false)}, 1600)
		setTimeout(function () {backend_sendmessage(0,0,activeRoom,0,"O",false,"g000ff",false)}, 1800)
		setTimeout(function () {backend_sendmessage(0,0,activeRoom,0,"O",false,"g0g0ff",false)}, 2000)
		setTimeout(function () {backend_sendmessage(0,0,activeRoom,0,"W",false,"00g0ff",false)}, 2200)
		setTimeout(function () {backend_sendmessage(0,0,activeRoom,0,"W",false,"ffg0ff",false)}, 2400)
		setTimeout(function () {backend_sendmessage(0,0,activeRoom,0,"W",false,"ffg000",false)}, 2600)
	}
}

// Cascading Rainbow Text - By Emiru 11/14/17
function cacadingRainbow(str, cascade) {
    var colors = ["ffg0g0", "ffffg0", "00ffg0", "g0ffg0", "g0ff00", "g0ffff", "g000ff", "g0g0ff", "00g0ff", "ffg0ff", "ffg000"];
    var cIndex = 0;
    var incriment = true;
    var charArray = [];
    var spacing = "";

    for (var i = 0; i < str.length; i++) {
        // Determine which direction to parse colors array.
        if (incriment) {
            cIndex++;
        } else {
            cIndex--;
        }

        // Assign color to each character in an array.
        charArray[i] = { char: spacing + str[i], color: colors[cIndex] };

        // Cascade?
        if (cascade) {
            spacing += '&nbsp;&nbsp;';
        }

        // Recalculate loop direction for colors.
        if (cIndex >= colors.length - 1) {
            incriment = false;
        } else if (cIndex <= 0) {
            incriment = true;
        }
    }

    $.each(charArray, function (key, value) {
        setTimeout(function () { backend_sendmessage(0, 0, activeRoom, 0, value.char, false, value.color, false); }, 1000 * key);
    });
}

function help() {
	accessLevel(regular)
	if (allowed == true) {
		backend_sendmessage(0, 0, activeRoom, lastUsername, "Commands: !help, !rainbow, !hi, !exit, !color [color], test, !getid [name], !slap [name], !ages, !uno (start, join, hand, play [card number [color if card is wild]], pass, draw, end)", false, botTextColor, false)
	}
}

function commandList() {
	switch (message) {
		case '!rainbow': 
			rainbow()
			break;
		case '!help':
			help()
			break;
		case '!exit':
			exit()
			break;
		case '!hi': 
			hi()
			break;
		case 'test': 
			test()
			break;
		case '!ages':
			userAge()
			break;
	}
}

function roomCheck() {
	if (currentRoom != activeRoom) {
		currentRoom = activeRoom
		lastReadIndex = messagesRoom[activeRoom].length - 1 
	}
}
	

function accessLevel(level) {
	lastUserID = getUserIdFromName(lastUsername)
	if (level.name == "owner") {
		allowed = level.includes(lastUserID)
	}
	if (level == "regular") {
		if (blocked.includes(lastUserID) == true) {
			allowed = false
		}
		else {
			allowed = true
		}
	}
	if (allowed == false) {
		backend_sendmessage(0,0,activeRoom,0,"Access denied. ",false,botTextColor,false)
	}
}

function extractMessagePartsBar() {
	if (messageBar.includes("Roleplay character of ") == true) {
		messageBar = messageBar.substring(messageBar.indexOf("Roleplay character of ") + 22)
		lastUsernameBar = messageBar.substring(0, messageBar.indexOf("\">"))

		if (messageBar.includes("#567A5E !important;") == true) {
			messageBar = messageBar.substring(messageBar.indexOf("color: #") + 8)
		}
		if (messageBar.includes("return false;\">") == true) {
			messageBar = messageBar.substring(messageBar.indexOf("return false;\">") + 15) //cuts off everything before the name
			lastCharacterBar = messageBar.substring(0, messageBar.indexOf("</a>")) //extracts the last username from the characters expected to be right after it.
		} 
		if (messageBar.includes("color: #") == true) {
			messageBar = messageBar.substring(messageBar.indexOf("color: #") + 16) //cuts the message down to the message itself
			messageBar = messageBar.substring(0, messageBar.indexOf("</span>")) //final trim for cleaned message
		}
	}
	else {
		lastCharacterBar = null
		if (messageBar.includes("#567A5E !important;") == true) {
			messageBar = messageBar.substring(messageBar.indexOf("color: #") + 8)
		}
		if (messageBar.includes("return false;\">") == true) {
			messageBar = messageBar.substring(messageBar.indexOf("return false;\">") + 15) //cuts off everything before the name
			lastUsernameBar = messageBar.substring(0, messageBar.indexOf("</a>")) //extracts the last username from the characters expected to be right after it.
		} 
		if (messageBar.includes("color: #") == true) {
			messageBar = messageBar.substring(messageBar.indexOf("color: #") + 16) //cuts the message down to the message itself
			messageBar = messageBar.substring(0, messageBar.indexOf("</span>")) //final trim for cleaned message
		}
	}
}

function extractMessageParts() {
	if (message.includes("Roleplay character of ") == true) {
		message = message.substring(message.indexOf("Roleplay character of ") + 22)
		lastUsername = message.substring(0, message.indexOf("\">"))

		if (message.includes("#567A5E !important;") == true) {
			message = message.substring(message.indexOf("color: #") + 8)
		}
		if (message.includes("return false;\">") == true) {
			message = message.substring(message.indexOf("return false;\">") + 15) //cuts off everything before the name
			lastCharacter = message.substring(0, message.indexOf("</a>")) //extracts the last username from the characters expected to be right after it.
		} 
		if (message.includes("color: #") == true) {
			message = message.substring(message.indexOf("color: #") + 16) //cuts the message down to the message itself
			message = message.substring(0, message.indexOf("</span>")) //final trim for cleaned message
		}
	}
	else {
		lastCharacter = null
		if (message.includes("#567A5E !important;") == true) {
			message = message.substring(message.indexOf("color: #") + 8)
		}
		if (message.includes("return false;\">") == true) {
			message = message.substring(message.indexOf("return false;\">") + 15) //cuts off everything before the name
			lastUsername = message.substring(0, message.indexOf("</a>")) //extracts the last username from the characters expected to be right after it.
		} 
		if (message.includes("color: #") == true) {
			message = message.substring(message.indexOf("color: #") + 16) //cuts the message down to the message itself
			message = message.substring(0, message.indexOf("</span>")) //final trim for cleaned message
		}
	}
}

function getLinkTitle() {
	if (message.includes("http") == true) {
		link = message.substring(message.indexOf("http"))
		if (link.includes(" ") == true) {
			link = message.substring(0, message.indexOf(" ")) 
		}
	}
}

function myLoop () {


 //the main function

	setTimeout(function () { //delays loop
		
		getLinkTitle()

		roomCheck()

		if (activeRoom != botRoom) {
			switchRoom(botRoom)
		}

		if (typeof messagesRoom[2][lastReadIndexBar + 1] === 'undefined') {
			//no new messages, do nothing
		}

		else {
			if (loggedBar == true) {
				lastReadIndexBar++
				loggedBar = false
			}
			messageBar = messagesRoom[2][lastReadIndexBar][1]
			extractMessagePartsBar()
		}

		if (typeof messagesRoom[activeRoom][lastReadIndex + 1] === 'undefined') {
			//no new messages, do nothing
		}

		//if new index is available, process new message then increment index check
		else{  
			lastReadIndex++
 			message = messagesRoom[activeRoom][lastReadIndex][1]
			extractMessageParts()
			
			commandList()
			if (message.substring(0,6) == "!slap ") {
				slap()
			}
			if (message.substring(0,7) == "!getid ") {
				getID()
			}
			if (message.substring(0,7) == "!color ") {
				changeColor()
			}
			if (message.substring(0,5) == "!uno ") {
				uno()
			}			
		} //end index increment and message process




	   
	setTimeout(function () {


			myLoop(); 
		
		}, 500)



	}, 1000) //loop delay, close timeout
	



} //close loop


myLoop()


//converts console log to variable
var console = window.console,
    _log = console ? console.log : function(){};

_log.history = [];

console.log = function( ){
  _log.history.push.apply( _log.history, arguments );
  _log.apply( console, arguments );
}

function loop () {
   setTimeout(function () {
      acer = _log.history 
      if (acer.includes("DISCONNECT!") == true) { //detect chat's reset
         disconnected = "true"
         return
      }
      if (acer.length > 500) {
	 for (i=0;i<100;i++) {
	    acer.shift()
	 }
      }
      setTimeout(function () {
         loop();   //restart loop         
      }, 500)
   }, 2000)
}
loop()
