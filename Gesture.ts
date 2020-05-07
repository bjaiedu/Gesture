
namespace GestureSensor {
    /** I2C address 0x39 */
    const APDS9960_I2C_ADDR = 0x39;

    /** ENABLE 0x80 **/
    enum enable {
        PON = 1,
        AEN = 1,
        PEN = 1,
        WEN = 1,
        AIEN = 1,
        PIEN = 1,
        GEN = 1,
    }
    function get_enable(num: number): number {
        return this.enable.PON + this.enable.GEN + num;
    }

    export class APDS9960 {

        export plusss(num: number): number {
            return get_enable(num);
        }
    }
