let temperatur = 0
let temperaturforandringer: number[] = []
input.onButtonPressed(Button.A, function () {
    temperatur = input.temperature()
    basic.showNumber(temperatur)
    temperaturforandringer.push(temperatur)
})
input.onButtonPressed(Button.B, function () {
    for (let temperatur of temperaturforandringer) {
        basic.showNumber(temperatur)
        basic.showIcon(IconNames.Sword)
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
