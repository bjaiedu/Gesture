//% weight=10 color=#9F79EE icon="\uf108" block="姿势传感器"
namespace APDS9960 {
    const gstEventID = 3100;
    let state: boolean = false;

    //% blockId="SET_GESTURE_VALUE_EVENT" block="手势运动|%gesture"
    //% weight=100 blockGap=16
    export function onGesture(gesture: Direction_type, handler: Action) {
        if (state != true) {
            Init_apds9960();
            enableProximity(true);
            enableGesture(true);
        }
        control.onEvent(gstEventID, gesture, handler);
        control.inBackground(() => {
            state = true;
            while (true) {
                gesture = readGesture();
                control.raiseEvent(gstEventID, gesture);
            }
        })
    }
}