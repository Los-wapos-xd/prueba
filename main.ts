basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 || maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 70)
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 25) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        } else {
            maqueen.motorStop(maqueen.Motors.All)
        }
    } else {
    	
    }
})
