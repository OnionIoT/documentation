---
title: "Onion Omega2+"
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Onion Omega2+ {#omega2p}

The Omega2+ is the upgraded version of the Omega2. It comes packed with built-in Wi-Fi, a MicroSD slot, a Linux Operating System, and a powerful processor, among other things.

### The Omega2 at a Glance

![omega2Plus](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/omega2p-illustration.png)

| Omega2+ Specs  | |
| :-------------: | :-------------:  |
| Processor | 580MHz MIPS CPU  |
| Memory | **128MB** Memory  |
| Storage | **32MB** Storage  |
| USB | USB 2.0  |
| MicroSD Slot | **Yes**  |
| WiFi adapter | b/g/n Wi-Fi  |
| GPIOs | 18  |
| PWM | 2  |
| UART | 2  |
| I2C | 1  |
| SPI |  1   |
| I2S | 1  |

### Processor Datasheet

The datasheet for the Omega2+ processor can be found here: [Mediatek MT7688 Datasheet](https://github.com/OnionIoT/Onion-Docs/raw/master/Omega2/MT7688_Datasheet_v1_4.pdf)

### The Pins

Take a look at the [Using the GPIOs](https://docs.onion.io/omega2-docs/using-gpios.html#important-special-gpios) article to learn more about the Omega's GPIOs, multiplexing GPIO functionality, and the behaviour and requirements of the Omega's special GPIOs.

![pinout](https://github.com/OnionIoT/Onion-Media/raw/master/Pinouts/Omega2.png)

<!-- TODO: include section on the 50pin connector -->


<!-- operating system -->

### The Operating system

The Omega2 runs the OpenWRT Linux operating system, based on the OpenWRT 18.06 release. OpenWRT is excellent for embedded Linux and networking applications. Included with OpenWRT is the OPKG package manager, that allows easy download and installation of various packages to extend the functionality of your device.


### The Omega LED {#omega2p-hw-omega-led}

<!-- omega led content -->

The Omega's amber System Status LED provides a visual indication of the Omega's current state,

| State            | LED Activity |
|------------------|--------------|
| Not powered      | Off          |
| Booting/Updating | Blinking     |
| Up and running   | On           |

The Omega LED uses GPIO44, and can be programmed to do a number of cool things. You can learn more about the LED in [the article on how to use the Omega's LED](#the-omega-led)



<!-- reset gpio -->

### Reset GPIO

The Omega's can be reset using GPIO38. When plugged into a Dock (e.g. Expansion Dock), this GPIO gives various functionality to the reset button found on docks. For example, a quick button press triggers the reboot command, whereas holding the button for about 10 seconds will trigger a factory reset command.



### MicroSD Card Slot

The MircoSD card slot can be used to expand the Omega2+'s storage capacity to ridiculous levels. If 32MB is a problem for you, you can now hit it with a tactical warhead. To help you get started, there's a guide on [using a MicroSD card](#using-a-microsd-card).

The slot can be found at the bottom of the Omega2+. To physically mount a MicroSD card, slide it into the slot, push it down until it clicks. If it pops all the way back up, just do it again, and it should stay.

![MicroSD Card Slot Location](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/omega2p-microsd-slot.jpg)


<!-- wifi antenna -->

### The WiFi Antenna

The on-board antenna is a ceramic surface-mount chip antenna. It's small but packs a punch, the Omega's WiFi signal is able to travel up to 100m (300ft) line-of-sight outdoors.


<!-- u.fl connector -->

### The U.FL Connector

Connect an external antenna to the Omega's male surface-mounted U.FL connector. An external antenna can be used to extend the range of WiFi connectivity or provide a very directional signal. When an external antenna is plugged in, the SMT and external antennas will split the transmission power, providing only half of expected gain. In order to use your external antenna at its maximum performance, you will need to modify your Omega by removing the 0 Ohm resistor that is located between the WiFi antenna and U.FL connector so all the power goes to the external U.FL antenna.

Follow the procedure outlined [here](https://onion.io/2bt-u-fl-antennas-with-the-omega/) to modify your Omega. 

**DISCLAIMER:** Perform any modifications to your device very carefully and at your own risk. This procedure is difficult to undo, and will require the permanent use of an external antenna to have any sort of reasonable WiFi connectivity. If you damage your Omega during this procedure, Onion Corporation is not responsible.



<!--  leave this out for now -->
### Mechanical drawing

We've made available a detailed [diagram](https://raw.githubusercontent.com/OnionIoT/technical-drawings/master/Mechanical/OM-O2.PDF) of the dimensions and geometry of the Omega2+.

<GiscusDocComment />
