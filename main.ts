//% weight=10 color=#9F79EE icon="\uf108" block="姿势传感器"
namespace APDS9960 {
    /** I2C address 0x39 */
    const APDS9960_I2C_ADDR = 0x39;
    /** I2C Registers */
    const APDS9960_RAM = 0x00;
    const APDS9960_ENABLE = 0x80;
    const APDS9960_ATIME = 0x81;
    const APDS9960_WTIME = 0x83;
    const APDS9960_AILTIL = 0x84;
    const APDS9960_AILTH = 0x85;
    const APDS9960_AIHTL = 0x86;
    const APDS9960_AIHTH = 0x87;
    const APDS9960_PILT = 0x89;
    const APDS9960_PIHT = 0x8B;
    const APDS9960_PERS = 0x8C;
    const APDS9960_CONFIG1 = 0x8D;
    const APDS9960_PPULSE = 0x8E;
    const APDS9960_CONTROL = 0x8F;
    const APDS9960_CONFIG2 = 0x90;
    const APDS9960_ID = 0x92;
    const APDS9960_STATUS = 0x93;
    const APDS9960_CDATAL = 0x94;
    const APDS9960_CDATAH = 0x95;
    const APDS9960_RDATAL = 0x96;
    const APDS9960_RDATAH = 0x97;
    const APDS9960_GDATAL = 0x98;
    const APDS9960_GDATAH = 0x99;
    const APDS9960_BDATAL = 0x9A;
    const APDS9960_BDATAH = 0x9B;
    const APDS9960_PDATA = 0x9C;
    const APDS9960_POFFSET_UR = 0x9D;
    const APDS9960_POFFSET_DL = 0x9E;
    const APDS9960_CONFIG3 = 0x9F;
    const APDS9960_GPENTH = 0xA0;
    const APDS9960_GEXTH = 0xA1;
    const APDS9960_GCONF1 = 0xA2;
    const APDS9960_GCONF2 = 0xA3;
    const APDS9960_GOFFSET_U = 0xA4;
    const APDS9960_GOFFSET_D = 0xA5;
    const APDS9960_GOFFSET_L = 0xA7;
    const APDS9960_GOFFSET_R = 0xA9;
    const APDS9960_GPULSE = 0xA6;
    const APDS9960_GCONF3 = 0xAA;
    const APDS9960_GCONF4 = 0xAB;
    const APDS9960_GFLVL = 0xAE;
    const APDS9960_GSTATUS = 0xAF;
    const APDS9960_IFORCE = 0xE4;
    const APDS9960_PICLEAR = 0xE5;
    const APDS9960_CICLEAR = 0xE6;
    const APDS9960_AICLEAR = 0xE7;
    const APDS9960_GFIFO_U = 0xFC;
    const APDS9960_GFIFO_D = 0xFD;
    const APDS9960_GFIFO_L = 0xFE;
    const APDS9960_GFIFO_R = 0xFF;
    export enum Direction_type {
        //% block=None
        DIR_NONE = 0,
        //% block=UP
        DIR_UP = 1,
        //% block=DOWN
        DIR_DOWN = 2,
        //% block=LEFT
        DIR_LEFT = 3,
        //% block=RIGHT
        DIR_RIGHT = 4,
        //% block=NEAR
        DIR_NEAR = 5,
        //% block=FAR
        DIR_FAR = 6,
    }

    export enum ATIME_type {
        //% block=2.78ms
        Atime_2_78 = 2.78,
        //% block=10ms
        Atime_10 = 10,
        //% block=27.8ms
        Atime_27_8 = 27.8,
        //% block=20ms
        Atime_20 = 20,
        //% block=200ms
        Atime_200 = 200,
        //% block=712ms
        Atime_712= 712,
    }
    /** ADC gain settings */
    enum apds9960AGain_t {
        //% block=1x
        APDS9960_AGAIN_1X = 0x00, /**< No gain */
        //% block=4x
        APDS9960_AGAIN_4X = 0x01,  /**< 2x gain */
        //% block=16x
        APDS9960_AGAIN_16X = 0x02, /**< 16x gain */
        //% block=64x
        APDS9960_AGAIN_64X = 0x03  /**< 64x gain */
    }
    /** Proxmity gain settings */
    enum apds9960PGain_t {
        APDS9960_PGAIN_1X = 0x00, /**< 1x gain */
        APDS9960_PGAIN_2X = 0x04, /**< 2x gain */
        APDS9960_PGAIN_4X = 0x08, /**< 4x gain */
        APDS9960_PGAIN_8X = 0x0C  /**< 8x gain */
    }
    /** Pulse length settings */
    enum apds9960PPulseLen_t {
        APDS9960_PPULSELEN_4US = 0x00,  /**< 4uS */
        APDS9960_PPULSELEN_8US = 0x40,  /**< 8uS */
        APDS9960_PPULSELEN_16US = 0x80, /**< 16uS */
        APDS9960_PPULSELEN_32US = 0xC0  /**< 32uS */
    }
    /** LED drive settings */
    enum apds9960LedDrive_t {
        APDS9960_LEDDRIVE_100MA = 0x00, /**< 100mA */
        APDS9960_LEDDRIVE_50MA = 0x40,  /**< 50mA */
        APDS9960_LEDDRIVE_25MA = 0x80,  /**< 25mA */
        APDS9960_LEDDRIVE_12MA = 0xC0   /**< 12.5mA */
    }
    /** LED boost settings */
    enum apds9960LedBoost_t {
        APDS9960_LEDBOOST_100PCNT = 0x00, /**< 100% */
        APDS9960_LEDBOOST_150PCNT = 0x10, /**< 150% */
        APDS9960_LEDBOOST_200PCNT = 0x20, /**< 200% */
        APDS9960_LEDBOOST_300PCNT = 0x30  /**< 300% */
    }
    /** Dimensions */
    enum dimensions {
        APDS9960_DIMENSIONS_ALL = 0x00,        // All dimensions
        APDS9960_DIMENSIONS_UP_DOWN = 0x01,    // Up/Down dimensions
        APGS9960_DIMENSIONS_LEFT_RIGHT = 0x02, // Left/Right dimensions
    }
    /** FIFO Interrupts */
    enum FIFOInterrupts {
        //% block=GFIGO_1
        APDS9960_GFIFO_1 = 0x00,  // Generate interrupt after 1 dataset in FIFO
        //% block=GFIFO_4
        APDS9960_GFIFO_4 = 0x01,  // Generate interrupt after 4 datasets in FIFO
        //% block=GFIFO_8
        APDS9960_GFIFO_8 = 0x02,  // Generate interrupt after 8 datasets in FIFO
        //% block=GFIFO_16
        APDS9960_GFIFO_16 = 0x03, // Generate interrupt after 16 datasets in FIFO
    }
    /** Gesture Gain */
    enum GestureGain {
        //% block=GGAIN_1
        APDS9960_GGAIN_1 = 0x00, // Gain 1x
        //% block=GGAIN_2
        APDS9960_GGAIN_2 = 0x01, // Gain 2x
        //% block=GGAIN_4
        APDS9960_GGAIN_4 = 0x02, // Gain 4x
        //% block=GGAIN_8
        APDS9960_GGAIN_8 = 0x03, // Gain 8x
    }
    /** Pulse Lenghts */
    enum PulseLenghts {
        APDS9960_GPULSE_4US = 0x00,  // Pulse 4us
        APDS9960_GPULSE_8US = 0x01,  // Pulse 8us
        APDS9960_GPULSE_16US = 0x02, // Pulse 16us
        APDS9960_GPULSE_32US = 0x03, // Pulse 32us
    }
    enum GestureState {
        APDS9960_None = 0x00,    /**< Gesture None*/
        APDS9960_UP = 0x01,      /**< Gesture Up */
        APDS9960_DOWN = 0x02,    /**< Gesture Down */
        APDS9960_LEFT = 0x03,    /**< Gesture Left */
        APDS9960_RIGHT = 0x04,  /**< Gesture Right */
    }
    /** enable 0x80 */
    class enable_type {
        PON: number;
        AEN: number;
        PEN: number;
        WEN: number;
        AIEN: number;
        PIEN: number;
        GEN: number;
        get(): number {
            return (this.GEN << 6) | (this.PIEN << 5) | (this.AIEN << 4) |
                (this.WEN << 3) | (this.PEN << 2) | (this.AEN << 1) | this.PON
        }
    }
    let _enable = new enable_type();
    class control_type {
        AGAIN: number;
        PGAIN: number;
        LDRIVE: number;
        get(): number { return (this.LDRIVE << 6) | (this.PGAIN << 2) | this.AGAIN }
    }
    let _control = new control_type();
    class config1 {
        WLONG: number;
        get(): number { return this.WLONG << 1 }
    }
    let _config1 = new config1();
    class config2 {
        LED_BOOST: number;
        CPSIEN: number;
        PSIEN: number;
        get(): number {
            return (this.PSIEN << 7) | (this.CPSIEN << 6) | (this.LED_BOOST << 4) | 1;
        }
    }
    let _config2 = new config2();
    class config3 {
        PMASK_R: number;
        PMASK_L: number;
        PMASK_D: number;
        PMASK_U: number;
        SAI: number;
        PCMP: number;
        get(): number {
            return (this.PCMP << 5) | (this.SAI << 4) | (this.PMASK_U << 3) |
                (this.PMASK_D << 2) | (this.PMASK_L << 1) | this.PMASK_R;
        }
    }
    let _config3 = new config3();
    class gconf1 {
        GEXPERS: number;
        GEXMSK: number;
        GFIFOTH: number;
        get(): number {
            return (this.GFIFOTH << 6) | (this.GEXMSK << 2) | this.GEXPERS;
        }
    }
    let _gconf1 = new gconf1();
    class gconf2 {
        GWTIME: number;
        GLDRIVE: number;
        GGAIN: number;
        get(): number { return (this.GGAIN << 5) | (this.GLDRIVE << 3) | this.GWTIME; }
    }
    let _gconf2 = new gconf2();
    class gconf3 {
        GDIMS: number;
        get(): number { return this.GDIMS; }
    }
    let _gconf3 = new gconf3();
    class gconf4 {
        GMODE: number;
        GIEN: number;
        get(): number { return (this.GIEN << 1) | this.GMODE; }
        set(data: number): void {
            this.GIEN = (data >> 1) & 0x01;
            this.GMODE = data & 0x01;
        }
    }
    let _gconf4 = new gconf4();
    class gpulse {
        GPULSE: number;
        GPLEN: number;
        get(): number { return (this.GPLEN << 6) | this.GPULSE; }
    }
    let _gpulse = new gpulse();
    class ppulse {
        PPULSE: number;
        PPLEN: number;
        get(): number { return (this.PPLEN << 6) | this.PPULSE; }
    }
    let _ppulse = new ppulse();
    class pers {
        APERS: number;
        PPERS: number;
        get(): number { return (this.PPERS << 4) | this.APERS; };
    }
    let _pers = new pers();
    class status {
        AVALID: number;
        PVALID: number;
        GINT: number;
        AINT: number;
        PINT: number;
        PGSAT: number;
        CPSAT: number;
        set(data: number): void {
            this.AVALID = data & 0x01;
            this.PVALID = (data >> 1) & 0x01;
            this.GINT = (data >> 2) & 0x01;
            this.AINT = (data >> 4) & 0x01;
            this.PINT = (data >> 5) & 0x01;
            this.PGSAT = (data >> 6) & 0x01;
            this.CPSAT = (data >> 7) & 0x01;
        }
    }
    let _status = new status();
    class gstatus {
        GVALID: number;
        GFOV: number;
        set(data: number) {
            this.GFOV = (data >> 1) & 0x01;
            this.GVALID = data & 0x01;
        }
    }
    let _gstatus = new gstatus();
    class apds9960 {
        private data_buf: Buffer;
        private gestCnt: number;
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
        /** begin and init */
        resetReg() {
            _enable.PON = 1;
            _enable.AEN = 1;
            _enable.PEN = 1;
            _enable.WEN = 1;
            _enable.AIEN = 1;
            _enable.PIEN = 1;
            _enable.GEN = 1;
            _control.AGAIN = 2;
            _control.PGAIN = 2;
            _control.LDRIVE = 2;
            _config1.WLONG = 1;
            _config2.LED_BOOST = 2;
            _config2.CPSIEN = 1;
            _config2.PSIEN = 1;
            _config3.PMASK_R = 1;
            _config3.PMASK_L = 1;
            _config3.PMASK_D = 1;
            _config3.PMASK_U = 1;
            _config3.SAI = 1;
            _config3.PCMP = 1;
            _gconf1.GEXPERS = 2;
            _gconf1.GEXMSK = 4;
            _gconf1.GFIFOTH = 2;
            _gconf2.GWTIME = 3;
            _gconf2.GLDRIVE = 2;
            _gconf2.GGAIN = 2;
            _gconf3.GDIMS = 2;
            _gconf4.GMODE = 1;
            _gconf4.GIEN = 2;
            _gpulse.GPULSE = 6;
            _gpulse.GPLEN = 2;
            _ppulse.PPULSE = 6;
            _ppulse.PPLEN = 2;
            _pers.APERS = 4;
            _pers.PPERS = 4;
            _status.AVALID = 1;
            _status.PVALID = 1;
            _status.GINT = 1;
            _status.AINT = 1;
            _status.PINT = 1;
            _status.PGSAT = 1;
            _status.CPSAT = 1;
            _gstatus.GVALID = 1;
            _gstatus.GFOV = 1;
            this.data_buf = pins.createBuffer(256);
        }

        begin(fifoin:FIFOInterrupts, gg:GestureGain): boolean {
            this.resetReg();
            let X: NumberFormat.UInt8BE = this.read8(APDS9960_ID);
            if (X != 0xAB) {
                return false;
            }
            this.setADCIntegrationTime(10);
            this.setADCGain(apds9960AGain_t.APDS9960_AGAIN_4X);

            this.enableGesture(0);
            this.enableProximity(0);
            this.enableColor(0);

            this.disableColorInterrupt();
            this.disableProximityInterrupt();
            this.clearInterrupt();

            this.enable(0);
            basic.pause(10);
            this.enable(1);
            basic.pause(10);

            this.setGestureDimensions(dimensions.APDS9960_DIMENSIONS_ALL);
            this.setGestureFIFOThreshold(fifoin);
            this.setGestureGain(gg);
            this.setGestureProximityThreshold(50);
            this.resetCounts();
            _gpulse.GPLEN = PulseLenghts.APDS9960_GPULSE_32US;
            _gpulse.GPULSE = 9; // 10 pulses
            this.write8(APDS9960_GPULSE, _gpulse.get());
            return true;
        }
        setADCIntegrationTime(iTimeMS: NumberFormat.UInt16BE): void {
            let temp: number;
            temp = iTimeMS;
            temp /= 2.78;
            temp = 256 - temp;
            if (temp > 255)
                temp = 255;
            if (temp < 0)
                temp = 0;
            this.write8(APDS9960_ATIME, Math.round(temp));
        }
        getADCIntegrationTime(): number {
            let temp2: number;
            temp2 = this.read8(APDS9960_ATIME);
            temp2 = 256 - temp2;
            temp2 *= 2.78;
            return temp2;
        }
        setADCGain(aGain: apds9960AGain_t): void {
            _control.AGAIN = aGain;
            this.write8(APDS9960_CONTROL, _control.get());
        }
        getADCGain(): apds9960AGain_t {
            return (this.read8(APDS9960_CONTROL) & 0x03);
        }
        setLED(drive: apds9960LedDrive_t, boost: apds9960LedBoost_t): void {
            _config2.LED_BOOST = boost;
            this.write8(APDS9960_CONFIG2, _config2.get());
            _control.LDRIVE = drive;
            this.write8(APDS9960_CONTROL, _control.get());
        }
        /** proximity */
        enableProximity(en: number) {
            _enable.PEN = en;
            this.write8(APDS9960_ENABLE, _enable.get());
        }
        setProxGain(pGain: apds9960PGain_t): void {
            _control.PGAIN = pGain;
            this.write8(APDS9960_CONTROL, _control.get());
        }
        getProxGain(): apds9960PGain_t {
            return (this.read8(APDS9960_CONTROL) & 0x0C);
        }
        setProxPulse(pLen: apds9960PPulseLen_t, pulses: number) {
            if (pulses < 1)
                pulses = 1;
            if (pulses > 64)
                pulses = 64;
            pulses--;
            _ppulse.PPLEN = pLen;
            _ppulse.PPULSE = pulses;
            this.write8(APDS9960_PPULSE, _ppulse.get());
        }
        enableProximityInterrupt(): void {
            _enable.PIEN = 1;
            this.write8(APDS9960_ENABLE, _enable.get());
            this.clearInterrupt();
        }
        disableProximityInterrupt(): void {
            _enable.PIEN = 0;
            this.write8(APDS9960_ENABLE, _enable.get());
        }
        readProximity(): number { return this.read8(APDS9960_PDATA); }
        setProximityInterruptThreshold(low: number, high: number, persistance: number): void {
            this.write8(APDS9960_PILT, low);
            this.write8(APDS9960_PIHT, high);
            if (persistance > 7)
                persistance = 7;
            _pers.PPERS = persistance;
            this.write8(APDS9960_PERS, _pers.get());
        }
        getProximityInterrupt(): number {
            _status.set(this.read8(APDS9960_STATUS));
            return _status.PINT;
        }
        /** gesture */
        enableGesture(en: number): void {
            if (!en) {
                _gconf4.GMODE = 0;
                this.write8(APDS9960_GCONF4, _gconf4.get());
            }
            _enable.GEN = en;
            this.write8(APDS9960_ENABLE, _enable.get());
            this.resetCounts();
        }
        gestureValid(): number {
            _gstatus.set(this.read8(APDS9960_GSTATUS));
            return _gstatus.GVALID;
        }
        setGestureDimensions(dims: number): void {
            _gconf3.GDIMS = dims;
            this.write8(APDS9960_GCONF3, _gconf3.get());
        }
        setGestureFIFOThreshold(thresh: number): void {
            _gconf1.GFIFOTH = thresh;
            this.write8(APDS9960_GCONF1, _gconf1.get());
        }
        setGestureGain(gain: number): void {
            _gconf2.GGAIN = gain;
            this.write8(APDS9960_GCONF2, _gconf2.get());
        }
        setGestureProximityThreshold(thresh: number): void {
            this.write8(APDS9960_GPENTH, thresh);
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
                if (Math.abs(this.data_buf[0] - this.data_buf[1]) > 13) {
                    up_down_diff += this.data_buf[0] - this.data_buf[1];
                }
                if (Math.abs(this.data_buf[2] - this.data_buf[3]) > 13) {
                    left_right_diff += this.data_buf[2] - this.data_buf[3];
                }
                if (up_down_diff != 0) {
                    if (up_down_diff < 0) {
                        if (this.DCount > 0) {
                            gestureReceived = Direction_type.DIR_UP;
                        } else
                            this.UCount++;
                    } else if (up_down_diff > 0) {
                        if (this.UCount > 0) {
                            gestureReceived = Direction_type.DIR_DOWN;
                        } else
                            this.DCount++;
                    }
                }
                if (left_right_diff != 0) {
                    if (left_right_diff < 0) {
                        if (this.RCount > 0) {
                            gestureReceived = Direction_type.DIR_LEFT;
                        } else
                            this.LCount++;
                    } else if (left_right_diff > 0) {
                        if (this.LCount > 0) {
                            gestureReceived = Direction_type.DIR_RIGHT;
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
            return Direction_type.DIR_NONE;
        }
        resetCounts(): void {
            this.gestCnt = 0;
            this.UCount = 0;
            this.DCount = 0;
            this.LCount = 0;
            this.RCount = 0;
        }
        /** light & color */
        enableColor(en: number) {
            _enable.AEN = en;
            this.write8(APDS9960_ENABLE, _enable.get());
        }
        colorDataReady(): number {
            _status.set(this.read8(APDS9960_STATUS));
            return _status.AVALID;
        }
        getColorData(r: number, g: number, b: number, c: number) {
            c = this.read16R(APDS9960_CDATAL);
            r = this.read16R(APDS9960_RDATAL);
            g = this.read16R(APDS9960_GDATAL);
            b = this.read16R(APDS9960_BDATAL);
        }
        calculateColorTemperature(r: number, g: number, b: number): number {
            let X2: number, Y: number, Z: number;
            let xc: number, yc: number;
            let n: number;
            let cct: number;
            X2 = (-0.14282 * r) + (1.54924 * g) + (-0.95641 * b);
            Y = (-0.32466 * r) + (1.57837 * g) + (-0.73191 * b);
            Z = (-0.68202 * r) + (0.77073 * g) + (0.56332 * b);
            xc = (X2) / (X2 + Y + Z);
            yc = (Y) / (X2 + Y + Z);
            /* 3. Use McCamy's formula to determine the CCT    */
            n = (xc - 0.3320) / (0.1858 - yc);
            /* Calculate the final CCT */
            cct = (449.0 * Math.pow(n, 3)) + (3525.0 * Math.pow(n, 2)) + (6823.3 * n) + 5520.33;
            /* Return the results in degrees Kelvin */
            return Math.round(cct);
        }
        calculateLux(r: number, g: number, b: number) {
            let illuminance: number;
            illuminance = (-0.32466 * r) + (1.57837 * g) + (-0.73191 * b);
            return Math.round(illuminance);
        }
        enableColorInterrupt(): void {
            _enable.AIEN = 1;
            this.write8(APDS9960_ENABLE, _enable.get());
        }
        disableColorInterrupt(): void {
            _enable.AIEN = 0;
            this.write8(APDS9960_ENABLE, _enable.get());
        }
        clearInterrupt(): void {
            this.write8(APDS9960_AICLEAR, 0);
        }
        setIntLimits(low: number, high: number): void {
            this.write8(APDS9960_AILTIL, low & 0xFF);
            this.write8(APDS9960_AILTH, low >> 8);
            this.write8(APDS9960_AIHTL, high & 0xFF);
            this.write8(APDS9960_AIHTH, high >> 8);
        }
        /** turn on/of elements */
        enable(en: number): void {
            _enable.PON = en;
            this.write8(APDS9960_ENABLE, _enable.get());
        }
    }
    const gestureEventId = 4100;
    let lastGetureValue = Direction_type.DIR_NONE;
    let apds = new apds9960();

    //% blockId="SET_GESTURE_INIT" block="Gesture Init FIFOInterrupt|%fifoin GGain|%gg"
    //% weight=100 blockGap=16
    export function init_gesture(fifoin:FIFOInterrupts, gg:GestureGain) {
        if(apds.begin(fifoin, gg)){
            apds.enableProximity(1);
            apds.enableGesture(1);
        }else{
            basic.showIcon(IconNames.No)
        }
    }

    //% blockId="GET_GESTURE_VALUE" block="Gesture|%gesture"
    //% weight=100 blockGap=16
    export function onGesture(gesture: Direction_type, handler: Action) {
        control.onEvent(gestureEventId, gesture, handler);
        control.inBackground(() => {
            const gestureValue = apds.readGesture();
            if(gestureValue != lastGetureValue){
                lastGetureValue = gestureValue;
                control.raiseEvent(gestureEventId, lastGetureValue)
            }
            basic.pause(10)
        })
    }
}
