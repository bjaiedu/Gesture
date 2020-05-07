struct enable {

    // power on
    uint8_t PON : 1;

    // ALS enable
    uint8_t AEN : 1;

    // Proximity detect enable
    uint8_t PEN : 1;

    // wait timer enable
    uint8_t WEN : 1;

    // ALS interrupt enable
    uint8_t AIEN : 1;

    // proximity interrupt enable
    uint8_t PIEN : 1;

    // gesture enable
    uint8_t GEN : 1;

    uint8_t get() {
      return (GEN << 6) | (PIEN << 5) | (AIEN << 4) | (WEN << 3) | (PEN << 2) |
             (AEN << 1) | PON;
    };
  };
  struct enable _enable;