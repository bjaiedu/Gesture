#include "apds9960.h"

#define i2c_addr 0x39

int plusss(){
    return _enable.PON + _enable.PEN;
}
