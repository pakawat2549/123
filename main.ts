basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 150)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 15) {
        while (maqueen.Ultrasonic(PingUnit.Centimeters) < 20) {
            while (maqueen.Ultrasonic(PingUnit.Centimeters) > 15) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 150)
            }
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
            maqueen.motorStop(maqueen.Motors.M1)
        }
    }
})
