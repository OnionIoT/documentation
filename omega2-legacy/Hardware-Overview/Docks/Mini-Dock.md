---
title: "Mini Dock"
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Mini Dock {#mini-dock}

<!-- [//]: # (Brief overview on the expansion dock and what it's used for (usb connection, power omega). Highlight it's size and how it's useful) -->
<!-- [//]: # (for Omega-only projects or USB-based projects.) -->

The Mini Dock functions very similarly to the Expansion Dock. It supplies your Omega with power and allows you to communicate serially via a Micro-USB port. It also has a USB type A connector for you to use. All of this with a fraction of the size of an Expansion Dock.

![mini dock alone](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/mini-dock-alone.JPG)

The Mini Dock is same size as the Omega. It does not have the Expansion Header of some of the other Docks, but this makes it perfect for Omega-only or USB-based projects.

### The Hardware

<!-- [//]: # (Picture of mini dock with important bits highlighted like usb port, how to plug in the Omega, power switch (which direction is ON?).) -->
<!-- [//]: # (Maybe in depth discussion of various pieces, like USB to serial chip. People like that.) -->
<!-- [//]: # (Refer to current Power Dock Expansion doc for more info) -->

The Mini Dock is tiny. It is approximately 4.3cm (1.7in) long, and 2.7cm (1.07in) wide.

The Mini Dock is powered by the Micro-USB port that supplies 5V to the Dock. This voltage is stepped down to the required 3.3V required to power the Omega, and also provides 5V to the USB Host port.

![illustration](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/mini-dock-illustration.png)

The Mini Dock allows for easy communication via the USB-to-Serial chip located in the center of the board.

The reset button, located next to the USB Connector, can be used to quickly reboot your Omega, or you can hold it down for a factory reset if your Omega is ever in a bad state.

### Connecting an Omega

<!-- [//]: # (picture guide on how to properly plug in an Omega) -->

To connect an Omega to the Mini Dock, line up the Omega's edges with that of the Mini Dock's as demonstrated below:

![mini dock plugged in](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/mini-dock-top-plugged-in.JPG)

Make sure your Omega is pushed all the way down as demonstrated in the picture below:


![mini dock side view](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Hardware-Overview/img/mini-dock-side-view.JPG)

You may need to line up the pins with the holes before pressing the Omega into the Dock.


<!-- #### The Mini Dock at a Glance -->

<!-- [//]: # (illustration with all of the key parts labelled - see https://wiki.onion.io/Tutorials/Expansions/Using-the-Power-Dock#the-hardware_the-power-dock-at-a-glance for an example) -->


<!-- Micro USB Port -->

### The MicroUSB Port

The Micro-USB Port is used to supply power to the Dock, which in turn supplies power to the Omega.

The Micro-USB Port takes in 5V, and the Dock comes equipped with a voltage regulator to step the voltage down to 3.3V required for the Omega.


<!-- USB-to-Serial -->

#### USB-to-Serial

The USB-to-Serial chip allows for a serial connection between the Omega and a computer using the USB-C port. You can connect a USB-C to USB cord from the Omega to your computer, open a terminal, and connect to the Omega via a COM port as opposed to SSH.

>For more information on the Omega's Serial connection read our [guide to connecting to the Omega](#connecting-to-the-omega-terminal-serial)


<!-- USB-to-Serial -->

### Power Switch

<!-- [//]: # (inform them of what the power switch will do: cut power to the Omega but keep the USB to serial chip running) -->
<!-- [//]: # (TODO: have illustrations showing the ON and OFF positions) -->

The Power switch will cut power to the Omega, but not the serial chip. This means your computer will still detect a USB serial device, but will not be able to communicate with the Omega.


<!-- Reset Button -->

### Reset button

The Reset Button on the Dock is connected directly to the Omega's Reset GPIO. Pressing this button do one of two things: reboot, or factory restore.

#### Reboot

Momentarily pressing the reset button and letting go will initiate a reboot of the Omega OS. 

#### Factory Restore

Pressing and **holding** the reset button for **10 seconds then releasing** will trigger a factory restore.

Warning: This will reset your Omega to the default filesystem of the last firmware update, **this will delete ALL of your data!**

See the [Factory Reset documentation article](#factory-reset) for more details.


<!-- USB Port -->

### Omega USB Port

The Omega's USB Port can be used to connect to all sorts of devices, namely a USB storage device to extend the storage space of your Omega. The USB port supports USB 2.0, and is a type A connector.


### Mechanical Drawings

We've made available a detailed [diagram](https://raw.githubusercontent.com/OnionIoT/technical-drawings/master/Mechanical/OM-D-MINI.PDF) of the dimensions and geometry of the Mini Dock.

<!-- [//]: # (LATER: Add using the dock:) -->
<!-- [//]: # ( - usb storage ) -->
<!-- [//]: # ( - controlling a usb serial device) -->

<GiscusDocComment />
