let apds = new GestureSensor.apds9960;
if (!(apds.begin(10, GestureSensor.apds9960AGain_t.APDS9960_AGAIN_4X, GestureSensor.APDS9960_I2C_ADDR))) {
    basic.showIcon(IconNames.No);
} else {
    basic.showIcon(IconNames.Yes);
}
basic.pause(1000);
apds.enableProximity(1);
apds.enableGesture(1);
basic.forever(function () {
    let gesturevalu = apds.readGesture();
    basic.showNumber(apds.value1);
    basic.pause(1000);
    basic.showNumber(apds.value2);
    basic.pause(1000);
    basic.showNumber(apds.value3);
    basic.pause(1000)
})