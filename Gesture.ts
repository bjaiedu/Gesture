
namespace GestureSensor {
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

    const APDS9960_UP: number = 0x01;
    const APDS9960_DOWN: number = 0x02;
    const APDS9960_LEFT: number = 0x03;
    const APDS9960_RIGHT: number = 0x04;
    const APDS9960_FORWARD: number = 0x05;
    const APDS9960_BACKWARD: number = 0x06;

    /** ADC gain settings */
    enum apds9960AGain_t {
        APDS9960_AGAIN_1X = 0x00, /**< No gain */
        APDS9960_AGAIN_4X = 0x01,  /**< 2x gain */
        APDS9960_AGAIN_16X = 0x02, /**< 16x gain */
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
        APDS9960_GFIFO_1 = 0x00,  // Generate interrupt after 1 dataset in FIFO
        APDS9960_GFIFO_4 = 0x01,  // Generate interrupt after 2 datasets in FIFO
        APDS9960_GFIFO_8 = 0x02,  // Generate interrupt after 3 datasets in FIFO
        APDS9960_GFIFO_16 = 0x03, // Generate interrupt after 4 datasets in FIFO
    }

    /** Gesture Gain */
    enum GestureGain {
        APDS9960_GGAIN_1 = 0x00, // Gain 1x
        APDS9960_GGAIN_2 = 0x01, // Gain 2x
        APDS9960_GGAIN_4 = 0x02, // Gain 4x
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

    /** ENABLE 0x80 **/
    class enable {
        PON: number = 1;
        AEN: number = 1;
        PEN: number = 1;
        WEN: number = 1;
        AIEN: number = 1;
        PIEN: number = 1;
        GEN: number = 1;
        get(): number {
            return (this.GEN << 6) | (this.PIEN << 5) | (this.AIEN << 4) | (this.WEN << 3) | (this.PEN << 2) | (this.AEN << 1) | this.PON;
        }
    }

    class control {
        AGAIN: number = 2;
        PGAIN: number = 2;
        LDRIVE: number = 2;
        get(): number {
            return (this.LDRIVE << 6) | (this.PGAIN << 2) | this.AGAIN;
        }
    }

    class config1 {
        WLONG: number = 1;
        get(): number { return this.WLONG << 1; }
    }

    class config2 {
        LED_BOOST: number = 2;
        CPSIEN: number = 1;
        PSIEN: number = 1;
        get(): number {
            return (this.PSIEN << 7) | (this.CPSIEN << 6) | (this.LED_BOOST << 4) | 1;
        }
    }

    class config3 {
        PMASK_R: number = 1;
        PMASK_L: number = 1;
        PMASK_D: number = 1;
        PMASK_U: number = 1;
        SAI: number = 1;
        PCMP: number = 1;
        get(): number {
            return (this.PCMP << 5) | (this.SAI << 4) | (this.PMASK_U << 3) |
                (this.PMASK_D << 2) | (this.PMASK_L << 1) | this.PMASK_R;
        }
    }

    class gconf1 {
        GEXPERS: number = 2;
        GEXMSK: number = 4;
        GFIFOTH: number = 2;
        get(): number {
            return (this.GFIFOTH << 6) | (this.GEXMSK << 2) | this.GEXPERS;
        }
    }

    class gconf2 {
        GWTIME: number = 3;
        GLDRIVE: number = 2;
        GGAIN: number = 2;
        get(): number { return (this.GGAIN << 5) | (this.GLDRIVE << 3) | this.GWTIME; }
    }

    class gconf3 {
        GDIMS: number = 2;
        get(): number { return this.GDIMS; }
    }

    class gconf4 {
        GMODE: number = 1;
        GIEN: number = 2;
        get(): number { return (this.GIEN << 1) | this.GMODE; }
        set(data: number): void {
            this.GIEN = (data >> 1) & 0x01;
            this.GMODE = data & 0x01;
        }
    }

    class gpulse {
        GPULSE: number = 6;
        GPLEN: number = 2;
        get(): number { return (this.GPLEN << 6) | this.GPULSE; }
    }

    class ppulse {
        PPULSE: number = 6;
        PPLEN: number = 2;
        get(): number { return (this.PPLEN << 6) | this.PPULSE; }
    }

    class pers {
        APERS: number = 4;
        PPERS: number = 4;
        get(): number { return (this.PPERS << 4) | this.APERS; };
    }

    class status {
        AVALID: number = 1;
        PVALID: number = 1;
        GINT: number = 1;
        AINT: number = 1;
        PINT: number = 1;
        PGSAT: number = 1;
        CPSAT: number = 1;
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

    class gstatus {
        GVALID: number = 1;
        GFOV: number = 1;
        set(data: number) {
            this.GFOV = (data >> 1) & 0x01;
            this.GVALID = data & 0x01;
        }
    }

    export class APDS9960 {

        private _i2caddr: number;

        private gestCnt: number;
        private UCount: number;
        private DCount: number;
        private LCount: number;
        private RCount: number;

        _enable = new enable();
        _pers = new pers();
        _ppulse = new ppulse();
        _control = new control();
        _gpulse = new gpulse();
        _status = new status();
        _gstatus = new gstatus();
        _gconf1 = new gconf1();
        _gconf2 = new gconf2();
        _gconf3 = new gconf3();
        _gconf4 = new gconf4();
        _config1 = new config1;
        _config2 = new config2();
        _config3 = new config3;

        /**I2C function **/

        private write8(reg: number, value: number): void {
            let buf: Buffer = pins.createBuffer(2);
            buf[0] = reg;
            buf[1] = value;
            pins.i2cWriteBuffer(APDS9960_I2C_ADDR, buf, false);
        }

        private read(reg: number): number {
            pins.i2cWriteNumber(APDS9960_I2C_ADDR, reg, NumberFormat.UInt8BE);
            let buf: number = pins.i2cReadNumber(APDS9960_I2C_ADDR, NumberFormat.UInt8BE);
            return buf;
        }

        private read8(reg: number): number {
            pins.i2cWriteNumber(APDS9960_I2C_ADDR, reg, NumberFormat.UInt8BE);
            let buf: Buffer = pins.i2cReadBuffer(reg, pins.sizeOf(NumberFormat.UInt8BE), false);
            return buf.getNumber(NumberFormat.UInt8BE, 0);
        }

        private read16(reg: number): number {
            pins.i2cWriteNumber(APDS9960_I2C_ADDR, reg, NumberFormat.UInt8BE);
            let buf: Buffer = pins.i2cReadBuffer(reg, pins.sizeOf(NumberFormat.UInt16BE), false);
            return (buf[0] << 8) | buf[1];
        }

        private read16R(reg: number): number {
            pins.i2cWriteNumber(APDS9960_I2C_ADDR, reg, NumberFormat.UInt8BE);
            let buf: Buffer = pins.i2cReadBuffer(reg, pins.sizeOf(NumberFormat.UInt16BE), false);
            return (buf[1] << 8) | buf[0];
        }

        private read32(reg: number): number {
            pins.i2cWriteNumber(APDS9960_I2C_ADDR, reg, NumberFormat.UInt8BE);
            let buf: Buffer = pins.i2cReadBuffer(reg, pins.sizeOf(NumberFormat.UInt32BE), false);
            return (buf[0] << 24) | (buf[1] << 16) | (buf[2] << 8) | buf[3];
        }

        begin(iTimeMS: number = 10, aGain: apds9960AGain_t = apds9960AGain_t.APDS9960_AGAIN_4X, addr: number = APDS9960_I2C_ADDR): boolean {
            this._i2caddr = addr;
            let X: NumberFormat.UInt8BE = this.read8(APDS9960_ID);
            if (X != 0xAB) {
                return false;
            }

            this.setADCIntegrationTime(iTimeMS);
            this.setADCGain(aGain);

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
            this.setGestureFIFOThreshold(FIFOInterrupts.APDS9960_GFIFO_4);
            this.setGestureGain(GestureGain.APDS9960_GGAIN_4);
            this.setGestureProximityThreshold(50);
            this.resetCounts();

            this._gpulse.GPLEN = PulseLenghts.APDS9960_GPULSE_32US;
            this._gpulse.GPULSE = 9; // 10 pulses
            this.write8(APDS9960_GPULSE, this._gpulse.get());

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
            this.write8(APDS9960_ATIME, temp);
        }

        getADCIntegrationTime(): number {
            let temp: number;
            temp = this.read8(APDS9960_ATIME);
            temp = 256 - temp;
            temp *= 2.78;
            return temp;
        }

        setADCGain(aGain: apds9960AGain_t): void {
            this._control.AGAIN = aGain;
            this.write8(APDS9960_CONTROL, this._control.get());
        }

        getADCGain(): apds9960AGain_t {
            return (this.read8(APDS9960_CONTROL) & 0x03);
        }

        setLED(drive: apds9960LedDrive_t, boost: apds9960LedBoost_t): void {
            this._config2.LED_BOOST = boost;
            this.write8(APDS9960_CONFIG2, this._config2.get());
            this._control.LDRIVE = drive;
            this.write8(APDS9960_CONTROL, this._control.get());
        }

        /** proximity */
        enableProximity(en: number) {
            this._enable.PEN = en;
            this.write8(APDS9960_ENABLE, this._enable.get());
        }

        setProxGain(pGain: apds9960PGain_t): void {
            this._control.PGAIN = pGain;
            this.write8(APDS9960_CONTROL, this._control.get());
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

            this._ppulse.PPLEN = pLen;
            this._ppulse.PPULSE = pulses;

            this.write8(APDS9960_PPULSE, this._ppulse.get());
        }

        enableProximityInterrupt(): void {
            this._enable.PIEN = 1;
            this.write8(APDS9960_ENABLE, this._enable.get());
            this.clearInterrupt();
        }

        disableProximityInterrupt(): void {
            this._enable.PIEN = 0;
            this.write8(APDS9960_ENABLE, this._enable.get());
        }

        readProximity(): number { return this.read8(APDS9960_PDATA); }

        setProximityInterruptThreshold(low: number, high: number, persistance: number): void {
            this.write8(APDS9960_PILT, low);
            this.write8(APDS9960_PIHT, high);

            if (persistance > 7)
                persistance = 7;
            this._pers.PPERS = persistance;
            this.write8(APDS9960_PERS, this._pers.get());
        }

        getProximityInterrupt(): number {
            this._status.set(this.read8(APDS9960_STATUS));
            return this._status.PINT;
        }

        /** gesture */
        enableGesture(en: number): void {
            if (!en) {
                this._gconf4.GMODE = 0;
                this.write8(APDS9960_GCONF4, this._gconf4.get());
            }
            this._enable.GEN = en;
            this.write8(APDS9960_ENABLE, this._enable.get());
            this.resetCounts();
        }

        gestureValid(): number {
            this._gstatus.set(this.read8(APDS9960_GSTATUS));
            return this._gstatus.GVALID;
        }

        setGestureDimensions(dims: number): void {
            this._gconf3.GDIMS = dims;
            this.write8(APDS9960_GCONF3, this._gconf3.get());
        }

        setGestureFIFOThreshold(thresh: number): void {
            this._gconf1.GFIFOTH = thresh;
            this.write8(APDS9960_GCONF1, this._gconf1.get());
        }

        setGestureGain(gain: number): void {
            this._gconf2.GGAIN = gain;
            this.write8(APDS9960_GCONF2, this._gconf2.get());
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
            let buf: Buffer;
            let gestureReceived: number;
            return 1;

            while (0) {
                let up_down_diff: number = 0;
                let left_right_diff: number = 0;
                gestureReceived = 0;
                if (!this.gestureValid())
                    return 0;
                basic.pause(30);
                toRead = this.read8(APDS9960_GFLVL);
                buf = pins.i2cReadBuffer(APDS9960_GFIFO_U, toRead, false);

                if (Math.abs(buf[0] - buf[1]) > 13)
                    up_down_diff += buf[0] - buf[1];

                if (Math.abs(buf[2] - buf[3]) > 13)
                    left_right_diff += buf[2] - buf[3];

                if (up_down_diff != 0) {
                    if (up_down_diff < 0) {
                        if (this.DCount > 0) {
                            gestureReceived = APDS9960_UP;
                        } else
                            this.UCount++;
                    } else if (up_down_diff > 0) {
                        if (this.UCount > 0) {
                            gestureReceived = APDS9960_DOWN;
                        } else
                            this.DCount++;
                    }
                }

                if (left_right_diff != 0) {
                    if (left_right_diff < 0) {
                        if (this.RCount > 0) {
                            gestureReceived = APDS9960_LEFT;
                        } else
                            this.LCount++;
                    } else if (left_right_diff > 0) {
                        if (this.LCount > 0) {
                            gestureReceived = APDS9960_RIGHT;
                        } else
                            this.RCount++;
                    }
                }
                return 1;
            }
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
            this._enable.AEN = en;
            this.write8(APDS9960_ENABLE, this._enable.get());
        }

        colorDataReady(): number {
            this._status.set(this.read8(APDS9960_STATUS));
            return this._status.AVALID;
        }

        getColorData(r: number, g: number, b: number, c: number) {
            c = this.read16R(APDS9960_CDATAL);
            r = this.read16R(APDS9960_RDATAL);
            g = this.read16R(APDS9960_GDATAL);
            b = this.read16R(APDS9960_BDATAL);
        }

        calculateColorTemperature(r: number, g: number, b: number): number {
            let X: number, Y: number, Z: number;
            let xc: number, yc: number;
            let n: number;
            let cct: number;

            X = (-0.14282 * r) + (1.54924 * g) + (-0.95641 * b);
            Y = (-0.32466 * r) + (1.57837 * g) + (-0.73191 * b);
            Z = (-0.68202 * r) + (0.77073 * g) + (0.56332 * b);

            xc = (X) / (X + Y + Z);
            yc = (Y) / (X + Y + Z);

            /* 3. Use McCamy's formula to determine the CCT    */
            n = (xc - 0.3320) / (0.1858 - yc);

            /* Calculate the final CCT */
            cct = (449.0 * Math.pow(n, 3)) + (3525.0 * Math.pow(n, 2)) + (6823.3 * n) + 5520.33;

            /* Return the results in degrees Kelvin */
            return cct;
        }

        calculateLux(r: number, g: number, b: number) {
            let illuminance: number;
            illuminance = (-0.32466 * r) + (1.57837 * g) + (-0.73191 * b);
            return illuminance;
        }

        enableColorInterrupt(): void {
            this._enable.AIEN = 1;
            this.write8(APDS9960_ENABLE, this._enable.get());
        }

        disableColorInterrupt(): void {
            this._enable.AIEN = 0;
            this.write8(APDS9960_ENABLE, this._enable.get());
        }

        clearInterrupt(): void {
            this.write8(APDS9960_AICLEAR, 0);   //函数需要修正
        }

        setIntLimits(low: number, high: number): void {
            this.write8(APDS9960_AILTIL, low & 0xFF);
            this.write8(APDS9960_AILTH, low >> 8);
            this.write8(APDS9960_AIHTL, high & 0xFF);
            this.write8(APDS9960_AIHTH, high >> 8);
        }

        /** turn on/of elements */
        enable(en: number): void {
            this._enable.PON = en;
            this.write8(APDS9960_ENABLE, this._enable.get());
        }
    }
}




