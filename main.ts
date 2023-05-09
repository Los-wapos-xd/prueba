basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 || maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 25) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 70)
        }
    } else {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 2 || maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 2) {
            basic.pause(700)
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        }
    }
})
