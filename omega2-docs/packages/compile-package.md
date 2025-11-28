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

Packages that are in production are stable and have gone through rigorous testing during the development phase. The package source is stored in a remote repository. This remote repository is considered a package feed that the SDK will use as input.

#### What is a package feed?

A package feed is a directory or repository that holds the package source files for one or more software packages. Packages source files include the Package Makefiles and related source code and files. The package source files serve as input when building a package, with the output being an installable package binary.

## Method used to compile packages

There are various methods to compile packages, but using the OpenWRT SDK is the most efficient way. The SDK is a precompiled toolchain intended for the creation of software packages without compiling the whole OpenWRT build system from scratch.

Onion's OpenWRT SDK wrapper is the recommended method to build packages for Omega2 devices. The wrapper makes use of the OpenWRT SDK and features a set of supporting scripts and configurations that make it even quicker and easier to build and compile packages.

:::note

Onion recommends compiling packages using OpenWRT SDK. Firmware images can be created with the OpenWRT Image Builder, but this is a different tool. For further information on building firmware images, see the article [How Onion Firmware is Built](/omega2-docs/firmware/how-onion-builds-firmware).

:::

## System setup

The system set up instructions are the same for compiling packages in **development** and in **production**. The configuration and compilation steps differ between the two environments.

#### A Note on the Build Environment

import BuildEnvNotes from '../firmware/_build-env-notes.mdx';

<BuildEnvNotes tool="OpenWRT SDK" />

#### Step 1: Pull the Docker Image

import DockerPullInstructions from '../firmware/_docker-pull-instructions.mdx'; 

<DockerPullInstructions/>

#### Step 2: Start your Docker Container

import DockerStartInstructions from '../firmware/_docker-start-instructions.mdx';

<DockerStartInstructions/>

#### Step 3: Clone the OnionIoT/openwrt-sdk-wrapper repository

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

:::note

When compiling packages that are in development, the compilation process assumes a local package feed is being used. Local meaning the package feed is a directory on the same computer running the SDK.

:::

### Config changes

After setting up the `openwrt-sdk-wrapper`, it is necessary to configure the required changes for system updates, package installations, or environment customization.

#### Step 1: Update package feed variable

Locate the `PACKAGE_FEEDS` variable in the `profile` file and modify it to reference the local source. This is necessary during development if there is a need to retrieve package makefiles from a local repository.

> **For example:** Assuming the custom package source is in the `/home/ubuntu/OpenWRT-Packages` directory, the updated `PACKAGE_FEEDS` variable should be:
>
>```shell
>PACKAGE_FEEDS="
>src-link custom /home/ubuntu/OpenWRT-Packages
>"
>```

#### Step 2: Run build environment setup script

Run the command to download and set up the `openwrt-sdk` in the OniontIoT's `openwrt-sdk-wrapper`. Execute the following command:

```bash
bash onion_buildenv setup_sdk
```

The setup step updates the package feeds. **This step is necessary to make the packages from the configured package feeds available to compile**.

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

:::note

When compiling production packages, the compilation process uses package source from a package feed that is a remote repository.

:::

### Config changes

#### Step 1: Point to the package feed

In you local copy of the **openwrt-sdk-wrapper**, update the `PACKAGE_FEEDS` variable in the `profile` configuration file.

Use the following syntax:

```
src-git <feed-name> <package-feed-url>[;<package-feed-branch>]
```

Replace the placeholder parameters with:
- `<feed-name>` - choose a name for the package feed
- `<package-feed-url>` - provide the Git repository URL
- `<package-feed-branch>` - optionally, specify a branch of the package feed repository

> **For example:** say the `openwrt-23.05` branch of the `https://github.com/OnionIoT/OpenWRT-Packages` repo is the package feed, the addition to the `PACKAGE_FEEDS` variable should be:  <!-- TODO: update this 23.05 with OPENWRT_VERSION variable -->
> 
> ```shell
> src-git myfeed https://github.com/OnionIoT/OpenWRT-Packages.git;openwrt-23.05
>```
<!-- TODO: update this 23.05 with OPENWRT_VERSION variable -->

#### Step 2: Select packages from the package feed

To select specific packages from the package feed to compile, follow these steps:

1. Open the profile configuration file.
2. Locate the `SDK_PACKAGES` variable.
3. Modify the `SDK_PACKAGES` variable to include the packages from the package feed that you want to compile. Ensure that the list is new-line delimited.

>For example:
>
>```shell
>SDK_PACKAGES="
>  custom-lib
>  custom-package1
>  new-software
> "
> ```
>
>In this example, `custom-lib`, `custom-package1`, and `new-software` packages, along with any dependencies they require, will be compiled and built.

#### Step 3: Set up the SDK and environment

First, download and setup the OpenWRT SDK with the following command:

```bash
 bash onion_buildenv setup_sdk
```

The setup step updates the package feeds. **This step is necessary to make the packages from the configured package feeds available to compile**.

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

## Troubleshooting a Failed Compilation

If one of the packages fails to compile, the SDK wrapper script will automatically rerun the compilation with the verbose output flags. This output can then be used to find the root cause of the compilation error.

Once you have found and fixed any issues, you'll need to rerun the compilation.

### Failed Compilation Example

This is an example of a failed package compilation. The SDK Wrapper attempts to compile the package. When compilation fails, the compilation is rerun with the verbose flags enabled.

The error message near the bottom reveals the root cause of the error in the code.

```
ubuntu@ip-172-31-85-151:~/openwrt-sdk-wrapper$ bash onion_buildenv build_packages c-example
make: Entering directory '/home/ubuntu/openwrt-sdk-wrapper/openwrt-sdk'

...

make[1] package/c-example/compile
make[2] -C package/toolchain clean-build
make[2] -C package/toolchain compile
make[2] -C feeds/base/package/system/ca-certificates clean-build
make[2] -C feeds/base/package/system/ca-certificates compile
make[2] -C feeds/base/package/libs/mbedtls clean-build
make[2] -C feeds/base/package/libs/mbedtls compile
make[2] -C feeds/packages/libs/nghttp2 clean-build
make[2] -C feeds/packages/libs/nghttp2 compile
make[2] -C feeds/packages/net/curl clean-build
make[2] -C feeds/packages/net/curl compile
make[2] -C /home/ubuntu/Example-OpenWRT-Packages/c-example clean-build
make[2] -C /home/ubuntu/Example-OpenWRT-Packages/c-example compile
    ERROR: package/feeds/custom/c-example failed to build.
make -r package/c-example/compile: build failed. Please re-run make with -j1 V=s or V=sc for a higher verbosity level to see what's going on
make: *** [/home/ubuntu/openwrt-sdk-wrapper/openwrt-sdk/include/toplevel.mk:225: package/c-example/compile] Error 1
make: Leaving directory '/home/ubuntu/openwrt-sdk-wrapper/openwrt-sdk'
make: Entering directory '/home/ubuntu/openwrt-sdk-wrapper/openwrt-sdk'

...

#
# No change to .config
#
make[1]: Entering directory '/home/ubuntu/openwrt-sdk-wrapper/openwrt-sdk'

...

make[2]: Entering directory '/home/ubuntu/Example-OpenWRT-Packages/c-example'
rm -f /home/ubuntu/openwrt-sdk-wrapper/openwrt-sdk/build_dir/target-mipsel_24kc_musl/c-example-1.0/.built
touch /home/ubuntu/openwrt-sdk-wrapper/openwrt-sdk/build_dir/target-mipsel_24kc_musl/c-example-1.0/.built_check
make -C /home/ubuntu/openwrt-sdk-wrapper/openwrt-sdk/build_dir/target-mipsel_24kc_musl/c-example-1.0 CC="mipsel-openwrt-linux-musl-gcc" CFLAGS="-Os -pipe -mno-branch-likely -mips32r2 -mtune=24kc -fno-caller-saves -fno-plt -fhonour-copts -msoft-float -ffile-prefix-map=/home/ubuntu/openwrt-sdk-wrapper/openwrt-sdk/build_dir/target-mipsel_24kc_musl/c-example-1.0=c-example-1.0 -mips16 -minterlink-mips16 -Wformat -Werror=format-security -fstack-protector -D_FORTIFY_SOURCE=1 -Wl,-z,now -Wl,-z,relro -DPIC -fpic" LDFLAGS="-L/home/ubuntu/openwrt-sdk-wrapper/openwrt-sdk/staging_dir/toolchain-mipsel_24kc_gcc-12.3.0_musl/usr/lib -L/home/ubuntu/openwrt-sdk-wrapper/openwrt-sdk/staging_dir/toolchain-mipsel_24kc_gcc-12.3.0_musl/lib -znow -zrelro" LIB="-lcurl"
make[3]: Entering directory '/home/ubuntu/openwrt-sdk-wrapper/openwrt-sdk/build_dir/target-mipsel_24kc_musl/c-example-1.0'
mipsel-openwrt-linux-musl-gcc -Os -pipe -mno-branch-likely -mips32r2 -mtune=24kc -fno-caller-saves -fno-plt -fhonour-copts -msoft-float -ffile-prefix-map=/home/ubuntu/openwrt-sdk-wrapper/openwrt-sdk/build_dir/target-mipsel_24kc_musl/c-example-1.0=c-example-1.0 -mips16 -minterlink-mips16 -Wformat -Werror=format-security -fstack-protector -D_FORTIFY_SOURCE=1 -Wl,-z,now -Wl,-z,relro -DPIC -fpic -c main.c -o main.o
main.c: In function 'main':
main.c:18:46: error: expected ';' before 'curl'
   18 |     printf("Fetching To Do from '%s'\n", url)
      |                                              ^
      |                                              ;
......
   21 |     curl = curl_easy_init();
      |     ~~~~                                      
make[3]: *** [makefile:24: main.o] Error 1
make[3]: Leaving directory '/home/ubuntu/openwrt-sdk-wrapper/openwrt-sdk/build_dir/target-mipsel_24kc_musl/c-example-1.0'
make[2]: *** [Makefile:52: /home/ubuntu/openwrt-sdk-wrapper/openwrt-sdk/build_dir/target-mipsel_24kc_musl/c-example-1.0/.built] Error 2
make[2]: Leaving directory '/home/ubuntu/Example-OpenWRT-Packages/c-example'
time: package/feeds/custom/c-example/compile#0.14#0.26#0.31
    ERROR: package/feeds/custom/c-example failed to build.
make[1]: *** [package/Makefile:129: package/feeds/custom/c-example/compile] Error 1
make[1]: Leaving directory '/home/ubuntu/openwrt-sdk-wrapper/openwrt-sdk'
make: *** [/home/ubuntu/openwrt-sdk-wrapper/openwrt-sdk/include/toplevel.mk:225: package/c-example/compile] Error 2
make: Leaving directory '/home/ubuntu/openwrt-sdk-wrapper/openwrt-sdk'
\n>> ERROR: Compile of package c-example returned code 2
\n>> PACKAGE COMPILATION ERROR!\n
```

## Rerun Package Compilation

Re-compiling requires a re-run of the feed update step following any code or configuration file modifications, including changes to the listed repositories.

These changes can include:

1. Changing which repos are listed in the profile config file.
2. Updates to the code in the repo - new versions of code available or fixes to issues causing compilation errors.

### Commands to Rerun Compilation

Run the following command to ensure all changes are pulled in before compilation:


```shell
bash onion_buildenv update_sdk
```

This will update the package feeds.

Next, run the appropriate build and compile command for your environment.

**In Development**

```shell
bash onion_buildenv build_packages <PACKAGE_NAME>
```

**In Production**

```shell
bash onion_buildenv build_all_packages
```

Your compilation should now be successful.

<GiscusDocComment />
