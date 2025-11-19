---
title: Avoiding IP Address Collisions
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Introduction

If you’ve been unsuccessful in connecting your Omega to your home WiFi network and you’ve made sure that the password is 100% correct, you might have an *IP address collision* between your WiFi network and the Omega’s Access Point (AP) network.

IP address collisions can occur when the Omega2 connects to a network (wireless or wired) that uses DHCP to assign IP addresses. This happens when the network’s IP address subnet is the same as a network interface on the Omega2 that’s set up to act as a DHCP host (wireless or wired).

Fixing the IP address collision involves changing the IP address subnet. You can change the subnet of either the offending network interface on the Omega or the external network.

## What is an IP address collision?

An IP address collision can happen with your Omega if both your Omega’s AP and the WiFi network that you try to connect to share the same subnetwork (subnet). The Omega’s AP subnet is `192.168.3.0/24` and it’s possible that your WiFi has the same subnet. This results in the Omega not knowing what data to send where.

We’ll use an analogy to explain how this works. Say an IP address is the **street address** on a letter. You can think of the subnet as being the **city** of that address. Now, let's assume that your Omega's subnet is the same as the WiFi network's. 

If you try to send data to an IP address, it's like sending a letter to an address in **Paris, France** but then having it arrive at the same address in **_Paris, Texas, USA_**. Not what we wanted, but a good try, nonetheless.

> You can read more on subnets and network prefixes on [Wikipedia’s Subnetwork article](https://en.wikipedia.org/wiki/Subnetwork).

## Identifying your WiFi network’s IP address prefix

An IP address collision will happen if your WiFi network’s IPv4 address is `192.168.3.X` where X is any number from 0-255. To find your IPv4 Address you’ll need to first connect a computer to a WiFi network. Then, based on the OS you’ll have to get your wireless config settings.

> You can read this guide to [finding your router’s ip address](http://www.howtogeek.com/233952/how-to-find-your-routers-ip-address-on-any-computer-smartphone-or-tablet/) for an in depth explanation.

## Fixing the collision

There are two possible solutions for fixing the collision.

1. The first is to change the Omega’s AP network prefix. 
  - This method is very simple and will be covered below.
3. The second is to change your router’s network prefix.
  - This is relatively complex and will not be covered in this guide.

First, connect to the Omega’s command-line interface.

To change the Omega’s IP address, we can use UCI, a command-line tool that allows us to edit configuration files with simple commands. 

Use the following command to modify the IP address of your Omega:

```shell
 uci set network.wlan.ipaddr=<IP ADDRESS>
```

For example, we can change the Omega’s IP address to `192.168.9.1` by entering the following:

```shell
uci set network.wlan.ipaddr=192.168.9.1
```

Now, once we have set our IP address, we’ll want to save this change. The command to save a setting looks like this:

```shell
 uci commit <CONFIGURATION>
```

The configuration we’re changing is `network`, so we’ll enter the following to save our changes:

```shell
 uci commit network
```

Now, once you’ve saved your settings, you’ll need to restart the network and apply the changes with this command:

```shell
 /etc/init.d/network restart
```

And that’s it! Your Omega’s new IP address on its access point is now `192.168.9.1`, and there will no longer be a collision. You can now try connecting to your WiFi network again.

<GiscusDocComment />