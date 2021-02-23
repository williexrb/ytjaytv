input.onButtonPressed(Button.A, function () {
    a += 1
})
input.onButtonPressed(Button.B, function () {
    b = 1
})
let b = 0
b = 0
let a = 0
basic.forever(function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
})
basic.forever(function () {
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 0, 0)
    basic.pause(1000)
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 50, 50)
    basic.pause(1000)
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 100, 100)
    basic.pause(1000)
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 150, 150)
    basic.pause(1000)
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 200, 200)
    basic.pause(1000)
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 255, 255)
    basic.pause(1000)
})
basic.forever(function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 0)
    basic.pause(1000)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 50)
    basic.pause(1000)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
    basic.pause(1000)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 150)
    basic.pause(1000)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 200)
    basic.pause(100)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
})
basic.forever(function () {
    if (a == 5) {
        a = 1
    }
})
basic.forever(function () {
    basic.showNumber(Tinybit.Ultrasonic_Car())
})
