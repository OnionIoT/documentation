# Create a Custom Package

import { GiscusDocComment } from '/src/components/GiscusComment';

This article summarizes creating a custom package and covers important topics such as the package makefile, package source structure, package directories, and examples of custom packages.

Custom software applications for specific use cases can be bundled into a software package. The package can then be installed on a device running existing firmware or included in custom firmware.

Creating a custom package is valuable for IoT applications, where customizing the device functionality is often necessary.

## Why Create Custom Packages?

- **Systematic Deployment:** Custom packages allow for a more organized and efficient deployment process, ensuring that software and firmware are properly configured for the Omega2 device.

- **Easy Installation:** Custom packages can be installed on Omega2 devices using the Opkg package manager.

- **Easy Updates:** Custom packages can be easily updated using the Opkg package manager.

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
- `Package/mycustomapp/install` - dependencies and package metadata.
- `Build/Compile` - instructions on how to compile the source code, which is optional and only required if the package source code needs to be compiled (e.g., for C, C++, Rust, or Go programs).
- `Package/mypackage/install` - instructions for the package manager on how to install the compiled package on the target device.

An example of a package makefile:

```shell

include $(TOPDIR)/rules.mk

PKG_NAME:=mycustomapp
PKG_VERSION:=1.2
PKG_RELEASE:=3

include $(INCLUDE_DIR)/package.mk

define Package/mycustomapp
  SECTION:=utils
  CATEGORY:=Utilities
  TITLE:=My Custom Application
  DEPENDS:=+libuci +libubus
endef

define Package/mycustomapp/description
  Custom application for Omega2.
endef

define Build/Compile
  # Add compilation instructions here if needed
endef

define Package/mycustomapp/install
  $(INSTALL_DIR) $(1)/usr/bin
  $(INSTALL_BIN) $(PKG_BUILD_DIR)/custom_binary $(1)/usr/bin/
endef

$(eval $(call BuildPackage,mycustomapp))
  $(INSTALL_BIN) $(PKG_BUILD_DIR)/mybinary $(1)/usr/bin/
endef

$(eval $(call BuildPackage,mypackage))

```

:::note

For more information on the package makefile refer to OpenWRT [**Package Makefile**](https://openwrt.org/docs/guide-developer/packages#file_installation_macros) documentation.

:::

### File Directory

The file directory is an optional component found in the package source structure. It serves as a designated space for storing various additional items that are essential for the package.

Additionally, it is a good place to store files that aren’t necessarily application source code but are still helpful to the package, such as config files or the files required to make the package run as a service.

Any files in the file directory that are meant to be installed on the device must be added to the `Package/mypackage/install` section in the package makefile.

### Patch Directory

The patch directory is optional and is a place to store patch files for the source code of the package. Patches are small updates to the existing code and can be used for:

- Bug fixes
- Efficient troubleshooting
- Implementing version-specific changes
- Implementing configuration changes

The patch directory organizes the patches, allowing for easy access and management.

**Note:** Patch files in this directory will automatically be applied when the package source is compiled.

:::tip

For further exploration, see the [**OpenWRT**](https://openwrt.org/docs/guide-developer/toolchain/use-patches-with-buildsystem) documentation. This documentation provides a comprehensive guide on working with patches, including adding new patches, editing existing ones, and managing patch collections.

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
define Package/mypackage
  SECTION:=utils
  CATEGORY:=Utilities
  TITLE:=My Custom Package
  DEPENDS:= +libfoo # Example dependency on libfoo
endef
```

In the above example, the mypackage is defined with a dependency on `libfoo`. The `DEPENDS` variable specifies this dependency, ensuring that the `libfoo` package will be installed on the device when the mypackage is installed. This illustrates how package dependencies are explicitly declared and managed within the context of the OpenWRT framework for Omega2 devices.

:::tip

For further exploration of package dependencies and their types, visit the [**OpenWRT**](https://openwrt.org/docs/guide-developer/packages#dependency_types) documentation for package makefile dependency types.

:::

## Examples and More Info

For examples of custom packages, explore the [**OnionIoT/OpenWRT-Packages Github repo**](https://github.com/OnionIoT/OpenWRT-Packages/tree/openwrt-22.03). This repository contains the package source for the custom packages created by Onion. Feel free to use these packages as references of how a working package looks and works, or as a starting point for the creation of new custom packages.

For more information - including more details about packages, a reference for Package Makefile syntax, and details on edge cases - see the [**OpenWRT documentation on packages**](https://openwrt.org/docs/guide-developer/packages).

<GiscusDocComment />
