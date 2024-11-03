---
title: External Storage
---

This firmware includes the kernel modules required for external USB and SD Card storage - including support for a variety of filesystems.

## USB

Plug in a USB drive and you’ll see a message like:

```shell
[ 1704.267974] usb 1-1: new high-speed USB device number 2 using ehci-platform
[ 1704.479893] usb-storage 1-1:1.0: USB Mass Storage device detected
[ 1704.502029] scsi host0: usb-storage 1-1:1.0
[ 1705.530163] scsi 0:0:0:0: Direct-Access     Generic  Flash Disk       8.07 PQ: 0 ANSI: 4
[ 1705.549739] sd 0:0:0:0: [sda] 15728640 512-byte logical blocks: (8.05 GB/7.50 GiB)
[ 1705.559385] sd 0:0:0:0: [sda] Write Protect is off
[ 1705.564277] sd 0:0:0:0: [sda] Mode Sense: 23 00 00 00
[ 1705.565444] sd 0:0:0:0: [sda] Write cache: disabled, read cache: enabled, doesn't support DPO or FUA
[ 1705.583833]  sda: sda1
[ 1705.596761] sd 0:0:0:0: [sda] Attached SCSI removable disk
```

Note from the second last line, the new device is called `sda1`

The filesystem from the USB drive will be automatically mounted to the `/mnt/` directory, with the name of the device as the full path, so `/mnt/sda1` in this case:

```bash
root@Omega-F19D:/# ls -l /mnt/sda1
drwxrwxrwx    2 root     root          4096 Jun  1  2018 System Volume Information
-rwxrwxrwx    1 root     root             0 Jun 17  2021 omega2p-v0.3.3-b251.bin
```

**Unmount the filesystem before removing the USB drive:**

```bash
umount /mnt/sda1
```

## SD Card

Insert an SD Card and you will see a message like the following:

```bash
[ 2757.012387] mmc0: new high speed SDHC card at address 0007
[ 2757.026510] mmcblk0: mmc0:0007 SD8GB 7.21 GiB
[ 2757.033860]  mmcblk0: p1
```

The filesystem from the SD CARD will be automatically mounted to the `/mnt/` directory, with the name of the device + filesystem as the full path, so `/mnt/mmcblk0p1` in this case:

```bash
root@Omega-F19D:/# ls -l /mnt/mmcblk0p1/
-rw-r--r--    1 root     root            29 Nov 21 17:09 log.txt
```

**Unmount the filesystem before removing the SD card:**

```bash
umount /mnt/mmcblk0p1
```
