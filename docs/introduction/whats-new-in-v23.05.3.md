---
title: What's new in v23.05.3
---
<!-- TODO: update above with OPENWRT_RELEASE variable? -->

import { GiscusDocComment } from '/src/components/GiscusComment';

## Overview of the new stable firmware

The new stable firmware is based on OpenWRT 23.05, and it's running the Linux kernel 5.15. The firmware is more modern, lightweight, and easier to customize than before. The idea was to start with a minimal firmware and have users add the functionality they need. <!-- TODO: update with OPENWRT_VERSION and KERNEL_VERSION variable -->

The process to build your own firmware has also been upgraded and simplified. It now takes minutes instead of hours!

See the [full list of changes to the firwmare below](#list-of-changes-in-new-firmware).

### New WiFi driver

The new firmware uses the open source mt76 driver for WiFi, which offers several advantages over the previous driver.

- Supports disabling the WiFi Access Point (AP) while connected to a WiFi network station (STA) as a client.
- No more automatic network switching.
- Supports multiple WiFi operating modes such as, enterprise WiFi, roaming, etc.

### Smaller image size

The new firmware has a smaller image size resulting in a faster installation and more storage space on the drive. The new image size is only 6.8MB compared to the previous one of 9.3MB.

### Customizations

Onion has reduced the number of customized utilities and packages included in the firmware. Additionally, we no longer support some of the outdated and irrelevant packages and customizations from the old firmware.

:::note

Highlights:

- The new firmware does not include the OnionOS/Onion Console Web GUI.
- There are no specific images for the Omega2 Pro, Omega2 LTE, and Omega2 Dash.

:::

### Easily Create Custom Firmware

It's easier and faster to build a custom firmware image. **You can build a custom image in minutes as opposed to hours.** 

Onion has a new approach to firmware customization. See the [How Onion Firmware is Built article](../firmware/how-onion-builds-firmware.md) for all of the details on our new approach. And see the [Building Custom Firmware article](../firmware/how-to-build-firmware.md) for a guide on how to build your own firmware.

Customizations to the firwmare are now either:

1. Part of software packages
1. Patches to the build system (intended for changes to the kernel and Linux configuration)

We no longer implement customizations to the firmware by adding individual files to firmware images. This method made it harder to manage, track, and maintain the customizations.
<!-- TODO: review this with Zheng -->

### List of Changes in New Firmware

What's new:

- Based on OpenWRT 23.05 release, running Linux kernel 5.15 <!-- TODO: update this with OPENWRT_VERSION and LINUX_KERNEL_VERSION variables -->
- The WiFi driver now supports configuration using the standard nl80211 interface. All WiFi configuration is now done through UCI (the `wifisetup` command is no longer available).
<!-- - Now support connecting to WiFi networks with spaces, commas, and unicode carriers in the network SSID (name) TODO: verify this on device and uncomment -->
- Now supports disabling the WiFi AP while connected to a WiFi network as a client (STA)
- Support for more WiFi operating modes (Enterprise WiFi, roaming, etc)
- The WiFi STA does not automatically switch WiFi networks. It will only attempt to connect to the network that is currently configured, nothing else.
- New firmware version numbering schema. The version number indicates which OpenWRT release the firmware is based on, like `23.05.3`, and the build number indicates the date the firmware was built and released in `YYYYMMDD` firmat. <!-- TODO: update this with OPENWRT_RELEASE variable -->
- Smaller firmware image size - incrementally faster boot time and more space for customization

What's no longer included:

- Avahi Daemon is not included, so the Omega will not announce or be available at its `omega-abcd.local` name on the local network
- No more `wifisetup` utility. All WiFi configuration done through UCI. 
- No more `oupgrade` utility. Firmware updates must be done using `sysupgrade` in Linux or through the bootloader
- The OnionOS/Onion Console Web UI is not included
- No web-based setup wizard - the legacy first time setup guide will not work with this firmware
- Only firmware for the Omega2/2S and Omega2+/2S+ devices is provided. No device-specific firwmare for the Omega2 Pro, LTE, and Dash - instead the Omega2+/2S+ firmware with additional packages should be used
- Utilities for the I2C-based Omega2 expansions are not included


<GiscusDocComment />