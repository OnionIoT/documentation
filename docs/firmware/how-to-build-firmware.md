---
title: How to Build Custom Firmware
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Context

In the first part of this article, we define firmware and custom firmware. We discuss the benefits of using custom firmware and Onion's recommended method for building it. In the second part of the article, we walk you through the steps of how to build your own custom firmware.

### What is firmware?

Before we discuss custom firmware, we need to define what firmware is. Firmware is a software program that is embedded in hardware devices. It is like an operating system, such as macOS or Windows, installed on a computer. When the device boots up, the firmware acts as the operating system for a Linux device. It performs all control, monitoring, and data manipulation functions. 

Firmware is made by combining packages with a Linux kernel to create a firmware image. This image includes key components like the Linux kernel, WiFi drivers, text editor, and standard packages for enhanced usability.

The firmware image comprises four components: OS files, kernel, file system, and packages collection.

#### OS files

OS files are part of the software that runs on a computer. They help manage and organize all the computer's resources and act as a bridge between the software and the hardware.

#### Kernel

The kernel is the main part of the firmware that acts as a link between user programs and hardware devices. It manages the communication between software applications and hardware like the CPU, memory, and peripheral devices.

#### File system

A file system organizes and defines how files are named, stored, and retrieved from a storage device.

#### Packages collection

The packages collection refers to the packages included in the firmware image. When the image is installed on a device, these packages are also installed. This extends the functionality of the firmware and application software.

### What is custom firmware?

Custom firmware involves creating firmware with customizations that are needed for your specific application use case.

The firmware image can include both default software packages and custom packages, along with customized default configuration for device features like networking, WiFi setup, and system setup. This means that when the firmware is flashed to a device, it is ready for your application.

**Note:** Custom firmware can be based on the Onion firmware. If you follow the build method outlined below, the custom firmware image WILL be based on Onion's firmware.

### Benefits of custom firmware

- Speeds up production time – a single firmware image can be flashed at the time of manufacture that features the Omega2 module and enables the customer's specific use case.
- Better user experience in case of a factory reset - When a factory reset is performed, the device will reset to the default state of the firmware that was last flashed.
	- **Custom firmware** - the device will run the customer's firmware with default settings after a factory reset.
	- **Onion firmware with additional customizations added later by customer** - the device will run the Onion firmware after a factory reset without the customizations and no support for the customer's use case.

## Recommended build method

There are a few different methods to build firmware images. Onion recommends using the OpenWRT Image Builder to build firmware images. 

The Image Builder is a pre-compiled environment for creating custom images without the need to compile them from source. It downloads pre-compiled software packages and integrates them into a single flashable image ([reference](https://openwrt.org/docs/guide-user/additional-software/imagebuilder#using_the_image_builder)).

Why is the Image Builder favored over other methods:

- Image Builder creates a firmware image in minutes as opposed to several hours using the OpenWRT build system.
	- Allows for faster iteration during the development cycle.
- Promotes encapsulation of image customizations into packages.
	- Better maintainability as opposed to a mix of package customizations and file additions.

Onion's Image Builder Wrapper makes use of the OpenWRT image builder and a set of supporting scripts and config files to make image creation straightforward, fast, and programmatic.

:::note

The Image Builder wrapper is used to build the firmware released by Onion. The default configuration of the wrapper will build a firmware image that is identical to the one built by Onion. Essentially, the starting point for your custom firmware is the Onion firmware.

For more information, see the article on How Onion Firmware is Built.

:::

## Building a custom firmware image

In this section we discuss how to use the Onion Image Builder Wrapper to build custom firmware.

### System setup

Follow the steps outlined, to set up your local environment, install dependencies, and clone the OnionIoT/openwrt-imagebuilder-wrapper repo.

#### 1. Setup your local environment 

The OpenWRT build tools, including the Image Builder, are meant to run on Linux. There are several methods to do this:

- Dedicated Linux computer
- Linux server (AWS EC2)
- Docker virtual machine
- Other virtual machines (WSL, VirtualBox, etc.)

Onion recommends using **Ubuntu 22.04 Linux in a Docker container**. Using Docker provides isolation, which helps prevent dependency conflicts with existing software on the host system and ensures a clean, reproducible development environment.

:::tip

For those new to Docker, see [Docker's installation guide](https://docs.docker.com/desktop/) and the manual on [running a Docker container](https://docs.docker.com/engine/reference/run).

:::

:::note

When using Windows Subsystem for Linux (WSL), refer to the [OpenWRT developer guide for WSL](https://openwrt.org/docs/guide-developer/toolchain/wsl) for configuring environment paths and variables.

:::

#### 2. Install required dependencies

When using Ubuntu 22.04 Linux or newer, you need to install the required dependencies. These can be installed using the packager manager.

:::tip

Please see the [OpenWRT Build System Setup instructions](https://openwrt.org/docs/guide-developer/toolchain/install-buildsystem#debianubuntu) for details on which packages you need to install.

:::

**Note:** You may not need `sudo` in the commands when running in a Docker container.

#### 3. Clone the OnionIoT/openwrt-imagebuilder-wrapper repo

This repository is set up to build OpenWRT firmware for the Onion Omega2 and Omega2+. 

To clone the openwrt-imagebuilder-wrapper repo, issue the following command:

```Shell
git clone https://github.com/OnionIoT/openwrt-imagebuilder-wrapper.git
``` 

### Customizing the firmware image

The firmware image specifications are defined in the `profile` configuration file. 

#### Customization

The `profile` configuration file defines:

- Additional package repos to use as sources for packages.
- Packages to include in the build.
- Device models to build the firmware for.

#### How to customize

All environment variables can be found in the `profile` configuration file.

##### Additional package repos

The `PACKAGE_REPOS` variable defines which additional package repos to use as sources for packages.

Edit the `PACKAGE_REPOS` variable to change which package feeds to check for packages. Each feed must be on a new line.

The syntax for a git-based package repo is: `src/gz <PACKAGE REPO NAME> <PACKAGE REPO URL>`

For example: `src/gz onion_openwrt_packages http://repo.onioniot.com/omega2/packages/openwrt-23.05/onion`. <!-- TODO: update with OPENWRT_VERSION variable -->

Note the `<PACKAGE REPO NAME>` is arbitrary, it just needs to be different from the existing package repo names.

For more configuration options, see the [OpenWRT documentation on Image Builder Package repositories](https://openwrt.org/docs/guide-user/additional-software/imagebuilder#adding_package_repositories).

##### Packages to include

The `IMAGE_BUILDER_PACKAGES` variable defines which packages to include in the firmware image.

Edit this variable to change which packages to include. Each package must be listed on a new line.

:::note

Only packages from the package repos defined in the `PACKAGE_REPOS` variable or from the default OpenWRT package repos can be included.

:::

##### Device models

The `BUILD_MODELS` variable defines which device model the firmware is built for.

Edit this variable to change which devices the image builder outputs firmware for. List each device model on a separate line. (At least one device must be defined.)

:::note

The current image builder wrapper supports creating firmware images for `ramips/mt76x8` targets that use the `mipsel` architecture.

:::

#### Run the setup script

To download and set up the image builder, run the following command:

```Shell
bash onion_buildenv setup_imagebuilder
```

After completing this step, the OpenWRT Image Builder will download and is set up for use in the `openwrt-imagebuilder` directory.

### Building the firmware image

The following steps show you how to build a firmware image.

#### 1. Run the build script

To build the firmware image(s), run the following command:

```Shell
bash onion_buildenv build_all_firmware
```

The build should take less than 5 minutes.

#### 2. Locate the compiled firmware image

Compiled firmware images are in the `output` directory. 

The firmware images are named based on the device model name, the OpenWRT version number specified in the `profile` file, and the date of the build: `<BUILD_MODEL>-<OPENWRT_VERSION>-<BUILD_DATE>.bin` .

For example:

For an Omega2+ device, with OPENWRT_VERSION="23.05.3" set in the `profile` config file and built on May 31, 2024. The firmware image name will be `onion_omega2p-23.05.3-20240531.bin`. 

<!-- NOTE: Ok to keep OpenWRT release numbers hard-coded in this section -->

<GiscusDocComment />

