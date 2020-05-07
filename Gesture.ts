
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
    export enum enable {
        PON = 1,
        AEN = 1,
        PEN = 1,
        WEN = 1,
        AIEN = 1,
        PIEN = 1,
        GEN = 1,
        get = (this.GEN << 6) | (this.PIEN << 5) | (this.AIEN << 4) | (this.WEN << 3) | (this.PEN << 2) | (this.AEN << 1) | this.PON,
    }

    export class APDS9960 {

        private _i2caddr: number;

        private gestCnt: number;
        private UCount: number;
        private DCount: number;
        private LCount: number;
        private RCount: number;

        export plusss():number {
               return enable.get;         
        }
}



