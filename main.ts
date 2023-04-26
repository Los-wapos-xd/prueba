let distoncijswhamgvdfzj = 0
basic.forever(function () {
    distoncijswhamgvdfzj = maqueen.Ultrasonic(PingUnit.Centimeters)
})
basic.forever(function () {
    if (distoncijswhamgvdfzj == 15) {
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (distoncijswhamgvdfzj < 15) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
    }
    if (distoncijswhamgvdfzj > 15) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    }
})
