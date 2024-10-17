# Compile a Package

import { GiscusDocComment } from '/src/components/GiscusComment';

This article provides steps to compile packages that are currently in **development** and compile packages for **production** from package feeds. In both cases, the OpenWRT SDK is used to compile packages.

## Method used to compile packages

There are various methods to compile packages, but using the OpenWRT SDK is the most efficient way. The SDK is a precompiled toolchain intended for the creation of software packages without compiling the whole OpenWRT build system from scratch.

Onion's OpenWRT SDK wrapper is the recommended method to build packages for Omega2 devices. The wrapper makes use of the OpenWRT SDK and features a set of supporting scripts and configurations that make it even quicker and easier to build and compile packages.

## What does it mean for a package to be in development?

Packages that are currently undergoing active development will have frequent changes during the testing and debugging phases. Several iterations may be required to ensure stability for production. As part of this process, the package source is stored locally rather than being built from a Git repository. This setup enables a rapid development-build-test cycle.

## System setup for development and production

The system set up instructions are the same for compiling packages in **development** and in **production**. The configuration and compilation steps differ between the two environments.

### Step 1: Setup local environment

The OpenWRT build tools, including the openwrt-sdk-wrapper, are meant to run on Linux.

There are a variety of ways to do this:

- Dedicated Linux machine
- Linux server (like AWS EC2)
- Docker virtual machine
- Other virtual machines (like WSL, VirtualBox, etc)

**The method recommended by Onion is to use Ubuntu 22.04 Linux in a Docker container.** Using Docker provides isolation which helps prevent dependency conflicts with existing software on the host system and ensures a clean, reproducible development environment.

:::tip

For those new to Docker, see Docker's [**installation guide**](https://docs.docker.com/desktop/) and the manual on [**running a Docker container**](https://docs.docker.com/engine/reference/run).

:::

:::note

When using Windows Subsystem for Linux (WSL), refer to the [**OpenWRT developer guide for WSL**](https://openwrt.org/docs/guide-developer/toolchain/wsl) for configuring environment paths and variables.

:::

### Step 2: Install software dependancies

When using Ubuntu 22.04 or newer, it is essential to install the required dependencies. These dependencies consist of libraries, packages, or tools necessary for the proper functioning of the openwrt-sdk-wrapper and can be installed using the package manager.

:::tip

See the [**OpenWRT Build System Setup instructions**](https://openwrt.org/docs/guide-developer/toolchain/install-buildsystem#debianubuntu) for details on what packages need to be installed.

:::

### Step 3: Clone the repository

To clone the **openwrt-sdk-wrapper** repository in the development environment, open the terminal and run the following command:

```shell
git clone https://github.com/OnionIoT/openwrt-sdk-wrapper.git
```

## Config changes for development

After setting up the `openwrt-sdk-wrapper`, it is necessary to configure the required changes for system updates, package installations, or environment customization.

### Step 1: Update package feed variable

Locate the `PACKAGE_FEEDS` variable in the profile file and modify it to reference the local source. This is necessary during development if there is a need to retrieve package makefiles from a local repository.

**Example:** Assuming the custom package source is in the `/home/ubuntu/OpenWRT-Packages` directory, the updated `PACKAGE_FEEDS` variable should be:

```shell
PACKAGE_FEEDS="
src-link custom /home/ubuntu/OpenWRT-Packages
"
```

### Step 2: Run build environment setup script

Run the command to download and set up the `openwrt-sdk` in the OniontIoT's `openwrt-sdk-wrapper`. Execute the following command:

```bash
bash onion_buildenv setup_sdk
```

After completing this step, the OpenWRT SDK will be downloaded and set up for use in the `openwrt-sdk` directory.

## Compile a package for development

### Step 1: Run the build script

To compile and build the desired packages, run the following commands in the development environment:

```bash
bash onion_buildenv build_packages <PACKAGE_NAME>
```

Replace `<PACKAGE_NAME>` with the actual package name.

### Step 2: Compiled package location

All compiled packages can be found in the following directory:

```shell
openwrt-sdk/bin/packages/mipsel_24kc/custom/
```

These packages have the extension `.ipk` and are compiled specifically for the `mipsel_24kc` architecture. The compiled packages can be used for testing on a device to confirm proper operation.

## What is a package feed?

A package feed is a collection of package source files stored in a code repository. The package source files serve as input when building a package, with the output being an installable package binary.

Stable packages that are intended for production use cases are compiled from package feeds.
There are various methods to compile packages, but using the OpenWRT SDK is the most efficient way. The SDK is a precompiled toolchain intended for the creation of software packages without compiling the whole OpenWRT build system from scratch.

Onion's OpenWRT SDK wrapper is the recommended method for building packages for Omega2 devices. The wrapper makes use of the OpenWRT SDK and features a set of supporting scripts and configurations that make it quicker and easier to build and compile packages.

## System setup instructions

Follow the steps outlined above in **System setup for development and production**. These steps apply to both environments.

## Config changes for production

### Step 1: Point to the package feed

Navigate to the cloned **openwrt-sdk-wrapper** repo to update the `PACKAGE_FEEDS` variable.

Follow these steps:

1. Modify the profile configuration file.
2. Update the `PACKAGE_FEEDS` variable using the following syntax: `src-git <feed-name> <package-feed-url>[;<package-feed-branch>]`
   - `<feed-name>`: Choose an arbitrary name for SDK usage.
   - `<package-feed-url>`: Provide the Git repository URL.
   - `<package-feed-branch>`: Optionally, specify a branch of the package feed repository.

For example, say the `openwrt-22.03` branch of the `https://github.com/OnionIoT/OpenWRT-Packages` repo is the package feed, the addition to the `PACKAGE_FEEDS` variable should be:

```shell
src-git myfeed https://github.com/OnionIoT/OpenWRT-Packages.git;openwrt-22.03
```

### Step 2: Select packages from the package feed

To select specific packages from the package feed to compile, follow these steps:

1. Open the profile configuration file.
2. Locate the `SDK_PACKAGES` variable.
3. Modify the `SDK_PACKAGES` variable to include the packages from the package feed that you want to compile. Ensure that the list is new-line delimited.

For example:

```shell
SDK_PACKAGES="
  custom-lib
  custom-package1
  new-software
 "
 ```

In this example, `custom-lib`, `custom-package1`, and `new-software` packages, along with any dependencies they require, will be compiled and built.

### Step 3: Setup the SDK and environment

First, download and setup the OpenWRT SDK with the following command:

```bash
 bash onion_buildenv setup_sdk
```

## Compile packages for production

### Step 1: Build packages

Build and compile all desired packages listed in the `SDK_PACKAGES` variable in the profile, and run the following command:

```bash
bash onion_buildenv build_all_packages
```

### Step 2: Compiled packages location

All compiled packages can be found in the following directory:

```shell
openwrt-sdk/bin/packages/mipsel_24kc/<feed-name>/
```

Where `<feed-name>` is the name of the feed that was added to the `profile` configuration file in Step 1 above.

The packages have the extension `.ipk` and are compiled specifically for the `mipsel_24kc` architecture. Also included are package index files that will be used by the package manager on the device to install the packages.

:::note Important note

The last step of compiling a package feed is creating an index of the packages and signing the packages. This step is required so the compiled packages can be used as an opkg package repository by the device.

:::

<GiscusDocComment />
