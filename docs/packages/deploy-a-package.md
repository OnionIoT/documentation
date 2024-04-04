# Deploy a Package Repo

This guide provides a detailed explanation of using the OpenWRT SDK to compile a package and then to deploy it in an online package repo. It also covers the configurations that are necessary for compiling and building packages.

The primary objective of this guide is to offer an accessible method for deploying and accessing packages from an HTTP web server. A process is provided to use an AWS S3 bucket for deploying packages and maintaining a package feed repository on a remote web server. 

## Package Repo

A package repo is an HTTP web server that stores compiled packages along with a package index. It is used to by the package manager on Omega2 devices as a source from which to install packages. A package repo helps enable and track the deployment of packages, which includes the package's release version.  Hosting a package repo streamlines the deployment of custom packages using OpenWRT's existing infrastructure. 

## Compiling a Package Feed

A package feed is a collection of package source files, generally stored in a code repository. The package source files serve as input when building a package, with an installable package binary being the output. 

In general, stable packages that are intended for production use cases are compiled from package feeds.

There are various methods to compile packages, but using the OpenWRT SDK is the most efficient way. The SDK is a precompiled toolchain intended for the creation of software packages without compiling the whole OpenWRT build system from scratch.

Onion's OpenWRT SDK wrapper is the recommended method to build packages for Omega2 devices. The wrapper makes use of the OpenWRT SDK and features a set of supporting scripts and configurations that make it even quicker and easier to build and compile packages.

## System Setup Instructions

### Step 1: Setup Local Environment

The OpenWRT build tools, including the **openwrt-sdk-wrapper**, are meant to be run on Linux. There are a variety of ways to do this:

- Dedicated Linux machine
- Linux server (like AWS EC2)
- Docker virtual machine
- Other virtual machines (like WSL, and VirtualBox)

**The method recommended by Onion is to use Ubuntu 22.04 or a newer version in a Docker container**. Using Docker provides isolation which helps prevent dependency conflicts with existing software on the host system and ensures a clean, reproducible development environment. 

:::tip
For those new to Docker, see Docker’s [**installation guide**](https://docs.docker.com/desktop/install/linux-install/) and the manual on [**running a Docker container**](https://docs.docker.com/engine/reference/run).
:::

:::note
When using Windows Subsystem for Linux (WSL), refer to the [**OpenWRT developer guide for WSL**](https://openwrt.org/docs/guide-developer/toolchain/wsl) for configuring environment paths and variables.
:::

### Step 2: Installation of Additional Software Dependencies

When using Ubuntu 22.04 or newer, it is essential to install the required dependencies. These dependencies consist of libraries, packages, or tools necessary for the proper functioning of the openwrt-sdk-wrapper and can be installed using the [**package manager**](./opkg-package-manager.md).

:::tip
See the [**OpenWRT Build System Setup instructions**](https://openwrt.org/docs/guide-developer/toolchain/install-buildsystem#debianubuntu) for details on what packages need to be installed.
:::

### Step 3: Clone the Repository

To clone the **openwrt-sdk-wrapper** repository in the development  environment, open the terminal and run the following command:

```bash
git clone https://github.com/OnionIoT/openwrt-sdk-wrapper.git
```

## Config Changes

### Step 1: Point to the Package Feed

Navigate to the cloned **openwrt-sdk-wrapper** repo to update the `PACKAGE_FEEDS` variable. 

Follow these steps:

1. Modify the profile configuration file.
2. Update the `PACKAGE_FEEDS` variable using the following syntax: `src-git <feed-name> <package-feed-url>[;<package-feed-branch>]`
    - `<feed-name>`: Choose an arbitrary name for SDK usage.
    - `<package-feed-url>`: Provide the Git repository URL
    - `<package-feed-branch>`: Optionally, specify a branch of the package feed repository.

For example, say the `openwrt-22.03` branch of the `https://github.com/OnionIoT/OpenWRT-Packages` repo is the package feed, the addition to the `PACKAGE_FEEDS` variable should be:

```bash
src-git myfeed https://github.com/OnionIoT/OpenWRT-Packages.git;openwrt-22.03
```

### Step 2: Select Packages from Package Feed 

To select specific packages from the package feed for compile, follow these steps:

 - Open the profile configuration file.
 - Locate the `SDK_PACKAGES` variable.
 - Modify the `SDK_PACKAGES` variable to include the packages from the package feed that you want to compile. Ensure that  the list is new-line delimited.

For example:

```bash
SDK_PACKAGES="
custom-lib
custom-package1
new-software
"
```

In this example, `custom-lib`, `custom-package1`, and `new-software` packages, along with any dependencies they require, will be compiled and built.

### Step 3: Setup the SDK and Environment

First, download and setup the OpenWRT SDK with the following command:

```bash
bash onion_buildenv setup_sdk
```

### Step 4:  Build Packages

Build and compile all desired packages listed in the `SDK_PACKAGES` variable in the profile, and run the following command:

```bash
bash onion_buildenv build_all_packages
```

### Step 5: Compiled Package Location

All compiled packages can be found in the following directory:

```bash
openwrt-sdk/bin/packages/mipsel_24kc/<feed-name>/
```

Where `<feed-name>` is the name of the feed that was added to the `profile` configuration file in Step 1 above.

The packages have the extension `.ipk` and are compiled specifically for the `mipsel_24kc` architecture. Also included are package index files that will be used by the package manager on the device to install the packages.

## Deploying the Package Repo

### Step 1: Deploying a Package Feed

Deploy the compiled package on a reliable HTTP webserver allowing access to these deployed packages publicly. In this case, the AWS S3 bucket is a viable option for use as an HTTP web server. 

:::tip
To create and configure the **aws-s3** bucket, see the [**aws documentation**](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html).
:::

:::note
Make sure that the bucket is configured to allow public access.
:::

Use the following command to deploy the compiled packages to the created S3 bucket:

```bash
aws s3 cp <local_path> s3://<s3_bucket_name>/<optional_subdirectory> --recursive --acl public-read
```
**Replace:**

 - **<local_path>** with the local path of the compiled packages.
 - **<s3_bucket_name>** with the name of the created S3 bucket.
 - **<optional_subdirectory>** with any optional subdirectory within your bucket where you want to store the packages.
 - The **--recursive** flag ensures that all files and subdirectories are uploaded recursively.
 - The **--acl public-read** switch enables public access to the files in the bucket, ensuring that the package repo is accessible by the [**package manager**](./opkg-package-manager.md) on the end device.

### Step 2: Utilize the Package Repository

To utilize the AWS S3 bucket as the deployed package repository, use the OPKG package manager to install these packages on an Omega2 device.

Refer to the instructions provided in the [**OPKG Package Manager**](./opkg-package-manager.md) chapter. This chapter explains how to install packages from an HTTP web server, update existing packages, or remove installed packages from an Omega2 device.

<!-- comment section -->
#
import { GiscusDocComment } from '/src/components/GiscusComment';

<GiscusDocComment /> 

