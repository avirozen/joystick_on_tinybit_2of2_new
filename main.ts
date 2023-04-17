radio.setGroup(1)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 10) {
        radio.sendString("right")
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (pins.analogReadPin(AnalogPin.P1) > 1020) {
        radio.sendString("left")
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (pins.analogReadPin(AnalogPin.P2) < 10) {
        radio.sendString("forward")
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (pins.analogReadPin(AnalogPin.P2) > 1020) {
        radio.sendString("back")
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (pins.analogReadPin(AnalogPin.P2) >= 500 && pins.analogReadPin(AnalogPin.P2) <= 520 && (pins.analogReadPin(AnalogPin.P1) >= 500 && pins.analogReadPin(AnalogPin.P1) <= 520)) {
        radio.sendString("stop")
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
})
