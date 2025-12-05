---
title: "Arduino Dock R2"
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Arduino Dock 2 {#arduino-dock-2}

<!-- [//]: # (The Arduino Dock 2 contains an ATmega328P micro-controller, the same one found on the Arduino Uno R3.) -->
<!-- [//]: # (The Omega can program the microcontroller and then communicate with it) -->

<!-- The Arduino Dock 2 is the lovechild of the Arduino Uno R3 and the Omega. Is good? -->

The Arduino Dock 2 is our supercharged version of an Arduino Uno R3 board. These two boards share the same microcontroller, the ATmel ATmega328P microcontroller (MCU), and have identical pin layouts. This allows you to use any Arduino shields that you've used with the Arduino Uno R3 with the Arduino Dock and the Omega.

![arduino dock alone](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/arduino-dock-alone.jpg)

The Omega can program the microcontroller while connected to the board. This means you can wirelessly connect to the Omega, and then program the MCU for a wireless Arduino experience!

### The Hardware

<!-- [//]: # (small overview of the things the headings below cover) -->

The Arduino Dock includes an In-Circuit Serial Programming (ICSP) header to break out the SPI pins which can be used to program the Arduino Dock's microcontroller with an external programmer. Additionally, there is a USB-host port that is connected to the Omega which can be used for any sort of USB type application.

![illustration](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/arduino-dock-illustration.png)

You can power the dock using a microUSB connection, or using the DC Barrel jack.

### Connecting an Omega

<!-- [//]: # (picture guide on how to properly plug in an Omega) -->

To connect an Omega to the Arduino Dock, line up the Omega's edges with the purple lines on the Arduino Dock's as demonstrated below:

![arduino dock plugged in](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/arduino-dock-top-plugged-in.jpg)

Make sure your Omega is pushed all the way down as demonstrated in the picture below:


![arduino dock side view](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/arduino-dock-side-view.jpg)

You may need to line up the pins with the holes before pressing the Omega into the Dock.


### The Expansion Header

<!-- [//]: # (breakout of the Omega's GPIOs, can be connected to other circuits directly, or can use Omega expansions) -->
The Expansion Header is a convenient tool that gives you easy access to the Omega's GPIOs, and allows you to connect Onion Expansions directly. The Expansion Header is labelled to show you what GPIO is connected to each header.

It follows the same layout as the Expansion Header found on the Expansion Dock and Power Dock.

>**Note**:If you own an Omega2 or Omega2+ and intend to use the PWM expansion with a DC power supply, please take note there is likely to be a short circuit between the barrel jack and the metal case of the Omega itself. We recommend inserting a thin plastic sheet between the expansion and the omega to break this short. For more information, see the [PWM Expansion](/omega2-legacy/Hardware-Overview/Expansions/PWM-Expansion#pwm-expansion) article.

<!-- expansion header pinout intro -->

The pinout diagram below shows the Expansion Header's connections and the possible multiplexing options:


![expansion header pinout](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/arduino-dock-expansion-header-pinout.png)

<!-- expansion header pinout explanation -->

By default, the Serial, SPI, and I2C pins implement these communication protocols and cannot be used as GPIOs. Similarly, the I2S and PWM pins are set to GPIO mode by default.

> To learn more on changing the functionality of the Omega's pins, see the [Multiplexing GPIOs section](/omega2-legacy/Doing-Stuff/Using-GPIOs#using-gpios-multiplexing) of our article on the Omega's GPIOs.



### The ATmega Headers

<!-- [//]: # (breakout of the ATmega's pins, same as the Arduino Uno R3) -->

The ATmega headers are a breakout of the ATmega's pins. They are arranged and spaced in the exact same way as an Arduino Uno R3, so all your Arduino Shields are compatible. These pins are also labelled for your convenience.

>Note: Remember that the ATmega runs on 5V, and therefore it reads 5V as logical high.

<!-- Note that the ATmega runs on 5V and therefore its pins' logical high voltage levels is 5V. -->

<!-- DONE: fix the above sentence -->

![arduino dock atmega headers](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/arduino-dock-atmega-header.jpg)

### The MicroUSB Port

The MicroUSB Port is used to supply power to the Arduino Dock, which in turn supplies power to the Omega and the ATmega328P chip.

The MicroUSB Port receives 5V power and uses it directly to power the ATmega328P chip. The Dock comes equipped with a voltage regulator to step the voltage down to the required 3.3V for the Omega.


<!-- No-USB-to-Serial -->

#### No USB-to-Serial

There is no USB-to-Serial Chip on the Dock. This means that you will **not** be able to connect to the Omega serially over the Micro-USB port.

You can still connect to your Omega's terminal with SSH, you can learn how to do that in this [guide to connecting to the Omega](/omega2-legacy/Get-Started/Using-the-Command-Line/Connecting-to-the-Omega-Terminal#connecting-to-the-omega-terminal-ssh).



### DC Barrel Jack

The DC barrel jack may also be used to provide power to the Omega using a DC power adapter. We recommend any DC power supply that provides 5V and at least 0.5A. It is safe to use power supplies that provide more than 0.5A at 5V.

**Note that the Arduino Dock's DC barrel jack should only be used with 5V DC power supplies. If a higher voltage is used, your Omega and Arduino Dock have a high chance of being damaged!**


<!-- Reset Button -->

### Reset button

The Reset Button on the Dock is connected directly to the Omega's Reset GPIO. Pressing this button do one of two things: reboot, or factory restore.

#### Reboot

Momentarily pressing the reset button and letting go will initiate a reboot of the Omega OS. 

#### Factory Restore

Pressing and **holding** the reset button for **10 seconds then releasing** will trigger a factory restore.

Warning: This will reset your Omega to the default filesystem of the last firmware update, **this will delete ALL of your data!**

See the [Factory Reset documentation article](/omega2-legacy/Doing-Stuff/Using-the-Omega/Factory-Reset#factory-reset) for more details.


### Micro-Controller Reset Button

<!-- [//]: # (issues a reset to the ATmega chip, give background on what that means in the Arduino Context) -->

In addition to the Omega's reset button, the Arduino Dock 2 comes with a microcontroller reset button. This button can be used to reset the ATmega chip whenever you'd like. This will **NOT** reset the Omega.

<!-- USB Port -->

### Omega USB Port

The Omega's USB Port can be used to connect to all sorts of devices, namely a USB storage device to extend the storage space of your Omega. The USB port supports USB 2.0, and is a type A connector.



### Omega to ATmega MCU Connections

<!-- [//]: # (The Omega and ATmega are connected via the following:) -->
<!-- [//]: # (- Omega UART1 to Arduino's serial pins) -->
<!-- [//]: # (- I2C pins) -->
<!-- [//]: # (- Omega's GPIOs 15, 16, 17 to ATmega's SPI SCK, SPI MOSI, and SPI MISO pins respectively) -->
<!-- [//]: # (- Omega's GPIO 19 to reset ATmega (will pull the RESET high)) -->

<!-- [//]: # (mention that there's a 3.3V to 5V Logic Level shifter for the connections) -->

The Arduino Dock is designed to make the on-board microcontroller the Omega's helper and co-processor. So it was important to include a few key connections between the Omega and the microcontroller.

Since the microcontroller operates at 5V and the Omega operates at 3.3V, the Arduino Dock features a **3.3V to 5V Logic Level converter** for all connections between the microcontroller and the Omega. This allows each device to operate at it's own voltage but still gives them the ability to understand each other.

The table below shows the connections between the Omega and the ATmega Microcontroller:

| Omega Pin  | ATmega Pin |
| :-------------: | :-------------:  |
| UART1 | Serial Pins  |
| I2C | I2C  |
| GPIO 15 | SPI SCK  |
| GPIO 16 | SPI MOSI  |
| GPIO 17 | SPI MISO  |
| GPIO 19 | Reset  |

The purposes of these connections are covered in the subsections below.


#### UART Connection

<!-- [//]: # (functionality: provide easy to use two-way communication between the Omega and MCU) -->

The UART connection is used to provide two-way communication between the Omega and the ATmega MCU. The ATmega's serial port is connected to the Omega's **UART1** serial port.

See the article on [Communicating with Serial Devices](/omega2-legacy/Doing-Stuff/Peripherals/uart1#uart1) for more info.

#### I2C

<!-- [//]: # (funcionality: provide I2C connectivity between the Omega and ATmega, the Omega is setup to be the master in most cases) -->
<!-- [//]: # (this is also useful when using 5V I2C devices, plug them into the ATmega I2C pins, and the Omega will be able to read it) -->

The I2C connection provides I2C connectivity between the Omega and the ATmega. In most cases, the Omega is set up as the master, and the ATmega as the slave.

This is useful when using 5V I2C devices. Plug them into the ATmega's I2C pins and the Omega will be able to read them thanks to the on-board logic level shifter.

See the article on [Communicating with I2C Devices](/omega2-legacy/Doing-Stuff/Peripherals/i2c#communicating-with-i2c-devices) for more info.

#### SPI and Reset Connection

<!-- [//]: # (these four pins are used by the Omega to reset and program the ATmega with sketches) -->

The four SPI connections are used to upload the ATmega with sketches using your Omega. See the article on [Flashing the Arduino Dock's Microcontroller](/omega2-legacy/Doing-Stuff/Arduino-Dock/Flashing-the-Microcontroller#flash-arduino-dock-wirelessly) for more info.

The reset connection is used to reset the ATmega chip. This can be done using the reset button, or using the Omega's GPIO 19.

### Mechanical Drawings

We've made available a detailed [diagram](https://raw.githubusercontent.com/OnionIoT/technical-drawings/master/Mechanical/OM-D-ARD.PDF) of the dimensions and geometry of the Arduino Dock 2.

### Using the Dock

<!-- [//]: # (little overview of the special features of this dock) -->

The Arduino Dock 2 is loaded with features that allow you to use your Omega with the ATmega chip with ease. You can program or reset the micro-controller using the Omega's GPIOs, and even connect to the ATmega's serial port using the Omega's UART.

### Programming the Arduino Micro-Controller

Follow the steps in our [Flashing the Microcontroller](/omega2-legacy/Doing-Stuff/Arduino-Dock/Flashing-the-Microcontroller#flash-arduino-dock-wirelessly) to learn how to upload sketches (programs) to the Arduino micro-controller onboard the Arduino Dock.

<!-- [//]: # (create a separate article for this under Doing Stuff - should be included in the RESETTING article mentioned above (part of batch3)) -->
<!-- [//]: # (two methods:) -->
<!-- [//]: # (- using the arduino ide) -->
<!-- [//]: # (- flashing sketches stored on the Omega's memory) -->

### Communicating over UART

The easiest way to get the Arduino Dock MCU and Omega communicating is through serial. There are no fancy protocols, just data being sent back and forth. It's important to remember that the ATmega's serial is connected to UART1 on the Omega.

Take a look at our [Communicating with Serial Devices article](/omega2-legacy/Doing-Stuff/Peripherals/uart1#uart1) for ideas on how to get your Omega communicating with the Arduino Dock's microcontroller!

### Communicating with I2C

The Arduino Dock 2 connects the microcontroller's I2C lines to that of the Omega, effectively, adding the microcontroller as a slave to the Omega's I2C bus.

Take a peek at our [Communicating with I2C Devices article](/omega2-legacy/Doing-Stuff/Peripherals/i2c#communicating-with-i2c-devices) for more information on I2C and how the Omega can interact with I2C devices. On the microcontroller side, the [Wire Library](https://www.arduino.cc/en/Reference/Wire) can be used to facilitate I2C communication.


<!-- ### Resetting the Micro-Controller -->

<!-- [//]: # (create a separate article for this under Doing Stuff (part of batch3)) -->
<!-- [//]: # (link to Arduino Dock article on resetting the microcontroller) -->
<!-- [//]: # (two methods:) -->
<!-- [//]: # (- pressing the physical button) -->
<!-- [//]: # (- using GPIO19) -->

<GiscusDocComment />
