---
title: Running a Command on Boot
---

import { GiscusDocComment } from '/src/components/GiscusComment';

This article will demonstrate how to make your Omega execute commands as soon as it finishes booting. This feature has multiple applications, like displaying a welcome message on the OLED Expansion upon Omega’s boot or connecting to a server of your choice.

## Concepts

The `/etc/rc.local` file is a script that will execute automatically by the system once the boot sequence is complete. **When your Omega boots, it will read commands from the** `/etc/rc.local` **file and execute them.**

Individual commands or scripts can be added to the `/etc/rc.local` file.

### Notes on commands

The `/etc/rc.local` file must complete execution for the Omega to complete the boot sequence. Any scripts added to the file must end in `exit 0`.

The `/etc/rc.local` executes toward the end of the boot sequence. Most other device functionality should be available, but this isn't deterministic, and customers shouldn't assume networking will be available.

If a command is expected to take more than a few seconds to complete, and you don’t want to hold up completion of the system boot, you can fork the process into the background.

If a process needs to run in the background continuously, you should consider creating a service. For more information on creating a service, see the blog post Running a program as a service at:[https://onion.io/2bt-custom-initd-service/](https://onion.io/2bt-custom-initd-service/).

:::note

For more information on the boot process, see the OpenWRT documentation at:[https://openwrt.org/docs/techref/process.boot?l#init](https://openwrt.org/docs/techref/process.boot?l#init).

:::

## Implementation

You can write a shell script to perform actions you want to happen on every boot and then add the command to execute the script to your `/etc/rc.local` file.

### Add a command to rc.local

To see the contents of your `/etc/rc.local` file, type `vi/etc/rc.local`.

Open the file and add your command just above the `exit 0` line. If you want to run a shell script, your command would be something like `sh /root/<<name of shell script>>`.

Save and exit the `etc/rc.local` file and reboot your Omega. The command you added will run immediately after the Omega boots.

### A practical use case

In this example, we'll use the `gpiomux` command to change a group of hardware pins to a specific mode.

```Shell
omega2-ctrl gpiomux set <HARDWARE PIN GROUP> <MODE>
```

Open your `/etc/rc.local` file and edit the file to look like this:

```Shell
# Put your custom commands here that should be executed once
# the system init finished. By default, this file does nothing.

omega2-ctrl gpiomux set uart1 gpio

exit 0
```

Save and exit your file and reboot your Omega.

When the Omega reboots, use the `gpiomux` command to confirm your changes:

```Shell
root@Omega-2757:/# omega2-ctrl gpiomux get
Group i2c - [i2c] gpio
Group uart0 - [uart] gpio
Group uart1 - uart [gpio]
Group uart2 - [uart] gpio pwm
Group pwm0 - [pwm] gpio
Group pwm1 - [pwm] gpio
Group refclk - refclk [gpio]
Group spi_s - spi_s [gpio]
Group spi_cs1 - [spi_cs1] gpio refclk
Group i2s - i2s [gpio] pcm
Group ephy - [ephy] gpio
Group wled - wled [gpio]
```

We see the `Group uart1` pins are set to `gpio`, which shows the changes were applied.

```Shell
Group uart1 - uart [gpio]
```

:::note

For more information on Pin Multiplexing, see the article [https://documentation.onioniot.com/hardware-interfaces/pin-multiplexing](https://documentation.onioniot.com/hardware-interfaces/pin-multiplexing).

:::

## Saving the boot time to a file

When `/etc/rc.local` runs on boot, you won't be able to see any output from your file.

You can pipe the output of your command to a specific destination with a simple addition to your `/etc/rc.local` file.

The syntax for piping your command to a file is:

 ```Shell
<COMMAND> >> <OUTPUT FILE> 2>&1
```

> The `>>` appends the output of your command to the output file. You can use `>` to overwrite the output instead. The `2>&1` indicates you want to include additional information in the output of your command. By default, only standard output is piped.

You can use the date command to save the boot time to a file in the tmp directory. Add the following command to your `etc/rc.local` file: `date >> /tmp/boot-date.txt 2>&1`.

## Troubleshooting

If your commands don't seem to work on boot, try copying them directly from your `/etc/rc.local` file and running them manually.

### Infinite loop code

If your command runs continuously and never reaches the `exit 0` line in the `/etc/rc.local` file, then your Omega will not successfully finish its boot sequence. To avoid this scenario, make sure you fork the process by adding an ampersand to the end of the command:

```Shell
<YOUR COMMAND TO RUN> &
```

<GiscusDocComment />
