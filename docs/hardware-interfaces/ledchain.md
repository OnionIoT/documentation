---
title: LED Chains
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { GiscusDocComment } from '/src/components/GiscusComment';

## Introduction

The `p44-ledchain` kernel module created by [plan44](https://github.com/plan44) can be used to drive external, individually addressable WS281x-type RGB and RGBW LED chains.

The LED chains must be connected to 1 of the 4 hardware [PWM channels](/hardware-interfaces/pwm) on the Omega2/Omega2S.

For full details about the `p44-ledchain` kernel module and its usage, see the [README](https://github.com/plan44/plan44-feed/tree/master/p44-ledchain#p44-ledchain-for-mt7688) on GitHub. (*Below are quick notes on how to get an LED Chain up and running.*)

## First Time Setup

Make sure your Omega2 is connected to the internet, and install the kernel module using opkg:

```shell
opkg update
opkg install kmod-p44-ledchain
```

This needs to be done only once.

## Hardware

External LED chains can be connected to any of the 4 hardware PWM channels.
The Omega2 can simultaneously run 4 strings of LED’s and external LED chains can be connected to any of the 4 hardware PWM channels.

The following LED Chain types are supported:

- WS2811
- WS2812(B)
- WS2813(B)
- WS2815
- P9823
- SK6812

PWM channels and their corresponding GPIO pins.

| PWM Channel | GPIO   | Notes        |
| :---------- | :----- | :----------- |
| 0           | GPIO18 |              |
| 1           | GPIO19 |              |
| 2           | GPIO20 | Omega2S only |
| 3           | GPIO21 | Omega2S only |

## Software

### GPIO Mux

To enable the PWM channel, first adjust the GPIO muxing. The GPIO mux command depends on the **PWM Channel** that's used to connect to the LED Chain. *See the [hardware PWM](/hardware-interfaces/pwm) and [GPIO Muxing](/hardware-interfaces/pin-multiplexing) docs articles for more information.*

<Tabs>
  <TabItem value="pwm0" label="PWM Channel 0" default>

```shell
omega2-ctrl gpiomux set pwm0 pwm
```

  </TabItem>
  <TabItem value="pwm1" label="PWM Channel 1">

```shell
omega2-ctrl gpiomux set pwm1 pwm
```

  </TabItem>
  <TabItem value="pwm23" label="PWM Channel 2 or 3">

```shell
omega2-ctrl gpiomux set uart2 pwm23
```

  </TabItem>
</Tabs>

:::tip

These commands do not persist after shutdown and will need to be run after every system boot

:::

### Activate the LED Chain Driver

The LED Chain driver can be activated with the following command:

```shell
insmod p44-ledchain ledchain<PWMno>=<inverted>,<numberofleds>,<ledtype>[,<maxretries>[,<maxTpassive>]]
```

This will create a `/dev/ledchain<PWMno>` device which can be used to control the physical LED chain.

:::tip

This command do not persist after shutdown and will need to be run after every system boot

:::

:::info

The command will depend on which PWM channel the LED chain is connected to, and what type of LEDs are in the chain.

See the `p44-ledchain` [README](https://github.com/plan44/plan44-feed/tree/master/p44-ledchain#p44-ledchain-for-mt7688) on GitHub for more info.

:::

#### Example

For a single, non-inverted WS2812(B) LED connected to PWM channel 2, the command would be:

```shell
insmod p44-ledchain ledchain2=0,1,0x0001
```

Now a `/dev/ledchain2` device will be created.

For more detail on using LED Chains, see the `p44-ledchain` [README](https://github.com/plan44/plan44-feed/tree/master/p44-ledchain#using-p44-ledchain).

## Update the LEDs

The LEDs can be updated by writing strings of bytes into the `/dev/ledchain<PWMno>` device.

To set the first two LEDs bright red in a device connected to PWM channel 0:

```shell
echo -en '\xFF\x00\x00\xFF\x00\x00' >/dev/ledchain0
```

To set the first LED to bright white in a device connected to PWM channel 2:

```shell
echo -en '\xFF\xFF\xFF' >/dev/ledchain2
```

<GiscusDocComment />
