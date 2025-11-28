---
title: "Installing the Console"
slug: /Doing-Stuff/Using-the-Console/Installing-the-Console
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Installing the Console {#console-series-installing-the-console}

<!-- // Show how to install the console through the setup-wizard, or through the command line -->
The Console can be installed through the Setup Wizard, or through the command line.
Follow this [guide](#first-time-setup) on setting up your Omega, if you have not already done so.

### Installing Using the Setup Wizard

> **NOTE** This section is only valid for firmwares v0.2.0 and below. In v0.2.1 the Console and Setup Wizard were replaced with OnionOS and a new setup wizard. Learn more about [OnionOS on the Onion blog](https://onion.io/2bt-onion-os/).

If you have set up the Omega and didn't install the console, skip to the Software page and make sure the checkbox is checked.
![checkbox](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Get-Started/img/installing-console-checkmark.png)

Click the Install Console button and your Omega will begin installing the Console. This process takes about 5 minutes.

> This process can take longer than 5 minutes depending on your download speeds.

Refresh the page and you should see the Console login page.
![login-page](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Get-Started/img/installing-console-login.png)

The default login info is:

```
username: root
password: onioneer
```

### Installing Using the Command Line

<!-- command line console installation instructions -->

The Console can be installed using the Omega's command line.

>For information on how to access the Omega's command line, follow this [guide to connecting to the Omega's Terminal](#connecting-to-the-omega-terminal)


>You'll need to be connected to the internet in order to install the Console. If you've followed the Setup Wizard, you will be all good to go.

With your terminal open, run the following commands:

```
uci set onion.console.setup=1
uci set onion.console.install=1
uci commit onion
console-install-tool
```

This will perform the entire Console installation sequence for you.


Now you'll be able to [access the Omega's Console using your browser](#access-the-console)!


#### Behind the Scenes

<!-- console install tool explanation -->

The `console-install-tool` utility automates the installation of the Console. If you would like to know what's going on behind the scenes, then this section is for you.

In the above section, we first used `uci` to set the `onion.console` configuration options and then we run the installation tool. When the `console-install-tool` is run, it will check `onion.console` configuration options to see which packages need to be installed. Based on which components are selected, it will then use `opkg` to install the specified components:

```
opkg update
opkg install onion-console-base
```

> You can learn more about `opkg` in our [guide to opkg](#using-opkg).

After the installation is complete, the `rpcd` service needs to be restarted so the Console can have access to the system. The tool will restart the `rpcd` service with the following command:

```
/etc/init.d/rpcd restart
```



<!-- // TODO batch 3 or 4: add a section on navigating and using the console -->

<!-- // TODO: find an appropriate place to mention that oupgrade shouldn't be run from the Terminal app on the console -->

<GiscusDocComment />
