let apds = new GestureSensor.apds9960
if (!((apds.begin(10, 0x01, 0x39)))) {
    basic.showIcon(IconNames.No)
} else {
    basic.showIcon(IconNames.Yes)
}
apds.enableProximity(1);
apds.enableGesture(1);
basic.forever(function () {
    let gesturevalue: number = apds.readGesture()
    basic.showNumber(gesturevalue)
})