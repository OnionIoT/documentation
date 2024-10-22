# OPKG Package Manager

import { GiscusDocComment } from '/src/components/GiscusComment';

Opkg is the default package manager for OpenWRT. This is an efficient package management system, best for resource-constrained devices and crucial for managing software packages on devices running OpenWRT. It relies on package repositories to fetch and install software packages.

This article provides instructions on how to update, locate, and install OpenWRT packages for Omega2 devices.

## Update the package lists

Before using opkg to find packages, list packages, and install them, it is crucial to update opkg's package lists first.

Run the following command to update opkg's package lists:

```shell
opkg update
```

This command fetches the latest list of packages from the configured package repositories. When this command runs, OPKG will connect to the configured package repositories and determine which packages are available for installation.

:::tip

Customers must run the `opkg update` command after each reboot of the device to find or install a package.

:::

## Find packages to Install

In this section, we show you how to view the list of all available packages with their descriptions and find a particular package of interest. Follow the steps outlined below to search for packages using opkg.

### Step 1: Display available packages

Run the following command to view all the available packages:

```shell
opkg list
```

### Step 2: Find packages

To find a particular package from the repository, use the `grep` command. Narrow down your search operation using a specific keyword along with this command.

```shell
opkg list | grep keyword
```

**Example:** To find the packages related to `kmod-usb`, run the command:

```shell
opkg list | grep kmod-usb
```

:::tip

Use the `grep` command with the `-i` command to make your query **case-independent** (no discrimination between uppercase and lowercase letters).

:::

```shell
opkg list | grep -i kmod-usb
```

This will show all the available packages with `kmod-usb` in their name or description:

```shell
root@Omega-539F:/# opkg list | grep -i kmod-usb
kmod-usb-acm - 5.10.176-1 - Kernel support for USB ACM devices (modems/isdn controllers)
kmod-usb-atm - 5.10.176-1 - Kernel support for USB DSL modems
kmod-usb-atm-cxacru - 5.10.176-1 - Kernel support for cxacru based USB ADSL modems
kmod-usb-atm-speedtouch - 5.10.176-1 - Kernel support for SpeedTouch USB ADSL modems
kmod-usb-atm-ueagle - 5.10.176-1 - Kernel support for Eagle 8051 based USB ADSL modems
kmod-usb-audio - 5.10.176-1 - Kernel support for USB audio devices
kmod-usb-cm109 - 5.10.176-1 - Kernel support for CM109 VOIP phone
kmod-usb-core - 5.10.176-1 - Kernel support for USB
kmod-usb-dwc2 - 5.10.176-1 - This driver provides USB Device Controller support for the Synopsys DesignWare USB OTG Core
kmod-usb-dwc3 - 5.10.176-1 - This driver provides support for the Dual Role SuperSpeed USB Controller based on the Synopsys DesignWaree
kmod-usb-ehci - 5.10.176-1 - EHCI controller support
kmod-usb-hid - 5.10.176-1 - Kernel support for USB HID devices such as keyboards and mice
```

## List installed packages

Use the opkg package manager to fetch all the installed packages on the Omega2 or specific packages. Follow these instructions to get the package list.

### List all packages

Run the following command to list **all** the installed packages:

```shell
opkg list-installed
```

### List specific packages

To display a list of **specific** installed packages, use the `grep` command. Narrow down the search operation using a specific keyword alongside this command.

```shell
opkg list-installed | grep keyword
```

**Example:** To locate all installed packages with onion in the package directory, execute the following command:

```shell
opkg list-installed | grep onion
```

This will find all the installed packages related to Onion:

```shell
root@Omega-539F:/# opkg list-installed | grep -i onion
onion-dt-overlay - 1.0-5
onion-repo-keys - 23.05.3

root@Omega-f195:/# opkg list-installed | grep -i omega2
omega2-base - 23.05.3-20241015
omega2-base-files - 23.05.3-20241015
omega2-base-passwd - 23.05.3-20241015
omega2-ctrl - 0.3-1
```

## Install packages

To install a specific package on the Omega2, add the package name to the following command:

```shell
opkg install <PACKAGE NAME>
```

The installation and downloading of the package will begin.

```shell
root@Omega-539F:~# opkg install curl                                                                                                                
Installing curl (7.60.0-3) to root...
Downloading http://repo.onioniot.com/omega2/packages/base/curl_7.60.0-3_mipsel_24kc.ipk
Configuring curl.
```

:::note

Don't forget to run `opkg update` beforehand to retrieve all the latest packages before installing any package.

:::

## Remove packages

Uninstall or remove a previously installed package from Omega2 using the remove command. From the available list of packages, choose the package intended to be removed.

Copy the package name to be removed in the following command:

```shell
opkg remove <PACKAGE NAME>
```

**Example:** To remove the `curl` package using OPKG, run the following command:

```shell
opkg remove curl
```

The output should look like this:

```shell
root@Omega-2757:/# opkg remove curl
Removing package curl from root...
```

<GiscusDocComment />
