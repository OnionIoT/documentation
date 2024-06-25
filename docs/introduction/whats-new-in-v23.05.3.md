---
title: What's new in v23.05.3
---
import { GiscusDocComment } from '/src/components/GiscusComment';

## Overview of the new stable firmware

The new stable firmware is based on OpenWRT 23.05, and it's running the Linux kernel 5.15. It uses the open source mt76 driver for WiFi, which offers several advantages over the previous driver.

### New WiFi driver

- Supports disabling the WiFi Access Point (AP) while connected to a WiFi network station (STA) as a client.
- No more automatic network switching.
- Supports multiple WiFi operating modes such as, enterprise WiFi, roaming, etc.

### Smaller image size

The new firmware has a smaller image size resulting in a faster installation and more storage space on the drive. The new image size is only 6.8MB compared to the previous one of 9.3MB.

### Customizations

Onion has reduced the number of customized utilities and packages included in the firmware. Additionally, we no longer support some of the outdated and irrelevant packages and customizations from the old firmware.

:::note

- The new firmware does not include the Onion Console Web GUI.
- There are no specific images for the Omega2 Pro, Omega2 LTE, and Omega2 Dash.

:::

It's easier and faster to build a custom firmware image. You can build a custom image in minutes as opposed to hours.

Onion has a new approach to firmware customization. Currently two methods are supported.

Customizations are either:

1. Part of packages
1. Patches to the build system

<GiscusDocComment />