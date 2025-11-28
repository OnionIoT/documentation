---
title: "Accessing the Console"
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Accessing the Console {#accessing-the-console}

<!-- deprecated -->

> **Important Note:** As of firmware v0.2.1, **the Console was deprecated** and replaced by OnionOS, a new web-based, graphical user interface for the Omega2 family. Learn more about [OnionOS on the Onion blog](https://onion.io/2bt-onion-os/). 
> This article will remain in the documentation to serve as reference for the deprecated Console.



<!-- accessing the console -->

You can reach the Omega's Console in your browser by navigating to `http://omega-ABCD.local/`, where `ABCD` is your Omega's unique identifier.

> If you don't know how to find your Omega's unique identifier you can take a look at our brief [guide to finding your Omega's name](#omega-name)

Upon loading, you should see the console login page.
![login-page](https://raw.githubusercontent.com/OnionIoT/Onion-Docs/master/Omega2/Documentation/Get-Started/img/installing-console-login.png)

The default login info is:

```
username: root
password: onioneer
```

> Your computer and Omega have to be on the same network in order for you to get to the Console!

If the above method doesn't work, try connecting your computer to your Omega's WiFi Access Point (named Omega-ABCD by default), and then trying to load `http://omega-ABCD.local/` again.

If this doesn't work, you can navigate to the Omega's IP Address, `http://192.168.3.1`.

<GiscusDocComment />
