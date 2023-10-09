---
title: GPIO
---

# GPIO

The GPIOs can be accessed through the GPIO sysfs interface, see the [documentation](https://www.kernel.org/doc/Documentation/gpio/sysfs.txt) for details. 

> The GPIO sysfs interface is deprecated but is currently the best option for userspace GPIO access. More context available in [this post by Luz on the Onion Community](https://community.onion.io/topic/4892/can-bus-using-mcp2515-with-omega2/13).

An important note: because of changes in the kernel, the GPIOs are not numbered like they were before:

- GPIO 0 - 31 ⇒ GPIO 480 - 511  (GPIO n + 480)
- GPIO 32 - 63 ⇒ GPIO 448 - 479 (GPIO n + 416)

## `gpio-lookup` utility

To simplify Omega2 GPIO mapping a new utility `gpio-lookup` has been introduced, which would generate equivalent kernel GPIO numbers against given an "actual" GPIO number.

Here are a few examples of how to use `gpio-lookup`.

```bash
# gpio-lookup 15
495

# gpio-lookup 62
478

# gpio-lookup 99
-1
```

For valid GPIO numbers, `gpio-lookup` would display the corresponding kernel GPIO number, for all other cases It would display `-1` with a non-zero exit code.
