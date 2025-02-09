---
title: LTE Modem
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Introduction

The Omega2 supports the Quectel EC25/EG25 LTE modem which is enabled through a software package.

The modem is featured in the Omega2 LTE single board computer and enables a cellular data connection - LTE Cat4. 

Maximum Data Rates: 150 Mpbs downlink, 50 Mpbs uplink.

## Hardware

The LTE modem must be connected to the Omega2 host USB port.

The Omega2 LTE single board computer features the LTE modem on-board. 

## Software

To install the software package to provide support for the LTE modem:

1. Flash the latest available Omega2+ firmware to your device – see [installing the new firmware article](https://documentation.onioniot.com/installing-firmware)
2. Connect the WiFi – see the [WiFi article](https://documentation.onioniot.com/networking/wifi)
3. Install the software

 ```shell
 opkg update opkg 
 install omega2-lte-base
 ```

4. Follow the instructions from the [Omega2 LTE Get Started Guide](https://onion.io/omega2-lte-guide/#getstarted-cellular) to setup the cellular data connection.

  - Safely ignore the `/usr/bin/o2lte: line 134: /etc/init.d/ugps: not found` message that comes up.

5. Confirm the device is connected to the cellular network and the `wwan0` interface has been given an IP address.

## Caveats

Using the Omega2 LTE with the latest firmware is a bit different. The new firmware is not the same as the v0.3.4 firmware for the Omega2 LTE.

Key differences:
- There is no firmware specific to the Omega2 LTE. Instead, the Omega2 or Omega2+ firmware must be used. You can add LTE modem support by installing the `omega2-lte-base` software package.
- The software does not include the `ugps` utility out-of-the-box. Additional work is needed to use the GNSS receiver.

We’re open to suggestions on improving this experience and software package. Please provide feedback by leaving a comment in this article. Or, create an issue in the [OnionIoT/OpenWRT-Packages GitHub repo](https://github.com/OnionIoT/OpenWRT-Packages/issues).

<GiscusDocComment /> 
