---
title: Device Tree Overlays Loadable at Runtime
---

import DocCardList from '@theme/DocCardList';

<!-- -> Why is this important
    - see https://github.com/OnionIoT/OpenWRT-Packages/issues/62 -->

The OpenWRT-22.03 based firmware supports runtime loading of Device Tree Overlays. 

This means users are able to dynamically add hardware support to a running firmware just by installing packages, opening the door for easier support of more use cases for the Omega2.

With this, users can avoid:

* Having to build fully custom firmware to configure specific hardware functionality
* Having to maintain multiple DTS files
* Having to use the Build System to create firmware for scratch - which can take hours

Instead they can:

* Change device functionality just by installing a package and rebooting
* Quickly build firmware that supports customized hardware using the Image Builder 

<details>
  <summary>

**Context: What are Device Trees? How do they generally work?**
  </summary>
  <div>
    
The Device Tree is a data structure that describes the hardware components of a computer or device in order for the operating system's kernel to use and manage those components. This includes the CPU, memory, storage, and all peripherals. 

For more info, check out the Device Tree for Dummies presentation by Thomas Petazzoni: https://elinux.org/images/f/f9/Petazzoni-device-tree-dummies_0.pdf

### Device Trees in OpenWRT

By default, OpenWRT supports static Device Trees in the form of DTS (Device Tree Specification) files. For example, all of the DTS files for ramips-based devices can be found at: https://github.com/openwrt/openwrt/tree/main/target/linux/ramips/dts

With the current static device tree setup, if a user wants to make a change in the device tree, they have to build a completely custom firmware using the Build System. Not only does this take time to first figure out and then a lot of time to compile, but it also limits the number of people who are able to make these types of hardware configuration changes on the Omega2.

  </div>
</details>

## How this is Implemented

As a first step, runtime loadable device tree overlays are enabled in the [Onion-customized build system](https://github.com/OnionIoT/openwrt-buildsystem-wrapper) using patches. One of those patches includes a startup script so the device will automatically load compiled device tree overlays placed in `/lib/firmware/device-tree/overlays/*.dto` at startup.

Next, the Build System is used to create an OpenWRT Image Builder and SDK (among other things). Any firmware created using this Image Builder supports runtime loadable device tree overlays.

The Omega2 and Omega2+ firmware are built using this Image Builder - supporting runtime device tree overlays. 

The SDK is used to create packages that contain compiled  device tree overlays. Users can install the packages using opkg to dynamically add or change hardware support on their devices.


:::tip

See the [How Firmware is Built docs article](/firmware/how-to-build-firmware) for more information on the details of building firmware.

:::

## How to create custom Device Tree Overlay Packages

See the [`onion-dt-overlay` Package README](https://github.com/OnionIoT/OpenWRT-Packages/tree/openwrt-22.03/onion-dt-overlay#device-tree-runtime-overlay) to learn how to create your own device tree overlay packages.

## Available Device Tree Overlay Packages

<DocCardList />
