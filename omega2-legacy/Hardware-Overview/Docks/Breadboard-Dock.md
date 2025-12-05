---
title: "Breadboard Dock"
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Breadboard Dock {#breadboard-dock}

<!-- // The Breadboard Dock is the most no-frills dock, it provides power to the Omega and allows it to be plugged in to a breadboard. The pins on the breadboard are mapped 1-to-1 as on the Omega. -->

The Breadboard Dock is the perfect solution for building breadboard circuits with the Omega. This Dock can be plugged into a breadboard, and the pins of the dock are mapped 1-to-1 as on the Omega.


### The Hardware

<!-- // overview of the dock -->

The Breadboard Dock provides power to the Omega via a Micro-USB port that takes in 5V. This voltage is stepped down to the 3.3V required to power the Omega.

All of the Omega's pins are broken out via a breadboard header. You can use this Dock with your own circuits, custom embedded applications, or just for hacking!

![breadboard-dock-illustration](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/breadboard-dock-illustration.png)

### Connecting an Omega

<!-- [//]: # (picture guide on how to properly plug in an Omega) -->

Connect your Omega to the Breadboard Dock by lining up the two rows of header pins so that the sticker with the Omega's MAC address is on the **left** side of the Dock. Basically, make sure that the lines of the Omega and Breadboard Dock are aligned, RESET button is visible, and all of the pins are seated.

![connect-omega](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/breadboard-dock-omega-connected.jpg)


### The Breadboard Header

<!-- // explanation of the breadboard header, have photos of plugging it into a breadboard -->

The breadboard header is the part that connects the Dock to your breadboard.

Breadboards have a slot in the middle that divides them in left and right halves. Position the Dock's pins along the length of the slot and line up the pins so that they land on each side of the breadboard.

**IMPORTANT: Make sure the pins are separated by the slot before connecting to power, or they will be short-circuited! Otherwise this WILL damage your Omega and Breadboard Dock!**

Fully insert the Dock so that all of the breadboard header's pins fit into the breadboard as shown below.

![connect-to-breadboard-1](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/breadboard-dock-mounted-1.jpg)

![connect-to-breadboard-2](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/breadboard-dock-mounted-2.jpg)



<!-- TODO: IMAGE ##### Detailed Pinout diagram -->

<!-- [//]: # (A detailed pinout diagram of the Breadboard Header, showing which pins are multiplexed - see Lazar for an example) -->

<!-- Micro USB Port -->

### The MicroUSB Port

The Micro-USB Port is used to supply power to the Dock, which in turn supplies power to the Omega.

The Micro-USB Port takes in 5V, and the Dock comes equipped with a voltage regulator to step the voltage down to 3.3V required for the Omega.


<!-- No-USB-to-Serial -->

#### No USB-to-Serial

There is no USB-to-Serial Chip on the Dock. This means that you will **not** be able to connect to the Omega serially over the Micro-USB port.

You can still connect to your Omega's terminal with SSH, you can learn how to do that in this [guide to connecting to the Omega](/omega2-legacy/Get-Started/Using-the-Command-Line/Connecting-to-the-Omega-Terminal#connecting-to-the-omega-terminal-ssh).


<!-- Reset Button -->

### Reset button

The Reset Button on the Dock is connected directly to the Omega's Reset GPIO. Pressing this button do one of two things: reboot, or factory restore.

#### Reboot

Momentarily pressing the reset button and letting go will initiate a reboot of the Omega OS. 

#### Factory Restore

Pressing and **holding** the reset button for **10 seconds then releasing** will trigger a factory restore.

Warning: This will reset your Omega to the default filesystem of the last firmware update, **this will delete ALL of your data!**

See the [Factory Reset documentation article](/omega2-legacy/Doing-Stuff/Using-the-Omega/Factory-Reset#factory-reset) for more details.


<!-- TODO: IMAGE breadboard dock drawing, recheck link and uncomment section when finished
### Mechanical Drawings

We've made available a detailed [diagram](https://raw.githubusercontent.com/OnionIoT/technical-drawings/master/Mechanical/OM-D-BRD.PDF) of the dimensions and geometry of the Breadboard Dock.
-->

<GiscusDocComment />
