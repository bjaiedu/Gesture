//% weight=10 color=#9F79EE icon="\uf108" block="姿势传感器"
namespace APDS9960 {
    /** I2C address 0x39 */
    const APDS9960_I2C_ADDR = 0x39;
    /** I2C Registers */

    const APDS9960_ENABLE = 0x80;
    const APDS9960_ID = 0x92;
    const APDS9960_GPENTH = 0xA0;
    const APDS9960_GEXTH = 0xA1;
    const APDS9960_GCONF1 = 0xA2;
    const APDS9960_GCONF2 = 0xA3;
    const APDS9960_STATUS = 0x93;
    const APDS9960_CONFIG2 = 0x90;
    const APDS9960_GOFFSET_U = 0xA4;
    const APDS9960_GOFFSET_D = 0xA5;
    const APDS9960_GOFFSET_L = 0xA7;
    const APDS9960_GOFFSET_R = 0xA9;
    const APDS9960_GPULSE = 0xA6;
    const APDS9960_GCONF3 = 0xAA;
    const APDS9960_GCONF4 = 0xAB;
    const APDS9960_GFLVL = 0xAE;
    const APDS9960_GSTATUS = 0xAF;
    const APDS9960_GFIFO_U = 0xFC;
    const APDS9960_GFIFO_D = 0xFD;
    const APDS9960_GFIFO_L = 0xFE;
    const APDS9960_GFIFO_R = 0xFF;

    export enum Direction_type {
        //% block=无
        NONE = 0,
        //% block=向上
        UP = 1,
        //% block=向下
        DOWN = 2,
        //% block=向左
        LEFT = 3,
        //% block=向右
        RIGHT = 4,
    }

    /**
     * Enable Register : 0x80
     * Reserved<7> = 0b0; GEN<6> = 0b1; PIEN<5> = 0b1; AIEN<4> = 0b1;
     *    WEN<3>   = 0b1; PEN<2> = 0b1; AEN<1>  = 0b1;  PON<0>  = 0b1;
     */
    let enable_type: number[] = [1, 1, 1, 1, 1, 1, 1];
    let _enable: number = (enable_type[6] << 6) | (enable_type[5] << 5) | (enable_type[4] << 4) | (enable_type[3] << 3) | (enable_type[2] << 2) | (enable_type[1] >> 1) | enable_type[0];

    /**
     * Gesture Configuration One Register : 0xA2
     * GFIFOTH<7:6> = 0b10; GEXMSK<5:2> =0b00100 ; GEXPERS<1:0> = 0b10;
     */
    let gconf1_type: number[] = [0, 0, 1];
    let _gconf1: number = (gconf1_type[2] << 6) | (gconf1_type[1] << 2) | gconf1_type[0];

    /**
     * Gesture Configuration Two Register : 0xA3
     * RESERVED<7> = 0b0; GGAIN<6:5> = 0b10; GLDRIVE<4:3> = 0b10; GWTIME<2:0> = 0b011;
     */
    let gconf2_type: number[] = [3, 0, 1];
    let _gconf2: number = (gconf2_type[2] << 5) | (gconf2_type[1] << 3) | gconf2_type[0];

    /**
     * Gesture Configuration Three Register : 0xAA
     * RESERVED<7:2> = 0b000000; GDMIS<1:0> =0b00;
     */
    let gconf3_type: number[] = [0];
    let _gconf3: number = gconf3_type[0];

    /**
     *Gesture Configuration Four Register : 0xAB
     *GFIFO_CLR<2> = 0b1; GIEN<1> = 0b0 ; GMODE<0> = 0b1;
     */
    let gconf4_type = [1, 0, 1];
    let _gconf4 = (gconf4_type[2] << 2) | (gconf4_type[1] << 1) | gconf4_type[0];

    /**
     *Gesture Pulse Count and Length Register : 0xA6
     *GPLEN<7:6> = 0b00; GPULSE<5:0> = 0b00000;
     */
    let gpulse_type: number[] = [10, 2];
    let _gpulse: number = (gpulse_type[1] << 6) | gpulse_type[0];

    /**
     *Gesture Status Register : 0xAF
     *RESERVED<7:2> = 0b000000; GFOV<1> = 0b0; GVALID<0> = 0b0;
     */
    let gstatus_type: number[] = [1, 1];
    let _gstatus: number = (gstatus_type[1] << 1) | gstatus_type[0];


    export class GestureSensor {

        private data_buf: Buffer;
        private UCount: number;
        private DCount: number;
        private LCount: number;
        private RCount: number;

        /** I2C read and write */
        private write8(reg: number, value: number): void {
            let buf: Buffer = pins.createBuffer(2);
            buf[0] = reg;
            buf[1] = value;
            pins.i2cWriteBuffer(APDS9960_I2C_ADDR, buf, false);
        }

        private read(reg: number, num: number): number {
            let pos: number = 0;
            let eof: number = 0;
            while (pos < num && !eof) {
                let read_now = Math.min(32, num - pos);
                for (let i: number = 0; i < read_now; i++) {
                    this.data_buf[pos] = this.read8(reg + pos);
                    pos++;
                }
            }
            return pos;
        }

        private read8(reg: number): number {
            pins.i2cWriteNumber(APDS9960_I2C_ADDR, reg, NumberFormat.UInt8BE);
            let buf3: Buffer = pins.i2cReadBuffer(APDS9960_I2C_ADDR, pins.sizeOf(NumberFormat.UInt8BE), false);
            return buf3.getNumber(NumberFormat.UInt8BE, 0);
        }

        private read16(reg: number): number {
            pins.i2cWriteNumber(APDS9960_I2C_ADDR, reg, NumberFormat.UInt8BE);
            let buf4: Buffer = pins.i2cReadBuffer(APDS9960_I2C_ADDR, pins.sizeOf(NumberFormat.UInt16BE), false);
            return (buf4[0] << 8) | buf4[1];
        }

        private read16R(reg: number): number {
            pins.i2cWriteNumber(APDS9960_I2C_ADDR, reg, NumberFormat.UInt8BE);
            let buf5: Buffer = pins.i2cReadBuffer(APDS9960_I2C_ADDR, pins.sizeOf(NumberFormat.UInt16BE), false);
            return (buf5[1] << 8) | buf5[0];
        }

        private read32(reg: number): number {
            pins.i2cWriteNumber(APDS9960_I2C_ADDR, reg, NumberFormat.UInt8BE);
            let buf6: Buffer = pins.i2cReadBuffer(APDS9960_I2C_ADDR, pins.sizeOf(NumberFormat.UInt32BE), false);
            return (buf6[0] << 24) | (buf6[1] << 16) | (buf6[2] << 8) | buf6[3];
        }

        /**
         * 初始化apds9960
         */
        Init_Gesture(): boolean {
            this.data_buf = pins.createBuffer(128);
            let X: NumberFormat.UInt8BE = this.read8(APDS9960_ID);
            if (X != 0xAB) {
                return false;
            }

            this.enableGesture(0);
            this.enableProximity(0);

            this.enable(0);
            basic.pause(10);
            this.enable(1);
            basic.pause(10);

            this.setGestureDimensions(0);                // 手势方向设定: all:0/3, U/D:1, L/R:2
            this.setGestureFIFOThreshold(1);             // 中断产生：1data:0, 4datas:1, 8datas:2, 16datas:3
            this.setGestureGain(3);                      // 放大倍数：1x:0, 2x:1, 4x:2, 8x:3
            this.setGestureProximityThreshold(32);       // 手势开始阈值 0~127，Bit 4 set 0；
            this.resetCounts();

            this.setGestureGPulse(3, 9);          // gplen:0, 1, 2, 3  gpulse:<63:0> + 1 pulses

            return true
        }

        enableProximity(en: number) {
            enable_type[2] = en;
            this.write8(APDS9960_ENABLE, _enable);
        }

        disableProximityInterrupt(): void {
            enable_type[5] = 0;
            this.write8(APDS9960_ENABLE, _enable);
        }

        enableGesture(en: number): void {
            if (!en) {
                gconf4_type[0] = 0;
                this.write8(APDS9960_GCONF4, _gconf4);
            }
            enable_type[6] = en;
            this.write8(APDS9960_ENABLE, _enable);
            this.resetCounts();
        }

        gestureValid(): number {
            let val = this.read8(APDS9960_GSTATUS);
            gstatus_type[0] = val & 0x01;
            gstatus_type[1] = val >> 1 & 0x01;
            return gstatus_type[0];
        }

        setGestureDimensions(dims: number): void {
            gconf3_type[0] = dims;
            this.write8(APDS9960_GCONF3, _gconf3);
        }

        setGestureFIFOThreshold(thresh: number): void {
            gconf1_type[2] = thresh;
            this.write8(APDS9960_GCONF1, _gconf1);
        }

        setGestureGain(gain: number): void {
            gconf2_type[2] = gain;
            this.write8(APDS9960_GCONF2, _gconf2);
        }

        setGestureProximityThreshold(thresh: number): void {
            this.write8(APDS9960_GPENTH, thresh);
        }

        setGestureGPulse(gplen: number, gpulse: number): void {
            gpulse_type[0] = gpulse;
            gpulse_type[1] = gplen;
            this.write8(APDS9960_GPULSE, _gpulse);
        }

        setGestureOffset(offset_up: number, offset_down: number, offset_left: number, offset_right: number): void {
            this.write8(APDS9960_GOFFSET_U, offset_up);
            this.write8(APDS9960_GOFFSET_D, offset_down);
            this.write8(APDS9960_GOFFSET_L, offset_left);
            this.write8(APDS9960_GOFFSET_R, offset_right);
        }

        readGesture(): number {
            let toRead: number;
            let bytesRead: number;
            let t: number = 0;
            let gestureReceived: number;

            while (1) {
                let up_down_diff: number = 0;
                let left_right_diff: number = 0;
                gestureReceived = 0;
                if (!this.gestureValid()) {
                    return 0;
                }

                toRead = this.read8(APDS9960_GFLVL);
                bytesRead = this.read(APDS9960_GFIFO_U, toRead);

                if (Math.abs(this.data_buf[0] - this.data_buf[1]) > 10) {
                    up_down_diff += this.data_buf[0] - this.data_buf[1];
                }

                if (Math.abs(this.data_buf[2] - this.data_buf[3]) > 10) {
                    left_right_diff += this.data_buf[2] - this.data_buf[3];
                }

                if (up_down_diff != 0) {
                    if (up_down_diff < 0) {
                        if (this.DCount > 0) {
                            gestureReceived = Direction_type.UP;
                        } else
                            this.UCount++;
                    } else if (up_down_diff > 0) {
                        if (this.UCount > 0) {
                            gestureReceived = Direction_type.DOWN;
                        } else
                            this.DCount++;
                    }
                }
                if (left_right_diff != 0) {
                    if (left_right_diff < 0) {
                        if (this.RCount > 0) {
                            gestureReceived = Direction_type.LEFT;
                        } else
                            this.LCount++;
                    } else if (left_right_diff > 0) {
                        if (this.LCount > 0) {
                            gestureReceived = Direction_type.RIGHT;
                        } else
                            this.RCount++;
                    }
                }

                if (up_down_diff != 0 || left_right_diff != 0) {
                    t = input.runningTime();
                }
                if (gestureReceived || input.runningTime() - t > 300) {
                    this.resetCounts();
                    return gestureReceived;
                }
            }
            return Direction_type.NONE;
        }

        resetCounts(): void {
            this.UCount = 0;
            this.DCount = 0;
            this.LCount = 0;
            this.RCount = 0;
        }

        enable(en: number): void {
            enable_type[0] = en;
            this.write8(APDS9960_ENABLE, _enable);
        }
    }

    const gstEventID = 4100;
    let lastGesture = Direction_type.NONE;

    //% blockId="GET_GESTURE_VALUE" block="手势运动|%gesture"
    //% weight=100 blockGap=16
    export function onGesture(gesture:Direction_type, handler:Action) {
        control.onEvent(gstEventID, gesture, handler);
        let apds = new GestureSensor();
        if (apds.Init_Gesture()) {
            apds.enableProximity(1);
            apds.enableGesture(1);
            basic.showIcon(IconNames.Yes);
        } else {
            basic.showIcon(IconNames.No);
        }
        control.inBackground(()=>{
            const gesture = apds.readGesture();
            while (true) {
                if (gesture != lastGesture) {
                    lastGesture = gesture;
                    control.raiseEvent(gstEventID, lastGesture);
                }
                basic.pause(100);
            }
        })
    }

}

















