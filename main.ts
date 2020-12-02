basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 13) {
        while (maqueen.Ultrasonic(PingUnit.Centimeters) > 15) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        }
    }
})
