---
title: Software SPI
---

# Software SPI

The hardware SPI on the Omega2 can only drive 2 devices, as there is only CS0 (already used by internal flash) and CS1.

If a use case requires an additional SPI device, software based SPI through GPIOs can be used. This is also known as bit-bang SPI.

Use the `onion-dt-overlay-sw-spi` Device Tree Overlay package to enable a software-based SPI bus to your device.

:::caution

**Drawback: Lower Bus Speed.** 

Since this is a software-based bus, it will not be as fast as a hardware SPI bus. This is alright for some applications but not data-intensive use cases like driving a display.

:::

## Installation

Ensure the Omega2 is connected to the internet, and install the package using opkg:

```
opkg update
opkg install onion-dt-overlay-sw-spi
```

Reboot the device 

## How it's Used

Once the `onion-dt-overlay-sw-spi` package is installed, there will be a software bus available at `/dev/spidev1.0`.

The following table describes which pins are used for which SPI signal:

| SPI Signal | GPIO |
|:----------:|------|
| SCK        | 11   |
| MOSI       | 5    |
| MISO       | 4    |
| CS         | 23   |

## Source Code

The DTS fragment that enables this functionality can be found at: https://github.com/OnionIoT/OpenWRT-Packages/blob/openwrt-22.03/onion-dt-overlay/src/sw-spi.dts

It is part of the `onion-dt-overlay` package.