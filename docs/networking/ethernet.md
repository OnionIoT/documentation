---
title: Ethernet Networking
---

# Ethernet Networking

The Omega2 family devices feature a single 10/100M Ethernet integrated PHY. The addition of a transformer and a RJ45 port allow for quick and easy wired networking with ethernet cables.

The ethernet port can be configured to be a client or a DHCP host. It is set to client mode by default.

## Ethernet Port as DHCP Client

Default network configuration is for ethernet port to act as DHCP client. It expects to receive an IP address from a DHCP server on the network (a router or similar).

Plug and play: add the Omega to your network by connecting an ethernet cable

## Ethernet Port as DHCP Host

To configure the ethernet port to act as the DHCP Host/Server:

```bash
uci del network.wan.device
uci add_list network.@device[0].ports='eth0'
uci commit network
/etc/init.d/network restart
```

In this case, any device connected to the ethernet port will receive an IP address from the Omega2. 

The Omega2 ethernet port will have 192.168.4.1 set as its IP address, and it will give IP addresses to clients in the range of 192.168.4.100 to 192.168.4.150.

To check the IP addresses given to a connected client, run `cat /tmp/dhcp.leases`