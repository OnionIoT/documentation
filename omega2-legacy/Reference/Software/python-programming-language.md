---
title: Python Programming Language
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Python on the Omega

Python is ideal for scripting and quick hardware experiments on the Omega2.

### Install the Runtime

Run through the [Installing and Using Python guide](/omega2-legacy/Doing-Stuff/Installing-Software/Installing-and-Using-Python) to add both Python 2.7 and Python 3 to your device, manage packages with `pip`, and verify the interpreter.

### Control Hardware

- Use the [Onion GPIO Python Module](/omega2-legacy/Reference/Libraries/GPIO-Python-Module) for digital I/O.  
- Communicate with I2C peripherals via the [I2C Python Module](/omega2-legacy/Reference/Libraries/I2C-Python-Module).  
- Drive SPI devices with the [SPI Python Module](/omega2-legacy/Reference/Libraries/SPI-Python-Module).  
- Manage PWM and relay expansions through their dedicated Python libraries linked in the Software Reference.

### Automate Workflows

Combine Python scripts with the [Automation guides](/omega2-legacy/Doing-Stuff/Automation/Running-a-command-on-boot) to launch them on boot or schedule them with cron.

<GiscusDocComment />
