---
title: Installing the New Firmware
---

import { GiscusDocComment } from '/src/components/GiscusComment';

> This firmware doesn't include the `oupgrade` utility, so we'll need to manually install the firmware. The procedure is very similar to the [Manual Firmware Installation instructions in the legacy Onion Documentation](http://docs.onion.io/omega2-docs/manual-firmware-installation.html). 

The new firmware can be found online at http://repo.onioniot.com/omega2/images/openwrt-23.05/ <!-- TODO: update with OPENWRT_VERSION variable -->

The firmware images are named according to this syntax: `<DEVICE-NAME>-<OPENWRT-VERSION>-<BUILD-DATE>.bin`

So `onion_omega2p-23.05.3-20240807.bin` is: <!-- TODO: update with ONION_FW_VERSION variable -->

* firmware made for the Omega2+/Omega2S+
* based on OpenWRT release 23.05.3 <!-- TODO: update above with OPENWRT_RELEASE variable -->
* built on Aug 7, 2024 <!-- TODO: update above with ONION_FW_BUILDDATE_TEXT variable -->

## Selecting Firmware

Before you install firmware to your device, you'll need to decide which firmware image to install.

import InstallingFirmwareSelectImage from './_installing-firmware-select-image.mdx'

<InstallingFirmwareSelectImage/>

Make a note of the filename of the firmware you've selected.

:::info

See the [OnionIoT/OpenWRT-Packages **Releases** on Github](https://github.com/OnionIoT/OpenWRT-Packages/releases) for the package and firmware **changelog**.

:::

## Installing the firmware

**WARNING: this will erase everything that's currently on your device. Back up anything that you don't want to lose forever!**

Once you know which firmware image you want to install on your device:

1. Connect to the command line of your device
1. Go to the `/tmp` directory: `cd /tmp`
1. Download the firmware image: `wget http://repo.onioniot.com/omega2/images/openwrt-23.05/<SELECTED-FIRMWARE-IMAGE>.bin` <!-- TODO: update with OPENWRT_VERSION variable -->
1. Install the firwmare: `sysupgrade -F -n -v <SELECTED-FIRMWARE-IMAGE>.bin`

Say you selected firmware `onion_omega2p-23.05.3-20240807.bin`: <!-- TODO: update with ONION_FW_VERSION variable -->

* Your download command would be `wget http://repo.onioniot.com/omega2/images/openwrt-23.05/onion_omega2p-23.05.3-20240807.bin` <!-- TODO: update with ONION_FW_VERSION variable -->
* Your installation command would be `sysupgrade -F -n -v onion_omega2p-23.05.3-20240807.bin` <!-- TODO: update with ONION_FW_VERSION variable -->

## Updating

From time to time, we'll be releasing new firmware images with various updates. You can follow the instructions above to install the latest firmware on your device - just keep an eye on the build date to make sure you're on the latest version.

**WARNING**: because `sysupgrade` is run with the `-n` option, **everything that's currently on the device will be erased when the firwmare is updated.** So all new files and changes on your device will be deleted as part of the upgrade process, and you will start with a fresh device.

<GiscusDocComment />