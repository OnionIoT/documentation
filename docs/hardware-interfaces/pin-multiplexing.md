---
title: Pin Multiplexing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pin Multiplexing

Changing the functionality of the Omega's pins is supported as of firmware `22.03.3-20230526`.

A number of the available pins can be used for **multiple purposes** other than general purpose input/output when needed. These pins are referred to as **multiplexed pins**. 

For example, the UART pins are designated for use as a UART by default, but are **multiplexed** so that you can designate them for use as GPIO pins when needed. This is used to incorporate the largest number of protocol support in the smallest possible package.

The `omega2-ctrl` utility can be used to change the pin functionality.

<Tabs>
  <TabItem value="omega2" label="Omega2" default>

![omega2-pinout-diagram](./assets/omega2-pinout.png)

  </TabItem>
  <TabItem value="omega2s" label="Omega2S">

![omega2s-pinout-diagram](./assets/omega2s-pinout.png)

  </TabItem>
</Tabs>

## Viewing Current Multiplexing Configuration

To get the current configuration of the Omega's multiplexed pins, use the command:

```
omega2-ctrl gpiomux get
```

and you'll be given a list as a result:

```
root@Omega-2757:/# omega2-ctrl gpiomux get
Group i2c - [i2c] gpio
Group uart0 - [uart] gpio
Group uart1 - [uart] gpio
Group uart2 - [uart] gpio pwm
Group pwm0 - [pwm] gpio
Group pwm1 - [pwm] gpio
Group refclk - refclk [gpio]
Group spi_s - spi_s [gpio]
Group spi_cs1 - [spi_cs1] gpio refclk
Group i2s - i2s [gpio] pcm
Group ephy - [ephy] gpio
Group wled - wled [gpio]
```

<!-- TODO: confirm above text matches program output on openwrt 22.03 fw -->

The current mode for each group is indicated with the `[]`.

Let's examine the UART1 line:

```
Group uart1 - [uart] gpio
```

Here we see the group is `uart1`, and the available modes are `[uart] gpio`, with the current mode being `[uart]`.

## Changing the Pin Function

To set a particular group of hardware pins to a specified mode, use the following command:

```bash
omega2-ctrl gpiomux set <HARDWARE PIN GROUP> <MODE>
```

To illustrate the above, the following command will set UART1 pins to operate in GPIO mode:

```
omega2-ctrl gpiomux set uart1 gpio
```

and running the `get` command from above to confirm our changes:

```
root@Omega-2757:/# omega2-ctrl gpiomux get
Group i2c - [i2c] gpio
Group uart0 - [uart] gpio
Group uart1 - uart [gpio]
Group uart2 - [uart] gpio pwm
Group pwm0 - [pwm] gpio
Group pwm1 - [pwm] gpio
Group refclk - refclk [gpio]
Group spi_s - spi_s [gpio]
Group spi_cs1 - [spi_cs1] gpio refclk
Group i2s - i2s [gpio] pcm
Group ephy - [ephy] gpio
Group wled - wled [gpio]
```

<!-- TODO: confirm above text matches program output on openwrt 22.03 fw -->

We see:

```
Group uart1 - uart [gpio]
```

indicating that our change has indeed been applied.
