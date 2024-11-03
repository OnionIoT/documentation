---
title: Pinouts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { GiscusDocComment } from '/src/components/GiscusComment';

This article explains the layout and available connection options for Omega2/2+ and Omega2S/Omega2S+ devices. It covers pinout information, including hardware interfaces, to provide a clear understanding of the pin layout structure.

## Device Pinouts

<Tabs>
  <TabItem value="omega2" label="Omega2" default>

![omega2-pinout-diagram](./assets/omega2-pinout.png)

  </TabItem>
  <TabItem value="omega2s" label="Omega2S">

![omega2s-pinout-diagram](./assets/omega2s-pinout.png)

  </TabItem>
</Tabs>

## List of Supported Interfaces

| Variant Name          | Omega2/2+                                   | Omega2S/2S+ |
|-----------------------|---------------------------------------------|-------------|
| USB 2.0               | 1                                           | 1           |
| SD/eMMC               | Omega2: none, Omega2+: MicroSD slot         | 1           |
| Ethernet              | 1                                           | 1           |
| GPIOs                 | 18                                          | **37**      |
| PWM                   | 2                                           | **4**       |
| UART                  | 2                                           | **3**       |
| I2C                   | 1                                           | 1           |
| SPI                   | 1                                           | 1           |  
| I2S                   | 1                                           | 1           |
| On-Board WiFi antenna | Ceramic surface-mount 2dBi directional chip | None        |
| u.FL Connector        | 1                                           | 1           |

<GiscusDocComment />
