---
title: Flashing Firmware over Ethernet
---

import { GiscusDocComment } from '/src/components/GiscusComment';

This guide shows how to flash new firmware to the Omega2 using ethernet and TFTP. 

This is useful for:
- Flashing custom firwmare to the Omega2 during production of your own device/product
- Recovering devices that cannot boot

## Flashing Procedure Overview

The flashing procedure involves using the bootloader command line to copy a firmware image from a networked computer using TFTP and then write the firmware image to the flash memory.

You will need access to the reset button (GPIO38), the serial console on UART0, and the Ethernet port.

### Step 1: Gather Requirements

Gather the requirements:
- The target Omega2 device with access to the following:
    - serial command line
    - ethernet port
    - reset button (GPIO38)
    - Note: all are provided on the Omega2 Eval Boards
- A host computer
- Ethernet Cable
- USB cable to connect to the Omega

### Step 2: Computer setup

Follow the steps below to setup the host computer for use with this guide.

#### Serial Command Line Drivers Installed

TODO: reuse this content?

Follow the instructions in [step 1 of the connecting to serial command line article](/quickstart/serial-command-line#step-1-install-usb-to-serial-driver-on-your-computer) to install the drivers required to use the serial command line. 

#### Configure the Ethernet Network

TODO: reuse this content?

Configure your computer’s ethernet network to manually set its IP address to `192.168.8.100` and subnet mask to `255.255.255.0`. By doing so, your computer will be able to communicate with the Omega over ethernet while it is in web recovery mode.

TODO: decide if including steps to setup ethernet here

#### Install TFPT Tools

The host computer needs a TFTP server. There are many TFTP server implementations. This guide will use the NodeJS tftp package for this purpose.

Make sure NodeJS and NPM are installed, see the [installation guide in the NPM documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for more details.

Then use npm to globally install the tftp package:

```
npm install tftp -g
```

## Step 3: Download the Firmware Image

Download the firmware image to be flashed on the target Omega2 device to your host computer.

:::tip

This guide assumes official firmware released by Onion is being installed. However, this process will work for any Omega2/Omega2+ firmware image. Simply use the target firmware and skip ahead to the next step.

:::

import InstallingFirmwareSelectImage from '../firmware/_installing-firmware-select-image.mdx'

<InstallingFirmwareSelectImage/>

Download the selected firmware image and put it in a new directory.

## Step 4: Start the TFTP Server

In the directory holding the firmware image from the previous step, start the TFTP server by running:

```
ntftp 0.0.0.0 -l .
```

## Step 5: Activate the Bootloader Command Line

Connect the target Omega to the host computer with the ethernet cable. But do not power on the device just yet!

import StopAutobootInstructions from './_stop-autoboot-instructions.mdx'

<StopAutobootInstructions/>

TODO: reuse this?

Autoboot will be disabled and the bootloader command line will be visible in the serial command line output:

TODO: add screenshot of console output when bootloader command line is activated


## Step 6: Transfer the Firmware Image to the Omega2

Copy the firmware image from Step 3 above to the Omega2 memory by running:

```
dhcp $loadaddr <HOST COMPUTER IP ADDRESS>:<FIRMWARE IMAGE FILENAME>
```

Where
- `<HOST COMPUTER IP ADDRESS>` is the IPv4 address of the host computer, recall we set this to `192.168.8.100` in Step 2
- `<FIRMWARE IMAGE FILENAME>` is the filename of the firmware image in the folder on the host computer from Step 3

Say the firmware image is named `onion_omega2p-23.05.3-20250121.bin`, the command would look like this:

```
dhcp $loadaddr 192.168.8.100:onion_omega2p-23.05.3-20250121.bin
```

TODO: consider changing the above to use the env variable for load file - look into this more

This will take ~10 seconds. TODO: give proper time estimate

## Step 7: Write the Firmware Image to Flash

The previous step transferred the firmware image from the host computer to the Omega's memory. Now, write the firmware image to the flash storage by running: 

```
mtd write firmware $loadaddr 0x0 $filesize
```

Note: the `$loadaddr` variable is set by the bootloader compile-time configuration, and the `$filesize` is automatically populated by the command used in Step 6.

This will take ~10 seconds. TODO: give proper time estimate

## Step 8: Boot into the Firmware

Either reboot the device or run the `boot` command to boot into the newly flashed firmware.

<GiscusDocComment />
