---
title: "First Time Setup"
---

import { GiscusDocComment } from '/src/components/GiscusComment';

##  First Time Setup {#first-time-setup}

Follow along with this guide to set up your Omega2 for the first time. We'll first learn how to properly connect your Omega to a Dock and power it up. Then we'll connect to it to use the Setup Wizard to have it connect to your WiFi network and then do some updates.

> If you experience issues at any point in the process, try checking our [Troublshooting guide](#first-time-troubleshooting).


<!-- Second sentence above is awkward -->

### The Video

Follow along with our getting started video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/3DMkQjQtoEE" frameborder="0" allowfullscreen></iframe>

It covers all of the steps that are listed below!



<!-- Prepare the Hardware -->

<!-- Prepare the Hardware -->

### Unboxing and Getting the Hardware Ready

<!-- LED at Boot text -->

> This guide assumes you have an Omega and a Dock. If you didn't purchase a Dock, follow our guide on [powering the Omega with no Dock](#hardware-prep-no-dock).


**Unpack**

Unpack the Omega and Dock from their boxes

![Omega + Dock](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Get-Started/img/unbox-1-omega-with-dock.jpg "Omega + Dock")

**Connect**

Plug the Omega into the socket on the Dock

![Omega plugged into Dock](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Get-Started/img/unbox-2-omega-on-dock.jpg "Omega Plugged into Dock")

Make sure your Omega's pins are fully plugged into the socket

![Omega plugged into Dock Side View](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Get-Started/img/unbox-3-omega-on-dock-side.jpg)

**Provide Power**

The Omega itself is powered by a 3.3V source. But all Omega Docks have voltage regulators so you can use any microUSB to power the Dock and Omega.

<!-- TODO: ADD PHOTO: Plug a microUSB into your Omega -->

You can power it with your computer

![Omega plugged into USB](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Get-Started/img/unbox-4-omega-provide-power.jpg "Omega plugged into USB")

Or you can power it with any wall adapter

<!-- TODO: include image of wall adapter -->

**Power On!**

Turn on the Omega using the switch.

![Turn on the Omega](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Get-Started/img/unbox-5-omega-switched-on.jpg "Turn on the Omega")

**Wait till it boots**

<!-- LED at Boot text -->

The amber LED on your Omega should turn on and then start blinking after about 10 seconds. In about a minute, the LED will stop blinking and remain solid, this means that the Omega has completed its boot sequence!

*It's possible that your Omega will behave a little differently: if the amber LED on your Omega turns on and remains on, wait for about a minute, and your Omega will have booted.*


![Omega is on](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Get-Started/img/unbox-6-omega-led-detail.jpg "Omega is on")


<!-- GUI SETUP -->

### Using the Setup Wizard {#first-time-setup-wizard}

<!-- Computer Config -->

**Some Computer Configuration**

Your computer may need some additional programs to access the Omega through a browser:

* If you are using Windows, install Apple's [Bonjour Service](https://support.apple.com/kb/DL999)
* If you are using OS X, you're all set to go
* If you are using Linux, the Zeroconf services should already be installed and you will be good to go


<!-- The Omega's Name -->

**The Omega's Name**

Let's find your Omega's name before going any further.

There's a sticker on the Omega's shielding:
![Omega2+](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Get-Started/img/omega-name-0-just-omega.jpg)

The text printed here is the Omega's unique MAC address, we're interested in the last four digits that are in bold. **Your Omega's name is `Omega-ABCD` where `ABCD` are the last four digits from the sticker.**

So the Omega from the picture above is named `Omega-5931`


<!-- Connect to Omega's Wifi AP -->

**Connect to the Omega's WiFi Network**

The Omega hosts it's own WiFi network access point. Lets connect your computer to it. The WiFi network is named the same as your Omega and the default password is `12345678`

![Connect to AP](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Get-Started/img/setup-1-connect-to-wifi.png "Connect to AP")


**The Setup Wizard**

Open your favourite browser and navigate to `http://omega-ABCD.local/` where `ABCD` are the same characters from the network name above. If the page doesn't load, you can also browse to `http://192.168.3.1`

You have now arrived at the Setup Wizard:

![Browse to Setup Wizard](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Get-Started/img/setup-2-wizard-start.png "Browse to Setup Wizard")

Login with the Omega's default credentials:
```
username: root
password: onioneer
```

![Setup Wizard Login](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Get-Started/img/setup-3-wizard-login.png "Browse to Setup Wizard")

After you've logged in you'll be asked to connect to a Wireless Network. This is **MANDATORY** in order to complete the Setup Wizard.

![Setup Wizard wifi configure](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Get-Started/img/setup-4-wizard-wifi-configure.png)

Enter your Wireless Network information and click Configure. Your Omega will attempt to connect to the network. This can take up to a minute to complete.

> The Omega's AP will go down and not be accessible during this process, sit tight, it'll come back up when the configuration is done!

Once connected, you will be moved to the next step.

![Setup Wizard configuring](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Get-Started/img/setup-5-wizard-wifi-configuring.png)

On this step you can choose to register your device on the cloud. If you would like to do this some other time you can click `Skip Step` to move onto the next step.

![Setup Wizard cloud](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Get-Started/img/setup-6-wizard-cloud.png)

You've nearly finished now. Click the `Upgrade Firmware and Install Console` button to do just that. This will upgrade your Omega to the latest firmware and install the Console for you.

>If you don't want to install the Console you can de-select the checkbox above. You can always come back to the setup wizard to install the console afterwards.

![Setup Wizard downloading firmware](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Get-Started/img/setup-7-wizard-upgrade-button.png)

Your Omega will download the latest firmware, and then begin installing it. This process takes several minutes, sometimes more depending on your Internet connection.

![Setup Wizard installing firmware](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Get-Started/img/setup-8-wizard-installing-firmware.png)

When the firmware installation is complete you'll see the page below:

![Setup Wizard finished](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Get-Started/img/setup-9-wizard-finished.png)

At the end of the installation process, the Omega will automatically reboot. It will be ready for use when the Omega's LED stops flashing and remains solid.

> Some Omega2+ models may not reboot automatically. If you reach the page pictured above and your Omega2+'s LED turns off and remains off for longer than about 15 seconds, you will need to manually reboot your Omega. <br />
> Either toggle the power switch on your Dock or disconnect the power briefly and reconnect it, and your Omega2+ will reboot and complete the upgrade. It will be ready for use when the LED stops flashing and remains solid.


**All Done!**

Start using your fresh Omega, check out the [Using the Omega section](#doing-stuff) for ideas on what the Omega can do!
<!-- Start using your fresh Omega, check out the [Tutorials section](./Tutorials/Contents) or the [Project guides](./Projects/Contents) for ideas on what to do next! -->
<!-- TODO: fix the links above when the content is available -->

### The Setup Wizard Didn't Work!

If for some reason the Setup Wizard wasn't able to get your Omega up and running, try the steps in the [First Time Setup using the Command Line guide](#first-time-setup-command-line) or see the  [Troubleshooting guide](#first-time-troubleshooting).

<GiscusDocComment />
