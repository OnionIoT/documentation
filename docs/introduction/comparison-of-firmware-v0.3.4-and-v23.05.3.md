---
title: Comparison of firmware v0.3.4 & v23.05.3
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Note to reader

This is an advanced article that provides an overview of the differences between v0.3.4 and the new v23.05.3 stable version of the Omega firmware. The article is relevant to customers who have previous experience with the Omega2 family of products.

## Context: The previous v0.3.4 firmware

The previous Omega2 stable firmware (v0.3.4) is based on OpenWRT 18.06, running the Linux kernel 4.14. Onion has added many customizations and utilities over the years.

The packages for this firmware vary. They include support for Onion expansions to Onion console (web GUI) to other utilities.

:::note IMPORTANT NOTE

This documentation site does not apply to the v0.3.4 firmware, please refer to [https://docs.onion.io/](https://docs.onion.io/) for v0.3.4 supporting documentation.

:::

## How is the v0.3.4 firmware built?

Onion has its own fork of the OpenWRT build system – [OnionIoT/source](https://github.com/OnionIoT/source).

We have added various customizations to this fork that have not been upstreamed. And we haven't rebased the fork with OpenWRT upstream changes since the initial split.

**Onion customizations:**

- Addition of an Onion package feed to the repository.
- Changes to the Device Tree configurations.
- Kernel changes: configurations, customizations to kernel modules, addition of kernel modules.
- Addition of files to the built firmware that work in concert with custom packages.

OpenWRT build system is used to build:

- Firmware for the Omega2 and Omega2+
- Firmware for the Omega2 Single Board Computers
- Custom packages in Onion package repository

:::tip

It takes about 3-8 hours for a build to run, depending on the machine used for compilation

:::

### Strengths

- **Performant** - From 2018 to 2021, this firmware had the best WiFi performance, both in speed and functionality.
  - Since 2020, the development of the `mt76` open source driver has picked up steam and steadily improved.
- **Stable and battle-tested** – Tens of thousands of devices run this firmware or its descendants. They have operated well for years.
- **Well documented** – The firmware's usage and functionality are well documented. Documentation is available on docs.onio.oi, Onion blog posts, application notes, and Onion community forum FAQs.

### Weaknesses

- **Outdated** – Based on the outdated OpenWRT 18.06 release from 2018. There have been many improvements since then.
- **Hard to port** – Onion's customizations to the build system make it hard to port to new versions of OpenWRT.
- **Long build time** – poor developer experience.
- **Difficulty adding customizations** – This leads to poor developer experience.
  - Must follow a specific process that involves a lot of interdependencies.
- **Custom WiFi driver** – Is now a hindrance.
  - Custom tools are required for RF certification, leading to friction for users.
  - Not actively being developed.
  - Less flexibility – The Omega's WiFi Access Point (AP) cannot be disabled if the Omega is also connected to an external WiFi network Station (STA).
  - Does not support newer WiFi operating modes, such as, enterprise WiFi, roaming, etc.
- **Bloated** – Firmware bundled with many customizations.
  - Large size
  - Longer boot time

## How is the new v23.05.3 firmware different?

Onion is taking a new approach with the new firmware.

- **Up to date** – Based on OpenWRT 23.05, released in 2024.
- **More performant**
  - Uses the open source `mt76` WiFi driver.
    - Offers more functionality and flexibility, while matching the raw performance of the custom WiFi driver.
  - Faster boot times.
  - Newer versions of packages available.
  - Running a newer Linux kernel 5.15 <!-- TODO: update with KERNEL_VERSION variable -->
- **Clean slate** – It does not include most of the utilities and packages from the existing stable (v0.3.4) Omega2 firmware.
  - [The Onion console](https://onion.io/getting-started-with-onionos/) (web GUI) is not included in the new firmware.
- **Focus on usability** – Customizations are small and relate to usability improvements.
  - The default networking configuration is better and more accessible. It also has out-of-the-box support for hardware interfaces.
- **Leverage our knowledge**
  - Onion has worked with OpenWRT since 2015. Over time we've learned a lot.
  - The Omega2, with its new firmware, is the only MIPS platform that can run modern Node.js v18. <!-- TODO: update above with NODE_VERSION variable -->

### How is it built?

Onion overhauled how we build packages and firmware to make the process quicker and easier. We use the OpenWRT build system to build our own versions of the SDK and Image Builder.

- Packages are built with the help of the OpenWRT SDK.
- Firmware images are built with the help of the OpenWRT Image Builder.

#### Why did we change our build process?

The default SDK and Image Builder only gave us control of the basic configurations and what packages to include in the firmware. They don't allow us to make deeper changes.

Building our own versions of the SDK and Image Builder gives us the flexibility to create deeper customizations:

- Change the kernel configuration
- Change the overall system configuration
- Make changes to DTS definitions

This enables the support of more use cases, like enabling the use of modern Node.js.

When working with the OpenWRT build system, SDK, and Image Builder, we use wrappers, scripts, and patches. This is more maintainable and portable than having our own forks for these systems.

See the [How firmware is built](/firmware/how-to-build-firmware) article for more details.

## Core tenets of the new firmware philosophy

Onion has a new firmware philosophy that aims to guide our customers along their journey from development to production.

### Intentionality

Our intention is to focus on the needs of our customers when making customizations and improvements.

We want to articulate the value provided by each customization or improvement.

### Openness to feedback

Instead of assuming what our customers want and adding unnecessary features or keeping outdated packages that nobody uses, we want to hear from our customers. What is important to you and what isn't.

Our customers have been helping us build our firmware from the start. When we asked for feedback, they responded eagerly, creating a list of issues on GitHub.

We continue to seek feedback from our customers. They can comment on our documentation, post issues on our community forum, and log GitHub issues.

### Portability + modularity

Our goal is to migrate our firmware to new OpenWRT releases. We want to leverage the advances and contributions of the OpenWRT community.

Migration to a new release should be a series of straight-forward tasks, and not a large painful undertaking.

We want to stay away from solutions that require heavy maintenance, like forking entire repositories.

We want to encapsulate customizations, like software packages and patches. We don't want to encapsulate complex code customizations, like build systems.

### Optimization

Onion wants to avoid anything that adds unnecessary friction into the developer's experience.

- Getting up and running should be trivial.
- Build time should be in minutes, not hours.
- Provide ways for customers to make their own customizations (don't leave them groping around in the dark).
- Provide easy to use tools and documentation for common parts of the customer journey, such as RF certification.
- Make it easy to collaborate with other developers. By putting customizations into packages, patches, and so on, others can test changes quickly and easily. They can also collaborate on them.

### Lightweight and modular

We want to make sure the default firmware is "minimum viable" firmware by providing:

- Support and utilities for the essential interfaces.
- Minimal additions to enhance the customer's experience.
- Everything else should be installed later as a package.
- The benefits of this approach are:
  - Small image size.
  - A quicker boot time.
  - More storage space for customers to customize their own firmware.
  
### Well documented

Our aim is to provide good documentation throughout the entire customer journey.

- Ties back to optimizing a good developer experience.
- Leverages knowledge gained from working with OpenWRT to create content that helps our customers through each step of their journey.
  - Development – building out functionality.
  - Deployment – packaging development work for use on many production devices.
  - Production – everything needed for mass production.
- Providing guides on how to move through development 🡪 deployment 🡪 production. This reduces friction for developers and our customers. It also enhances the fact that using the Omega2 speeds up getting to market.

<GiscusDocComment />
