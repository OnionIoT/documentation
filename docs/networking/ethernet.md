---
title: Ethernet Networking
---

# Ethernet Networking

## Introduction

The Omega2 family devices feature a single 10/100M Ethernet integrated physical layer (PHY). The addition of a transformer and an RJ45 port allow for quick and easy wired networking with Ethernet cables.

The Ethernet port can be configured to be a client or a DHCP host. 

### Default behaviour

The Ethernet port is set to client by default.

Configuration for Ethernet networking is located at **/etc/config/network** on the device.

:::note

Configuration changes are made using the Unified Configuration Interface (UCI) command-line utility. UCI makes it easy and quick to modify configuration files. See the [OpenWRT docs](https://openwrt.org/docs/guide-user/base-system/uci#command-line_utility) for more information on UCI.

:::

## Ethernet port as DHCP client

The default network configuration is for the Ethernet port to act as DHCP client. The port expects to receive an IP address from a DHCP server on the network (a router or similar).

**Plug and play:** Add the Omega to your network by connecting an Ethernet cable.

### How to set up a DHCP client

If Ethernet networking config has changed and is no longer a DHCP client:

```
uci del_list network.@device[0].ports='eth0'
uci set network.wan='interface'
uci set network.wan.proto='dhcp'
uci set network.wan.device='eth0'
uci set network.wan.hostname="Omega-<ABCD>"
uci commit network
/etc/init.d/network restart
```

**Note:** The **network hostname ABCD** matches the last 4 digits of the device's MAC address.

## Ethernet port as DHCP host

Configure the Ethernet port to act as the network host and DHCP host/server, assigning IP addresses to connected clients.

:::note

By default, you can only connect one client. This is because there's a single Ethernet port.

:::

### How to set up a DHCP host

To set up the Ethernet port as a DHCP host:

```
uci del network.wan.device
uci add_list network.@device[0].ports='eth0'
uci commit network
/etc/init.d/network restart
```

In this case, any device connected to the Ethernet port will receive an IP address from the Omega2.

#### IP addresses

The Omega2 Ethernet port will have 192.168.4.1 set as its IP address. It will give IP addresses to clients in the range of 192.168.4.100 to 192.168.4.150.

To check the IP addresses given to a connected client, run `cat /tmp/dhcp.leases`.

:::note

There is a potential for an IP address conflict if the Omega2 is acting as an Ethernet host and is simultaneously connected to a WiFi network running on the 192.168.4.0/24 subnet. For more information on IP address conflicts, see the article [Avoiding IP Address Collisions](./ip-address-collisions).

:::

## More on network configuration

See the [OpenWRT docs](https://openwrt.org/docs/guide-user/network/network_configuration) on network configuration for more information and ideas on network configuration.

import { GiscusDocComment } from '/src/components/GiscusComment';

<GiscusDocComment /> 