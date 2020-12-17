input.onButtonPressed(Button.A, function () {
    speed += -1
})
input.onButtonPressed(Button.B, function () {
    speed += 1
})
let hue = 0
let tree = ChristmasTree.create()
tree.changeMode(LEDMode.Free)
for (let index = 0; index <= 81; index++) {
    hue = 360 / 81 * index
    tree.setPixelColor(index, neopixel.hsl(hue, 100, 50))
}
let speed = 1
basic.forever(function () {
    tree.rainbowAnimation(speed)
    tree.update()
})
