# Create a Custom Package

import { GiscusDocComment } from '/src/components/GiscusComment';

This article summarizes creating a custom package and covers important topics such as the package makefile, package source structure, package directories, and examples of custom packages.

Custom software applications for specific use cases can be bundled into a software package. The package can then be installed on a device running existing firmware or included in custom firmware.

Creating a custom package is valuable for IoT applications, where customizing the device functionality is often necessary.

## Why Create Custom Packages?

- **Systematic Deployment:** Custom packages allow for a more organized and efficient deployment process, ensuring that software and firmware are properly configured for the Omega2 device.

- **Easy Installation:** Custom packages can be installed on Omega2 devices using the Opkg package manager.

- **Easy Updates:** Custom packages can be easily updated using the Opkg package manager.

## Package Feeds
A package feed is a directory or repository that holds the package source files for one or more software packages. 

Package source code is the collection of source code and related files forming a software package. Package source files include the Package Makefiles and related source code and files. The package source files serve as input when building a package, with the output being an installable package binary.

Package feeds generally hold a collection of packages that are related or serve a particular use case. Adding a package feed to the feed configuration of the OpenWRT SDK or build system allows users to compile the packages in that feed.

### Package Feed Structure
The following diagram illustrates the structure of a feed directory.

```
custom-feed/
|-- example-package-simple/
|   |-- files/
|   |   `--config.txt
|   `-- Makefile
`-- example-package-complex/
    |-- files/
    |   `config.txt
    |-- patches/
    |   `-- 000-fix-typo.patch
    |-- src/
    |    |-- main.c
    |    `-- makefile
    `-- Makefile
```


### Working with Package Feeds
A Package Feed can be considered an input to the OpenWRT SDK or build system. It must be added to the feed configuration and then initialized before packages from the feed can be compiled.

For information on how to work with Package feeds with Onion’s OpenWRT SDK wrapper, see the article on how to [Compile a Package](/omega2-docs/packages/compile-package).

## The Structure of the Package Source

The package source will always contain a package makefile, which provides information about the package name, version number, dependencies, and the make-up of the package.

Packages may also include:

- A files directory to hold configuration and other additional files.
- A patches directory is meant to store patches for source code.
- The source code for the package.

### Package makefile

A package makefile is a central blueprint that provides detailed information about the package, including the package name, any dependencies, versions, instructions on how to compile the package, and instructions on how to install the package on the device. It serves as a guide for managing the process of compiling the source code to build a package that’s installable on a device.

- `PKG_NAME` - name of the package.
- `PKG_VERSION and PKG_RELEASE` - version number.
- `Package/$(PKG_NAME)` - dependencies and package metadata.
- `Build/Compile` - instructions on how to compile the source code, which is optional and only required if the package source code needs to be compiled (e.g., for C, C++, Rust, or Go programs).
- `Package/$(PKG_NAME)/install` - instructions for the package manager on how to install the compiled package on the target device.

An example of a package makefile:

```shell

include $(TOPDIR)/rules.mk

PKG_NAME:=mycustomapp
PKG_VERSION:=1.2
PKG_RELEASE:=3

include $(INCLUDE_DIR)/package.mk

define Package/$(PKG_NAME)
  SECTION:=utils
  CATEGORY:=Utilities
  TITLE:=My Custom Application
  DEPENDS:=+libuci +libubus
endef

define Package/$(PKG_NAME)/description
  Custom application for Omega2.
endef

define Build/Compile
  # Add compilation instructions here if needed
endef

define Package/$(PKG_NAME)/install
  $(INSTALL_DIR) $(1)/usr/bin
  $(INSTALL_BIN) $(PKG_BUILD_DIR)/custom_binary $(1)/usr/bin/
endef

$(eval $(call BuildPackage,$(PKG_NAME)))

```

:::caution

The software application makefile and package makefile are **not the same**. 

The application makefile provides instructions on how to compile and build a single application. The package makefile defines the software package, manages dependencies, and specifies the compilation and package installation instructions.

For more information on the package makefile refer to [OpenWRT Packages documentation](https://openwrt.org/docs/guide-developer/packages).

:::

### Files Directory

The `files` directory is an optional component found in the package source structure. It serves as a designated space for storing various additional items that are essential for the package.

Additionally, it is a good place to store files that aren’t necessarily application source code but are still helpful to the package, such as config files or the files required to make the package run as a service.

Any files in the `files` directory that are meant to be installed on the device must be added to the `Package/$(PKG_NAME)/install` section in the package makefile.

### Patches Directory

The `patches` directory is optional and is a place to store patch files for the source code of the package. Patches are small updates to the existing code and can be used for:

- Bug fixes
- Efficient troubleshooting
- Implementing version-specific changes
- Implementing configuration changes

The `patches` directory organizes the patch files, allowing for easy access and management.

**Note:** Patch files in this directory will be automatically applied when the package source is compiled.

:::tip

For further information, see the [**OpenWRT** documentation on working with patches](https://openwrt.org/docs/guide-developer/toolchain/use-patches-with-buildsystem). This documentation provides a comprehensive guide on working with patches, including adding new patches, editing existing ones, and managing patch collections.

:::

## Package Source Code

Package source code refers to the collection of code and related files that form a software package. There are two ways source code is organized:

### Separate Repository

Source code is stored in a separate repository from the package makefile. This is common for existing open-source applications.

### Same Repository

The source code is stored in the same repository as the package makefile. This is often the case when working with custom code, where the source code and the package makefile are both stored in the same location.

## Package Dependencies

Packages sometimes depend on other packages or libraries to function properly. Dependencies are defined in the package makefile using the `DEPENDS` variable. This ensures the dependencies will also be installed when the package is installed.

By managing package dependencies effectively, developers can ensure their projects are reliable and maintainable.

```shell
define Package/$(PKG_NAME)
  SECTION:=utils
  CATEGORY:=Utilities
  TITLE:=My Custom Application
  DEPENDS:= +libfoo # Example dependency on libfoo
endef
```

In the above example, the `mycustomapp` package is defined with a dependency on `libfoo`. The `DEPENDS` variable specifies this dependency, ensuring that the `libfoo` package will be installed on the device when the `mycustomapp` package is installed. This illustrates how package dependencies are explicitly declared and managed within the context of the OpenWRT framework for Omega2 devices.

:::tip

For further exploration of package dependencies and their types, visit the [**OpenWRT**](https://openwrt.org/docs/guide-developer/packages#dependency_types) documentation for package makefile dependency types.

:::

## Examples and More Info

For examples of basic custom packages, explore the [**OnionIoT/Example-OpenWRT-Packages Github repo**](https://github.com/OnionIoT/example-openwrt-packages). This repository contains a collection of sample software packages written in C and Python.

For more complex example, see the [**OnionIoT/OpenWRT-Packages Github repo**](https://github.com/OnionIoT/OpenWRT-Packages/tree/openwrt-23.05). This repository contains the package source for the custom packages created by Onion. <!-- TODO: update this 23.05 with OPENWRT_VERSION variable -->

Feel free to use these packages as references of how a working package looks and works, or as a starting point for the creation of new custom packages. 

For more information - including more details about packages, a reference for Package Makefile syntax, and details on edge cases - see the [**OpenWRT documentation on packages**](https://openwrt.org/docs/guide-developer/packages).

<GiscusDocComment />
