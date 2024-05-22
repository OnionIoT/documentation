---
title: One-Wire Devices
---

# One-Wire Devices

## Introduction
Many sensors communicate using the One-Wire protocol. Adding support to the Omega2 for One-Wire devices offers many additional use cases.

Onion makes available a sample One-Wire device tree overlay package that sets up a One-Wire bus master on GPIO2. This GPIO choice was semi arbitrary - chosen because GPIO2 is exposed on both the Omega2 and Omega2S and isn’t multiplexed with other commonly used functionality.

Users that need to use a different pin, other than GPIO2, can create their own customized version of the `onion-dt-overlay-w1-gpio`  package.

Use the `onion-dt-overlay-w1-gpio` Device Tree Overlay package to enable a software-based One-Wire master to your device.

## Installation
To install the Device Tree Overlay package, you must first update your package list:
```
opkg update
opkg install onion-dt-overlay-w1-gpio
```
After installing the package, reboot the device.

## How One-Wire is used
For more information on using One-Wire, see the following [One-Wire article](../hardware-interfaces/one-wire).

## Source Code
The Device Tree Overlay package is part of the `onion-dt-overlay` package.

The DTS fragment that enables this functionality can be found at: [https://github.com/OnionIoT/OpenWRT-Packages/blob/openwrt-22.03/onion-dt-overlay/src/w1-gpio.dts](https://github.com/OnionIoT/OpenWRT-Packages/blob/openwrt-22.03/onion-dt-overlay/src/w1-gpio.dts).

The package definition can be found at: [https://github.com/OnionIoT/OpenWRT-Packages/blob/openwrt-22.03/onion-dt-overlay/Makefile](https://github.com/OnionIoT/OpenWRT-Packages/blob/openwrt-22.03/onion-dt-overlay/Makefile).
