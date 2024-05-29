---
title: Special Pins
---

import { GiscusDocComment } from '/src/components/GiscusComment';

Omega2 devices have special pins that require consideration at design time:

- System Boot Pins affect the boot sequence
- SPI pins used by onboard flash
- GPIOs that control the Omega LED and Reset pins
- Other pins of note

## System Boot Pins

There are seven pins that affect the Omega’s Boot Sequence and require special attention. The pins fall into two categories:

1. Pins that must be **floating at boot time**. They cannot be pulled up or pulled down, or else the Omega will not boot.

2. Pins that must be **floating or pulled down at boot time**. They cannot be pulled up, or else the Omega will not boot.

Once the Omega device has been booted, these pins can be used normally.

|    GPIO      |   Description                 |            Boot Time            |
|--------------|-------------------------------|---------------------------------|
|    GPIO1     |  GPIO / I2S SDO               | Must be floating or pulled down |
|    GPIO6     |  SPI CS1/ GPIO                | Must be floating                |
|    GPIO7     |  SPI CLK                      | Must be floating                |
|    GPIO8     |  SPI MOSI                     | Must be floating                |
|    GPIO12    |  UART TX0                     | Must be floating or pulled down |
|    GPIO45    |  UART TX1 / GPIO              | Must be floating                |
|    GPIO36    | GPIO / PERST_N (Omega2S Only) | Must be floating                |

Once the Omega has been booted, these pins can be used normally.

## SPI Pins

The Omega’s processor communicates with the onboard SPI flash storage using `Chip Select 0` on the Omega’s SPI bus. Since there are two SPI chip select signals it’s possible to connect an additional SPI device to the Omega using `Chip Select 1`. As such, the SPI communication pins - CLK, MOSI, and MISO - are exposed on the Omega2 and Omega2S variants as GPIOs 7, 8, and 9.

Since the Omega’s storage uses SPI, the SPI communication pins - GPIOs 7, 8, and 9 - must be used for the SPI protocol and cannot be used as regular GPIOs. If you wish to use these GPIOs, they are reserved only for SPI devices. These SPI devices will use Chip Select 1, on GPIO6, as their chip select signal on the Omega’s SPI bus.

|   Name     |   I/O     | Description                                                                      |
|------------|-----------|----------------------------------------------------------------------------------|
|  SPI_CS1   |   I/O     | SPI Chip Select 1                                                                |  
|  SPI_CLK   |   O       | SPI Clock (Cannot be used as a regular GPIO)                                     |
|  SPI_MISO  |   I       | SPI Master Input/Slave Output(Cannot be used as a regular GPIO)                  |
|  SPI_MOSI  |   O       | SPI Master Output/Slave Input (Cannot be used as a regular GPIO)                 |
|  SPI_CS0   |   O       | SPI Chip Select 0 (Cannot be used as a regular GPIO, *Only exposed on Omega2S*)  |

**IMPORTANT NOTES:**

- **GPIOs 7, 8, and 9 cannot be used as regular GPIOs**.  They must be used for the SPI bus only.
  - Connecting non-SPI circuitry to these pins may prevent your Omega from booting or could potentially damage the device.
- The SPI CS1 pin, GPIO 6, may be used to control an additional external SPI device.
- The SPI CS1 pin, GPIO 6, may still be used as a regular GPIO when configured as a GPIO using `omega2-ctrl`.

:::tip

For detailed information on GPIOs and Pins, refer to the [**Pin Multiplexing**](./pin-multiplexing.md) article.

:::

## Reset Pins

The Omega uses dedicated GPIOs to accept an incoming Reset signal:

| Name             | I/O   | Function           |
|------------------|-------|------------ -------|
|  GPIO38 / SW_RST |  I/O  | FW_RST Active-High | 
|  HW_RST_N        |  I    | HW_RST Active-Low  |

The **GPIO38** pin acts as the soft reset on the Omega2. This is GPIO38 which is
configured in the Onion Omega2 firmware to be the programmable user button input. By
default, the input is configured to be active-high and will trigger a reboot of the Operating
System.

The **HW_RST_N** pin acts as the hard reset on the Omega2S. This input is active-low, and,
when asserted low, will perform a hard reset (ie a power cycle) of the CPU.

## LED Pins

The Omega uses a dedicated GPIO to control the status LED:

|  GPIO   | Function         |   Omega2/Omega2+              | Omega2S Pin Number  |
|-------- |------------------|-------------------------------|---------------------|
|  GPIO44 | Omega Status LED | No, connected to onboard LED  | 19                  | 

:::note

Difference between Omega2/2+ vs Omega2S/2S+

- On the Omega2/Omega2+, the pin is not exposed but directly connected to an onboard LED.
- On the Omega2S/2S+, the pin is exposed.

:::

## Pin Behaviour during Boot

Most of the Omega's pins will remain at the default digital low state during the boot process. However, there are a few pins that will behave differently:

|  GPIO   |  Behavior                                                                                                | 
|---------|----------------------------------------------------------------------------------------------------------|
|  GPIO11 |     Will settle at Digital High - Previously used to provide power for the reset button on Omega2 Docks  |

The behavior of these pins during boot is governed by the Omega's bootloader.

:::info

The Omega2 Bootloader is open source and can be found on repo [**OnionIoT/omega2-bootloader**](https://github.com/OnionIoT/omega2-bootloader).

:::

<GiscusDocComment /> 