---
title: Hello World Demo
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Introduction

In this article, we'll show you how to build a Hello World demo: LED blinker application, to demonstrate how you can interact with an LED connected to the Omega2.

A user programmable LED can:

- Show the code is configured, installed, and running correctly.
- Help with debugging your code in real-time, where you can program it to blink different patterns based on what code is executing.

## LED Blinker application

The goal of the LED Blinker application is to provide a basic example of how to build your own application on Omega2. This will show and provide the basic building blocks needed to create your own unique applications.

For this example, a user programmable LED is available on the following GPIO pins:

- Expansion Dock: GPIO 15 controls the Blue LED

[//]: # (- Omega2 SBC: GPIO 15 controls the Blue user programmable LED)
[//]: # (- Omega2S SBC: GPIO 43 controls the Blue user programmable LED)

Before building the application, you'll need to install Python. Make sure your Omega is connected to the internet before running the update command.

**Step 1.** Install pre-reqs:

```Shell
opkg update
opkg install python3-light python3-gpio
```

**Step 2.** Create an empty file called `hello_world.py` on your device. A good place for it is in the `/root` directory.

**Step 3.** Copy the code below and paste it into your `hello_world.py` file.

```python
import time
import gpio
import sys
import os

# Define the GPIO pins on different Omega hardware
EXPANSION_DOCK = 15 # Blue LED in RGB LED on Expansion Dock
OMEGA2_EVAL_BOARD = 15 # User programmable LED on Omega2 Eval Board
OMEGA2S_EVAL_BOARD = 43 # User programmable LED on Omega2S Eval Board

# Define the GPIO pin the program should use
LED_PIN = EXPANSION_DOCK 

# Initialize the GPIO module
gpio.setup(LED_PIN, gpio.OUT)

def turn_on_led():
    """Turn on the LED."""
    gpio.output(LED_PIN, gpio.LOW)

def turn_off_led():
    """Turn off the LED."""
    gpio.output(LED_PIN, gpio.HIGH)

def main(on_time, off_time):
    print("Hello world! Welcome to the Omega2")
    print(f"The LED connected to GPIO{LED_PIN} will now flash with an on time of {on_time} milliseconds and an off time of {off_time} milliseconds.")
    print("Press ctrl+c to end the program")

    try:
        while True:
            turn_on_led()
            time.sleep(on_time / 1000.0)  # Convert milliseconds to seconds
            turn_off_led()
            time.sleep(off_time / 1000.0)  # Convert milliseconds to seconds

    except KeyboardInterrupt:
        print("\nGoodbye! Try running the program with command line arguments next time to adjust the LED on and off time.")
        print(f"\tUsage: python {os.path.basename(__file__)} [on_time_ms] [off_time_ms]")
        print(f"\tExample: python {os.path.basename(__file__)} 2000 3000")
        turn_off_led()

    finally:
        gpio.cleanup()

if __name__ == "__main__":
    # Default on and off times in milliseconds
    default_on_time = 1000
    default_off_time = 1000

    # Read command-line arguments if provided
    if len(sys.argv) > 2:
        on_time = int(sys.argv[1])
        off_time = int(sys.argv[2])
    else:
        on_time = default_on_time
        off_time = default_off_time

    main(on_time, off_time)
    
```

**Step 4.** To run your Hello World program, type the command `python hello_world.py`.

:::note

The Hello World program also works with LEDs connected directly to GPIOs, but you'll need to set the `LED_PIN` variable based on the hardware you're using.

:::

<GiscusDocComment />