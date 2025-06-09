---
title: Activating the Bootloader Command Line
---

import { GiscusDocComment } from '/src/components/GiscusComment';

<!-- TODO: rename command line to prompt? check with u-boot documentations -->

The bootloader is configured to automatically boot into the Linux operating system. This feature is aptly called autoboot. 

However, autoboot can be stopped so the device remains in the bootloader and opens the bootloader command line. This gives the user access to low level system tools to change settings, flash new firwmare, and more.

*Access to the Omega's serial command line is required to use the bootloader.*

## How to Activate the Bootloader Command Line

**By default, the reset button (connected to the FW_RST/GPIO38 pin) controls the autoboot behaviour.** If the reset is asserted, autoboot will be stopped.

To stop autoboot:

import StopAutobootInstructions from './_stop-autoboot-instructions.mdx'

<StopAutobootInstructions/>

import StopAutobootOutcome from './_stop-autoboot-outcome.mdx'

<StopAutobootOutcome/>

## What if it didn't work?

So you pressed the reset button/held GPIO38 high while powering on the device but you didn't get to the bootloader command line? 

That's ok, just power off the device and try again.

## How to use the Bootloader Command line

The bootloader prompt offers low level access to the hardware, making it a powerful tool.

Some basics:
- Run the `boot` command to boot into the Linux operating system
- Run the `reset` command to reboot the device

To learn more about the bootloader prompt:

1. Try running the `help` command to see the available utilities
2. See the u-boot documentation on the [command line](https://docs.u-boot.org/en/latest/usage/cmdline.html) and the [available utilities](https://docs.u-boot.org/en/latest/usage/index.html#shell-commands)

Other things you can do with the bootloader:
- [Using the bootloader to flash new firmware over ethernet](/bootloader/flashing-firmware-over-ethernet)
- [Using the bootloader to flash new firmware over serial](/bootloader/flashing-firmware-over-serial)

<!-- TODO: add links to new guides as they become available -->


<GiscusDocComment />
