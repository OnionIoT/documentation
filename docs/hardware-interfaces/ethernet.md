---
title: Ethernet
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ethernet

## Introduction
The Omega2 features a 10/100M Ethernet port for wired networking.

## Hardware
The Omega2 has a single 10/100M integrated Ethernet Physical Layer (PHY).

The Ethernet pins are highlighted on the Omega2/2S diagrams below.

<Tabs>
  <TabItem value="omega2" label="Omega2" default>

  ![omega2-pinout ethernet-pins](./assets/omega2-pinout-ethernet-highlights.png)

   </TabItem>
  <TabItem value="omega2s" label="Omega2S">

![omega2s-pinout ethernet-pins](./assets/omega2s-pinout-ethernet-highlights.png)

  </TabItem>
</Tabs>

See the [Omega2S hardware design guide](https://github.com/OnionIoT/Omega2/blob/master/Documents/Omega2S%20Hardware%20Design%20Guide.pdf) for more information and recommendations on designing boards with Ethernet.

## Software
The Ethernet port can be configured to be a client or a Dynamic Host Configuration Protocol (DHCP) host. It is set to client mode by default. 

For more information on Ethernet networking, see the [Ethernet networking article](https://documentation.onioniot.com/networking/ethernet).

