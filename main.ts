input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    music.playMelody("C B F B A E D C5 ", 120)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("Hello!")
    basic.showString("maddy")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
})
for (let index = 0; index < 4; index++) {
    soundExpression.spring.playUntilDone()
}
basic.forever(function () {
	
})
