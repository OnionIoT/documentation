---
title: Determining the Firmware Version a Device is Running
---

Follow this procedure to determine the version of the firmware running on an Omega device.

## Step 1: Finding the Firmware Version

Connect to the Omega's command line, and run this command:
```
uci show onion
```

The output will look something like:
```
root@Omega-FB94:/# uci show onion
onion.onion=onion
onion.onion.version='23.05.3'
onion.onion.build='20241015'
```

The `onion.onion.version` value is the firmware version, and the `onion.onion.build` value is the firmware build number.

In the case above the firmware version is `23.05.3` and the build is `20241015`.

### Version Info in the Login Banner 

:::note

This is purely informational 

:::

The firmware version info is also contained in the login banner that's displayed when a user connects to the Omega's command line, both through serial and SSH:

![firmware version info in login banner](./img/banner-fw-version-info.png)

In this case, the firmware version is `23.05.3` and the build is `20240807`.

## Step 2: Identifying the Firwmare

If the firmware version is a number like `23.05.3` or `22.03.2`, and the build is a `YYYYMMDD` datecode like `20240807`, then **the firmware in question is the new firmware**. 

This documentation site deals with the "new" firmware.

The version number indicates which OpenWRT release the firmware is based on, and the build number indicates the date the firmware was built and released. So firmware with version `23.05.3` and build `20241015` is based on the OpenWRT 23.05.3 release and was built on October 15, 2024.

### Previous Firmware

If the firmware version is a number like `0.3.4` or `0.3.1`, and the build is a 3-digit number like `255`, then the firmware in question is the previous firmware. 

This documentation site does not deal with the previous firmware. Visit the [legacy documentation site](https://docs.onion.io/) for information on the previous firmware.
