---
title: Software SPI Bus
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Introduction

The SPI hardware on the Omega2 only supports 2 devices using CS0 (already used by internal flash) and CS1.

If a use case requires an additional SPI device, software-based SPI buses and chip selects can be specified by using other GPIOs. This is also known as bit-bang SPI.

Onion makes available two sample device tree overlay package to enable software SPI. These packages set up a software-based SPI bus on two different sets of GPIOs:
- The `onion-dt-overlay-sw-spi` package uses GPIOs 14-17
- The `onion-dt-overlay-sw-spi-alt` package uses GPIOs 0-3 which are more easily accesible

You can install either package to test out a software SPI bus on your device.

Users that need to use different pins can create their own customized version based on this package.

:::caution **Drawback: Lower Bus Speed**

Since this is a software-based bus, it will not be as fast as a hardware SPI bus. The maximum bus speed is **1.4MHz** if CPU load is low - much slower compared the 40MHz maximum of the hardware SPI bus.

This is adequate for most SPI devices, but it is not recommended for data-intensive use cases like driving a display.

:::

## Installation

The package can be installed using opkg. Ensure the Omega2 is connected to the internet and update the package lists:

```shell
opkg update
```

Then install the desired package:

```shell
opkg install onion-dt-overlay-sw-spi
```

or 

```shell
opkg install onion-dt-overlay-sw-spi-alt
```

:::caution

Only install one of these package!

:::

## How it's used

Once the `onion-dt-overlay-sw-spi` or `onion-dt-overlay-sw-spi-alt` package is installed, there will be a software bus available at `/dev/spidev1.0`.

The following table describes which pins are used for which SPI signal:

| SPI Signal | `onion-dt-overlay-sw-spi` GPIO | `onion-dt-overlay-sw-spi-alt` GPIO | 
| :--------- | :--- | :-- |
| SCK        | 14   | 3   |
| MOSI       | 16   | 1   |
| MISO       | 15   | 0   |
| CS         | 17   | 2   |

For further instruction on using the SPI Bus see the [SPI article](../hardware-interfaces/spi).

## Source Code

The DTS fragment that enables the SPI Bus functionality can be found in the OnionIoT/OpenWRT-Packages GitHub repository at: 
- https://github.com/OnionIoT/OpenWRT-Packages/blob/openwrt-23.05/onion-dt-overlay/src/sw-spi.dts
- https://github.com/OnionIoT/OpenWRT-Packages/blob/openwrt-23.05/onion-dt-overlay/src/sw-spi-alt.dts
<!-- TODO: update above with OPENWRT_VERSION variable -->

The package definition can be found at: https://github.com/OnionIoT/OpenWRT-Packages/blob/openwrt-23.05/onion-dt-overlay/Makefile
<!-- TODO: update above with OPENWRT_VERSION variable -->

It is part of the `onion-dt-overlay` package.

<GiscusDocComment />