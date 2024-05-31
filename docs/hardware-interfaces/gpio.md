---
title: GPIO
---

import { GiscusDocComment } from '/src/components/GiscusComment';

GPIOs (General Purpose Input Outputs) are user-controllable pins that can be used to interact with external circuits.

## Hardware

The table illustrated below shows the number of GPIOs available on the Omega2/2+ vs Omega2S/Omega2S+.

|                       | Omega2/2+                                   | Omega2S/2S+ |
|-----------------------|---------------------------------------------|-------------|
| GPIOs                 | 18                                          | **37**      |

### Electrical Ratings

GPIO Operating Voltage:

| Parameter  | Minimum (Vdc) | Minimum (Vdc) |  
|------------|---------------|---------------|
|Input HIGH  | 2.0           | 3.6           |
|Input Low   |-0.3           | 0.8           |
|Output HIGH | 2.4           | 3.3           |
|Output LOW  | -             | 0.4           |

:::note
The Omega2/2+ GPIOs are not 5V input tolerant!

:::

:::warning
Connecting a signal to an input pin below the minimum LOW or above the maximum HIGH voltages may damage your Omega device!

:::

Standard 5V logic devices typically accept 3.3V as a logical HIGH, however, the output logical HIGH is in the range of 4.4V to 5V. This means the Omega can output to a 5V logical device, but input from the 5V logic device would damage the GPIO input circuitry.

### Multiplexed Pins

A number of the available pins can be used for multiple purposes other than general-purpose input/output when needed. Such pins are referred to as multiplexed pins.

:::tip
See detailed explanation of [**Multiplexed Pins**](./pin-multiplexing.md).

:::

## Software

The GPIOs can be accessed through the GPIO sysfs interface, see the [**documentation**](https://www.kernel.org/doc/Documentation/gpio/sysfs.txt) for details. 

| The GPIO sysfs interface is deprecated but is currently the best option for userspace GPIO access. More context is available in this post by [**Luz on the Onion Community**](https://community.onion.io/topic/4892/can-bus-using-mcp2515-with-omega2/13).

### GPIO Numbering Change

:::note  
Due to the changes in the kernel, the GPIO numbering system has been updated.

- GPIO 0 - 31 ⇒ GPIO 480 - 511 (GPIO n + 480)
- GPIO 32 - 63 ⇒ GPIO 448 - 479 (GPIO n + 416)

:::

### GPIO Lookup Utility

To simplify Omega2 GPIO mapping a new utility `gpio-lookup` has been introduced, which would generate equivalent kernel GPIO numbers against a given "actual" GPIO number.

Here are a few examples of how to use `gpio-lookup`.

```shell
# gpio-lookup 15
495

# gpio-lookup 62
478

# gpio-lookup 99
-1
```

For valid GPIO numbers, `gpio-lookup` would display the corresponding kernel GPIO number, for all other cases It would display `-1` with a non-zero exit code.

:::note
The `gpio-lookup` utility is included in the Omega2 firmware

:::

### Interacting with GPIOs

 **Command Line:** Use the GPIO sysfs interface for basic testing and interaction with GPIOs. For detailed usage instructions, refer to the documentation at [**kernel.org**](http://kernel.org)

<GiscusDocComment /> 