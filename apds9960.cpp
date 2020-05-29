#include "pxt.h"
#include "math.h"

enum Direction_type {
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
};

//% weight=10 color=#9F79EE icon="\uf108"
namespace  APDS9960{
    /** I2C address 0x39 */
    #define APDS9960_ADDRESS 0x39
    /** I2C Registers */
    #define APDS9960_ENABLE 0x80
    #define APDS9960_ID 0x92
    #define APDS9960_GPENTH 0xA0
    #define APDS9960_GEXTH 0xA1
    #define APDS9960_GCONF1 0xA2
    #define APDS9960_GCONF2 0xA3
    #define APDS9960_STATUS 0x93
    #define APDS9960_CONFIG2 0x90
    #define APDS9960_GOFFSET_U 0xA4
    #define APDS9960_GOFFSET_D 0xA5
    #define APDS9960_GOFFSET_L 0xA7
    #define APDS9960_GOFFSET_R 0xA9
    #define APDS9960_GPULSE 0xA6
    #define APDS9960_GCONF3 0xAA
    #define APDS9960_GCONF4 0xAB
    #define APDS9960_GFLVL 0xAE
    #define APDS9960_GSTATUS 0xAF
    #define APDS9960_AICLEAR 0xE7
    #define APDS9960_GFIFO_U 0xFC
    #define APDS9960_GFIFO_D 0xFD
    #define APDS9960_GFIFO_L 0xFE
    #define APDS9960_GFIFO_R 0xFF

    /**
    * Enable Register : 0x80
    * Reserved<7> = 0b0; GEN<6> = 0b1; PIEN<5> = 0b1; AIEN<4> = 0b1;
    *    WEN<3>   = 0b1; PEN<2> = 0b1; AEN<1>  = 0b1;  PON<0>  = 0b1;
    */
    int enable_type[7] = {1, 0, 0, 1, 1, 0, 1};
    uint8_t _enable = (enable_type[6] << 6) | (enable_type[5] << 5) | (enable_type[4] << 4) | (enable_type[3] << 3) | (enable_type[2] << 2) | (enable_type[1] >> 1) | enable_type[0];

    /**
    * Gesture Configuration One Register : 0xA2
    * GFIFOTH<7:6> = 0b10; GEXMSK<5:2> =0b00100 ; GEXPERS<1:0> = 0b10;
    */
    uint8_t gconf1_type[3] = {2, 0, 1};
    uint8_t _gconf1 = (gconf1_type[2] << 6) | (gconf1_type[1] << 2) | gconf1_type[0];

    /**
    * Gesture Configuration Two Register : 0xA3
    * RESERVED<7> = 0b0; GGAIN<6:5> = 0b10; GLDRIVE<4:3> = 0b10; GWTIME<2:0> = 0b011;
    */
    uint8_t gconf2_type[3] = {3, 1, 2};
    uint8_t _gconf2 = (gconf2_type[2] << 5) | (gconf2_type[1] << 3) | gconf2_type[0];

    /**
    *Gesture Pulse Count and Length Register : 0xA6
    *GPLEN<7:6> = 0b00; GPULSE<5:0> = 0b00000;
    */
    uint8_t gpulse_type[2] = {9, 2};
    uint8_t _gpulse = (gpulse_type[1] << 6) | gpulse_type[0];

    /**
    * Gesture Configuration Three Register : 0xAA
    * RESERVED<7:2> = 0b000000; GDMIS<1:0> =0b00;
    */
    uint8_t gconf3_type = 0;
    uint8_t _gconf3 = gconf3_type;

    /**
    *Gesture Configuration Four Register : 0xAB
    *GFIFO_CLR<2> = 0b1; GIEN<1> = 0b0 ; GMODE<0> = 0b1;
    */
    uint8_t gconf4_type[3] = {1, 0, 1};
    uint8_t _gconf4 = (gconf4_type[2] << 2) | (gconf4_type[1] << 1) | gconf4_type[0];

    /**
    *Gesture Status Register : 0xAF
    *RESERVED<7:2> = 0b000000; GFOV<1> = 0b0; GVALID<0> = 0b0;
    */
    uint8_t gstatus_type[2] = {1, 1};
    uint8_t _gstatus = (gstatus_type[1] << 1) | gstatus_type[0];

    uint8_t UCount;
    uint8_t DCount;
    uint8_t LCount;
    uint8_t RCount;
    uint8_t data_buf[256];

    void write8(uint8_t reg, uint8_t value) {
        uint8_t buf[2];
        buf[0] = reg;
        buf[1] = value;
        uBit.i2c.write(APDS9960_ADDRESS << 1 , (const char *)buf, 2);
    }

    void read8(uint8_t reg, uint8_t *buf) {
        uBit.i2c.write(APDS9960_ADDRESS << 1, (const char *)&reg, 1, true);
        uBit.i2c.read(APDS9960_ADDRESS << 1, (char *)buf, 1);
    }

    uint8_t read(uint8_t reg, uint8_t num){
        uint8_t pos = 0;
        bool eof = 0;
        while (pos < num && !eof) {
            uint8_t read_now = min(32, num - pos);
            for (uint8_t i = 0; i < read_now; i++){
                read8(reg + pos,&data_buf[pos]);
                pos++;
            }
        }
        return pos;
    }

    uint8_t gestureValid() {
        uint8_t val;
        read8(APDS9960_GSTATUS, &val);
        gstatus_type[0] = val & 0x01;
        gstatus_type[1] = val >> 1 & 0x01;
        return gstatus_type[0];
    }

    void setGestureDimensions(uint8_t dims) {
        gconf3_type = dims;
        write8(APDS9960_GCONF3, _gconf3);
    }

    void setGestureFIFOThreshold(uint8_t thresh) {
        gconf1_type[2] = thresh;
        write8(APDS9960_GCONF1, _gconf1);
    }

    void setGestureGain(uint8_t gain) {
        gconf2_type[2] = gain;
        write8(APDS9960_GCONF2, _gconf2);
    }

    void setGestureProximityThreshold(uint8_t threshold) {
        write8(APDS9960_GPENTH, threshold);
    }

    void setGestureExitThreshold(uint8_t threshold){
        write8(APDS9960_GEXTH, threshold);
    }

    void setGestureGPulse(uint8_t gplen, uint8_t gpulse) {
        gpulse_type[0] = gpulse;
        gpulse_type[1] = gplen;
        write8(APDS9960_GPULSE, _gpulse);
    }

    void setGestureOffset(uint8_t offset_up, uint8_t offset_down, uint8_t offset_left, uint8_t offset_right) {
        write8(APDS9960_GOFFSET_U, offset_up);
        write8(APDS9960_GOFFSET_D, offset_down);
        write8(APDS9960_GOFFSET_L, offset_left);
        write8(APDS9960_GOFFSET_R, offset_right);
    }

    void resetCounts() {
        UCount = 0;
        DCount = 0;
        LCount = 0;
        RCount = 0;
    }

    void enable(bool en) {
        enable_type[0] = en;
        write8(APDS9960_ENABLE, _enable);
    }

    void enableProximity(bool en) {
        enable_type[2] = en;
        write8(APDS9960_ENABLE, _enable);
    }

    void disableProximityInterrupt() {
        enable_type[5] = 0;
        write8(APDS9960_ENABLE, _enable);
    }

    void enableGesture(bool en) {
        if (!en) {
            gconf4_type[0] = 0;
            write8(APDS9960_GCONF4, _gconf4);
        }
        enable_type[6] = en;
        write8(APDS9960_ENABLE, _enable);
        resetCounts();
    }

    void clearInterrupt() {
        write8(APDS9960_AICLEAR, 0);
    }

    bool Init_apds9960() {
        uint8_t X;
        read8(APDS9960_ID, &X);
        if (X != 0xAB) {
            return false;
        }

        enableGesture(false);
        enableProximity(false);;

        clearInterrupt();

        enable(false);
        uBit.sleep(10);
        enable(true);
        uBit.sleep(10);;

        setGestureDimensions(0);                // 手势方向设定: all:0/3, U/D:1, L/R:2
        setGestureFIFOThreshold(1);             // 中断产生：1data:0, 4datas:1, 8datas:2, 16datas:3
        setGestureGain(2);                      // 放大倍数：1x:0, 2x:1, 4x:2, 8x:3
        setGestureProximityThreshold(50);       // 手势接近阈值 0~127，Bit 4 set 0；
        setGestureExitThreshold(0);
        resetCounts();

        setGestureGPulse(3, 9);          // gplen:0, 1, 2, 3  gpulse:<63:0> + 1 pulses

        return true;
    }

    uint8_t readGesture() {
        uint8_t toRead, bytesRead;
        Direction_type gestureReceived;
        unsigned long t = 0;
        int up_down_diff, left_right_diff;

        while (1) {
            up_down_diff = 0;
            left_right_diff = 0;
            gestureReceived = NONE;
            if (!gestureValid()) {
                return 0;
            }

            read8(APDS9960_GFLVL, &toRead);
            bytesRead = read(APDS9960_GFIFO_U, toRead);

            if (abs((int)data_buf[0] - (int)data_buf[1]) > 15)
                up_down_diff += (int)data_buf[0] - (int)data_buf[1];

            if (abs((int)data_buf[2] - (int)data_buf[3]) > 15)
                left_right_diff += (int)data_buf[2] - (int)data_buf[3];

            if (up_down_diff != 0) {
                if (up_down_diff < 0) {
                    if (DCount > 0) {
                        gestureReceived = UP;
                    } else
                        UCount++;
                } else if (up_down_diff > 0) {
                    if (UCount > 0) {
                        gestureReceived = DOWN;
                    } else
                        DCount++;
                }
            }

            if (left_right_diff != 0) {
                if (left_right_diff < 0) {
                    if (RCount > 0) {
                        gestureReceived = LEFT;
                    } else
                        LCount++;
                } else if (left_right_diff > 0) {
                    if (LCount > 0) {
                        gestureReceived = RIGHT;
                    } else
                        RCount++;
                }
            }

            if (up_down_diff != 0 || left_right_diff != 0) {
                t = uBit.systemTime();
            }

            if (gestureReceived || uBit.systemTime() - t > 300) {
                resetCounts();
                return gestureReceived;
            }
        }
    }
}