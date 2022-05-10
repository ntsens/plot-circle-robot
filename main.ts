let x = 0
let y = 0
let index = 0
writingrobot.autoHome()
let r = 20
let n = 20
let x_offset = 100
let y_offset = 100
let z_offset = -42
// 准备
writingrobot.moveXYZ(x_offset, y_offset, 0)
while (index <= n) {
    y = r * Math.sin(index / n * 2 * Math.PI)
    x = r * Math.cos(index / n * 2 * Math.PI)
    x = x + x_offset
    y = y + y_offset
    basic.pause(200)
    writingrobot.moveXYZunblock(x, y, z_offset)
    index += 1
}
// 归位
writingrobot.moveXYZ(x_offset, y_offset, 0)
writingrobot.autoHome()
basic.forever(function () {
	
})
