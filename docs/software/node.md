---
title: NodeJS v16.19
---

import { GiscusDocComment } from '/src/components/GiscusComment';

The Omega2 supports NodeJS v16.19 starting in firmware `22.03.3-20230526`!

To install Node, first make sure your Omega2 is connected to the internet, then run:

```shell
opkg update
opkg install node
```

Installation may take a few minutes

Afterwards you will be able to run your own Node programs on the Omega2 or activate the Node REPL

```shell
root@Omega-f195:~# node -v
v16.19.0
```

<GiscusDocComment />