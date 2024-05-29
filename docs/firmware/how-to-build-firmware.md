---
title: How Firmware is Built
---

import { GiscusDocComment } from '/src/components/GiscusComment';

The OpenWRT-22.03 based firwmare is built using two different processes:

**Step 1:**
The OpenWRT Build System is used to build all of the default packages, the OpenWRT SDK, and the OpenWRT Image Builder

**Step 2:**
Building the custom Onion packages and firmware for the Omega2

* Step 2A: The OpenWRT SDK *(built in Step 1)* is used to build the custom packages created by Onion
* Step 2B: The OpenWRT Image Builder *(built in Step 1)* is used to build firmware images for Omega2 devices that include default packages and custom Onion Packages

:::note

Step 2 is independent from Step 1.

Step 1 is run from time to time, while Step 2 are run every time a new firmware is released.

:::

## OpenWRT Build System

### Step 1 in the process

The OpenWRT Build System is used to build:

* all of the default packages
* the OpenWRT SDK
* the OpenWRT Image Builder

**Key point:** The OpenWRT SDK and Image Builder are used in Steps 2 & 3 to create firmware and the Onion package repo. 

#### Why customize this?

OpenWRT, the organization, also provides an SDK and Image Builder. However, these SDKs and Image Builders are based on the vanilla OpenWRT Build System. It is possible to build packages and create firmware using them, but they only provide control of the general configuration and what packages to include in the firmware. Deeper changes cannot be made.

Using a customized build system to create a customized SDK and Image Builder provides more flexibility when building packages and firmware - including making changes to the kernel and system configuration. 

Some examples includes making the changes required to:

1. Support FPU emulation in the kernel in order to build and use modern NodeJS (modern versions are not supported on any other MIPS platform)
2. Making settings changes in the kernel configuration - like enabling the `/dev/mem` device used for [pin multiplexing](/hardware-interfaces/pin-multiplexing)
3. Building kernel modules not part of the Linux kernel
4. The freedom to add patches in order to try out changes (created by yourself and others) quickly and efficiently

#### Where is the source code?

All of the customizations to the build system used to compile our SDK and image builder are public and available on GitHub: https://github.com/OnionIoT/OpenWRT-buildsystem-wrapper

The customizations are based on patches to the build system. This is intentional, as it is easier than maintaining our own fork of the Build System, making it relatively easy to port our customizations to new releases of OpenWRT.

See the [README in the Github repo](https://github.com/OnionIoT/openwrt-buildsystem-wrapper) for usage instructions.

#### Where is the output?

This customized OpenWRT build system is compiled by our CI system and the output is placed here: http://downloads.onioniot.com/

The default packages can be found here: http://downloads.onioniot.com/releases/22.03.5/packages/mipsel_24kc/

The compiled SDK and Image Builder can be found here: http://downloads.onioniot.com/releases/22.03.3/targets/ramips/mt76x8/

This directory also has firmware images, which you can safely ignore since they are vanilla OpenWRT. 

The Omega2 firmware can be found here: http://repo.onioniot.com/omega2/images/openwrt-22.03/

## OpenWRT SDK

### Step 2A in the process

The OpenWRT SDK is used to build the Onion customized packages. 

One of the (new) core tenets of Onion device firmware is to keep all customizations localized in packages. This makes it easy to port the changes to new releases and reduces the number of "fronts" that have to be maintained.

So the Onion packages are where all the magic happens - we try to add customizations that bring value to our customers, either by making it easier to use (for example, friendly default network configuration) or by providing more functionality (for example, a gpio muxing utility).

We use a wrapper around the SDK to easily interact with the SDK. By default, it uses the Onion-customized OpenWRT SDK built in Step 1, and compiles packages from the `openwrt-22.03` branch of the `OnionIoT/OpenWRT-Packages` GitHub repo. 

Both of these options can be changed to suit your specific needs.

#### Where is the source code?

The package source code can be found on GitHub: https://github.com/OnionIoT/OpenWRT-Packages/tree/openwrt-22.03

The `openwrt-sdk-wrapper` repo is used to easily and quickly compile packages using the OpenWRT SDK: https://github.com/OnionIoT/openwrt-sdk-wrapper

The `profile` config file defines what SDK to use, the version of the SDK, the package feed to use, and which packages from the package feed to compile.

The default version of the `profile` config file is used to build the Onion package repo.

#### Where is the output?

The compiled packages can be found at: http://repo.onioniot.com/omega2/packages/openwrt-22.03.5/

## OpenWRT Image Builder

### Step 2B in the process

The OpenWRT Image Builder is used to build firmware images that includes:

* the default packages from Step 1 
* the Onion custom packages from Step 2A

A wrapper is used to interact with the Image Builder, making it straight-forward to build firmware. By default, it uses the Onion-customized Image Builder built in Step 1. This can be changed to the vanilla Image Builder provided by OpenWRT.

#### Where is the source code?

The `openwrt-imagebuilder-wrapper` repo is used to build firmware images for the Omega2 and Omega2+ using the OpenWRT Image Builder in an easily repeatable and maintainable way: https://github.com/OnionIoT/openwrt-imagebuilder-wrapper

The `profile` config file defines which image builder to use, the version of the image builder, for which devices to create firmware, which package repos should be used, and which packages should be included in the firmware.

The default version of the `profile` config file is used to build the Omega2 and Omega2+ firmware.

#### Where is the output?

The compiled firmware images can be found at: http://repo.onioniot.com/omega2/images/openwrt-22.03/

<GiscusDocComment />