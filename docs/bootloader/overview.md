---
title: Bootloader Overview
---

import { GiscusDocComment } from '/src/components/GiscusComment';

The bootloader is the very first program an embedded device will run when it powers up. It will do basic hardware initialization and move on to load the operating system. It can also be used to customize boot behaviour, flash new versions of the firmware/operating system, and more.

A bootloader based on the latest release of u-boot is now available for the Omega2 family of modules. 

## Better by Miles

It provides many benefits over the previously available and much older bootloader:

- Better and faster firmware flashing and recovery options
- Support available for more modern features: enhanced command line utilities, support for scripting, networking, - End-users can customize bootloader behaviour without rebuilding the bootloader
- Based on an active, maintainable, and extendable code base

## Guides

TODO: link to the rest of the articles in this section

## Details about the Omega2 U-Boot Support

- Current supported u-boot version: v2025.04 
<!-- - TODO: update to use u-boot-version variable above -->
- TODO: link to u-boot/u-boot repo and omega2 support
- TODO: link to OnionIoT/u-boot repo
- Fits into existing 192kB u-boot partition on the Omega2 devices
    - First boots into u-boot SPL (Secondary Program Loader) that loads a compressed version of the full u-boot 





<GiscusDocComment />