---
title: Omega2 Eval Board
---

import { GiscusDocComment } from '/src/components/GiscusComment';

The Omega2 Eval Board is a stand-alone single board computer meant for evaluating the through-hole Onion Omega2 module. 

Almost all of the Omega2's capabilities and I/O are available, making it an essential tools for evaluation, prototyping, and development. This boards can function as template for custom designs and even as standalone SBCs for custom applications.


![omega2 eval board](https://raw.githubusercontent.com/OnionIoT/Omega2-Eval-Boards/refs/heads/main/Images/omega2-eval-board-front-01.jpeg)

## Resources

Resources for working the with Omega2 Eval Board

### Quickstart Guide

A quickstart guide and an accompanying video is available to help get users up and running with the Omega2 Eval Board.

[See the Quickstart Guide](/quickstart/intro)

### Hardware Design

The Omega2 Eval Board design is open source and can be found in the [OnionIoT/Omega2-Eval-Boards GitHub repo](https://github.com/OnionIoT/Omega2-Eval-Boards)

## Hardware 

![labelled diagram of the Omega2 Eval Board](https://raw.githubusercontent.com/OnionIoT/Omega2-Eval-Boards/refs/heads/main/Images/omega2-eval-board-labelled-diagram.png)

|                                   |                       |
|-----------------------------------|-----------------------|
| **A.** 30-pin I/O Header                        | **H.** Ethernet Port     |
| **B.** MicroSD Slot (underneath)                | **I.** Mounting Hole |
| **C.** External Power Connector                 | **J.** User Programmable LED |
| **D.** Reset Button                             | **K.** Status LED    |
| **E.** Power Switch                             | **L.** WiFi Antenna |
| **F.** USB-C Port (Power & Serial Command Line) | **M.** Omega2+ Module                  |
| **G.** USB Type-A Host Port | **N.** 8-pin I/O Header |


Included with the Omega2 Eval Board is an Onion Omega2+ module (OM-O2P).
<!-- TODO: put in specs of Omega2+? -->

### Pins

The Omega2 Eval Board exposes all of the I/O available on the Omega2 through: 
- The 30-pin Header (backwards compatible with all Omega2 Expansions)
- The **new** 8-pin header

![pinout diagram of the Omega2 Eval Board](https://raw.githubusercontent.com/OnionIoT/Omega2-Eval-Boards/refs/heads/main/Images/omega2-eval-board-pinout.svg)

For more information on using the Hardware Interfaces chapter on this Documentation site.

### USB-C Port

The USB-C port is used to power the Omega2 Eval Board and provide serial access to the Omega's command line.

The USB-C port accepts regular 5V USB power and an onboard voltage regulator circuit steps down the voltage to the 3.3V required by the Omega2.

An on-board USB-to-Serial chip provides always-on access to the serial command line. See the [Serial Command Line step in the Quickstart Guide](/quickstart/serial-command-line) for more information on using the serial command line.

### Ethernet Port

The on-board RJ45 Ethernet port allows for easy wired networking. The Omega2 supports 10M/100M wired networking.

By default, the Ethernet port acts as a DCHP client. It expects to receive an IP address from a DHCP server on the network (a router or similar). See the article on [Ethernet Networking](/networking/ethernet) for more details.

### USB Type-A Port

The Omega’s USB Port can be used to connect USB devices, from cameras to USB storage. The USB port supports USB 2.0, and is a type A connector. See the article on [the USB Hardware Interface](/hardware-interfaces/usb) for more details.

### MicroSD Slot

import Omega2MicrosdSlot from './_omega2-microsd-slot.mdx';

<Omega2MicrosdSlot/> 

The card slot is not on the Eval Board itself, but located on the bottom of the Omega2+:

![microSD slot](./assets/microSD-photo.jpg)

### Power Switch

The Power switch cuts power to the Omega2, but not the USB-to-Serial chip. Meaning a connected computer will still detect a USB serial device even when the Omega is powered off, but will not be able to communicate with the Omega.

### Reset Button

The Reset Button is connected directly to the Omega2 Soft Reset pin (GPIO38). Pressing this button do one of two things: reboot, or factory restore.

#### Reboot

Momentarily pressing the reset button and letting go will initiate a reboot of the Linux operating system.

#### Factory Restore

Pressing and holding the reset button for 10 seconds then releasing will trigger a factory restore.

:::danger

This will reset your Omega to the default filesystem of the last firmware update, this will delete ALL of your data!

:::

### Omega2 System Status LED

import Omega2Led from './_omega2-led.mdx';

<Omega2Led/>

### User Programmable LED

A blue user programmable LED is built into the Omega2 Eval Board. It is controlled through GPIO15.

It is up to the user how to use the LED. In general, a user programmable LED can:

- Show status - Show code is configured, installed, and running correctly.
- Help with debugging programs in real-time, where you can program it to blink different patterns based on what code is executing.

### External Power Connector

There are two 2.54 mm (0.1") spaced through-hole pins for 5V and GND input. This can be used to directly connecting an external power source.

This power connector provides more flexibility for powering the Omega2 Eval Board. The spacing is perfect for soldering down a screw terminal, making it easier to connect external power sources and integrate into various setups.

### WiFi Antenna

The on-board antenna is a 2dBi ceramic surface-mount chip antenna. 
