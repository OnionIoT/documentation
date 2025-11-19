---
title: Using WiFi & Ethernet Simultaneously
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Introduction

The Omega2 networking capabilities support WiFi and Ethernet applications simultaneously by default.

## Use Case

Using WiFi and Ethernet applications simultaneously is ideally suited for various applications.

- A WiFi range extender. You can connect to an existing WiFi network and share access to the network using Omega's WiFi Access Point (AP).
- WiFi router applications where the Ethernet provides a connection to the internet for the devices on the Omega2 WiFI AP network.
  - Examples of this include a smart home sensor network.
- Ethernet Bridge applications where the Omega shares its WiFi internet access through an Ethernet connection.
- Dual connection applications, where the WiFi is connected to network A and the Ethernet is connected to network B. There is no sharing access between the networks.  
- Connecting to the same network through WiFi and Ethernet.

## Implementation

By default, the WiFi AP and Ethernet network interfaces are configured to use different IP subnets. This allows for simultaneous WiFi AP and Ethernet usage out of the box with no additional configuration.

:::note

Whenever a network interface is connected to a network as a DHCP client, there’s a possibility for an IP address conflict with another network interface. For more information, see the article [Avoiding IP Address Collisions](./ip-address-collisions). 

:::

<GiscusDocComment />