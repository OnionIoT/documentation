---
title: WiFi Networking
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Introduction

The Omega2 has a built-in 2.4 GHz 802.11 b/g/n WiFi radio adapter. It can host a network, connect to an existing network, or host a network and connect to a wireless network simultaneously.

### Modes of operation

- **AP:** WiFi network hosted by Omega2.
- **STA:** Connecting to an existing WiFi network.
- **AP+STA:** Hosting a network and connecting to an existing wireless network simultaneously.
- **Off:** WiFi radio disabled.

### Driver

The Omega2 uses the open source mt76 wireless network driver.

Configuration for wireless networking is at **/etc/config/wireless** on the device.

:::note

Configuration changes are made using the Unified Configuration Interface (UCI) command-line utility. UCI is useful for quick and easy modifications to configuration files. See the [OpenWRT docs](https://openwrt.org/docs/guide-user/base-system/uci#command-line_utility) for more info on UCI.

:::

## AP

The Omega2 hosts a WiFi Access Point (AP), also known as a WiFi Hotspot, that other WiFi-enabled devices can connect to. This is like a WiFi router.

### Default behaviour

The AP is enabled on the Omega2 by default. The SSID, name of the network, will be **Omega-abcd** where abcd matches the last 4 digits of the device’s MAC address.

The AP acts as a DHCP host and provides IP addresses to clients.

### IP Addresses and DHCP

- Omega2 AP IP address is 192.168.3.1
- DHCP will give IP addresses to clients in the 192.168.3.100 to 192.168.3.150 range

To check the IP address given to connected clients, run `cat/tmp/dhcp.leases`.

#### How to change DHCP

For information on how to change the DHCP, see the [OpenWRT DHCP](https://openwrt.org/docs/guide-user/base-system/dhcp) docs for more configuration options.

### Configuring the AP

The AP has a few settings that are configurable.

#### Changing the AP SSID

To change the AP SSID:

```shell
uci set wireless.default_radio0.ssid='<NEW SSID>' 
uci commit wireless 
wifi
```

#### Changing the password

To change the password:

```shell
uci commit wireless.default_radio0.key='<NEW PASSWORD>' 
uci commit wireless 
wifi
```

#### Disabling the AP

To disable the AP:

```shell
uci set wireless.default_radio0.disabled='1' 
uci commit wireless 
wifi
```

:::note

Running the disable command will turn off the Omega’s WiFi AP. If you were connected to the AP and using SSH for command line access, that will no longer work when the AP is turned off. Make sure the device is accessible via serial or through STA network connection before doing this.

:::

See the [OpenWRT wireless](https://openwrt.org/docs/guide-user/network/wifi/basic) docs for more configuration options.

## STA

The Station (STA) mode allows you to connect the Omega2 to an existing wireless network as a client. 

*The wireless interface used for Station mode is also called the wireless client interface.**

### Default behaviour

The STA is disabled on the Omega2 by default.

### Configuring the STA

The STA has several settings that are configurable, mostly related to connecting to an external network.

#### Enabling an STA connection

To enable an STA connection:

```shell
uci set wireless.client.disabled='0' 
uci commit wireless 
wifi
```

#### Scanning for WiFi networks

To scan for WiFi networks:

```shell
iwinfo ra0 scan
```

Sample output:

```shell
Cell 01 - Address: 0C:AC:8A:51:F4:1B 
     ESSID: "ABCD517" 
     Mode: Master Channel: 1 
     Signal: -80 dBm Quality: 30/70 
     Encryption: WPA2 PSK (CCMP) 
     HT Operation: 
           Primary Channel: 1 
           Secondary Channel Offset: no secondary 
           Channel Width: 20 MHz 

Cell 02 - Address: 0C:AC:8A:E3:27:51 
     ESSID: "ABCD791" 
     Mode: Master Channel: 6 
     Signal: -83 dBm Quality: 27/70 
     Encryption: WPA2 PSK (CCMP) 
     HT Operation: 
           Primary Channel: 6 
           Secondary Channel Offset: no secondary 
           Channel Width: 40 MHz or higher
```

#### Connecting to a secure wireless network

To connect to a wireless network with WPA2 security:

```shell
uci set wireless.client.ssid='<YOUR WIFI NETWORK NAME HERE>' 
uci set wireless.client.key='<YOUR WIFI NETWORK PASSWORD HERE>'
uci commit wireless 
wifi
```

If a connection is successful, you’ll see the following message in the kernel logs.

```shell
[ 993.442095] apcli0: associated
```

:::warning

If the connection is not successful, make sure to disable the client interface before rebooting the device. If the Omega’s WiFi client interface is configured and enabled but cannot connect to the specified network, the Omega’s access point will not be available after a reboot. 

See the [AP Not Accessible if STA cannot Connect section below](#ap-not-accessible-if-sta-cannot-connect) for more details.

:::

#### Checking the IP address on Omega

import Apcli0CheckIpAddr from './_apcli0-check-ip-addr.mdx';

<Apcli0CheckIpAddr/>

:::note

The Omega2 will only connect to the wireless network specified. This version of the WiFi driver does not support automatic network switching.

:::

#### Disabling the STA

To disable this functionality of the radio and disconnect from any connected WiFi network:

```shell
 uci set wireless.client.disabled='1'
 uci commit wireless
 wifi
 ```

See the [OpenWRT wireless](https://openwrt.org/docs/guide-user/network/wifi/basic) docs for more configuration options including supporting different WiFi network types.

## AP+STA

The Omega2 can host a wireless network access point and connect to an existing wireless network simultaneously.

### AP Not Accessible if STA cannot Connect

:::danger

If the Omega’s WiFi client interface is configured but cannot connect to the specified network (for example, the network is offline or out of range), **the Omega’s access point will not be available** after a reboot. 

:::

This behaviour differs from previous firmware versions (e.g., v0.3.4) where the AP remained accessible even if the client could not connect.

#### Why this Happens

The new mt76 WiFi driver enforces tighter coupling between the AP and STA virtual interfaces running on the same radio. If the STA fails to associate, the AP cannot operate.

#### Recommended Mitigation

- Ensure the STA configuration always points to a known, reachable network.  
- If persistent local AP availability is required regardless of STA connectivity, consider disabling the STA interface
- If persistent local AP availability is required in addition to STA connectivity, consider creating a script that checks if the wireless client configuration is enabled and, if the wireless client interface is not connected to a network, will disable the wireless client interface.


### Potential for IP Address Collisions

:::caution

Having both the AP and STA enabled simultaneously may result in IP address collisions.

:::

#### What is an IP address collision?

An IP address collision can occur if your Omega’s access point (AP) and WiFi network that you try connecting to share the same subnetwork (subnet). The Omega’s AP is 192.168.3.0/24 and it’s possible that your WiFi network has the same subnet. This results in the Omega not knowing what data to send where.

See the article [Avoiding IP address collisions](./ip-address-collisions) for more information.

## Disabling the WiFi radio

You may want to completely power down the WiFi radio and disable all wireless networking.

### Why would you disable the WiFi radio?

The WiFi radio consumes a relatively large amount of power. If wireless networking is not required for your application, disabling this feature will result in large power savings.

To disable the WiFi radio:

```shell
uci set wireless.radio0.disabled='1'
uci commit wireless
wifi
```

Note this will turn off both the AP and STA.

## Additional configuration options

See the [OpenWRT docs](https://openwrt.org/docs/guide-user/network/wifi/basic) for additional configuration options including support for different WiFi network security types, enterprise WiFi, fast switching, and more.

<GiscusDocComment />