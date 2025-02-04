---
title: Omega2S Eval Board
---

import { GiscusDocComment } from '/src/components/GiscusComment';

The Omega2S Eval Board is a stand-alone single board computer meant for evaluating the surface-mount Onion Omega2S module. 

It lowers the cost barrier for working with the Omega2S module by providing access to almost all the Omega2S capabilities and I/O, without the need of an expensive development kit. This makes it an essential tool for evaluation, prototyping, and development. 

This board even can function as template for custom designs and even as standalone SBCs for custom applications.


![omega2s eval board](https://raw.githubusercontent.com/OnionIoT/Omega2-Eval-Boards/refs/heads/main/Images/omega2s-eval-board-front-01.jpeg)

## Resources

Resources for working the with Omega2S Eval Board

### Quickstart Guide

A quickstart guide and an accompanying video is available to help get users up and running with the Omega2S Eval Board.

[See the Quickstart Guide](/quickstart/intro)

### Hardware Design

The Omega2S Eval Board design is open source and can be found in the [OnionIoT/Omega2-Eval-Boards GitHub repo](https://github.com/OnionIoT/Omega2-Eval-Boards)

## Hardware 

![labelled diagram of the Omega2S Eval Board](https://raw.githubusercontent.com/OnionIoT/Omega2-Eval-Boards/refs/heads/main/Images/omega2s-eval-board-labelled-diagram.png)

|                                   |                       |
|-----------------------------------|-----------------------|
| **A.** 30-pin I/O Header                        | **H.** Ethernet Port     |
| **B.** MicroSD Slot (underneath)                | **I.** Mounting Hole |
| **C.** External Power Connector                 | **J.** LEDs (Boot status and user programmable) |
| **D.** Reset Button                             | **K.** Omega2S+ Module    |
| **E.** Power Switch                             | **L.** WiFi Antenna |
| **F.** USB-C Port (Power & Serial Command Line) | **M.** 24-pin I/O Header                 |
| **G.** USB Type-A Host Port | |


Included on the Omega2S Eval Board is a soldered-down Onion Omega2S+ module (OM-O2SP).
<!-- TODO: put in specs of Omega2S+? -->

### Pins

The Omega2S Eval Board exposes all of the I/O available on the Omega2S through: 
- The 30-pin Header (backwards compatible with all Omega2 Expansions)
- The **new** 24-pin header

![pinout diagram of the Omega2S Eval Board](https://raw.githubusercontent.com/OnionIoT/Omega2-Eval-Boards/refs/heads/main/Images/omega2s-eval-board-pinout.svg)

For more information on using the Hardware Interfaces chapter on this Documentation site.

### USB-C Port

import Omega2EvalUsbcPort from './_omega2-eval-usb-c-port.mdx';

<Omega2EvalUsbcPort device="Omega2S Eval Board"/> 

### Ethernet Port

import Omega2EvalEthernetPort from './_omega2-eval-ethernet-port.mdx';

<Omega2EvalEthernetPort/>

### USB Type-A Port

import Omega2EvalUsbHostPort from './_omega2-eval-usb-host-port.mdx';

<Omega2EvalUsbHostPort/>

### MicroSD Slot

import Omega2MicrosdSlot from './_omega2-microsd-slot.mdx';

<Omega2MicrosdSlot/> 

### Power Switch

import Omega2EvalPowerSwitch from './_omega2-eval-power-switch.mdx';

<Omega2EvalPowerSwitch/> 

### Reset Button

import Omega2EvalResetButton from './_omega2-eval-reset-button.mdx';

<Omega2EvalResetButton/> 

### Omega2 System Status LED

import Omega2Led from './_omega2-led.mdx';

<Omega2Led/>

### User Programmable LED

import Omega2EvalUserLed from './_omega2-eval-user-led.mdx';

<Omega2EvalUserLed device="Omega2S Eval Board" gpio="43"/> 

### External Power Connector

import Omega2EvalPowerConnector from './_omega2-eval-power-connector.mdx';

<Omega2EvalPowerConnector device="Omega2S Eval Board"/> 

### WiFi Antenna

The on-board antenna is a 2dBi ceramic surface-mount chip antenna. 
