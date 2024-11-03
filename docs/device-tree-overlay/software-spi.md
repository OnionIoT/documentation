---
title: Software SPI BUS
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Introduction

The SPI hardware on the Omega2 only supports 2 devices using CS0 (already used by internal flash) and CS1.

If a use case requires an additional SPI device, software-based SPI chip selects can be specified by using other GPIOs. This is also known as bit-bang SPI.

Onion makes available a sample device tree overlay package to enable software SPI. This package sets up a software-based SPI bus on GPIO’s that were chosen arbitrarily for demonstration. You can install the `onion-dt-overlay-sw-spi` package to test out a software SPI on your device.

Users that need to use different pins can create their own customized version based on this package.

:::caution

**Drawback: Lower Bus Speed.**

Since this is a software-based bus, it will not be as fast as a hardware SPI bus. This is adequate for most SPI devices, but it is not recommended for data-intensive use cases like driving a display.

:::

## Installation

Ensure the Omega2 is connected to the internet, and install the package using opkg:

```shell
opkg update
opkg install onion-dt-overlay-sw-spi
```

## How it's used

Once the `onion-dt-overlay-sw-spi` package is installed, there will be a software bus available at `/dev/spidev1.0`.

The following table describes which pins are used for which SPI signal:

| SPI Signal | GPIO |
| :--------- | :--- |
| SCK        | 14   |
| MOSI       | 16   |
| MISO       | 15   |
| CS         | 17   |

For further instruction on using the SPI Bus see the [SPI article](../hardware-interfaces/spi).

## Source Code

The DTS fragment that enables the SPI Bus functionality can be found in the OnionIoT/OpenWRT-Packages GitHub repository at: [https://github.com/OnionIoT/OpenWRT-Packages/blob/openwrt-23.05/onion-dt-overlay/src/sw-spi.dts](https://github.com/OnionIoT/OpenWRT-Packages/blob/openwrt-23.05/onion-dt-overlay/src/sw-spi.dts)
<!-- TODO: update above with OPENWRT_VERSION variable -->

The package definition can be found at: [https://github.com/OnionIoT/OpenWRT-Packages/blob/openwrt-23.05/onion-dt-overlay/Makefile](https://github.com/OnionIoT/OpenWRT-Packages/blob/openwrt-23.05/onion-dt-overlay/Makefile)
<!-- TODO: update above with OPENWRT_VERSION variable -->

It is part of the `onion-dt-overlay` package.

<GiscusDocComment />
