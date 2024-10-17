---
title: Package Definitions
---

import PartialMarkdown from './_definitions_packages.mdx';
import { GiscusDocComment } from '/src/components/GiscusComment';
import DocCardList from '@theme/DocCardList';

This article provides an overview of creating and managing software packages for Omega2 devices. We briefly explain the key terms that are essential to understand when dealing with OpenWRT packages.

## Packages

Packages are archives that bundle software applications and contain compiled binaries, configuration files, and metadata like dependencies. A package enhances the core functionality and capabilities of the Omega2 device and can be installed using a package manager. A package manager provides a standard way to install and manage software while ensuring that all the dependencies are also met.

For example, the `omega2-usb-autorun` package enables the execution of predefined scripts or actions upon connecting a USB drive to Omega2 devices. This may include automatically mounting a USB drive and launching specific applications or scripts, enhancing the functionality of Omega2 devices.

![packages-diagram](./assets/packages-diagram.png)

<!-- refer .xml file to edit this diagram in draw.io

packages/assets/packages-diagram.xml
 -->

:::tip

Explore the available packages developed by Onion Corporation for Omega2 devices by navigating to the [**OnionIoT**](http://repo.onioniot.com/omega2/packages/openwrt-22.03.5/onion/) package repo. You will see a list of packages compatible with Omega2 devices, which can be easily downloaded and installed using the package manager.

:::

<details>
<summary>

**Context:** A note on architecture and packages

</summary>

The Omega2 device is based on the `mipsel_24kc` architecture, and only supports packages created for this architecture. Following are the components of the `mipsel_24kc.ipk` package architecture:

- **mipsel:** Refers to processor architecture. It stands for 'Microprocessor without Interlocked Pipeline Stages, Little Endian.' The Omega2 features a Little Endian MIPS Processor.

- **24kc:** Refers to the CPU type. Here, it is a **32-bit RISC** (Reduced Instruction Set Computing) core within the MIPS architecture, used for high-performance applications.

- **.ipk Format:** Represents an IPK (Itsy Package) file, a packaging format for software distribution. It is designed for Linux-based systems, especially in embedded devices.

</details>

Please refer to the [**OpenWRT**](https://openwrt.org/packages/start) documentation for detailed information on packages that are supported by OpenWRT-based firmware devices.

## Why are packages helpful?

- **Capabilities Enhancement:** Packages offer access to a wide range of pre-built functionalities and tools. Hence, instead of building from scratch, developers can incorporate the existing packages to extend the capabilities of the project.

- **Easy Installation & Management:** Packages make it easy to install and manage software components. A package can be easily installed using package managers like OPKG, similar to `apt-get` in Ubuntu Linux, which automatically manages dependencies and updates.

- **Offers Standardisation:** Packages provide a standardized way of organizing and sharing code. They help to ensure that code is consistent across different projects and teams, making it easier to maintain and update.

## Package source code

The package source code is the collection of code and related files forming a software package. It may or may not be compiled before being put into a package. The package source code is used to generate packages during the compilation process using the OpenWRT SDK or build system. It includes a package makefile, application source files, and additional configuration files or utilities.

The package makefile acts as the central blueprint for the packages, specifying details such as the package name, version, compilation instructions needed for building the package, and additional instructions.

## Package feed

A package feed is a collection of package sources (software files, libraries, feeds, and scripts). The package sources are stored in a publicly or privately accessible source code repository. It acts as input when building packages using OpenWRT SDK or build system.

During the package compilation process, the build system verifies dependencies and retrieves the necessary files from the package feed. Subsequently, it compiles, links, and packages software components according to the chosen packages and configurations. Finally, the build system uses the package feeds to generate an executable package.

:::tip

For a detailed guide on the package feed, refer to [**OpenWRT**](https://openwrt.org/docs/guide-developer/feeds#feed_configuration) official documentation.

:::

## Installable package binary (IPK files)

When the package source is compiled, it becomes an Installable Package (IPK) binary and is used for distributing software packages on OpenWRT-based firmware. These files contain the necessary binaries and metadata files for the package installation.

The IPK files can be added to a package repository and customers can install these packages on the Omega2 devices directly from the package repository using a package manager such as OPKG.

## Package repo

A package repository (package repo) is online storage for software packages that are made available for customers to install on their devices using OPKG. Package repos contain collections of software packages.

:::tip

To explore an example repo, see the [**OnionIoT packages**](http://repo.onioniot.com/omega2/packages/openwrt-22.03.5/onion/) repo.

:::

## OPKG

OPKG is a lightweight package management system based on ipkg (Itsy Package Management System), specifically designed for embedded devices like Omega2. It is used to download, install, update, and remove software packages from the device. It resolves dependencies, reports errors, and prevents unreliable installations on Omega2 devices. OPKG can list available packages, display package details, and filter packages as needed.

:::info

OPKG can be configured to fetch packages from OpenWRT packages repos, including the Onion package repo.

:::

:::note

For more information on how to use the OPKG package manager, refer to the [**OPKG Package Manager**](https://documentation.onioniot.com/packages/opkg-package-manager/) article.

:::

## Firmware

Firmware is a software program similar to an operating system that is embedded into hardware devices. It performs all control, monitoring, and data management functions for a Linux device, such as the Omega2.

Firmware is created by assembling packages around a Linux kernel to build a firmware image. For more information on firmware, see the article [How Firmware is Built] (./firmware/how-to-build-firmware).

<!-- chapters card -->
<!-- This section of the documentation deals with OpenWRT Packages. -->

<!-- importing content from definition markdown file (reference: https://docusaurus.io/docs/markdown-features/react#importing-markdown) -->

<PartialMarkdown/>

## Articles in this section

<DocCardList />

<GiscusDocComment />
