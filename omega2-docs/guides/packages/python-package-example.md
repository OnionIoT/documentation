---
title: Python Package Example
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Introduction

This guide will show how to compile a **Python** program into a package for the Omega2, by using a Docker image that uses Onion's OpenWRT SDK wrapper. We'll demonstrate how this is done using a sample Python program from Onion.

The Python program simply prints out `Hello World!` when it's run.

### Why is this important?

This guide and the sample program provide a sure-fire way to build a Python program into a package. You can use the procedure and sample code to build your own custom packages based on Python programs.

Packages make deploying your own custom applications much easier as opposed to copying loose files to your devices:
- Packages can be easily installed, updated, and removed with the OPKG package manager
- The Package definition and OPKG take care of any dependencies for the application
- Versioning is built into the package definition and creation process

### Output

Onion's sample program compiled into an ipk package file you can install on an Omega using the opkg package manager.

### How long will this take?

From start to finish, the example takes 15 minutes, assuming your development computer has all the required software installed.

## Environment set up

import EnvSetup from './_package-00-env-setup.mdx';

<EnvSetup/>

## Application source code

import AppSourceCode from './_package-01-app-source-code.mdx';

<AppSourceCode/>

Onion's sample is a tiny Python program that simply prints a message to the terminal.

#### Download the sample code

import AppSourceCodeDl from './_package-02-app-source-code-dl.mdx';

<AppSourceCodeDl/>

## Compile the sample package with Docker

import CompileWithDocker from './_package-03-compile-w-docker.mdx';

<CompileWithDocker/>

For our specific example, the command is:

```shell
bash onion_buildenv build_packages hello-world-python
```

The package name, `hello-world-python` in this case, is defined in the package makefile: 
https://github.com/OnionIoT/Example-OpenWRT-Packages/blob/main/hello-world-python/Makefile#L6

**This will create an installable ipk file, as well as compile any dependencies.** For the `hello-world-python` package, this will only take about a minute because the `onion/openwrt-sdk-wrapper` Docker image already has the basic Python dependencies compiled. It might take more or less time on your end depending on the CPU performance of your development computer.

If a package has dependencies, all the dependencies will be built as separate ipks.

:::note

The package makefile specifies the dependencies. Since `python3-light` is a dependency, this package will automatically be compiled. To learn more about the package makefile for this specific package, refer to the [package makefile on GitHub](https://github.com/OnionIoT/Example-OpenWRT-Packages/blob/main/hello-world-python/Makefile#L22C12-L22C25).

For additional details on the package makefile, see the [Compile a Package](../../packages/compile-package) article.

:::

import CompileWithDockerP2 from './_package-04-compile-w-docker-p2.mdx';

<CompileWithDockerP2 ipkFilename="hello-world-python_1.0-1_mipsel_24kc.ipk"/>

## Transfer the package to Omega

import TransferIpk from './_package-05-transfer.mdx';

<TransferIpk ipkFilename="hello-world-python_1.0-1_mipsel_24kc.ipk"/>

## Install the package

import InstallPackage from './_package-06-install.mdx';

<InstallPackage/>


To install the example package:

```shell
opkg install hello-world-python_1.0-1_mipsel_24kc.ipk
```

Opkg will first install the dependencies and then the package.

## Run the program

import RunProgram from './_package-07-run-program.mdx';

<RunProgram/>

Look for the `Package/$(PKG_NAME)/install` block in the `hello-world-python` package makefile: https://github.com/OnionIoT/Example-OpenWRT-Packages/blob/main/hello-world-python/Makefile#L38

<!-- TODO: edit below! -->

import RunProgramPathNote from './_package-08-run-program-path-note.mdx';

<RunProgramPathNote/>

To run the program type in:

```
hello-world-python
````

The program will run and output:

```shell
Hello World!
```

![python package output](./assets/python-example-output.png)

## Next steps

You can use the information in this guide to build the  other Python example packages or make your own!

Take a look at other Python examples in the `OnionIoT/Example-OpenWRT-Packages` repo and try them out for yourself:

- The `webserver-example-python` package is a more in-depth example that uses the Bottle Python package to create a simple Python web app that runs on the Omega

### Making your own packages

You can also try making your own Python software package based on the hello world template.

When working on your own packages, remember to begin with the package makefile.

:::note Important notes

- Set the package name and version number at the very top.
- Any dependencies should be added to the package definition (the `Package/$(PKG_NAME)` block).
- Change the package installation instructions as required `define Package/$(PKG_NAME)/install`.

:::

Work on the application source code in the src directory to customize it to your application.

<GiscusDocComment />
