radio.onReceivedString(function (receivedString) {
    if (receivedString == "loud") {
        basic.showIcon(IconNames.Sad)
        soundExpression.sad.playUntilDone()
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
