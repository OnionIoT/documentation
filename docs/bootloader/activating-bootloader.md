---
title: Activating the Bootloader Command Line
---

By default, the bootloader will automatically boot into the Linux operating system. This is called autoboot. However, autoboot can be stopped so the device remains in the bootloader and opens the bootloader command line. 

The bootloader gives the user access to low level system tools to change settings, flash new firwmare, and more.

## How to Activate the Bootloader Command Line

import StopAutobootInstructions from './_stop-autoboot-instructions.mdx'

<StopAutobootInstructions/>

Autoboot will be disabled and the bootloader command line will be visible in the serial command line output:

TODO: add screenshot of console output when bootloader command line is activated

## What if it didn't work?

So you pressed the reset button/held GPIO38 high while powering on the device but you didn't get to the bootloader command line? 

That's ok, just power off the device and try again.

## How to use the Bootloader Command line

1. Try running the `help` command to see the available utilities
2. See the u-boot documentation on the [command line](https://docs.u-boot.org/en/latest/usage/cmdline.html) and the [available utilities](https://docs.u-boot.org/en/latest/usage/index.html#shell-commands)
3. See the articles on flashing firwmare in this documentation

TODO: add links to guides

<StopAutobootInstructions/>