---
title: Device Tree Overview
---

import DocCardList from '@theme/DocCardList';
import { GiscusDocComment } from '/src/components/GiscusComment';

## Introduction

The OpenWRT-22.03 based firmware supports runtime loading of Device Tree Overlays.

This means you can dynamically add hardware support to a running firmware just by installing packages, opening the door for easier support of more use cases for the Omega2.

With this, you can avoid:

- Having to build fully custom firmware to configure specific hardware functionality.
- Having to maintain multiple DTS files.
- Having to use the Build System to create firmware from scratch - which can take hours.

Instead, you can:

- Change device functionality just by installing a package and rebooting.
- Quickly build firmware that supports customized hardware using the Image Builder.

## Context: What are Device Trees and how do they work?

The Device Tree is a data structure that describes the hardware components of a computer or device for the operating system's kernel to use and manage those components. This includes the CPU, memory, storage, and all peripherals.

For more info, check out the [Device Tree for Dummies](https://elinux.org/images/f/f9/Petazzoni-device-tree-dummies_0.pdf) presentation by Thomas Petazzoni.

### Device Trees in OpenWRT

By default, OpenWRT supports static Device Trees in the form of Device Tree Specification (DTS) files. For example, all the DTS files for ramips-based devices can be found on [OpenWRT's build system GitHub repo](https://github.com/openwrt/openwrt/tree/main/target/linux/ramips/dts) repository.

With the current static device tree setup, if you want to make a change in the device tree, you must build custom firmware using the Build System. Not only does this take time to first figure out and then a lot of time to compile, but it also limits the number of people who are able to make these types of hardware configuration changes on the Omega2.

### What is a Device Tree Overlay?

A Device Tree Overlay is a modification to the kernel’s live tree on a device - meaning adding support for new hardware or changing how hardware is supported.

## How a Device Tree Overlay is implemented

As a first step, runtime loadable device tree overlays are enabled in the [Onion-customized build system](https://github.com/OnionIoT/openwrt-buildsystem-wrapper) using patches. One of those patches includes a startup script so the device will automatically load compiled device tree overlays placed in `/lib/firmware/device-tree/overlays/*.dto` at startup.

Next, the Build System is used to create an OpenWRT Image Builder and SDK (among other things). Any firmware created using this Image Builder supports runtime loadable device tree overlays.

The Omega2 and Omega2+ firmware are built using this Image Builder - supporting runtime device tree overlays.

The SDK is used to create packages that contain compiled device tree overlays. Users can install the packages using `opkg` to dynamically add or change hardware support on their devices.

:::note

The device tree overlay packages must specify the kernel drivers for the new device added.

:::

:::tip

See the [How Firmware is Built article](https://documentation.onioniot.com/firmware/how-to-build-firmware)[ ](https://documentation.onioniot.com/firmware/how-to-build-firmware) for more information on the details of building firmware.

:::

## How a Device Tree Overlay Package works on the device

Use the `opkg` package manager to install a software package that features a compiled device tree overlay binary. After a reboot, the device tree overlay will be loaded, and the kernel will be made aware of a new device.

The kernel will load drivers to enable support for the device. 

## How to create custom Device Tree Overlay packages

See the `onion-dt-overlay` package [README](https://github.com/OnionIoT/OpenWRT-Packages/tree/openwrt-22.03/onion-dt-overlay#device-tree-runtime-overlay) to learn how to create your own device tree overlay packages.

## Available Device Tree Overlay packages

The following device tree overlay packages are available for use with your device. These are example packages that, if required, you can use as templates to create customized versions that suit your needs better.

<DocCardList/>

<GiscusDocComment />
