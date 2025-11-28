---
title: C Programming Language
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Develop in C on the Omega

C is a natural fit for low-level control on the Omega2. You can compile small utilities directly on the device or cross-compile on a workstation for faster turnaround.

### Tooling Options

- To install the on-device toolchain, follow the [Compiling C on the Omega guide](/omega2-legacy/Doing-Stuff/Advanced/C-Compiler-on-Omega).  
- For larger projects, build the OpenWrt/LEDE toolchain and [cross-compile firmware or packages](/omega2-legacy/Doing-Stuff/Advanced/Cross-Compile).

Both workflows rely on `opkg` and the Onion package feeds, so make sure your device has the correct repositories enabled before installing development packages.

### Next Steps

- Use the `libonioni2c`, `libonionpwmexp`, and `libonionrelay` libraries from the [Software Reference section](/omega2-legacy/Reference/Libraries/I2C-C-Library) to access hardware features from C.
- When you are ready to ship code on boot, wrap your binaries in an init script and see [Running a Command on Boot](/omega2-legacy/Doing-Stuff/Automation/Running-a-command-on-boot).

<GiscusDocComment />
