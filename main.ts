input.onButtonPressed(Button.A, function () {
    ayar += 500
    basic.showNumber(ayar)
})
input.onButtonPressed(Button.AB, function () {
    ayar = 0
})
input.onButtonPressed(Button.B, function () {
    ayar += -500
    basic.showNumber(ayar)
})
let ayar = 0
ayar = 100
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(ayar)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.pause(ayar)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(ayar)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
    basic.pause(ayar)
})
