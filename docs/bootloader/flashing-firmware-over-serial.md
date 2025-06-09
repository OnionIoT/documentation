---
title: Flashing Firmware over Serial
---
import { GiscusDocComment } from '/src/components/GiscusComment';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Flashing firmware through the bootloader’s **YMODEM serial transfer** is handy when your device **lacks Ethernet** or you’re recovering a bricked Omega2 that can’t boot into Linux.

| Method | Link to Guide | Typical Transfer Time* |
|--------|---------------|------------------------|
| Ethernet (TFTP) | [Flash Firmware over Ethernet](/bootloader/flash-firmware-over-ethernet) | ~10 s |
| **Serial (YMODEM)** | *you’re here* | **~10–15 min** |

\*Measured with a 7 MB firmware image. Time varies with image size and link quality.

## Step 1: Gather Requirements

- **Target device:** Omega2/2+ with  
  - Serial console access (UART0)  
  - Reset button (GPIO 38)  
- **Host computer** with a USB-UART adapter  
- **USB cable** for power & serial

## Step 2: Host Computer Setup

First, ensure your computer has the necessary USB-serial drivers:

import ComputerSetupSerialDrivers from './_computer-setup-serial-drivers.mdx'

<ComputerSetupSerialDrivers/>

<Tabs>
  <TabItem value="mac" label="macOS" default>

Before installing the flashing utilities, install the **Homebrew** package manager if it isn’t already present. Follow the instructions on the [Homebrew website](https://brew.sh) for details.

With Homebrew ready, install `lrzsz` (YMODEM tools) and `minicom`:

```bash
brew install lrzsz minicom
```

Next, open Minicom’s configuration menu:

```bash
minicom -s
```

In the *Serial port setup* menu, set:  
- **Bps/Par/Bits** to `115200 8N1`  
- **Hardware Flow Control** to `No`
- **Software Flow Control** to `No`


:::tip
See the [Getting Started with Minicom Guide](https://wiki.emacinc.com/wiki/Getting_Started_With_Minicom) for more information on using Minicom.
:::

  </TabItem>
  <TabItem value="linux" label="Linux (Ubuntu)">

Update your package lists and install the required utilities:

```bash
sudo apt update
sudo apt install lrzsz minicom
```

Configure Minicom:

```bash
sudo minicom -s
```

In the *Serial port setup* menu, set:  
- **Bps/Par/Bits** to `115200 8N1`  
- **Hardware Flow Control** to `No`
- **Software Flow Control** to `No`

:::tip
See the [Getting Started with Minicom Guide](https://wiki.emacinc.com/wiki/Getting_Started_With_Minicom) for more information on using Minicom.
:::

  </TabItem>
  <TabItem value="windows" label="Windows">

Guidance for Windows is **coming soon**. Meanwhile, you can use a terminal application such as **Tera Term** or **PuTTY** that supports YMODEM transfers, together with the appropriate USB-serial drivers.

  </TabItem>
</Tabs>

## Step 3: Download the Firmware Image

import InstallingFirmwareSelectImage from '../firmware/_installing-firmware-select-image.mdx'

<InstallingFirmwareSelectImage/>

Save the chosen image in an easy-to-find folder and **note its exact filename**.

## Step 4: Activate the Bootloader Command Line

Power-cycle the Omega2 while watching the serial console and press the reset button (GPIO 38) to interrupt autoboot.

<Tabs>
  <TabItem value="mac" label="Minicom (macOS & Linux)" default>

Follow the instructions in the [Serial Command Line quickstart](/quickstart/serial-command-line#step-2-connect-to-the-omegas-command-line) to find the serial device name.

Use Minicom to connect to the Omega2 command line through serial:

```
minicom -D <SERIAL-DEVICE-NAME> 115200
```

  </TabItem>
</Tabs>

import StopAutobootInstructions from './_stop-autoboot-instructions.mdx'

<StopAutobootInstructions/>

import StopAutobootOutcome from './_stop-autoboot-outcome.mdx'

<StopAutobootOutcome/>

## Step 5: Prepare for Serial Transfer

At the U-Boot prompt set the baud rate and launch the YMODEM receiver:

```bash
setenv baudrate 115200
loady $loadaddr $baudrate
```

U-Boot will display:

```
## Ready for binary (ymodem) download to 0x81800000 at 115200 bps...
```

## Step 6: Transfer the Firmware Image (YMODEM)

<Tabs>
  <TabItem value="mac" label="Minicom (macOS & Linux)" default>

Start transfer of the file:

1. In **Minicom**, press **Meta-Z**, then **S** to open the **Send File** dialog.  
2. Navigate with **Space** (to enter directories) until you highlight the firmware image.  
3. Press **Space** to mark the file, then **Enter** to start the transfer.

During the upload you’ll see a progress bar similar to:

```
+----------------[ymodem upload - Press CTRL-C to quit]----------------+
|Sending: onion_omega2p-23.05.3-20250121.bin                           |
|Ymodem sectors/kbytes sent: 12425/1553k                               |
+----------------------------------------------------------------------+
```

:::note
If the transfer is interrupted, rerun `loady $loadaddr $baudrate` and restart the Minicom upload.
:::

When finished U-Boot reports:

```
## Total Size      = 0x006d0329 = 7144233 Bytes
## Start Addr      = 0x81800000
```

  </TabItem>
</Tabs>

## Step 7: Write the Firmware Image to Flash

```bash
sf probe
sf update $loadaddr firmware $filesize
```

Writing takes **30–45 s**.

## Step 8: Boot into the Firmware

```bash
boot
```

Alternative options:

- Run `reset` at the U-Boot prompt  
- Power-cycle the device

## Step 9: Confirm Booting

import BootLogSample from './_bootloader-boot-log-sample.mdx'

<BootLogSample/>

<GiscusDocComment />
