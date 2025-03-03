---
title: Using the SPI bus with Python
---

import { GiscusDocComment } from '/src/components/GiscusComment';

This guide will help you quickly get started using the Python `spidev` module to communicate with SPI devices on the Omega2.

## Step 0: Prerequisites

:::tip

If you haven't already, see the [quickstart guide](/quickstart/intro) for more information on setting up your Omega2.

:::

This guide assumes:
1. The Omega2 is connected to the internet via WiFi or ethernet
2. The Omega2 command line can be accessed

All commands listed in the guide should be run directly on the Omega2.

:::info

For a deeper dive into the Omega2's SPI functionality, see the [SPI article in the Hardware Interfaces chapter](/hardware-interfaces/spi.md).

:::

## Step 1: Install Python and the Spidev Module

To use SPI in Python, first install the necessary packages:

```
opkg update
opkg install python3-light python3-spidev
```

<!-- TODO: add a step where the user chooses between harware SPI or the sw spi? -->

## Step 2: Physically Connect an SPI Device

Before we can send data, we need to connect an SPI device to the Omega2's SPI bus.

### Pin Connections

Connect the SPI pins of your external device to the Omega2 according to this table:

| SPI Signal  | Omega2 Pin       |
|-------------|------------------|
| Clock / SCK | SPI_CLK / GPIO7  |
| MOSI        | SPI_MOSI / GPIO8 |
| MISO        | SPI_MISO / GPIO9 |
| CS          | SPI_CS1 / GPIO6  |


Additionally, make sure the SPI device is supplied with power according to its specifications.

## Step 3: SPI Hello World - Write Bytes to the Device

To confirm that the SPI bus is working, we'll run a Python program that **writes 256 bytes of incremental data** over SPI in eight cycles.


### Download the Python Program

To do this, we will first download the `writebytes.py` example Python proscript from the [OnionIoT/python-spidev GitHub repo](https://github.com/OnionIoT/python-spidev/blob/master/examples/writebytes.py):

```
cd /root
wget https://raw.githubusercontent.com/OnionIoT/python-spidev/refs/heads/master/examples/writebytes.py
```

### Run the Program 

Now, let’s run the script to send data over SPI:

```
python writebytes.py
```

This will send 256 bytes of incremental data (`0x00`, `0x01`, `0x02`, ...) over SPI, repeating 8 times. If you have a logic analyzer or oscilloscope connected, you should see activity.

<!-- TODO: add screenhot output of logic analyzer? -->

## Step 4: Half-Duplex SPI Transmission

Next, let's run a Python script that performs a half-duplex SPI transaction—meaning it writes a byte and immediately reads a specified number of bytes in return. This is useful for reading registers on an SPI device.

Next, let's run a Python program that performs a half-duplex SPI transaction - meaning it writes a number of bytes and immediately reads a specified number of bytes on the SPI bus. This is useful for reading registers on an SPI device.

### Download the Python Program

Download the `xfer3.py` example script from the [OnionIoT/python-spidev GitHub repo](https://github.com/OnionIoT/python-spidev/blob/master/examples/xfer3.py):

```
cd /root
wget https://raw.githubusercontent.com/OnionIoT/python-spidev/refs/heads/master/examples/xfer3.py
```

### Inspect the Program

Before running it, let's take a look at the script using the built-in `vi` text editor:

```
vi xfer3.py
```

We can see the program does the following:
- Opens SPI device 1 on bus 0, meaning it uses the CS1 chip select line on the SPI hardware bus
- Sets the SPI bus speed to 4MHz
- Performs a half-duplex transaction:
    - Writes 1 byte: `0x42`
    - Reads 2 bytes
- Prints the two bytes that were read

This kind of transaction is useful when interacting with SPI devices that store data in registers. In this example, the script reads two bytes from the register at address `0x42`.

To exit the vi editor without saving changes, type `:q!` and press Enter.

### Run the Program 

How, execute the script:

```
python xfer3.py
```

### Observe the Output 
The program will display the received bytes on the terminal:

```
root@Omega-FB94://# python xfer3.py
Half-duplex transmission: writing 1 byte, reading 2 bytes
Read: 0x11, 0x9a
Done
```

<!-- TODO: confirm above output -->

This confirms that the SPI device is responding to commands and returning data.



## Step 5: Off to the races!

You've seen how to:
1. Install the Python `spidev` module
2. Write data to the SPI bus.
3. Perform a half-duplex SPI transaction to write then read data from an SPI device.

These examples provide a strong foundation for working with SPI devices on the Omega2. You're now ready to modify these scripts or write your own SPI-based programs!

See the [README file in the OnionIoT/python-spidev GitHub repo](https://github.com/OnionIoT/python-spidev?tab=readme-ov-file#python-spidev) for more information on the methods available in the spidev module.

## Troubleshooting

If you're having issues, here are some things to check:

- Python module not found? 
    - Make sure `python3-spidev` is installed with `opkg list-installed | grep spidev`
- SPI device not responding?
    - Double-check wiring with the [pinout table](#pin-connections)
    - Verify that the SPI device is powered correctly.
    - Ensure the correct chip select (CS) pin is being used.
- Unexpected data from the SPI device?
    - Try adjusting the SPI clock speed in the script.
    - Check if the SPI device requires specific initialization commands.


<GiscusDocComment />