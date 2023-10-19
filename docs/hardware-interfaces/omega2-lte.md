---
title: Omega2 LTE / External Cellular Modem
---

As of firmware release `20231010`, the EC25/EG25 modem featured in the Omega2 LTE is supported through a **package**.

## Steps

* Flash latest available Omega2+ beta firmware to your device - see the [installing the new firmware article](/installing-firmware)
* Connect to wifi - see the [WiFi article](/networking/wifi)
* Install the package that provides support for the cellular modem
    ```
    opkg update
    opkg install omega2-lte-base
    ```
* Follow the instructions from the [Omega2 LTE Get Started Guide](https://onion.io/omega2-lte-guide/#getstarted-cellular) to setup the cellular data connection
    * Safely ignore the `/usr/bin/o2lte: line 134: /etc/init.d/ugps: not found` message that comes up
* Confirm the device is connected to the cellular network and the `wwan0` interface has been given an IP address

## Caveats

This is different from the v0.3.4 firmware that was specific to the Omega2 LTE!

Key differences:

1. This is just a software package. **There is no specific firmware for the Omega2 LTE.**
1. This does not include the `ugps` utility out of the box. Additional work is needed to use the GNSS receiver
1. This is a beta firmware. If you're unsure about using beta firmware, do not proceed and stick with the stable firmware