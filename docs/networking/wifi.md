---
title: Wireless Networking
---

# Wireless Networking

The open source mt76 driver is used for wireless networking.

## AP

By default, Omega2 will host an AP (Access Point) network. It will be named `Omega-abcd` where `abcd` matches the last four digits of the device’s MAC address

To disable the AP:

```bash
uci set wireless.default_radio0.disabled='1'
uci commit wireless
wifi
```

The Omega2 WiFi AP will have 192.168.3.1 set as its IP address and it will give IP address to clients in the 192.168.3.100 to 192.168.3.150 range.

To check the IP addresses given to connected clients, run `cat /tmp/dhcp.leases`


## STA

To connect the Omega2 to an existing wireless network (with WPA2 security), run the following commands:

```bash
uci set wireless.client.ssid='<YOUR WIFI NETWORK NAME HERE>'
uci set wireless.client.key='<YOUR WIFI NETWORK PASSWORD HERE>'
uci set wireless.client.disabled='0'
uci commit wireless
wifi
```

To disable this functionality of the radio and disconnect from any connected radio:

```bash
uci set wireless.client.disabled='1'
uci commit wireless
wifi
```

Note: the Omega2 will only connect to the wireless network specified. This version of OpenWRT does not support automatic network switching.

## Combinations of AP and STA

With this version of OpenWRT, the Omega2 supports:

- AP: Just the network hosted by the Omega2
- STA: Just connecting to an existing wireless network
- AP+STA: Hosting a network and connecting to an existing wireless network

The AP can be controlled through `uci` and the `wireless.default_radio0.disabled` parameter.

And the STA can be controlled through `uci` and the `wireless.client.disabled` parameter.