# Compile a Package

import { GiscusDocComment } from '/src/components/GiscusComment';

This guide provides steps to compile packages that are currently in development using the OpenWRT SDK.

## Method Used to Compile Packages

There are various methods to compile packages, but using the OpenWRT SDK is the most efficient way. The SDK is a precompiled toolchain intended for the creation of software packages without compiling the whole OpenWRT build system from scratch.

Onion's OpenWRT SDK wrapper is the recommended method to build packages for Omega2 devices. The wrapper makes use of the OpenWRT SDK and features a set of supporting scripts and configurations that make it even quicker and easier to build and compile packages. 

## What Does it Mean for a Package to be in Development?

Packages that are currently undergoing active development will have frequent changes during the testing and debugging phases. Several iterations may be required to ensure stability for production. As part of this process, the package source is stored locally rather than being built from a Git repository. This setup enables a rapid development-build-test cycle.

## System Setup

### Step 1: Setup Local Environment

The OpenWRT build tools, including the SDK, are meant to be run on Linux. There are a variety of ways to do this:

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

### Step 2: Install Required Dependencies

When using Ubuntu 22.04 or newer, installing the required dependencies is necessary. These dependencies can be installed using the package manager.

:::tip
See the [**OpenWRT Build System Setup instructions**](https://openwrt.org/docs/guide-developer/toolchain/install-buildsystem#debianubuntu) for details on what packages need to be installed.
:::

### Step 3: Clone the OnionIoT/openwrt-sdk-wrapper repo

In the active development environment, clone the `OnionIoT/openwrt-sdk-wrapper` repo to the development machine. It contains the necessary scripts and files for configuration:

```shell
git clone https://github.com/OnionIoT/openwrt-sdk-wrapper.git
```

## Config Changes

After setting up the `openwrt-sdk-wrapper`, it is necessary to configure the required changes for system updates, package installations, or environment customization. 

### Step 1: Update Package Feed Variable

Locate the `PACKAGE_FEEDS` variable in the profile file and modify it to reference the local source. This is necessary during development if there is a need to retrieve package makefiles from a local repository.

**Example:**
Assuming the custom package source is in the `/home/ubuntu/OpenWRT-Packages` directory, the updated `PACKAGE_FEEDS` variable should be:

```shell
PACKAGE_FEEDS="
src-link custom /home/ubuntu/OpenWRT-Packages
"
```

### Step 2: Run Build Environment Setup Script

Run the command to download and set up the `openwrt-sdk` in the OniontIoT's `openwrt-sdk-wrapper`. Execute the following command:

```shell
bash onion_buildenv setup_sdk
```

After completing this step, the OpenWRT SDK will be downloaded and set up for use in the `openwrt-sdk` directory.

## Compiling the Package

### Step 1: Run the Build Script

To compile and build the desired packages, run the following commands in the development environment: 

```shell
bash onion_buildenv build_packages <PACKAGE_NAME>
```

Replace `<PACKAGE_NAME>` with the actual package name.

### Step 2: Locate Compiled Package

All compiled packages can be found in the following directory:

```shell
openwrt-sdk/bin/packages/mipsel_24kc/custom/
```

These packages have the extension `.ipk` and are compiled specifically for the `mipsel_24kc` architecture. 
The compiled packages can be used for testing on a device to confirm proper operation.

<GiscusDocComment /> 
