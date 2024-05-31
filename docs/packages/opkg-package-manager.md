# OPKG Package Manager

import { GiscusDocComment } from '/src/components/GiscusComment';

OPKG (Open Package Management) is the default package manager for OpenWRT. This is an efficient package management system, best for resource-constrained devices and crucial for managing software packages on devices running OpenWRT. It relies on package repositories to fetch and install software packages. 

This documentation provides instructions on how to update, locate, and install OpenWRT packages for Omega2 devices, followed by some advanced topics like adding custom package repositories and installing packages that are not in the package repository.

## Update the Package Lists

Before using OPKG to find the packages, list the packages, and install them, it is crucial to update OPKG's package lists first. 

Run the following command to update OPKG's package lists:

```shell
opkg update
```

This command fetches the latest list of packages from the configured package repositories. When this command runs, OPKG will connect to the configured package repositories and find out which packages are available for installation.

:::tip

Users must run the `opkg update` command after each reboot of the device in order to find or install a package.

:::

## Find Packages to Install

View the list of all available packages with their descriptions and find the particular package of your interest. Follow the steps outlined below to search for packages using OPKG.

### Step 1: Display Available Packages

Run the following command to view all the available packages using OPKG:

```shell
opkg list
```

### Step 2: Find Packages

To find a particular package from the repository, use the `grep` command. Narrow down your search operation using a specific keyword alongside this command. 

```shell
opkg list | grep keyword
```

To find the packages related to `kmod-usb`, run the command

```shell
opkg list | grep kmod-usb
```

:::tip

Use `grep` command with the `-i` command to make your query **case-independent** (no discrimination between uppercase and lowercase letters).

:::

```shell
opkg list | grep -i kmod-usb
```

This will show all the available packages with `kmod-usb` in their name or description as follows:

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

## List Installed Packages

To fetch all installed packages on Omega2 or specific packages, use the OPKG package manager. Follow these instructions for getting the package list.

### List all Installed Packages

Run the following command to list all the installed packages:

```shell
opkg list-installed
```

### List Specific Installed Packages

To display the list of specific installed packages, use the `grep` command. Narrow down the search operation using a specific keyword alongside this command. 

```shell
opkg list-installed | grep keyword
```

To locate all installed packages with onion in the package directory, execute the following command

```shell
opkg list-installed | grep onion
```

:::tip

Use `grep` command with the `-i` command to make your query **case-independent**(no discrimination between uppercase and lowercase letters).

:::  

```shell
opkg list-installed | grep -i onion
```

This will open all the installed packages related to Onion:

```shell
root@Omega-539F:/# opkg list-installed | grep -i onion
onion-dt-overlay - 1.0-1
onion-repo-keys - 22.03.2-1

root@Omega-f195:/# opkg list-installed | grep -i omega2
omega2-base - 22.03.5-20230922
omega2-base-files - 22.03.5-20230922
omega2-base-passwd - 22.03.5-20230922
omega2-ctrl - 0.3-1
```

## Install Packages

To install a specific package, add the package name to the following command:

```shell
opkg install <PACKAGE NAME>
```

To install the `curl` package using OPKG, run the following command:

```shell
opkg install curl
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

## Remove Packages

Uninstall or remove a previously installed package from Omega2 using the `remove` command. From the available list of packages, choose the package from the list intended to be removed. Copy the package name to be removed in the following command:

```shell
opkg remove <PACKAGE NAME>
```
To remove the `curl` package using OPKG, run the following command:

```shell
opkg remove curl
```

The output should look like this: 

```shell
root@Omega-2757:/# opkg remove curl
Removing package curl from root...
```

## Add Package Repo

:::info

This topic can be considered advanced, and outside of the everyday use of OPKG.

:::

OPKG can be configured to access additional package repositories beyond its default configuration, enabling the installation of any packages in those repos. This is useful if there are key packages in repos that are not included in the standard list of package repos. 

The package feed configuration is stored in the `distfeeds.conf` file. 

**Step 1:** Open `/etc/opkg/distfeeds.conf` file in the editor to add a repository link.

**Step 2:** Edit `distfeeds.conf` file and add a package repository link which is supported by Omega devices and OPKG package manager.

```shell
src/gz openwrt_core <repository_name> <repository_url>
```

Replace `<repository_name>` and `<repository_url>` with the URL based on Omega2 device architecture and supported by OpenWRT release version

:::warning

Only use package repos that are compatible with the `mipsel_24kc` architecture used by the Omega2 family. The architecture is generally included in the package repository URL.

:::

**Step 3:** Now save the changed `distfeeds.conf` file and exit.

**Step 4:** Open the Omega2 terminal and run the `opkg update` command to install the added package.

## Install a Package that's Not in a Package Repo

:::info

This topic can be considered advanced, and outside of the everyday use of OPKG.

:::

It's sometimes useful to quickly install a package that's not in any of OPKG's configured package repos. This is especially true in early development, when the user may want to install a package that's still in development or quickly try out a particular package from a package repo. 

:::warning

Only install packages that are compatible with the `mipsel_24kc` architecture of the Omega2. The package name will usually end with the architecture, so only installed packages ending with `mipsel_24kc.ipk`; ignore incompatible ones.

:::

### Method 1: Copy the IPK File to the Omega2 and Use OPKG

Download the IPK file from the package source [URL](https://downloads.openwrt.org/releases/17.01.4/packages/mipsel_24kc/base/) and copy the IPK package file to the `/tmp` directory on the Omega2 device.

Now, navigate to the `/tmp` directory containing the downloaded IPK file and run the following command in Omega2 terminal to install the package:

```shell
opkg install /tmp/<package-file.ipk>
```

Replace `<package-file.ipk>` with the actual filename.

:::info

This method is suitable for installing packages that are not available in standard repositories and useful for testing packages during development.

:::

### Method 2: Install a Package from the Web Based on its URL

Locate the [URL](https://downloads.openwrt.org/releases/17.01.4/packages/mipsel_24kc/base/) of the package and execute the following command to install it directly from the URL.

```shell
opkg install <PACKAGE_URL>
```

Replace `<PACKAGE_URL>` with the actual URL of the package.

:::note

This method is useful for installing a package from an online source without adding the entire repository to OPKG configuration.

:::

:::danger

 Be cautious when installing packages from external sources, and ensure they are from trusted and secure locations.

:::

<GiscusDocComment />
