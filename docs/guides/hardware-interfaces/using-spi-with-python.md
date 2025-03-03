---
title: Using the SPI bus with Python
---

import { GiscusDocComment } from '/src/components/GiscusComment';

This guide shows you how to quickly get started using the Python `spidev` module to communicate with SPI devices.

## Step 0: Prerequisites

:::tip

If you haven't already, see the [quickstart guide](/quickstart/intro) for more information on getting up and running with the Omega2. 

:::

This guide assumes:
1. The Omega2 device is connected to the internet (WiFi or ethernet) 
2. The Omega2 command line can be accessed

All commands listed in the guide are meant to be run on the Omega's command line.

:::info

To learn more about the SPI bus on the Omega2, see the [SPI article in the Hardware Interfaces chapter](/hardware-interfaces/spi.md).

:::

## Step 1: Install Python and the Spidev Module

Run the following commands:

```
opkg update
opkg install python3-light python3-spidev
```

<!-- TODO: add a step where the user chooses between harware SPI or the sw spi? -->

## Step 2: Physically Connect an SPI Device

The external SPI device needs to be connected to the Omega2 SPI bus master.

Connect the SPI lines of the external device according to this table:

| SPI Signal  | Omega2 Pin       |
|-------------|------------------|
| Clock / SCK | SPI_CLK / GPIO7  |
| MOSI        | SPI_MOSI / GPIO8 |
| MISO        | SPI_MISO / GPIO9 |
| CS          | SPI_CS1 / GPIO6  |


Make sure to provide appropriate power to the SPI device.

## Step 3: SPI Hello World - Write Bytes to the Device

To test the SPI lines, we will run a Python program that will **write (send) 256 bytes of incremental data** over the SPI bus 8 times in a row.

### Download the Python Program

To do this, we will first download the `writebytes.py` example Python program file from the [OnionIoT/python-spidev GitHub repo](https://github.com/OnionIoT/python-spidev/blob/master/examples/writebytes.py):

```
cd /root
wget https://raw.githubusercontent.com/OnionIoT/python-spidev/refs/heads/master/examples/writebytes.py
```

### Run the Program 

Then we will execute the program:
```
python writebytes.py
```

As soon as the program starts, the bytes will start sending on the SPI bus.

## Step 4: Half-Duplex SPI Transmission

Next up, we will run a Python program that performs an SPI half-duplex transmission - meaning it will write a number of bytes and will immediately read a specified number of bytes on the SPI bus. This is useful for reading the registers of an SPI device.

### Download the Python Program

First, we will download the `xfer3.py` example Python program file from the [OnionIoT/python-spidev GitHub repo](https://github.com/OnionIoT/python-spidev/blob/master/examples/xfer3.py):

```
cd /root
wget https://raw.githubusercontent.com/OnionIoT/python-spidev/refs/heads/master/examples/xfer3.py
```

### Inspect the Program

Take a look at the program to see what it does. Use the included `vi` text editor to open the file:

```
vi xfer3.py
```

We can see the program does the following:
- Open device 1 on SPI bus 0 - so CS1 on the hardware SPI bus
- Sets the SPI bus speed to 4MHz
- Initiates a half-duplex transmission that will:
    - Write 1 byte: `0x42`
    - Read 2 bytes
- Print the two bytes that were read

A program like this is useful if the connected SPI device has registers that can be read. In this case, it reads 2 bytes from the register at offset `0x42`

Close the file by typing `:q!` and pressing enter

### Run the Program 

Next, execute the program:

```
python xfer3.py
```

### Observe the Output 

The program will print the bytes read from the SPI device:

```
root@Omega-FB94://# python xfer3.py
Half-duplex transmission: writing 1 byte, reading 2 bytes
Read: 0x11, 0x9a
Done
```

## Step 5: Off to the races!

You've seen how to:
1. Install the Python spidev module
2. Use the Python spidev module to write bytes to the SPI bus
3. Use the Python spidev module to do a half-duplex write-then-read SPI transaction

This should cover all the basics and give you the tools to confidently use the spidev module to write your own programs that use the SPI bus.

<GiscusDocComment />