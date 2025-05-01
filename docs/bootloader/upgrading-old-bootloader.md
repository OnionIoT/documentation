---
title: Upgrading the Old Bootloader
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { GiscusDocComment } from '/src/components/GiscusComment';

Follow the procedure in this guide to upgrade an Omega2 module from the previous bootloader to the new, modern, u-boot-based bootloader. 

import BootloaderUpgradeWarning from './_bootloader-upgrade-warning.mdx';

<BootloaderUpgradeWarning/>

## How do I know if my Omega2 has the Old Bootloader?

<!-- TODO: when new bootloader becomes standards, add a note on mfg date and which bootloader it ships with -->

The old and new bootloader will show up differently in the serial command line. We can use those differences to tell which version we're running.

Start by activating the bootloader command line:

import StopAutobootInstructions from './_stop-autoboot-instructions.mdx'

<StopAutobootInstructions/>

#### Old Bootloader

If the serial command line shows a menu like the one below, **the device is running the old version of the bootloader**:

![previous omega2 bootloader boot menu](./assets/old-bootloader-menu.png)

#### New Bootloader

If the serial command line prints messages mentioning U-Boot, U-Boot SPL and version numbers like 2025.04 or greater, then the device is already running the new bootloader. **No need to take any further action!**

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
=>
```


## Old Bootloader Upgrade Procedure

The upgrade procedure involves using the web recovery feature of the previous bootloader to flash the new bootloader to the Omega’s internal memory. 

You will need access to the reset button (GPIO38), the serial console on UART0, and the Ethernet port to make use of the web recovery feature. Note that access to all of the above is provided on the Omega2 Eval Boards.

### Step 1: Gather Requirements

Gather the requirements:
- The target Omega2 device with access to the following:
    - serial command line
    - ethernet port
    - reset button (GPIO38)
- A host computer
- Ethernet Cable
- USB cable to connect to the Omega

### Step 2: Computer setup

Follow the steps below to setup the host computer for use with this guide.

#### Serial Command Line Drivers Installed

import ComputerSetupSerialDrivers from './_computer-setup-serial-drivers.mdx'

<ComputerSetupSerialDrivers/>

#### Configure the Ethernet Network

import ComputerSetupEthernetStaticIp from './_computer-setup-ethernet-static-ip.mdx'

<ComputerSetupEthernetStaticIp/>

### Step 3: Download the New Bootloader Binary

<!-- TODO: update this section when bootloader binaries are uploaded if necessary -->

Download the bootloader binary that will be flashed to the target device.

In a web browser, navigate to http://repo.onioniot.com/omega2/bootloader/v2025.04

Next, find the bootloader binary for the target device:

- The bootloader filename for the Omega2 (OM-O2) and Omega2S (OM-O2S) starts with `onion_omega2_`
- The bootloader filename for the Omega2**+** (OM-O2**P**) or Omega2S**+** (OM-O2S**P**) starts with `onion_omega2p_`

Download the corresponding bootloader binary for the target device.

### Step 4: Activate Web Recovery Mode

Connect the target Omega to the host computer with the ethernet cable. But do not power it on just yet!

<StopAutobootInstructions/>

This will activate the (old) bootloader and display a menu of options:

![previous omega2 bootloader boot menu](./assets/old-bootloader-menu.png)

Activate **Web Recovery Mode** by pressing `0`, you should then see the following output:

```
Bringing Eth0 (10/100-M) up...

RT2880 ETH setup done.

HTTP server starting at 192.168.8.8 ...

HTTP server is up and running.
```

### Step 5: Flash the New Bootloader

Open a browser on the host computer and navigate to `192.168.8.8/uboot.html`. It will display a page like this:

![old bootloader web recovery in browser](./assets/old-bootloader-web-recovery.png)

Next, press the **Choose File** button to select the bootloader binary downloaded in [Step 3 above](#step-3-download-the-new-bootloader-binary). 

<BootloaderUpgradeWarning/>

When you’re ready, press the **Update!** button. The serial command line will show messages like this:

![serial command line showing bootloader updating](./assets/old-bootloader-updating.png)


### Step 6: Update Complete

The update will take about 15 seconds, the device will restart when the update is complete. 

The Omega will boot normally if everything went according to plan. The boot logs will look something like this:

<!-- TODO: update boot log with upstreamed bootloader version? -->

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
```

## What's Next?

Now that the new bootloader is installed on the device, see the rest of the guides in this section:
- [How to activate the bootloader command line](./activating-bootloader.md)
- [How to flash firmware using the bootloader and ethernet](./flashing-firmware-over-ethernet.md)

<!-- TODO: add more guides as they become available -->

<GiscusDocComment />