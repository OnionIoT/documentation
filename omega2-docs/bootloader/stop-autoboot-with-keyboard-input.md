---
title: Stop Autoboot with a Keyboard Key
---

import { GiscusDocComment } from '/src/components/GiscusComment';

By default, the Omega2’s bootloader (U-Boot 2025.04-…) launches Linux automatically a fraction of a second after power-on. This can be interrupted with the reset button (GPIO38) to start the bootloader command line. However, GPIO38 is not always accessible on custom designs.

Changing two U-Boot environment variables lets you **press a key on the serial console to stop the countdown and drop to the bootloader prompt**, giving you time to flash firmware, tweak settings, or recover a bricked device.

### Gather the requirements:

- **Omega2 module** running the *new* **U-Boot v2025.04** bootloader (or newer) with access to:
  - serial command line on **UART0** with USB-to-Serial chip
  - **reset button** (GPIO38)
  - Note: Access to all of the above is provided on the Omega2 Eval Boards
- **Host computer**
- **USB cable** to connect to the Omega



## Step 1: Activate the Bootloader Command Line

import StopAutobootInstructions from './_stop-autoboot-instructions.mdx'

<StopAutobootInstructions/>

import StopAutobootOutcome from './_stop-autoboot-outcome.mdx'

<StopAutobootOutcome/>

You should now see the bootloader prompt:

```
U-Boot 2025.04-...
...
Detected board variant OMEGA2+: mtdparts="spi0.0:192k(u-boot),64k(u-boot-env),64k(factory),32448k(fi"
Reset button pressed - entering shell ...
Net:   eth0: eth@10110000
=> 
```

## Step 2: Set a Boot Delay

Tell U-Boot how long to wait before starting Linux.

> The command below sets a **2-second** grace period.

```bash
env set bootdelay 2
```

Any value **greater than 0** works.  
A longer delay gives you more time to type but slows every boot.

## Step 3: Choose a Stop-Boot Key

Select the character (or short string) that will cancel autoboot during the delay.

```bash
env set bootstopkey a
```

With the example above, pressing **`a`** during the 2-second countdown halts the boot process.  
You can use any printable character (`a–z`, `0–9`, etc.) or a short word such as `debug`.

## Step 4: Save the Environment

:::warning
The `saveenv` command writes the environment to flash. Incorrect values **can make your device unbootable**. Double-check the commands before saving.
:::

```bash
saveenv
```

Settings persist across reboots once saved.

## Step 5: Reboot and Test

Reboot the Omega from the bootloader:

```bash
reset
```

As soon as the countdown banner appears, **tap `a`** a few times.  
Successful output looks like this:

```
...
Detected board variant OMEGA2+: mtdparts="spi0.0:192k(u-boot),64k(u-boot-env),64k(factory),32448k(fi"
Net:   eth0: eth@10110000
Autoboot in 2 seconds
=>
```

:::tip
Setting `bootdelay` to `1` gives the fastest usable workflow — short wait, but still easy to hit the key.
:::

## Additional Notes & Troubleshooting

* **Reset button still works** - holding it forces the bootloader prompt but only *after* the full `bootdelay` elapses.  
* **Disable the feature** by setting `bootdelay 0` and saving:  
  ```bash
  env set bootdelay 0
  saveenv
  ```  
* **Restore factory defaults** if things go wrong:  
  ```bash
  env default -a
  saveenv
  ```

## What’s Next?

* [Flashing Firmware over Ethernet](/omega2-docs/bootloader/flashing-firmware-over-ethernet)  
* [Updating the Bootloader](/omega2-docs/bootloader/upgrading-old-bootloader)  
* [Bootloader Reference Overview](/omega2-docs/bootloader/overview)

<GiscusDocComment />
