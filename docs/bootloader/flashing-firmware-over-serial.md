---
title: Flashing Firmware over Serial
---
import { GiscusDocComment } from '/src/components/GiscusComment';

Flashing firmware through the bootloader’s **YMODEM serial transfer** is handy when your device **lacks Ethernet** or you’re recovering a bricked Omega2 that can’t boot into Linux.

| Method   | Link to Guide | Typical Transfer Time* |
|----------|---------------|------------------------|
| Ethernet (TFTP) | [/bootloader/flash-firmware-ethernet](/bootloader/flash-firmware-ethernet) | ~10 s |
| **Serial (YMODEM)** | *you’re here* | **~10–15 min** |

\*Measured with a 7 MB firmware image. Time varies with image size and link quality.

---

## Step&nbsp;1: Gather Requirements

- **Target device:** Omega2/2+ with  
  - Serial console access (UART0)  
  - Reset button (GPIO 38)  
- **Host computer** with a USB-UART adapter  
- **USB cable** for power & serial

---

## Step&nbsp;2: Host Computer Setup

<Tabs>
  <TabItem value="mac" label="macOS" default>

1. **Install utilities**

   ```bash
   brew install lrzsz minicom
   ```

2. **Configure Minicom**

   ```bash
   minicom -s
   ```

   In *Serial port setup*  
   - **Bps/Par/Bits:** `115200 8N1`  
   - **Hardware Flow Control:** **No**  
   - **Software Flow Control:** **No**

  </TabItem>
  <TabItem value="linux" label="Linux (Ubuntu)">

1. **Install utilities**

   ```bash
   sudo apt update
   sudo apt install lrzsz minicom
   ```

2. **Configure Minicom**

   ```bash
   sudo minicom -s
   ```

   In *Serial port setup*  
   - **Bps/Par/Bits:** `115200 8N1`  
   - **Hardware Flow Control:** **No**  
   - **Software Flow Control:** **No**

  </TabItem>
  <TabItem value="windows" label="Windows">

*Coming soon*

  </TabItem>
</Tabs>

---

## Step&nbsp;3: Download the Firmware Image

import InstallingFirmwareSelectImage from '../firmware/_installing-firmware-select-image.mdx'

<InstallingFirmwareSelectImage/>

Save the chosen image in an easy-to-find folder and **note its exact filename**.

---

## Step&nbsp;4: Activate the Bootloader Command Line

Power-cycle the Omega2 while watching the serial console and press the reset button (GPIO 38) to interrupt autoboot.

import StopAutobootInstructions from './_stop-autoboot-instructions.mdx'

<StopAutobootInstructions/>

import StopAutobootOutcome from './_stop-autoboot-outcome.mdx'

<StopAutobootOutcome/>

---

## Step&nbsp;5: Prepare for Serial Transfer

In the U-Boot prompt, switch both sides to **115200 bps** and start the YMODEM receiver:

```bash
setenv baudrate 115200
loady $loadaddr $baudrate
```

U-Boot will display:

```
## Ready for binary (ymodem) download to 0x81800000 at 115200 bps...
C
```

---

## Step&nbsp;6: Transfer the Firmware Image (YMODEM)

1. In **Minicom**, press **Meta-Z**, then **S** to open the **Send File** dialog.  
2. Navigate with **space** (to enter directories) until you highlight the firmware image.  
3. Press **Space** to mark the file, then **Enter** to start the transfer.

During the upload you’ll see a progress bar similar to:

```
+----------------[ymodem upload - Press CTRL-C to quit]----------------+
|Sending: onion_omega2p-23.05.3-20250121.bin                           |
|Ymodem sectors/kbytes sent: 12425/1553k                               |
+----------------------------------------------------------------------+
```

:::note

If the transfer is interrupted, simply rerun `loady $loadaddr $baudrate` and restart the Minicom upload.

:::

When finished U-Boot reports:

```
## Total Size      = 0x006d0329 = 7144233 Bytes
## Start Addr      = 0x81800000
```

---

## Step&nbsp;7: Write the Firmware Image to Flash

```bash
sf probe
sf update $loadaddr firmware $filesize
```

Writing takes **30–45 s**. Your Omega2 now contains the new firmware.

---

## Step&nbsp;8: Boot into the Firmware

```bash
boot
```

Other options:

- `reset` at the U-Boot prompt  
- Power-cycle the device

---

## Step&nbsp;9: Confirm Booting

import BootLogSample from './_bootloader-boot-log-sample.mdx'

<BootLogSample/>

Look for the firmware version string to verify the update succeeded.

<GiscusDocComment />
