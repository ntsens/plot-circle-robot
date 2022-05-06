let x = 0
let y = 0
let index = 0
writingrobot.autoHome()
let r = 20
let n = 20
let x_offset = 100
let y_offset = 100
while (index <= n) {
    y = r * Math.sin(index / n * 2 * Math.PI)
    x = r * Math.cos(index / n * 2 * Math.PI)
    x = x + x_offset
    y = y + y_offset
    basic.pause(100)
    writingrobot.moveXYZunblock(x, y, -32)
    index += 1
}
// 归位
basic.pause(5000)
writingrobot.autoHome()
basic.forever(function () {
	
})
