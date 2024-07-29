---
title: Reference Material
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Introduction

Onion has several articles to help you get started with your Omega2 development projects. A few key articles cover Omega2's supported programming languages and its hardware interfaces.

### Supported programming languages

The Omega2 supports several programming languages, so you can program in your language of choice. These include C/C++, Python, Node.js, Shell Scripts, Rust, GoLang, HTML, PHP, Ruby, and Perl.

For further information, please see the article on [Supported Programming Languages](/software/supported-languages).

### Hardware interfaces

The Omega2 offers several hardware interfaces including a USB 2.0 host, an Ethernet port, SDIO/eMMC interface, GPIOs for external circuits, hardware PWM channels, UARTs for serial communication, a built-in SPI controller, an I2C interface, a WiFi antenna, and a u.FL Connector.

For further information, please see the [Pinouts article](/hardware-interfaces/pinouts), which provides pinout diagrams and a list of supported hardware interfaces for the Omega2 variants. From here, you can access detailed information about each hardware interface.

## Docks

Onion offers several docks to simplify your Omega2 development projects.

### Expansion

Onion's Expansion Dock enables you to power the Omega2 and communicate with it via serial communication through the Micro-USB port. This makes it easy-to-use Omega2's GPIOs and other Onion expansions.

For further information, please see the [Expansion Dock article](https://docs.onion.io/omega2-docs/expansion-dock.html).

### Power

On-board battery management is available on the Power Dock, which allows you to recharge the battery and monitor battery levels. It also provides a header to connect with other Onion expansions.

For further information, please see the [Power Dock article](https://docs.onion.io/omega2-docs/power-dock.html).

### Power Dock 2

Besides recharging the battery and monitoring battery levels, the Power Dock 2 lets you monitor the battery's voltage. And GPIOs 18 and 19 are now available on the expansion header.

For further information, please see the [Power Dock 2 article](https://docs.onion.io/omega2-docs/power-dock-2.html).

### Mini

Like the Expansion Dock, but smaller, the Mini Dock enables you to power the Omega2 and communicate with it via serial communication through the Micro-USB port. The Mini Dock is ideal for Omega2-only or USB-based projects.

For further information, please see the [Mini Dock article](https://docs.onion.io/omega2-docs/mini-dock.html).

### Arduino Dock 2

The Arduino doc 2 is our version of an Arduino Uno R3 board. It has the same microcontroller, the Atmel Atmega328P, and the identical pin layout. This allows you to use any Arduino shields with the Arduino doc 2 and the Omega2.

For further information, please see the [Arduino Dock 2 article](https://docs.onion.io/omega2-docs/arduino-dock-2.html).

### Breadboard

Breadboard circuits can be built with the Omega2 and Onion's Breadboard Dock. The dock's pins are mapped one-to-one with the Omega2, and it can be plugged directly into a breadboard.

For further information, please see the [Breadboard Dock article](https://docs.onion.io/omega2-docs/breadboard-dock.html).

## Expansions

Onion offers several expansions to extend the capability of your Omega2 development projects.

### Relay

The Relay Expansion allows you to control two independent external circuits using the Omega2. These circuits are isolated from the Omega2 and can either be lower or higher in voltage. The Relay communicates with the Omega2 using the I2C protocol.

For further information, please see the [Relay Expansion article](https://docs.onion.io/omega2-docs/relay-expansion.html).

### OLED

Onion's OLED Expansion is a powerful monochromatic OLED display for your Omega2. It can display text, draw images and even animation. Like the Relay expansion, the OLED expansion communicates with the Omega2 using the I2C protocol.

For further information, please see the [OLED Expansion article](https://docs.onion.io/omega2-docs/oled-expansion.html).

### PWM

Pulse Width Modulated (PWM) signals can be generated using the PWM Expansion to control servo motors, DC motor speed, LED brightness, and more. The expansion uses the I2C protocol to communicate with the Omega2.

For further information, please see the [PWM Expansion article](https://docs.onion.io/omega2-docs/pwm-expansion.html).

### Ethernet

The Ethernet Expansion adds an Ethernet port to the Omega2. This adds reliable, wired network access to your Omega2, without affecting its wireless capabilities.

For further information, please see the [Ethernet Expansion article](https://docs.onion.io/omega2-docs/ethernet-expansion.html).

### NFC & RFID

Contactless NRC & RFID communication can be added to the Omega2 with the NFC & RFID Expansion. The expansion supports reading and writing with several NFC and RFID protocols. Like the Expansion Dock, the NFC & RFID Expansion communicates with the Omega2 via serial communication.

For further information, please see the [NFC & RFID Expansion article](https://docs.onion.io/omega2-docs/nfc-rfid-expansion.html).

### ADC

Onion's ADC Expansion allows you to read analog signals with your Omega2. With this expansion you can convert sound, temperature, humidity and others into a digital signal. Like the Relay expansion, the ADC expansion communicates with the Omega2 using the I2C protocol.

For further information, please see the [ADC Expansion article](https://docs.onion.io/omega2-docs/adc-expansion.html).

### GPS

The Omega2S can pinpoint its location using GPS and China's Beidou satellite positioning systems with the addition of Onion's USB based GPS Expansion. 

For further information, please see the [GPS Expansion article](https://docs.onion.io/omega2-docs/gps-expansion.html).

<GiscusDocComment />
