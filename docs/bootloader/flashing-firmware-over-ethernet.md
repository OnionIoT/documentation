---
title: Flashing Firmware over Ethernet
---

import { GiscusDocComment } from '/src/components/GiscusComment';

This article shows how to use the bootloader to flash new firmware to the Omega2 using ethernet and TFTP. This is a relatively fast and reliable firmware flashing method. It can be used for:
- Flashing custom firwmare to the Omega2 module during production of your own device/product
- Recovering devices that cannot boot into Linux

## Flashing Procedure Overview

The flashing procedure involves using the bootloader command line to copy a firmware image from a networked computer using TFTP and then write the firmware image to the flash memory.

You will need access to the reset button (GPIO38), the serial console on UART0, and the Ethernet port. Note that access to all of the above is provided on the Omega2 Eval Boards.

<!-- TODO: consider adding this guide is for connecting the omega directly to a computer, but it's also possible to connect the host computer and the target omega to an ethernet switch and accomplish the same thing, just need to know the ip address of the host computer -->

## Step 1: Gather Requirements

Gather the requirements:
- The target Omega2 device with access to the following:
    - serial command line
    - ethernet port
    - reset button (GPIO38)
- A host computer
- Ethernet Cable
- USB cable to connect to the Omega

## Step 2: Computer Setup

Follow the steps below to setup the host computer for use with this guide.

#### Serial Command Line Drivers Installed

import ComputerSetupSerialDrivers from './_computer-setup-serial-drivers.mdx'

<ComputerSetupSerialDrivers/>

#### Configure the Ethernet Network

import ComputerSetupEthernetStaticIp from './_computer-setup-ethernet-static-ip.mdx'

<ComputerSetupEthernetStaticIp/>

#### Install TFPT Tools

The host computer needs a TFTP server. There are many TFTP server implementations, this guide will use the NodeJS tftp package.

Make sure NodeJS and NPM are installed, see the [installation guide in the NPM documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for more details.

Then use npm to globally install the tftp package:

```
npm install tftp -g
```

## Step 3: Download the Firmware Image

Download the firmware image to be flashed on the target Omega2 device to your host computer.

:::tip

This step assumes official firmware released by Onion is being flashed on the device. However, this process will work for any Omega2/Omega2+ firmware image. 

If you're bringing your own firmware, note the firmware image filename and skip to the [next step](#step-4-start-the-tftp-server).

:::

import InstallingFirmwareSelectImage from '../firmware/_installing-firmware-select-image.mdx'

<InstallingFirmwareSelectImage/>

Download the selected firmware image and put it in a new directory.

## Step 4: Start the TFTP Server

Still on the host computer, navigate a terminal to the directory holding the firmware image from the previous step.
Then start the TFTP server by running:

```
ntftp 0.0.0.0 -l .
```

## Step 5: Activate the Bootloader Command Line

Connect the target Omega to the host computer with the ethernet cable. But do not power on the device just yet!

import StopAutobootInstructions from './_stop-autoboot-instructions.mdx'

<StopAutobootInstructions/>

import StopAutobootOutcome from './_stop-autoboot-outcome.mdx'

<StopAutobootOutcome/>


## Step 6: Transfer the Firmware Image to the Omega2

Copy the firmware image from the host computer to the Omega2's memory. 

First set the `bootfile` environment variable to the firmware image filename on the host computer from [Step 3](#step-3-download-the-firmware-image):

```
env set bootfile <FIRMWARE IMAGE FILENAME>
```

Then start the file transfer over TFTP:

```
tftpboot
```

:::note

When run with no arguments, the `tftpboot` command will use  the `loadaddr`, `serverip`, and `bootfile` environment variables as the address in memory to store the file, the IP of the TFTP server host, and the name of the firmware image, respectively. 

The `loadaddr` and `serverip` environment variables are set by the bootloader compile-time configuration and do not need to be changed.

:::

The transfer will take about 10 seconds depending on the size of the firmware image. 

#### Example

Say the firmware image is named `onion_omega2p-23.05.3-20250121.bin`, the command would look like this:

```
env set bootfile onion_omega2p-23.05.3-20250121.bin
tftpboot
```

The output will look something like:

```
=> tftpboot
Using eth@10110000 device
TFTP from server 192.168.8.100; our IP address is 192.168.8.8
Filename 'onion_omega2p-23.05.3-20250205.bin'.
Load address: 0x81800000
Loading: #################################################################
         #################################################################
         #################################################################
         #################################################################
         #################################################################
         #################################################################
         #################################################################
         ################################
         701.2 KiB/s
done
Bytes transferred = 7144233 (6d0329 hex)
```

## Step 7: Write the Firmware Image to Flash

The previous step transferred the firmware image from the host computer to the Omega's memory. Now, write the firmware image to the flash storage.

First initialize the flash storage:

```
sf probe
```

Then write the firmware image by running this command **as-is**: 

```
sf update $loadaddr firmware $filesize
```

:::note

The `$loadaddr` variable is set by the bootloader compile-time configuration, `firmware` is the name of the partition that is being written, and the `$filesize` variable is automatically populated by the command used in the previous step.

:::

Writing the firmware image to the flash will will take about 30-45 seconds, depending on the size of the firmware image. **The Omega2 module has now been flashed with the selected firmware image.**

## Step 8: Boot into the Firmware

Boot into the newly flashed firmware by running:

```
boot
``` 

:::info

Other options for booting into Linux:
- Reboot the device by running `reset` in the u-boot prompt
- Toggle the power to the device

:::

## Step 9: Confirm booting!

If the process was successful, the boot log will look like the following:

<!-- TODO: update boot log with upstreamed bootloader version -->

```
U-Boot SPL 2025.04-ga92da3b468ea (Apr 23 2025 - 19:14:37 +0000)
Trying to boot from NOR


U-Boot 2025.04-ga92da3b468ea (Apr 23 2025 - 19:14:37 +0000)

CPU:   MediaTek MT7688A ver:1 eco:2
Boot:  DDR2, SPI-NOR 3-Byte Addr, CPU clock from XTAL
Clock: CPU: 580MHz, Bus: 193MHz, XTAL: 40MHz
Model: Onion Omega2+
DRAM:  128 MiB
Core:  52 devices, 13 uclasses, devicetree: separate
Loading Environment from SPIFlash... SF: Detected w25q256 with page size 256 Bytes, erase size 4 KiBB
OK
In:    uartlite@c00
Out:   uartlite@c00
Err:   uartlite@c00
Initializing MT7688 GPIO system.
Net:   eth0: eth@10110000
SF: Detected w25q256 with page size 256 Bytes, erase size 4 KiB, total 32 MiB
Reading 4194304 byte(s) at offset 0x00000000
## Booting kernel from Legacy Image at 81800000 ...
   Image Name:   MIPS OpenWrt Linux-5.15.150
   Image Type:   MIPS Linux Kernel Image (lzma compressed)
   Data Size:    2348656 Bytes = 2.2 MiB
   Load Address: 80000000
   Entry Point:  80000000
   Verifying Checksum ... OK
Working FDT set to 0
   Uncompressing Kernel Image to 80000000
[    0.000000] Linux version 5.15.150 (builder@buildhost) (mipsel-openwrt-linux-musl-gcc (OpenWrt GC4
[    0.000000] Board has DDR2
[    0.000000] Analog PMU set to hw control
[    0.000000] Digital PMU set to hw control
[    0.000000] SoC Type: MediaTek MT7688 ver:1 eco:2
[    0.000000] printk: bootconsole [early0] enabled
[    0.000000] CPU0 revision is: 00019655 (MIPS 24KEc)
[    0.000000] MIPS: machine is Onion Omega2+
...
```

<!-- ## Troubleshooting

If the firmware does not boot, run through the procedure again, but this time run the following commands for step 7:

```
mtd erase firmware 
mtd write.dontskipff firmware $loadaddr 0x0 $filesize
```

Erase takes ~5 minutes.
This will take a few minutes but should resolve any firmware flashing issues. -->

<GiscusDocComment />
