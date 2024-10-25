---
title: Finding the Omega's IP Address
---

Every machine on a network has a unique identifier, known as an IP address. An IPv4 address is 4 sets of numbers separated by periods. These numbers range from 0-255, and the format of an IP address is as follows: `192.168.0.100`.

Finding out the Omega's IP address on the local network is required before accessing it through the local network. This includes: 
- Accessing the command-line though SSH
- Accessing a web server hosted on the Omega
- Transferring files to and from the Omega using protocols like SCP, FTP, and rsync

## Procedure to Determine the IP Address

This procedure relies on the `ifconfig` utility to find the Omega's IP address. The `ifconfig` utility is a common Linux utility for monitoring network interfaces.  

First, determine which network interface to check, and then use `ifconfig` to find the IP address. 

### Determining the Relevant Network Interface

The Omega has several network interfaces. Which interface that should checked depends on the method of the Omega's connection to the network:

* `apcli0` if Omega is connected to an existing WiFi network as a client
* `eth0` if the Omega is connected to a network over ethernet
* `ra0` if checking the Omega's IP address on the Omega's own WiFi AP

### Finding the IP Address with `ifconfig`

To find the IP address of the Omega on a specific interface, run the following command:

```shell
ifconfig <interface-name>
```

**When connected to an existing WiFi network:**

```shell
ifconfig apcli0
```

**When connected via ethernet to a network:**

```shell
ifconfig eth0
```


The IP address will be in the output, among other information:

![omega2-ip-address-check](./assets/omega2-ip-address-check.png)

Note the highlighted IP address `inet addr:`. **This is the Omega's IP address on that network.**

If that line is blank, the Omega was not given an IP address. Double check the network configuration and try again.

