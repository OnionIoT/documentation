---
title: "Onion Omega2 Dash"
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Onion Omega2 Dash {#omega2-dash}

The Omega2 Dash is a Wi-Fi-enabled Linux computer with a built-in touchscreen. It is a stand-alone, all-in-one solution that provides a touch-based visual UI that can be internet-connected, connected to other devices, or both. 

It can display the commandline, run programs that create a touch-based UI, and display images (png, jpeg).

![Omega2 Dash](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/OM-O2DASH-00-cover-image.png)

### Getting Started with the Omega2 Dash

See our guide on getting started with the Omega2 Pro for all of the details on getting your device up and running: https://onion.io/omega2-dash-guide/

It includes instructions on how to create an interactive UI using the LVGL graphics library and C, as well as LVGL in Micropython.

### Hardware Designs, Measurements, Images, and More

Visit the OnionIoT/Omega2-Dash GitHub repo: https://github.com/OnionIoT/Omega2-Dash 


### The Omega2 Dash at a Glance

![Omega2 Pro back labelled](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/omega2dash-labelled-back.png)

|     |     |
|-----|-----|
| **A.** 30-pin Expansion Header  | **E.** Chip antenna |
| **B.** MicroSD card slot | **F.** On/off switch |
| **C.** Reset button | **G.** Micro USB port |
| **D.** Omega2S+ IoT module  | **H.** USB 2.0 host port  |

![Omega2 Pro front labelled](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/omega2dash-labelled-front-edit.png)

|     |     |
|-----|-----|
| **I.** 3.2" TFT touchscreen  | **K.** Amber System Status LED  |
| **J.** Holes for easy mounting | **L.** Blue Wi-Fi Status LED |

### Features and Specifications

> The Omega2 Dash is powered by the [Omega2S+ module](/omega2-legacy/Hardware-Overview/Devices/Omega2S#omega2s), which provides the CPU, memory, storage, & WiFi radio.

* 3.2" TFT **touchscreen display**  
    * 320x240 resolution  
    * 16-bit (RGB565) color support  
    * 12-bit resistive touch input  
    * Rated at minimum MTBF value of 50,000 hours with normal operation  
* Based on the **[Omega2S+](https://onion.io/omega2s/) IoT computer module**  
    * **Processor:** 580 MHz MIPS CPU  
    * **Memory:** 128 MB RAM  
    * **Storage:** 32 MB  
    * **Connectivity:** 2.4 GHz b/g/n Wi-Fi (access point & client)  
    * **Operating System:** OpenWrt 18.06 Linux  
* **I/O**  
    * Expansion Header  
         * I²C, UART, PWM, Ethernet, GPIOs
         * Compatible with existing ecosystem of Omega2 Expansions
    * USB 2.0 host  
    * MicroSD card slot  
* **Antenna**
    * 2 dBi directional chip antenna
    * U.FL connector for external antenna
* **USB-to-serial interface** on Micro USB port  
    * Provides reliable, always-on access to the Omega's commandline
* **Status LEDS**
    * Amber: boot status
    * Blue: Wi-Fi status
* **Weight:** 60 g
* **Dimensions:** 82 mm x 70 mm

### The Expansion Header

The Expansion Header is a convenient tool that gives you easy access to the Omega's GPIOs, and allows you to connect Onion Expansions directly. The Expansion Header is labelled to show you what GPIO is connected to each section.

> Take a look at the [Using the GPIOs](https://docs.onion.io/omega2-docs/using-gpios.html#important-special-gpios) article to learn more about the Omega's GPIOs, multiplexing GPIO functionality, and the behaviour and requirements of the Omega's special GPIOs.

<!-- expansion header pinout intro -->

The pinout diagram below shows the Expansion Header's connections and the possible multiplexing options:


![expansion header pinout](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/expansion-dock-expansion-header-pinout.png)

<!-- expansion header pinout explanation -->

By default, the Serial, SPI, and I2C pins implement these communication protocols and cannot be used as GPIOs. Similarly, the I2S and PWM pins are set to GPIO mode by default.

> To learn more on changing the functionality of the Omega's pins, see the [Multiplexing GPIOs section](/omega2-legacy/Doing-Stuff/Using-GPIOs#using-gpios-multiplexing) of our article on the Omega's GPIOs.


<!-- operating system -->

### The Operating system

The Omega2 runs the OpenWRT Linux operating system, based on the OpenWRT 18.06 release. OpenWRT is excellent for embedded Linux and networking applications. Included with OpenWRT is the OPKG package manager, that allows easy download and installation of various packages to extend the functionality of your device.


### The Status LEDs

![Omega2 Dash status LED label](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/omega2dash-status-leds.png)

| Status LED            | LED Activity |
|------------------|--------------|
| **Amber** System status LED    | Whether Linux OS has booted          |
| **Blue** Wi-Fi status LED       | Connection to a Wi-Fi network is active
     |

The behaviour of the LEDs indicates:

* System status LED
    * **Off** – Device not powered on
    * **Blinking** – Booting/updating
    * **On** – Up and running
* WiFi status LED
    * **Off** – Not connected to WiFi network
    * **Blinking** – Connecting
    * **On** – Connected

<!-- Micro USB Port -->

### The MicroUSB Port

The Micro-USB Port is used to supply power to the Dock, which in turn supplies power to the Omega.

The Micro-USB Port takes in 5V, and the Dock comes equipped with a voltage regulator to step the voltage down to 3.3V required for the Omega.


<!-- USB-to-Serial -->

#### USB-to-Serial

The USB-to-Serial chip allows for a serial connection between the Omega and a computer using the USB-C port. You can connect a USB-C to USB cord from the Omega to your computer, open a terminal, and connect to the Omega via a COM port as opposed to SSH.

>For more information on the Omega's Serial connection read our [guide to connecting to the Omega](/omega2-legacy/Get-Started/Using-the-Command-Line/Connecting-to-the-Omega-Terminal#connecting-to-the-omega-terminal-serial)


<!-- Power Switch -->

### Power Switch

<!-- [//]: # (inform them of what the power switch will do: cut power to the Omega but keep the USB to serial chip running) -->
<!-- [//]: # (TODO: have illustrations showing the ON and OFF positions) -->

The Power switch will cut power to the Omega, but not the serial chip. This means your computer will still detect a USB serial device, but will not be able to communicate with the Omega.


<!-- Reset Button -->

### Reset button

The Reset Button on the Dock is connected directly to the Omega's Reset GPIO. Pressing this button do one of two things: reboot, or factory restore.

#### Reboot

Momentarily pressing the reset button and letting go will initiate a reboot of the Omega OS. 

#### Factory Restore

Pressing and **holding** the reset button for **10 seconds then releasing** will trigger a factory restore.

Warning: This will reset your Omega to the default filesystem of the last firmware update, **this will delete ALL of your data!**

See the [Factory Reset documentation article](/omega2-legacy/Doing-Stuff/Using-the-Omega/Factory-Reset#factory-reset) for more details.


<!-- USB Port -->

### Omega USB Port

The Omega's USB Port can be used to connect to all sorts of devices, namely a USB storage device to extend the storage space of your Omega. The USB port supports USB 2.0, and is a type A connector.


<!-- wifi antenna -->

### The WiFi Antenna

The on-board antenna is a ceramic surface-mount chip antenna. It's small but packs a punch, the Omega's WiFi signal is able to travel up to 100m (300ft) line-of-sight outdoors.


<!-- u.fl connector -->

### The U.FL Connector

Connect an external antenna to the Omega's male surface-mounted U.FL connector. An external antenna can be used to extend the range of WiFi connectivity or provide a very directional signal. When an external antenna is plugged in, the SMT and external antennas will split the transmission power, providing only half of expected gain. In order to use your external antenna at its maximum performance, you will need to modify your Omega by removing the 0 Ohm resistor that is located between the WiFi antenna and U.FL connector so all the power goes to the external U.FL antenna.

Follow the procedure outlined [here](https://onion.io/2bt-u-fl-antennas-with-the-omega/) to modify your Omega. 

**DISCLAIMER:** Perform any modifications to your device very carefully and at your own risk. This procedure is difficult to undo, and will require the permanent use of an external antenna to have any sort of reasonable WiFi connectivity. If you damage your Omega during this procedure, Onion Corporation is not responsible.


### Software 

See the [`omega2-dash` package in the OnionIoT/openwrt-packages GitHub repo](https://github.com/OnionIoT/OpenWRT-Packages/tree/openwrt-18.06/omega2-dash#omega2-dash-base-package) for more details on the software package that's specific to the Omega2 Dash.

<GiscusDocComment />
