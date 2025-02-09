---
title: Setup WiFi
---

import { GiscusDocComment } from '/src/components/GiscusComment';

We want to connect the Omega to a local WiFi network, so that it has internet access.

:::info 

**The commands in this article need be run on the Omega.** Check out the previous article on [connecting to the Omega's Serial Command Line](/quickstart/serial-command-line) for details.

:::

## Step 1: Scan for available networks

:::tip 

The Omega2 is compatible with 2.4 GHz WiFi networks. Scanning for networks is useful to double-check the Omega can detect your WiFi network. 

Skip ahead to the next section if you know your WiFi network name and don't need to double check compatibility.

:::

To see what networks are available, run the following command: 

```
iwinfo ra0 scan
```

You should see a list of available networks along with information about each network. It will look something like this:

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

Make sure the network you intend to connect to is on this list!

## Step 2: Connect to a network

Enter the following command to enable WiFi client mode on the Omega:

```shell
uci set wireless.client.disabled='0'
```

Enter the following commands to connect to a wireless network that uses WPA2 security:

```shell
uci set wireless.client.ssid='<YOUR WIFI NETWORK NAME HERE>'
uci set wireless.client.key='<YOUR WIFI NETWORK PASSWORD HERE>'
uci commit wireless
wifi
```

Replace the placeholders in the command above with the relevant WiFi network name and password.

If a connection is successful, you will see the following message in the kernel logs.

```shell
[ 993.442095] apcli0: associated
```

## Step 3: Check Network Connection is Successful

If the network connection is successful, the Omega will be given an IP address. 

import Apcli0CheckIpAddr from '../networking/_apcli0-check-ip-addr.mdx';

<Apcli0CheckIpAddr/>

#### Connected! 

If the `apcli0` network interface has been assigned an IP address, the Omega is now connected to the specified WiFi network and to the internet!


:::info More Info

For more information on WiFi networking and configuration, please see the article [WiFi networking](/networking/wifi).

:::

<GiscusDocComment />