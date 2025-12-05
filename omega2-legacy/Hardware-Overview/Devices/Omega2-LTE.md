---
title: "Onion Omega2 LTE"
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Onion Omega2 LTE {#omega2-lte}

The Omega2 LTE is a Linux IoT computer with built-in high-speed 4G LTE cellular data connectivity and GNSS global positioning. This is in addition to WiFi and ethernet network capabilities.

It features an LTE Cat 4 modem that delivers 150 Mbps downlink and 50 Mbps uplink data rates, and supports GNSS.

![Omega2 LTE](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/O2LTE-cover.png)

There are two variants of the Omega2 LTE:

|              Model              | Part Number |
|:-------------------------------:|-------------|:---------------:|
| Omega2 LTE North American Model | OM-O2LTE-NA | 
| Omega2 LTE Global Model         | OM-O2LTE-G  |

### Getting Started with the Omega2 LTE

See our guide on getting started with the Omega2 LTE for all of the details on getting your device up and running: https://onion.io/omega2-lte-guide/

In addition to getting started for the first time, the guide outlines how to control and share the cellular data connection, how to use the GNSS positioning data, and more.

### Hardware Designs, Measurements, Images, and More

Visit the OnionIoT/Omega2-LTE GitHub repo: https://github.com/OnionIoT/Omega2-LTE

### The Omega2 LTE at a Glance

![Omega2 LTE labelled front](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/onion-omega2-lte-front-labelled.jpg)

|     |     |
|-----|-----|
| **A.** 30-pin Expansion Header  | **G.** Power switch |
| **B.** LTE modem + GPS receiver | **H.** USB-C (power & serial) |
| **C.** LTE status LEDs | **I.** Programmable button |
| **D.** LTE & GNSS U.FL antenna connectors  | **J.** Omega2S+ module  |
| **E.** JST-PH battery connector | **K.** Wi-Fi chip antenna  | 
| **F.** Power management | **L.** Omega status LEDs  |

![Omega2 LTE back labelled](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/onion-omega2-lte-back01-labelled.jpg)

|     |     |
|-----|-----|
| **A.** Nano-SIM slot  | **B.** MicroSD slot  |

### Features & Specifications

* Based on the **[Omega2S+](https://onion.io/omega2s/) IoT computer module**  
    * **Processor:** 580 MHz MIPS CPU  
    * **Memory:** 128 MB RAM  
    * **Storage:** 32 MB  
        * Expandable up to 2 TB with MicroSD card
    * **Connectivity:** 2.4 GHz b/g/n Wi-Fi (access point & client)  
    * **Operating System:** OpenWrt 18.06 Linux  
* **Antenna:**
    *  **Wi-Fi:** On-board 2 dBi direction chip antenna & U.FL connector for external antenna
    * **4G LTE:** U.FL connectors for main and diversity antennas
    * **GNSS:** U.FL connector for GNSS antenna
* **SIM Support:** Nano-SIM slot for cellular data
* **Battery Support:** LiPo battery management and JST-PH battery connector
* **Dimensions:** 80 x 50 mm

### LTE Modem & Variants

There are two variants of the Omega2 LTE, each using a Quectel modem for cellular and GNSS connectivity but with different capabilities:

|              Model              | Part Number |      Modem      |
|:-------------------------------:|-------------|:---------------:|
| Omega2 LTE North American Model | OM-O2LTE-NA | Quectel EC25-AF |
| Omega2 LTE Global Model         | OM-O2LTE-G  | Quectel EG25-G  |

The OM-O2LTE-NA model is compatible with cellular networks in North America, while the OM-O2LTE-G is a Global model that supports network bands around the world: 

| Cellular Technology | Omega2 LTE (OM-O2LTE-NA) | Omega2 LTE Global Model (OM-O2LTE-G) |
| -- | -- | -- |
| 4G LTE (FDD) | B2, B4, B5, B12, B13, B14, B66, B71 | B1, B2, B3, B4, B5, B7, B8, B12, B13, B18, B19, B20, B25, B26, B28 |
| 4G LTE (TDD) | - | B38, B39, B40, B41 |
| 3G UMTS WCDMA | B2, B4, B5 | B1, B2, B4, B5, B6, B8, B19 |
| *Modem* | *Quectel EC-25AF* | *Quectel EG-25G* | 



### The Expansion Header

The Expansion Header is a convenient tool that gives you easy access to the Omega's GPIOs, and allows you to connect Onion Expansions directly. The Expansion Header is labelled to show you what GPIO is connected to each section.

> Take a look at the [Using the GPIOs](https://docs.onion.io/omega2-docs/using-gpios.html#important-special-gpios) article to learn more about the Omega's GPIOs, multiplexing GPIO functionality, and the behaviour and requirements of the Omega's special GPIOs.

<!-- expansion header pinout intro -->

The pinout diagram below shows the Expansion Header's connections and the possible multiplexing options:


![Omega2 LTE header pinout](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/omega2-lte-expansion-header-pinout-1.png)

<!-- operating system -->

### The Operating system

The Omega2 runs the OpenWRT Linux operating system, based on the OpenWRT 18.06 release. OpenWRT is excellent for embedded Linux and networking applications. Included with OpenWRT is the OPKG package manager, that allows easy download and installation of various packages to extend the functionality of your device.


### The Status LEDs

The Omega2 LTE uses a series of LEDs to provide visual feedback on the current status of the device:

| Status LED                          | Indicates                                |
|-------------------------------------|------------------------------------------|
| A. **Green** Power LED                 | Running on battery                       |
| B. **Amber** System status LED         | Whether Linux OS has booted              |
| C. **Blue** Wi-Fi status LED           | Connection to a Wi-Fi network is active  |
| D. **Green** Cellular network status   | Connection to cellular network is active |
| E. **Amber** Cellular network activity | Transmitting and receiving cellular data |

![Omega2 LTE status LED label](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/onion-omega2-lte-led-labelled.jpg)


<!-- USB-C Port -->

### The USB-C Port

The USB-C Port is used to supply power to the device.

The USB-C Port takes in 5V, and the onboard voltage regulator steps the voltage down to 3.3V required for the Omega.


<!-- USB-to-Serial -->

#### USB-to-Serial

The USB-to-Serial chip allows for a serial connection between the Omega and a computer using the USB-C port. You can connect the Omega to your computer with a USB cable, open a terminal, and connect to the Omega through a serial/COM port as opposed to SSH.

>For more information on the Omega's Serial connection read our [guide to connecting to the Omega](/omega2-legacy/Get-Started/Using-the-Command-Line/Connecting-to-the-Omega-Terminal#connecting-to-the-omega-terminal-serial)


### LiPo Battery Support

An on-board battery management chip makes the Omega2 Pro compatible with LiPo batteries: they can be used as the main power source, and will be charged when the Omega is connected to USB power. Use a battery to make your project portable, or to act as a back-up power supply.

Learn more about the Omega2 Pro and batteries: https://onion.io/omega2-lte-guide/#battery

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


<!-- wifi antenna -->

### The WiFi Antenna

The on-board antenna is a ceramic surface-mount chip antenna. It's small but packs a punch, the Omega's WiFi signal is able to travel up to 100m (300ft) line-of-sight outdoors.


<!-- u.fl connector -->

### The U.FL Connector

Connect an external antenna to the Omega's male surface-mounted U.FL connector. An external antenna can be used to extend the range of WiFi connectivity or provide a very directional signal. When an external antenna is plugged in, the SMT and external antennas will split the transmission power, providing only half of expected gain. In order to use your external antenna at its maximum performance, you will need to modify your Omega by removing the 0 Ohm resistor that is located between the WiFi antenna and U.FL connector so all the power goes to the external U.FL antenna.

Follow the procedure outlined [here](https://onion.io/2bt-u-fl-antennas-with-the-omega/) to modify your Omega. 

**DISCLAIMER:** Perform any modifications to your device very carefully and at your own risk. This procedure is difficult to undo, and will require the permanent use of an external antenna to have any sort of reasonable WiFi connectivity. If you damage your Omega during this procedure, Onion Corporation is not responsible.


### Software 

See the [`omega2-lte` package in the OnionIoT/openwrt-packages GitHub repo](https://github.com/OnionIoT/OpenWRT-Packages/tree/openwrt-18.06/omega2-lte#omega2-lte-base-package) for more details on the software package that's specific to the Omega2 LTE.

<GiscusDocComment />
