# Create a Custom Package

This article provides an overview of creating a custom package and covers important topics such as the package Makefile, package source structure, package directories, and examples of custom packages. 

Custom software applications for specific use cases can be bundled into a software package. The package can then be installed on a device running existing firmware, or included in a custom firmware. 

Creating a custom package is particularly valuable for IoT applications, where customizing the device functionality is often necessary.

Let’s get started 🚀

## Why Create Custom Packages?

 - **Systematic Deployment:** Custom packages allow for a more organized and efficient deployment process, ensuring that software and firmware are properly configured for the Omega2 device.

 - **Easy Installation:** Custom packages can be installed on Omega2 devices using the OPKG package manager.

 - **Easy Updates:** Custom packages can be easily updated using the OPKG package manager.

## The Structure of the Package Source      

The package source will always contain a Package Makefile, the central blueprint of the package that provides information about the package name, version number, dependencies, and the make-up of the package.

Packages may also include:

 - A files directory to hold configuration and other additional files.
 - A patches directory is meant to store patches for source code.
 - The source code for the package.

### Package Makefile

A package Makefile is a central blueprint that provides detailed information about the package, including the package name, any dependencies, versions, instructions on how to compile the package, and instructions on how to install the package on the device. It serves as a guide for managing the process of compiling the source code to build a package that’s installable on a device. 

Follow the given example for Package Makefile: 

```bash

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
 - `PKG_NAME` defines the name of the package.
 - `PKG_VERSION` and `PKG_RELEASE` define the version number.
 - the define `Package/mycustomapp/install` block defines the dependencies and package metadata.
 - `Build/Compile` block provides instructions on how to compile the source code, which is optional and only required if the package source code needs to be compiled (e.g., for C, C++, Rust, or Go programs).
 - `Package/mypackage/install` section provides instructions for the package manager on how to install the compiled package on the target device.

:::note
For more information on the package Makefile refer to OpenWRT [**Package Makefile**](https://openwrt.org/docs/guide-developer/packages#file_installation_macros) documentation.
 
:::

### Files Directory

The files directory is an optional component found in the package source structure. It serves as a designated space for storing various additional items that are essential for the package. 

Additionally, it is a good place to store files that aren't necessarily application source code but are still helpful to the package, such as config files or the files required to make the package run as a service. 

If the files from the files directory are meant to be installed on the device, they need to be added to the define `Package/mypackage/install` section in the package Makefile.


### Patches Directory

The patches directory is optional and acts as a place to store patch files for the source code of the package. Patches are small updates to existing code and can be used for:

 - Bug fixes
 - Efficient troubleshooting
 - Implementing version-specific changes
 - Implementing configuration changes

The patches directory organizes the patches, allowing for easy access and management. **Patch files in this directory will automatically be applied when the package source is compiled**. 

:::tip 
For further exploration, visit [**OpenWRT**](https://openwrt.org/docs/guide-developer/toolchain/use-patches-with-buildsystem) documentation. This documentation provides a comprehensive guide on working with patches, including adding new patches, editing existing ones, and managing patch collections.

:::

### Package Dependencies

Packages sometimes depend on other packages or libraries to function properly. Dependencies are defined in the package Makefile using the `DEPENDS` variable. This ensures the dependencies will also be installed when the package is installed. 

By managing package dependencies effectively, developers can ensure their projects are reliable and maintainable.

```bash
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

## Package Source Code
Package source code refers to the collection of code and related files that form a software package. There are two ways source code is generally organized:

### Separate Repository

Source code is stored in a separate repository from the package makefile, which is common for existing open-source applications. For example, when packaging an existing open-source application, the source code is typically stored in a separate repository, while the package makefile is stored in a different location. Patch files are used to make any changes to the code as required.

### Same Repository

The source code is stored in the same repository as the package makefile, which is common for custom code. This is often the case when working with custom code, where the source code and the package makefile are both stored in the same location.

## Examples and More Info

For examples of custom packages, explore the [**OnionIoT/OpenWRT-Packages Github repo**](https://github.com/OnionIoT/OpenWRT-Packages/tree/openwrt-22.03). This repository contains the package source for the custom packages created by Onion. Feel free to use these packages as references of how a working package looks and works, or as a starting point for the creation of new custom packages.

For more information - including more details about packages in general, a reference for Package Makefile syntax, and details on edge cases - see the [**OpenWRT documentation on packages**](https://openwrt.org/docs/guide-developer/packages).

<!-- comment section -->
#
import { GiscusDocComment } from '/src/components/GiscusComment';

<GiscusDocComment /> 