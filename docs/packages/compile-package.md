# Compile a Package

import { GiscusDocComment } from '/src/components/GiscusComment';

This article provides steps to compile packages that are currently in **development** and compile packages for **production** from package feeds. In both cases, the OpenWRT SDK is used to compile packages.

## Development vs production packages

The following are the key differences between packages in development and packages in production.

| Packages in Development         | Packages in Production |  
|:--------------------------------| :----------------------|
| Not stable                      | Stable    |
| Frequent changes during testing | Less frequent updates provided as releases |
| Local source code | Source code in Git  |
| Built from local source code    | Built from Git repository (package feed)   |

### What does it mean for a package to be in development?

Packages that are currently undergoing active development will have frequent changes during the testing and debugging phases. Several iterations may be required to ensure stability for production. As part of this process, the package source is stored locally rather than being built from a Git repository. This setup enables a rapid development-build-test cycle.

### What does it mean for a package to be in production?

Packages that are in production are stable and have gone through rigorous testing during the development phase. The package source is stored and built from a package feed.

#### What is a package feed?

A package feed is a collection of package source files stored in a code repository, like a Git repository. The package source files serve as input when building a package, with the output being an installable package binary.

## Method used to compile packages

There are various methods to compile packages, but using the OpenWRT SDK is the most efficient way. The SDK is a precompiled toolchain intended for the creation of software packages without compiling the whole OpenWRT build system from scratch.

Onion's OpenWRT SDK wrapper is the recommended method to build packages for Omega2 devices. The wrapper makes use of the OpenWRT SDK and features a set of supporting scripts and configurations that make it even quicker and easier to build and compile packages.

## System setup

The system set up instructions are the same for compiling packages in **development** and in **production**. The configuration and compilation steps differ between the two environments.

#### Step 1: Set up local environment

import BuildEnvNotes from '../firmware/_build-env-notes.mdx';

<BuildEnvNotes tool="OpenWRT SDK" />

#### Step 2. Pull the Docker Image

import DockerPullInstructions from '../firmware/_docker-pull-instructions.mdx'; 

<DockerPullInstructions/>

#### Step 3: Start your Docker Container

import DockerStartInstructions from '../firmware/_docker-start-instructions.mdx';

<DockerStartInstructions/>

**Step 4: Clone the repository**

To clone the **openwrt-sdk-wrapper** repository in the Docker container, run the following command:

```shell
git clone https://github.com/OnionIoT/openwrt-sdk-wrapper.git
```

When the repo is cloned, enter the directory:

```shell
cd openwrt-sdk-wrapper
```

## Compiling packages for development

The following sections cover configuration changes and compiling packages for a development environment.

To compile packages for production, see the [relevant section below](#compiling-packages-for-production).

### Config changes

After setting up the `openwrt-sdk-wrapper`, it is necessary to configure the required changes for system updates, package installations, or environment customization.

#### Step 1: Update package feed variable

Locate the `PACKAGE_FEEDS` variable in the profile file and modify it to reference the local source. This is necessary during development if there is a need to retrieve package makefiles from a local repository.

**Example:** Assuming the custom package source is in the `/home/ubuntu/OpenWRT-Packages` directory, the updated `PACKAGE_FEEDS` variable should be:

```shell
PACKAGE_FEEDS="
src-link custom /home/ubuntu/OpenWRT-Packages
"
```

#### Step 2: Run build environment setup script

Run the command to download and set up the `openwrt-sdk` in the OniontIoT's `openwrt-sdk-wrapper`. Execute the following command:

```bash
bash onion_buildenv setup_sdk
```

After completing this step, the OpenWRT SDK will be downloaded and set up for use in the `openwrt-sdk` directory.

### Compile a package

#### Step 1: Run the build script

To compile and build the desired packages, run the following command:

```bash
bash onion_buildenv build_packages <PACKAGE_NAME>
```

Replace `<PACKAGE_NAME>` with the actual package name.

This will compile the selected pacakge and its dependencies.

#### Step 2: Compiled package location

All compiled packages can be found in the following directory:

```shell
openwrt-sdk/bin/packages/mipsel_24kc/custom/
```

These packages have the extension `.ipk` and are compiled specifically for the `mipsel_24kc` architecture. The compiled packages can be used for testing on a device to confirm proper operation.

---

## Compiling packages for production

The following sections cover configuration changes and compiling package feeds for a production environment.

### Config changes

#### Step 1: Point to the package feed

Navigate to the cloned **openwrt-sdk-wrapper** repo to update the `PACKAGE_FEEDS` variable.

Follow these steps:

1. Modify the profile configuration file.
2. Update the `PACKAGE_FEEDS` variable using the following syntax: `src-git <feed-name> <package-feed-url>[;<package-feed-branch>]`
   - `<feed-name>`: Choose an arbitrary name for the package feed
   - `<package-feed-url>`: Provide the Git repository URL
   - `<package-feed-branch>`: Optionally, specify a branch of the package feed repository

For example, say the `openwrt-23.05` branch of the `https://github.com/OnionIoT/OpenWRT-Packages` repo is the package feed, the addition to the `PACKAGE_FEEDS` variable should be:  <!-- TODO: update this 23.05 with OPENWRT_VERSION variable -->

```shell
src-git myfeed https://github.com/OnionIoT/OpenWRT-Packages.git;openwrt-23.05
```
<!-- TODO: update this 23.05 with OPENWRT_VERSION variable -->

#### Step 2: Select packages from the package feed

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

#### Step 3: Set up the SDK and environment

First, download and setup the OpenWRT SDK with the following command:

```bash
 bash onion_buildenv setup_sdk
```

### Compile a package feed

#### Step 1: Build packages

Build and compile all the packages listed in the `SDK_PACKAGES` variable in the profile, along with their dependencies, by running the following command:

```bash
bash onion_buildenv build_all_packages
```

Compilation time depends on the packages that are being compiled. Packages that are complex and/or have many dependencies take longer to compile. For reference, it takes about 30 minutes to compile the packages from the [OnionIoT/OpenWRT-Packages repo](https://github.com/OnionIoT/openwrt-packages/tree/openwrt-23.05).

#### Step 2: Compiled package location

All compiled packages can be found in the following directory:

```shell
openwrt-sdk/bin/packages/mipsel_24kc/<feed-name>/
```

Where `<feed-name>` is the name of the feed that was added to the `profile` configuration file in [Step 1 in the Config Changes section above](#config-changes-1).

The packages have the extension `.ipk` and are compiled specifically for the Omega2 `mipsel_24kc` architecture. Also included are **package index files** that are required by OPKG on the device to recognize and install the packages from the repository.


:::info Package Indexing and Signing

The last step of compiling a package feed is creating an index of the packages and signing the packages. This step is required so the compiled packages can be used as a package repository by the device. 

When the `bash onion_buildenv build_all_packages` command is run, the Onion OpenWRT SDK Wrapper will automatically perform indexing and signing as the last step.

:::

The compiled packages can now be deployed as a package repo. See the [Deploy a Package Repo article](./deploy-package-repo) for more details.

<GiscusDocComment />
