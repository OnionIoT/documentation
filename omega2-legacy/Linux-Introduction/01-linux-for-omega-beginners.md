---
title: Linux for Omega Beginners
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Linux for Omega Beginners {#linux-for-omega-beginners}

If you are new to Linux, this primer explains the fundamentals you'll need before diving into Omega development.

### What Is Linux?

Linux is an operating system similar to Windows or macOS in that it allows you to operate computer hardware without writing low-level code. The key difference is that Linux is modular: the **Linux kernel** simply bridges software and hardware, while distributions (distros) layer on system libraries, package managers, and often a GUI.

Linux is mostly open source, meaning anyone can build on it, patch it, or create their own distro. That collaborative mindset fuels rapid innovation and a huge ecosystem of purpose-built tooling. For a deeper dive, check out this [overview of Linux](https://www.linux.com/learn/new-user-guides/376-linux-is-everywhere-an-overview-of-the-linux-operating-system).

### What's LEDE?

The Omega runs LEDE, a router-focused Linux distro designed for low-power, network-connected hardware. LEDE (a fork of OpenWRT) pairs a tiny footprint with rich package feeds for embedded targets. Because it is so lean, you may need to install additional tools during development, but the benefit is more flash left over for your application.

In the [next section](./the-command-line-interface), you will tour the most powerful Linux tool: the command line.

<GiscusDocComment />
