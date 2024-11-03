---
title: Firmware Revision List
---
import { GiscusDocComment } from '/src/components/GiscusComment';

The legacy Omega firmware image repository is available at: [http://repo.onioniot.com/omega2/images/](http://repo.onioniot.com/omega2/images/)

 The new Omega firmware repository, starting for firmware based on OpenWRT 23.05 is available at: [http://repo.onioniot.com/omega2/images/openwrt-23.05/](http://repo.onioniot.com/omega2/images/openwrt-23.05/) <!-- TODO: update with OPENWRT_VERSION variable -->

 For a comprehensive set of firmware release notes, please refer to [https://github.com/OnionIoT/OpenWRT-Packages/releases](https://github.com/OnionIoT/OpenWRT-Packages/releases)

:::note

Onion has modified the firmware version number system to help track the image alongside the current OpenWRT release.

:::

## The Previous Firmware v0.3.4

The previous Omega2 stable firmware (v0.3.4) is based on OpenWRT 18.06, and it's running the Linux kernel 4.14.

**Note:** The v0.3.4 numbering will end with this version. It will be replaced with the new current stable firmware numbering convention.

## The New Firmware 23.05.3

<!-- TODO: update above with OPENWRT_RELEASE variable -->

The new Omega2 firmware (23.05.3) is based on OpenWRT 23.05, and it's running the Linux kernel 5.15. <!-- TODO: update with OPENWRT_RELEASE and KERNEL_VERSION variable -->

## Highlights

- Smaller image size - faster install and more storage space on the drive.
- Uses the open source mt76 WiFi driver - more flexibility and functionality.
- Easier and faster methods for building custom packages and firmware.

See the [What's new in v23.05.3 article](./whats-new) for more details. <!-- TODO: update above with OPENWRT_RELEASE variable? -->

<GiscusDocComment />
