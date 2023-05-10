basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 || maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 15) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 70)
        }
    } else {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 || maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 70)
            maqueen.motorStop(maqueen.Motors.M2)
            basic.pause(700)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 120)
        } else {
        	
        }
    }
})
