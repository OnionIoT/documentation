---
title: USB
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { GiscusDocComment } from '/src/components/GiscusComment';

## Introduction

The Omega2 features a single USB 2.0 host.

## Hardware

One USB 2.0 host controller is available on dedicated pins.

A 5V power source needs to be supplied to the USB client device to properly operate.

The USB pins are highlighted on the Omega2/2S diagrams below.

<Tabs>
  <TabItem value="omega2" label="Omega2" default>

  ![omega2-pinout usb-pins](./assets/omega2-pinout-usb-highlights.png)

   </TabItem>
  <TabItem value="omega2s" label="Omega2S">

![omega2s-pinout usb-pins](./assets/omega2s-pinout-usb-highlights.png)

  </TabItem>
</Tabs>

:::info

See the [Omega2S hardware design guide](https://github.com/OnionIoT/Omega2/blob/master/Documents/Omega2S%20Hardware%20Design%20Guide.pdf) for more information and recommendations on designing boards with USB.

:::

## USB storage

Omega2 firmware includes the kernel modules required for external USB storage - including support for a variety of file systems.

### Mounting the file system

To mount the file system, plug in a USB drive and you’ll see a message like:

```shell
[ 1704.267974] usb 1-1: new high-speed USB device number 2 using ehci-platform  [ 1704.479893] 
usb-storage 1-1:1.0: USB Mass Storage device detected  [ 1704.502029] 
scsi host0: usb-storage 1-1:1.0  [ 1705.530163] 
scsi0:0:0:0: Direct-Access Generic Flash Disk 8.07 PQ: 0 ANSI: 4  [ 1705.549739] 
sd 0:0:0:0: [sda] 15728640 512-byte logical blocks: (8.05 GB/7.50 GiB)  [ 1705.559385] 
sd 0:0:0:0: [sda] Write Protect is off  [ 1705.564277] 
sd 0:0:0:0: [sda] Mode Sense: 23 00 00 00  [ 1705.565444] 
sd 0:0:0:0: [sda] Write cache: disabled, read cache: enabled, doesn't support DPO or FUA  [ 1705.583833]  
sda: sda1  [ 1705.596761] 
sd 0:0:0:0: [sda] Attached SCSI removable disk
```

Note on the second last line that the new device is called `sda1`.

The file system from the USB drive will be automatically mounted to the `/mnt/` directory, with the name of the device as the full path, so `/mnt/sda1` in this case.

```shell
root@Omega-F19D:/_# ls -l /mnt/sda1_
drwxrwxrwx    2 root     root          4096 Jun  1  2018 System Volume Information
-rwxrwxrwx    1 root     root             0 Jun 17  2021 omega2p-v0.3.3-b251.bin
```

### Unmounting the file system

Before you remove the USB drive, you must unmount the file system.

```shell
umount /mnt/sda1
```

<GiscusDocComment />
