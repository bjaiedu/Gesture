// % weight=10 color=#9F79EE icon="\uf108" block="姿势传感器"
namespace mytest{

    enum Direction_type{

        DIR_NONE = 0,

        DIR_UP = 1,

        DIR_DOWN = 2,

        DIR_LEFT = 3,

        DIR_RIGHT = 4

    }

    export class apds9960{

        begin(x:number,y:number,z:number){

            return true

        }



        enableProximity(x:number){}

        enableGesture(x:number){}

        readGesture(){return Direction_type.DIR_LEFT}

    }

    const gestureEventId = 4100;

    let lastGetureValue = Direction_type.DIR_NONE;

    let apds = new apds9960();



    //% blockId="GET_GESTURE_VALUE" block="Gesture|%gesture"

    //% weight=100 color=#000012



    export function onGesture(gesture: Direction_type, handler: () => void) {

        control.onEvent(gestureEventId, gesture, handler);

        if (apds.begin(10, 0x01, 0x39)) {

            apds.enableProximity(1);

            apds.enableGesture(1);

        } else {

            basic.showIcon(IconNames.No)

        }

        control.inBackground(() => {

            const gestureValue = apds.readGesture();

            if (gestureValue != lastGetureValue) {

                lastGetureValue = gestureValue;

                control.raiseEvent(gestureEventId, lastGetureValue)

            }

            basic.pause(10)

        })

    }

}
