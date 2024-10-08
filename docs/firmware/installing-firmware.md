---
title: Installing the New Firmware
---

import { GiscusDocComment } from '/src/components/GiscusComment';

> This firmware doesn't include the `oupgrade` utility, so we'll need to manually install the firmware. The procedure is very similar to the [Manual Firmware Installation instructions in the Onion Documentation](http://docs.onion.io/omega2-docs/manual-firmware-installation.html). 

The new firmware can be found online at http://repo.onioniot.com/omega2/images/openwrt-23.05/

The firmware images are named according to this syntax: `<DEVICE-NAME>-<OPENWRT-VERSION>-<BUILD-DATE>.bin`

So `onion_omega2p-23.05.3-20240807.bin` is:

* firmware made for the Omega2+/Omega2S+
* based on OpenWRT release 23.05.3
* built on Aug 7, 2024

## Selecting Firmware

Before you install firmware to your device, you'll need to decide which firmware image to install.

To start, use a browser to navigate to http://repo.onioniot.com/omega2/images/openwrt-23.05/

Next, you'll need to find the firmware for your device:

* Firmware for Omega2 and Omega2S starts with `onion_omega2-`
* Firmware for Omega2**+** and Omega2S**+** starts with `onion_omega2p-`.

Then, you'll want to select the **highest** OpenWRT release and the **latest** build date. This will ensure you're using the very latest available firmware.

Make a note of the filename of the firmware you've selected.

:::info

See the [OnionIoT/OpenWRT-Packages **Releases** on Github](https://github.com/OnionIoT/OpenWRT-Packages/releases) for the package and firmware **changelog**.

:::

## Installing the firmware

**WARNING: this will erase everything that's currently on your device. Back up anything that you don't want to lose forever!**

Once you know which firmware image you want to install on your device:

1. Connect to the command line of your device
1. Go to the `/tmp` directory: `cd /tmp`
1. Download the firmware image: `wget http://repo.onioniot.com/omega2/images/openwrt-23.05/<SELECTED-FIRMWARE-IMAGE>.bin`
1. Install the firwmare: `sysupgrade -F -n -v <SELECTED-FIRMWARE-IMAGE>.bin`

Say you selected firmware `onion_omega2p-23.05.3-20240807.bin`:

* Your download command would be `wget http://repo.onioniot.com/omega2/images/openwrt-23.05/onion_omega2p-23.05.3-20240807.bin`
* Your installation command would be `sysupgrade -F -n -v onion_omega2p-23.05.3-20240807.bin`

## Updating

From time to time, we'll be releasing new firmware images with various updates. You can follow the instructions above to install the latest firmware on your device - just keep an eye on the build date to make sure you're on the latest version.

**WARNING**: because `sysupgrade` is run with the `-n` option, **everything that's currently on the device will be erased when the firwmare is updated.** So all new files and changes on your device will be deleted as part of the upgrade process, and you will start with a fresh device.

<GiscusDocComment />