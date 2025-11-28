---
title: The Command Line Interface
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## The Command Line Interface {#the-command-line-interface}

Before continuing, make sure your Omega is powered and accessible as described in the [First Time Setup guide](/omega2-legacy/Get-Started/First-Time).

### What is the Command Line Interface?

The command line interface (CLI) is a terminal session where every interaction is a command interpreted by the operating system. Many commands accept options that tweak their behavior, so the general pattern is `command --option value`.

Log in to your Omega from a terminal and you will see a prompt similar to the following:

![Opening terminal prompt](http://i.imgur.com/tRPQy5O.png)

### Some Basic Commands

Use the `login` command to authenticate as the `root` user:

```
login
```

Enter the username `root` and the default password `onioneer` when prompted (the password does not echo). After a successful login the prompt updates:

![Login success screen](http://i.imgur.com/hxuce5c.png)

If you want to explore available utilities, BusyBox exposes a consolidated help system. Run the following commands to enumerate what is installed:

```
busybox --help
```

```
busybox --list
```

To get inline help for a specific command, append the `--help` flag, for example:

```
busybox ifconfig --help
```

Many commands simply report useful information. For example, the `date` utility prints the current time:

```
date
```

![Date command output](http://i.imgur.com/qSmPt1Q.png)

Another essential tool is `echo`, which writes text back to the terminal:

```
echo hello
```

![Echo command output](http://i.imgur.com/dtD91g3.png)

`echo` is also useful for passing inline input to other commands. You will use that pattern throughout the remaining Linux guides, including the [Redirection walkthrough](./redirection).

Next up, explore the [Omega filesystem](./exploring-the-file-system) to understand how Linux stores data and configuration.

<GiscusDocComment />
