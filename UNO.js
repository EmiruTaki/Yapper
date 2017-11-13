//################

unoDeck = ["Green 1 1", "Green 2 1", "Green 3 1", "Green 4 1", "Green 5 1", "Green 6 1", "Green 7 1", "Green 8 1", "Green 9 1", "Green 0 1", "Red 1 1", "Red 2 1", "Red 3 1", "Red 4 1", "Red 5 1", "Red 6 1", "Red 7 1", "Red 8 1", "Red 9 1", "Red 0 1", "Yellow 1 1", "Yellow 2 1", "Yellow 3 1", "Yellow 4 1", "Yellow 5 1", "Yellow 6 1", "Yellow 7 1", "Yellow 8 1", "Yellow 9 1", "Yellow 0 1", "Blue 1 1", "Blue 2 1", "Blue 3 1", "Blue 4 1", "Blue 5 1", "Blue 6 1", "Blue 7 1", "Blue 8 1", "Blue 9 1", "Blue 0 1", "Green 1 2", "Green 2 2", "Green 3 2", "Green 4 2", "Green 5 2", "Green 6 2", "Green 7 2", "Green 8 2", "Green 9 2", "Red 1 2", "Red 2 2", "Red 3 2", "Red 4 2", "Red 5 2", "Red 6 2", "Red 7 2", "Red 8 2", "Red 9 2", "Yellow 1 2", "Yellow 2 2", "Yellow 3 2", "Yellow 4 2", "Yellow 5 2", "Yellow 6 2", "Yellow 7 2", "Yellow 8 2", "Yellow 9 2", "Blue 1 2", "Blue 2 2", "Blue 3 2", "Blue 4 2", "Blue 5 2", "Blue 6 2", "Blue 7 2", "Blue 8 2", "Blue 9 2", "Wild Draw Four 1", "Wild Draw Four 2", "Wild Draw Four 3", "Wild Draw Four 4", "Wild 1", "Wild 2", "Wild 3", "Wild 4", "Red Skip 1", "Green Skip 1", "Blue Skip 1", "Yellow Skip 1", "Red Skip 2", "Green Skip 2", "Blue Skip 2", "Yellow Skip 2", "Red Draw Two 1", "Green Draw Two 1", "Blue Draw Two 1", "Yellow Draw Two 1", "Red Draw Two 2", "Green Draw Two 2", "Blue Draw Two 2", "Yellow Draw Two 2", "Red Reverse 1", "Green Reverse 1", "Blue Reverse 1", "Yellow Reverse 1", "Red Reverse 2", "Green Reverse 2", "Blue Reverse 2", "Yellow Reverse 2"]




unoDrawOne = false
drawCheck = 0
numCheck = 0
drawn = null

unoPlayerTurn = 0

unoCardsUsed = []

unoGameUnderway = false

unoJoiningOpen = false

unoPlayers = [] 
//assign by lastUsername

unoPlayerOneHand = []

unoPlayerTwoHand = []

unoPlayerThreeHand = []

unoCardOnTop = null
unoCardOnTopColor = null
unoCardOnTopNumber = null
unoSkip = false
unoReverse = false
unoDrawFour = false
unoDrawTwo = false
whole = ""
piece = ""

function unoDrawReverseSkip() {
	switch (pla) {
		case 'Red':
			if (played.substring(4, 5) == "D") {
				unoCardOnTopNumber = 12
				message = lastUsername + " played " + played.substring(0, played.length - 2) + "! "
				unoDrawTwo = true
			}
			if (played.substring(4, 5) == "R") {
				unoCardOnTopNumber = 13
				message = lastUsername + " played " + played.substring(0, played.length - 2) + "! "
				unoReverse = true
			}
			if (played.substring(4, 5) == "S") {
				unoCardOnTopNumber = 14
				message = lastUsername + " played " + played.substring(0, played.length - 2) + "! "
				unoSkip = true
			}
			break;
		case 'Yel':
			if (played.substring(7, 8) == "D") {
				unoCardOnTopNumber = 12
				message = lastUsername + " played " + played.substring(0, played.length - 2) + "! "
				unoDrawTwo = true
			}
			if (played.substring(7, 8) == "R") {
				unoCardOnTopNumber = 13
				message = lastUsername + " played " + played.substring(0, played.length - 2) + "! "
				unoReverse = true
			}
			if (played.substring(7, 8) == "S") {
				unoCardOnTopNumber = 14
				message = lastUsername + " played " + played.substring(0, played.length - 2) + "! "
				unoSkip = true
			}
			break;
		case 'Gre':
			if (played.substring(6, 7) == "D") {
				unoCardOnTopNumber = 12
				message = lastUsername + " played " + played.substring(0, played.length - 2) + "! "
				unoDrawTwo = true
			}
			if (played.substring(6, 7) == "R") {
				unoCardOnTopNumber = 13
				message = lastUsername + " played " + played.substring(0, played.length - 2) + "! "
				unoReverse = true
			}
			if (played.substring(6, 7) == "S") {
				unoCardOnTopNumber = 14
				message = lastUsername + " played " + played.substring(0, played.length - 2) + "! "
				unoSkip = true
			}
			break;
		case 'Blu':
			if (played.substring(5, 6) == "D") {
				unoCardOnTopNumber = 12
				message = lastUsername + " played " + played.substring(0, played.length - 2) + "! "
				unoDrawTwo = true
			}
			if (played.substring(5, 6) == "R") {
				unoCardOnTopNumber = 13
				message = lastUsername + " played " + played.substring(0, played.length - 2) + "! "
				unoReverse = true
			}
			if (played.substring(5, 6) == "S") {
				unoCardOnTopNumber = 14
				message = lastUsername + " played " + played.substring(0, played.length - 2) + "! "
				unoSkip = true
			}
			break;
	}
}

function caseRed() {
	if (unoCardOnTopColor == "Red" || unoCardOnTopColor == null) {
		numCheck = parseInt(played.substring(4, 5))
		if (numCheck === parseInt(numCheck, 10)) {
			unoCardOnTopNumber = numCheck
		}
		else {
			unoDrawReverseSkip()
		}
		played = played.substring(0, played.length - 2)
		message = lastUsername + " played " + played + "! "
		unoPlayerPlay()
		unoChangeTurn()
	}
	else  {
		if (unoCardOnTopNumber == null || unoCardOnTopNumber == parseInt(played.substring(4, 5)) || unoCardOnTopNumber == 12 && played.substring(4, 5) == "D" || unoCardOnTopNumber == 13 && played.substring(4, 5) == "R" || unoCardOnTopNumber == 14 && played.substring(4, 5) == "S") {
			unoCardOnTopColor = "Red"
			played = played.substring(0, played.length - 2)
			message = lastUsername + " played " + played + "! "
			unoPlayerPlay()
			unoChangeTurn()
		}
	}
}

function caseBlue() {
	if (unoCardOnTopColor == "Blue" || unoCardOnTopColor == null) {
		numCheck = parseInt(played.substring(5, 6))
		if (numCheck === parseInt(numCheck, 10)) {
			unoCardOnTopNumber = numCheck
		}
		else {
			unoDrawReverseSkip()
		}
		played = played.substring(0, played.length - 2)
		message = lastUsername + " played " + played + "! "
		unoPlayerPlay()
		unoChangeTurn()	
	}
	else  {
		if (unoCardOnTopNumber == null || unoCardOnTopNumber == parseInt(played.substring(5, 6)) || unoCardOnTopNumber == 12 && played.substring(5, 6) == "D" || unoCardOnTopNumber == 13 && played.substring(5, 6) == "R" || unoCardOnTopNumber == 14 && played.substring(5, 6) == "S") {
			unoCardOnTopColor = "Blue"
			played = played.substring(0, played.length - 2)
			message = lastUsername + " played " + played + "! "
			unoPlayerPlay()
			unoChangeTurn()
		}
	}
}

function caseYellow() {
	if (unoCardOnTopColor == "Yellow" || unoCardOnTopColor == null) {
		numCheck = parseInt(played.substring(7, 8))
		if (numCheck === parseInt(numCheck, 10)) {
			unoCardOnTopNumber = numCheck
		}
		else {
			unoDrawReverseSkip()
		}
		played = played.substring(0, played.length - 2)
		message = lastUsername + " played " + played + "! "
		unoPlayerPlay()
		unoChangeTurn()	
	}
	else  {
		if (unoCardOnTopNumber == null || unoCardOnTopNumber == parseInt(played.substring(7, 8)) || unoCardOnTopNumber == 12 && played.substring(7, 8) == "D" || unoCardOnTopNumber == 13 && played.substring(7, 8) == "R" || unoCardOnTopNumber == 14 && played.substring(7, 8) == "S") {
			unoCardOnTopColor = "Yellow"
			played = played.substring(0, played.length - 2)
			message = lastUsername + " played " + played + "! "
			unoPlayerPlay()
			unoChangeTurn()
		}
	}
}

function caseGreen() {
	if (unoCardOnTopColor == "Green" || unoCardOnTopColor == null) {
	numCheck = parseInt(played.substring(6, 7))
		if (numCheck === parseInt(numCheck, 10)) {
			unoCardOnTopNumber = numCheck
		}
		else {
			unoDrawReverseSkip()
		}
		played = played.substring(0, played.length - 2)
		message = lastUsername + " played " + played + "! "
		unoPlayerPlay()
		unoChangeTurn()
	}
	else  {
		if (unoCardOnTopNumber == null || unoCardOnTopNumber == parseInt(played.substring(6, 7)) || unoCardOnTopNumber == 12 && played.substring(6, 7) == "D" || unoCardOnTopNumber == 13 && played.substring(6, 7) == "R" || unoCardOnTopNumber == 14 && played.substring(6, 7) == "S") {
			unoCardOnTopColor = "Green"
			played = played.substring(0, played.length - 2)
			message = lastUsername + " played " + played + "! "
			unoPlayerPlay()
			unoChangeTurn()
		}
	}
}

function caseWild() {
	if (played.substring(0, 6) == "Wild D") {
		if (message == "yellow" || message == "red" || message == "blue" || message == "green") {
			switch(message) {
				case 'yellow':
					unoCardOnTopColor = "Yellow"
					message = lastUsername + " played Wild Draw Four! Next color is yellow. "
					break;
				case 'green':
					unoCardOnTopColor = "Green"
					message = lastUsername + " played Wild Draw Four! Next color is green. "
					break;
				case 'blue':
					unoCardOnTopColor = "Blue"
					message = lastUsername + " played Wild Draw Four! Next color is blue. "
					break;
				case 'red':
					unoCardOnTopColor = "Red"
					message = lastUsername + " played Wild Draw Four! Next color is red. "
					break;	
			}
			unoDrawFour = true
			unoCardOnTopNumber = 10
			unoPlayerPlay()
			unoChangeTurn()
		}
	}
	else
 {
		if (message == "yellow" || message == "red" || message == "blue" || message == "green") {
			switch(message) {
				case 'yellow':
					unoCardOnTopColor = "Yellow"
					message = lastUsername + " played Wild! Next color is yellow. "
					break;
				case 'green':
					unoCardOnTopColor = "Green"
					message = lastUsername + " played Wild! Next color is green. "
					break;
				case 'blue':
					unoCardOnTopColor = "Blue"
					message = lastUsername + " played Wild! Next color is blue. "
					break;
				case 'red':
					unoCardOnTopColor = "Red"
					message = lastUsername + " played Wild! Next color is red. "
					break;	
			}
			unoPlayerPlay()
			unoCardOnTopNumber = 10
			unoChangeTurn()
		}
										
	}
}

function unoPlayerPlay() {
	if (unoPlayerTurn == 0) {
		unoCardOnTop = unoPlayerOneHand[card]
		unoPlayerOneHand.splice(card, 1)
	}
	if (unoPlayerTurn == 1) {
		unoCardOnTop = unoPlayerTwoHand[card]
		unoPlayerTwoHand.splice(card, 1)
	}
	if (unoPlayerTurn == 2) {
		unoCardOnTop = unoPlayerThreeHand[card]
		unoPlayerThreeHand.splice(card, 1)
	}
}



function unoEnd() {
	if (unoPlayers.includes(lastUsername) == true) {
		backend_sendmessage(0,0,activeRoom,0,"Uno game is ending.",false,botTextColor,false)
		unoDrawOne = false
		drawCheck = 0
		numCheck = 0
		drawn = null

		unoPlayerTurn = 0

		unoCardsUsed = []

		unoGameUnderway = false

		unoJoiningOpen = false

		unoPlayers = [] 
		//assign by lastUsername

		unoPlayerOneHand = []

		unoPlayerTwoHand = []

		unoPlayerThreeHand = []

		unoCardOnTop = null
		unoCardOnTopColor = null
		unoCardOnTopNumber = null
		unoSkip = false
		unoReverse = false
		unoDrawFour = false
		unoDrawTwo = false
		whole = ""
		piece = ""
	}
}

function showHandOne() {
	whole = ""
	piece = ""
	for (i = 0; i < unoPlayerOneHand.length; i++) {
		piece = i + 1 + ": \[" + unoPlayerOneHand[i].substring(0, unoPlayerOneHand[i].length - 2) + "\] "
		whole = whole.concat(piece)
	}
	backend_sendmessage(0,0,activeRoom,unoPlayers[0],whole,false,"111111",false)
}

function showHandTwo() {
	whole = ""
	piece = ""
	for (i = 0; i < unoPlayerTwoHand.length; i++) {
		piece = i + 1 + ": \[" + unoPlayerTwoHand[i].substring(0, unoPlayerTwoHand[i].length - 2) + "\] "
		whole = whole.concat(piece)
	}
	backend_sendmessage(0,0,activeRoom,unoPlayers[1],whole,false,"111111",false)
}

function showHandThree() {
	whole = ""
	piece = ""
	for (i = 0; i < unoPlayerThreeHand.length; i++) {
		piece = i + 1 + ": \[" + unoPlayerThreeHand[i].substring(0, unoPlayerThreeHand[i].length - 2) + "\] "
		whole = whole.concat(piece)
	}
	backend_sendmessage(0,0,activeRoom,unoPlayers[2],whole,false,"111111",false)
}

function drawCard() { //####complete
	if (unoPlayerTurn == 0) {
		if (unoDrawTwo == true) {
			draw = unoPlayerOneHand.length + 2
			while (unoPlayerOneHand.length < draw) {
				drawn = unoDeck[Math.floor(Math.random()*unoDeck.length)]
				if (unoCardsUsed.includes(drawn) == false) {
					unoPlayerOneHand.push(drawn)

					unoCardsUsed.push(drawn)

				}
			}
			unoDrawTwo = false
		}
		if (unoDrawFour == true) {
			draw = unoPlayerOneHand.length + 4
			while (unoPlayerOneHand.length < draw) {
				drawn = unoDeck[Math.floor(Math.random()*unoDeck.length)]
				if (unoCardsUsed.includes(drawn) == false) {
					unoPlayerOneHand.push(drawn)

					unoCardsUsed.push(drawn)

				}
			}
			unoDrawFour = false
		}
		if (unoDrawOne == true) {
			if (drawCheck != 1) {
				drawCheck++
				draw = unoPlayerOneHand.length + 1
				while (unoPlayerOneHand.length < draw) {
					drawn = unoDeck[Math.floor(Math.random()*unoDeck.length)]
					if (unoCardsUsed.includes(drawn) == false) {
						unoPlayerOneHand.push(drawn)

						unoCardsUsed.push(drawn)

					}
				}
				backend_sendmessage(0,0,activeRoom,0,lastUsername + " draws a card.",false,botTextColor,false)
			}
			unoDrawOne = false
		}
	}
	if (unoPlayerTurn == 1) {
		if (unoDrawTwo == true) {
			draw = unoPlayerTwoHand.length + 2
			while (unoPlayerTwoHand.length < draw) {
				drawn = unoDeck[Math.floor(Math.random()*unoDeck.length)]
				if (unoCardsUsed.includes(drawn) == false) {
					unoPlayerTwoHand.push(drawn)

					unoCardsUsed.push(drawn)

				}
			}
			unoDrawTwo = false
		}
		if (unoDrawFour == true) {
			draw = unoPlayerTwoHand.length + 4
			while (unoPlayerTwoHand.length < draw) {
				drawn = unoDeck[Math.floor(Math.random()*unoDeck.length)]
				if (unoCardsUsed.includes(drawn) == false) {
					unoPlayerTwoHand.push(drawn)

					unoCardsUsed.push(drawn)

				}
			}
			unoDrawFour = false
		}
		if (unoDrawOne == true) {
			if (drawCheck != 1) {
				drawCheck++
				draw = unoPlayerTwoHand.length + 1
				while (unoPlayerTwoHand.length < draw) {
					drawn = unoDeck[Math.floor(Math.random()*unoDeck.length)]
					if (unoCardsUsed.includes(drawn) == false) {
						unoPlayerTwoHand.push(drawn)

						unoCardsUsed.push(drawn)

					}
				}
				backend_sendmessage(0,0,activeRoom,0,lastUsername + " draws a card.",false,botTextColor,false)
			}
			unoDrawOne = false
		}
	}
	if (unoPlayerTurn == 2) {
		if (unoDrawTwo == true) {
			draw = unoPlayerThreeHand.length + 2
			while (unoPlayerThreeHand.length < draw) {
				drawn = unoDeck[Math.floor(Math.random()*unoDeck.length)]
				if (unoCardsUsed.includes(drawn) == false) {
					unoPlayerThreeHand.push(drawn)

					unoCardsUsed.push(drawn)

				}
			}
			unoDrawTwo = false
		}
		if (unoDrawFour == true) {
			draw = unoPlayerThreeHand.length + 4
			while (unoPlayerThreeHand.length < draw) {
				drawn = unoDeck[Math.floor(Math.random()*unoDeck.length)]
				if (unoCardsUsed.includes(drawn) == false) {
					unoPlayerThreeHand.push(drawn)

					unoCardsUsed.push(drawn)

				}
			}
			unoDrawFour = false
		}
		if (unoDrawOne == true) {
			if (drawCheck != 1) {
				drawCheck++
				draw = unoPlayerThreeHand.length + 1
				while (unoPlayerThreeHand.length < draw) {
					drawn = unoDeck[Math.floor(Math.random()*unoDeck.length)]
					if (unoCardsUsed.includes(drawn) == false) {
						unoPlayerThreeHand.push(drawn)

						unoCardsUsed.push(drawn)

					}
				}
				backend_sendmessage(0,0,activeRoom,0,lastUsername + " draws a card.",false,botTextColor,false)
			}
			unoDrawOne = false
		}
	}
}


function unoChangeTurn() { //####complete
	if (unoSkip == true) {
		if (unoReverse == true) {
			unoPlayerTurn = unoPlayerTurn - 2
			unoSkip = false
			if (unoPlayerTurn < 0) {
				unoPlayerTurn = unoPlayerTurn + 3
			}
			drawCard()
			if (unoPlayerTurn == 0) {
				showHandOne()
				backend_sendmessage(0,0,activeRoom,0,message + "It is " + unoPlayers[0] + "\'s turn.",false,botTextColor,false)


			}
			if (unoPlayerTurn == 1) {
				showHandTwo()
				backend_sendmessage(0,0,activeRoom,0,message + "It is " + unoPlayers[1] + "\'s turn.",false,botTextColor,false)


			}
			if (unoPlayerTurn == 2) {
				showHandThree()
				backend_sendmessage(0,0,activeRoom,0,message + "It is " + unoPlayers[2] + "\'s turn.",false,botTextColor,false)


			}
		}
		else {
			unoPlayerTurn = unoPlayerTurn + 2
			unoSkip = false
			if (unoPlayerTurn > 2) {
				unoPlayerTurn = unoPlayerTurn - 3
			}
			drawCard()
			if (unoPlayerTurn == 0) {
				showHandOne()
				backend_sendmessage(0,0,activeRoom,0,message + "It is " + unoPlayers[0] + "\'s turn.",false,botTextColor,false)


			}
			if (unoPlayerTurn == 1) {
				showHandTwo()
				backend_sendmessage(0,0,activeRoom,0,message + "It is " + unoPlayers[1] + "\'s turn.",false,botTextColor,false)


			}
			if (unoPlayerTurn == 2) {
				showHandThree()
				backend_sendmessage(0,0,activeRoom,0,message + "It is " + unoPlayers[2] + "\'s turn.",false,botTextColor,false)


			}
		}
	}
	else {
		if (unoReverse == true) {
			unoPlayerTurn = unoPlayerTurn - 1
			if (unoPlayerTurn < 0) {
				unoPlayerTurn = unoPlayerTurn + 3
			}
			drawCard()
			if (unoPlayerTurn == 0) {
				showHandOne()
				backend_sendmessage(0,0,activeRoom,0,message + "It is " + unoPlayers[0] + "\'s turn.",false,botTextColor,false)


			}
			if (unoPlayerTurn == 1) {
				showHandTwo()
				backend_sendmessage(0,0,activeRoom,0,message + "It is " + unoPlayers[1] + "\'s turn.",false,botTextColor,false)


			}
			if (unoPlayerTurn == 2) {
				showHandThree()
				backend_sendmessage(0,0,activeRoom,0,message + "It is " + unoPlayers[2] + "\'s turn.",false,botTextColor,false)


			}
		}
		else {
			unoPlayerTurn = unoPlayerTurn + 1
			if (unoPlayerTurn > 2) {
				unoPlayerTurn = unoPlayerTurn - 3
			}
			drawCard()
			if (unoPlayerTurn == 0) {
				showHandOne()
				backend_sendmessage(0,0,activeRoom,0,message + "It is " + unoPlayers[0] + "\'s turn.",false,botTextColor,false)


			}
			if (unoPlayerTurn == 1) {
				showHandTwo()
				backend_sendmessage(0,0,activeRoom,0,message + "It is " + unoPlayers[1] + "\'s turn.",false,botTextColor,false)


			}
			if (unoPlayerTurn == 2) {
				showHandThree()
				backend_sendmessage(0,0,activeRoom,0,message + "It is " + unoPlayers[2] + "\'s turn.",false,botTextColor,false)


			}
		}	
	}
	drawCheck = 0
}





function unoDealOne() { //####complete	
	while (unoPlayerOneHand.length < 7) {
		drawn = unoDeck[Math.floor(Math.random()*unoDeck.length)]
		if (unoCardsUsed.includes(drawn) == false) {
			unoPlayerOneHand.push(drawn)

			unoCardsUsed.push(drawn)

		}

	}
	showHandOne()
}
        	   




function unoDealTwo() {  //####complete	
	while (unoPlayerTwoHand.length < 7) {
		drawn = unoDeck[Math.floor(Math.random()*unoDeck.length)]
		if (unoCardsUsed.includes(drawn) == false) {
			unoPlayerTwoHand.push(drawn)

			unoCardsUsed.push(drawn)

		}

	}
	showHandTwo()
}
 


function unoDealThree() { //####complete	
	while (unoPlayerThreeHand.length < 7) {
		drawn = unoDeck[Math.floor(Math.random()*unoDeck.length)]
		if (unoCardsUsed.includes(drawn) == false) {
			unoPlayerThreeHand.push(drawn)

			unoCardsUsed.push(drawn)

		}

	}
	showHandThree()
}
 





function uno() {

	accessLevel(regular)

	if (allowed == true) {
		message = message.substring(message.indexOf("!uno ") + 5)

		if (message == "pass") {
			if (drawCheck == 1) {
				message = lastUsername + " skips their turn. " 
				unoChangeTurn()
			}
		}
		if (message == "draw") {
			unoDrawOne = true
			drawCard()
		}
		if (message == "end") {
			unoEnd()
		}
		if (message == "hand") {
			if (unoGameUnderway == true) {
				if (unoJoiningOpen == false) {
					if (unoPlayers.includes(lastUsername) == true) {
						if (unoPlayers[0] == lastUsername) {
							showHandOne()
						}
						if (unoPlayers[1] == lastUsername) {
							showHandTwo()
						}
						if (unoPlayers[2] == lastUsername) {
							showHandThree()
						}
					}
				}
			}
		}
		if (message == "start") {
 //START#####
			if (unoGameUnderway == false) {

				unoGameUnderway = true

				unoJoiningOpen = true

				backend_sendmessage(0,0,activeRoom,0,"Uno is starting! Type \'!uno join\' to join.",false,botTextColor,false)
			}
		}
		if (message == "join") { //JOIN######
			if (unoGameUnderway == true) {

				if (unoJoiningOpen == true) {

					unoPlayers.push(lastUsername)

					backend_sendmessage(0,0,activeRoom,0,lastUsername + " has joined the Uno game.",false,botTextColor,false)

					if (unoPlayers.length == 3) {

						unoDealOne()

						unoDealTwo()
						unoDealThree()
						unoJoiningOpen = false

						backend_sendmessage(0,0,activeRoom,0,"Player slots are full and joining is now closed. It is " + unoPlayers[0] + "\'s turn.",false,botTextColor,false)

					}

				}

			}
		}
		if (message.substring(0, 5) == "play ") { //PLAY######
			if (unoGameUnderway == true) {

				if (unoJoiningOpen == false) {

					if (lastUsername == unoPlayers[unoPlayerTurn]) {

						message = message.substring(message.indexOf("play ") + 5)

						card = parseInt(message.substring(0, 1))
						card = card - 1

						message = message.substring(2)
						if (lastUsername == unoPlayers[0]) {
							hasCardCheck = unoPlayerOneHand.includes(unoPlayerOneHand[card])
							pla = unoPlayerOneHand[card].substring(0, 3)
							played = unoPlayerOneHand[card]
						}
						if (lastUsername == unoPlayers[1]) {
							hasCardCheck = unoPlayerTwoHand.includes(unoPlayerTwoHand[card])
							pla = unoPlayerTwoHand[card].substring(0, 3)
							played = unoPlayerTwoHand[card]
						}
						if (lastUsername == unoPlayers[2]) {
							hasCardCheck = unoPlayerThreeHand.includes(unoPlayerThreeHand[card])
							pla = unoPlayerThreeHand[card].substring(0, 3)
							played = unoPlayerThreeHand[card]
						}
						if (hasCardCheck == true) {

							switch(pla) {

								case 'Red':
									caseRed()
									break;
								case 'Yel':
									caseYellow()
									break;
								case 'Blu':
									caseBlue()
									break;
								case 'Gre':
									caseGreen()
									break;
								case 'Wil':
									caseWild()
									break;
									
							}

						}
					}
				}
			}
		}

	}
}



