---
title: Advanced Package Management
---

import { GiscusDocComment } from '/src/components/GiscusComment';

In this article, we discuss adding custom package repositories and installing packages that are not in the package repository, which are advanced topics that are outside the everyday use of the opkg manager.

## Add a package repo

The opkg package manager can be configured to access additional package repositories beyond its default configuration, enabling the installation of any packages in those repos. This is useful if there are key packages that are not included in the standard list of package repos.

The package feed configuration is stored in the `distfeeds.conf` file.

To add a package repo, follow these steps:

**Step 1:** Open the `/etc/opkg/distfeeds.conf` file in the editor.

**Step 2:** Edit the `distfeeds.conf` file and add a package repository link that is supported by Omega devices and the opkg package manager.

```shell
 src/gz openwrt_core <repository_name> <repository_url>
 ```

Replace `<repository_name>` and `<repository_url>` with the URL based on Omega2 device architecture and supported by the OpenWRT release version.

:::danger

Only use package repos that are compatible with the `mipsel_24kc` architecture used by the Omega2 family. The name of the architecture type is generally included in the package repository URL.

:::

**Step 3:** Now save the changed `distfeeds.conf` file and exit.

**Step 4:** Open the Omega2 terminal and run the `opkg update` command to install the added package.

## Install a package that's not in a package repo

It's sometimes useful to install a package that's not in any of opkg's configured package repos. This is especially true in early development, when the customer may want to install a package that's still in development or quickly try out a particular package from a package repo.

:::danger

Only install packages that are compatible with the `mipsel_24kc` architecture of the Omega2. The package name will usually end with the architecture type, so use only installed packages ending with `mipsel_24kc.ipk`; ignore incompatible ones.

:::

### Method 1: Copy the IPK file to Omega2 and use OPKG

Download the IPK file from the package source URL and copy the IPK package file to the `/tmp` directory on the Omega2 device.

Now, navigate to the `/tmp` directory containing the downloaded IPK file and run the following command in the Omega2 terminal to install the package:

```shell
 opkg install /tmp/<package-file.ipk>
 ```

Replace `<package-file.ipk>` with the actual filename.

:::info

This method is suitable for installing packages that are not available in standard repositories and useful for testing packages during development.

:::

### Method 2: Install a package from the Web based on its URL

Locate the URL of the package and execute the following command to install it directly from the URL.

```shell
 opkg install <PACKAGE_URL>
 ```

Replace `<PACKAGE_URL>` with the actual URL of the package.

:::note

This method is useful for installing a package from an online source without adding the entire repository to the opkg configuration.

:::

:::danger

Be cautious when installing packages from external sources and ensure they are from trusted and secure locations.

:::

<GiscusDocComment />
