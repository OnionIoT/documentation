---
title: Setup WiFi
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Introduction

We want to connect the Omega2/2+ to an existing WiFi network, so that it has internet access.

## Scan for available networks

To see what networks are available, run the following command: `iwinfo ra0 scan`. You should see a list of available networks along with information about each network.

Skip ahead to the next section if you don't need to scan for available networks.

## Connect to a network

Enter the following command to enable WiFi client mode on the Omega2/2+:

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

Enter the WiFi network name and password where shown.

If a connection is successful, you will see the following message in the kernel logs.

```shell
[ 993.442095] apcli0: associated
```

For more information on WiFi networking, please see the article [WiFi networking](/networking/wifi).

<GiscusDocComment />