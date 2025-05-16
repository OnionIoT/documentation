---
title: Supported Languages
---

<!-- TODO: consider creating variables for all supported language versions ? -->

import { GiscusDocComment } from '/src/components/GiscusComment';

There are many programming languages available to program the Omega2 modules. Each language has something unique to offer.

The Omega2 supports the following programming languages:

- C/C++
- Python
- Node.js
- Shell Scripts
- Rust
- GoLang
- HTML
- PHP
- Ruby
- Perl

Please refer to the sections below for further details about each programming language.

## C/C++

C is a general purpose programming language. It is a compiled language, meaning programs must be compiled before they can be executed. C is known for its efficiency and control over system resources; it provides low-level access to memory and hardware and executes extremely fast.

C++ is a high performance, general purpose programming language, built as an extension of the C language. It combines the efficiency and low-level control of C with object-oriented programming features, enabling better organization and reusability of code. C++ supports multiple programming paradigms: procedural, object-oriented, and generic programming.

### Benefits of C/C++

- Fast execution of programs
- Small binary size
  - Space for other programs
  - Utilities on the flash storage
- Easy low-level hardware access

### How to compile C/C++ programs

C and C++ programs must be cross-compiled for the MIPS CPU architecture before they can be used on the Omega2. This involves using a MIPS compiler on a computer, usually x86, to cross-compile a C or C++ program for the MIPS architecture.

Please see the [OpenWRT Cross compiling guide](https://openwrt.org/docs/guide-developer/toolchain/crosscompile) for further information.

### How to run C/C++ programs

Copy the C or C++ compiled binary to the Omega2.

To run a program: `./<binary-name>`

## Python

Python is a high-level, general purpose programming language. It is an interpreted language, meaning programs do not have to be explicitly compiled before they can run.

### Supported Python version

Omega2 supports Python 3.11. Onion no longer supports Python 2.

### Benefits of Python

- Clean syntax – ideal for rapid development and prototyping.
- Rich ecosystem of modules – easy implementation of complex functionalities:
  - Networking
  - Data processing
  - Hardware control
- Lightweight, but still handle complex use cases.

### How to install Python

To install Python, enter the following commands:

```Shell
opkg update
opkg install python3-light
```

### How to run Python programs

Before you can run a python program, you first need to write a program and store it on the Omega2 file system.

To run a program, enter the following command:

```Python
python <program-name>
```

### PIP package manager

PIP is Python's package manager and is used to install packages/modules that are not part of the standard library to extend the capabilities of Python.

To install the package manager, enter the following commands:

```Shell
opkg update
opkg install python3-pip
```

To install using PIP, enter the following command:

```Shell
pip install <package-name>
```

**Note:** In addition to installing Python modules with PIP, many modules are available through opkg.

To view a list of packages, enter the following commands:

```Shell
opkg update
opkg list python3-*
```

To see a condensed list, enter the following command:

```Shell
opkg list | grep python3
```

This will output one line per package.

To install a package from the list, enter the following command:

```Shell
opkg install <selected package name>
```

## Node.js

Node.js is a JavaScript runtime environment with an event-driven architecture capable of asynchronous I/O.

### Supported Node version

The Omega2 family is the only MIPS architecture platform that supports modern Node.js. The Omega2 supports Node.js v18.19.1. <!-- TODO: update with NODE_FULL_VERSION variable -->

### Benefits of Node

- De facto standard for web and server applications – allows for a web-first language to create applications on hardware.
- Asynchronous, event-driven execution and non-blocking I/O – ideal for real-time applications that need to consider hardware interactions, networking, and more.

### How to install Node

To install Node, enter the following commands:

```Shell
opkg update
opkg install node
```

The installation may take a few minutes.

### How to run Node programs

Activate the Node REPL:

```Shell
node
```

To run a program stored on the local file system, enter the following command:

```Node
node <program-name>
```

## Shell Scripts

A shell is a command-line interpreter; the Omega2 command line is a shell. Shell scripting is a series of commands written in a file that are then executed by the shell.

### Supported Shell version

The Omega2 uses the `ash` shell command-line interpreter as part of BusyBox. The BusyBox software combines tiny versions of common Linux and Unix utilities into a single space optimized binary, which is great for embedded Linux systems like the Omega2.

`Ash` is a lightweight shell implementation.

### Benefits of Shell

- Quick and dirty, but effective – both in development (uses the same commands as command line) and execution.

### How to install Shell

By default, `Ash` is already installed.

### How to run Shell programs

To run a program stored on the local file system, enter the following command:

```Shell
sh <program-name>
```

## Rust

Rust is a general purpose programming language that emphasizes performance, type safety, and concurrency. Before being executed, programs must be compiled.

### Supported Rust version

The Rust compiler supports cross-compilation to MIPS targets, like the Omega2 family.

:::warning

Rust supports MIPS targets up to version 1.72.1.

:::

### Benefits of Rust

- Comparable performance to C/C++ because of its system-level control and zero-cost abstractions. Great for resource constrained environments.
- Memory safe with no need for a garbage collector – ability to write stable code by default.
- Safe concurrency. Can write concurrent and parallel code with minimal risk of data races. Excellent for multitasking on embedded devices.

### How to compile RUST programs

Programs must be cross-compiled.

On a computer or server:

- Need both rust and cargo installed.
- Use cargo to install cross, and cargo-make installed.
- In the source code directory run the following command:

```Shell
cross build –-target mipsel-unknown-linux-musl --release
```

### How to run Rust programs

Copy the compiled binary to Omega2.

To run: `./<binary-name>`

:::note

See the [Omega2 and Rust guide](https://onion.io/2bt-cross-compiling-rust-applications-for-the-omega/) for further details.

:::

## GoLang

GoLang, also known as Go, is an open-source programming language developed by Google. It is statically typed, compiled, and has a syntax like C. Go has memory safety, garbage collection, and built-in support for concurrency.

Designed for simplicity, efficiency, and scalability, Go is excellent for high-performance server-side applications, distributed systems, and cloud services. It is a popular choice for modern software development because of its emphasis on readability and maintainability.

### Supported GoLang version

Omega2 supports GoLang v1.21.

### Benefits of GoLang

- Light and fast – designed for high performance and resource efficiency.
- Built-in support for concurrency (through goroutines and channels) – easy to develop multitasking applications.
- Produces statically compiled binaries, meaning all dependencies are included in one executable.
- Standard library supports networking, file handling, and system operations. Reduces the need for third-party libraries.

### How to compile GoLang programs

Go programs must be cross-compiled for the MIPS CPU architecture before they can be used on the Omega2. The Go SDK has built-in support for cross compilation, so this is straightforward.

On a computer or server:

- Install GoLang
- Cross-compile by using the `GOOS` and `GOARCH` environment variables with the `go build` command:

```Shell
GOOS=linux GOARCH=mipsle go build hello.go
```

### How to install GoLang

```Shell
opkg update
opkg install golang
```

### How to run GoLang programs

Copy the compiled binary to Omega2.

To run: `./<binary-name>`

:::note

See the [Omega2 and GoLang guide](https://onion.io/2bt-cross-compile-golang/) for further details.

:::

## HTML

Hypertext Markup Language (HTML) is not a programming language, nor does it have logic or flow control, but it is essential for web development.

HTML is used with Cascading Style Sheets (CSS) to create websites hosted on the Omega2 and accessible from local networks.

Omega2 supports a variety of web servers to host HTML. Onion recommends **uhttpd** because it's lightweight and easy to use.

### Benefits of HTML

- Provide a graphical user interface to the device.
- Standard web technology applied to hardware devices.

### How to install an HTML server

```Shell
opkg update
opkg install uhttpd
```

### How to use an HTML server

The configuration file is in `/etc/config/uhttpd` and can be edited with UCI. The server will serve all HTML files in the `/www` directory on port 80.

To access the served HTML:

Omega2 must be on the same network as your computer with the browser.

Omega2 network options:

- Omega2's WiFi Access Point (AP).
- Connected to an existing WiFi network.
- Connected to a wired network.

Find the IP address of the relevant Omega2 network interface.

On the computer, navigate to `http://<OMEGA_IP_ADDRESS>` to see the rendered HTML.

## PHP

PHP is a general-purpose scripting language that is especially suited for web development and can be embedded into HTML ([reference](https://www.php.net/manual/en/intro-whatis.php)).

PHP is often used to add programming logic to HTML pages. It processes inputs and creates static HTML. The code executes on the server and sends the HTML to the client. The client is unaware of the underlying PHP code.

### Supported PHP version

Omega2 supports PHP 8.1.

### Benefits of PHP

- Web technology applied to a hardware device, which provides more customization than pure HTML.
- Rich ecosystem of libraries and frameworks to simplify development.

### How to install PHP

<!-- NOTE: Ok to keep OpenWRT release numbers hard-coded in this section as long as 23.05 package repos do not have PHP -->

Update the opkg package feed list (23.05 package repos do not have PHP as of May 2024)

```Shell
echo https://downloads.openwrt.org/releases/22.03.5/packages/mipsel_24kc/packages >> /etc/opkg/distfeeds.conf
opkg update
opkg install uhhtpd php8 php8-cgi php8-cli
```

### How to run PHP programs

PHP is commonly used for server-side scripting to create dynamic web pages. This requires a web server. See the HTML section for information on installing an HTML server.

Please see the [OpenWRT PHP guide](https://openwrt.org/docs/guide-user/services/webserver/php), for further details.

PHP can be executed from the command line. To run a program stored on the local file system: `php-cli <program-name>`.

## Ruby

Ruby is an interpreted scripting language for quick and easy object-oriented programming. It has several features to process text files and perform system management tasks (as in perl). It is simple, straight-forward, and extensible ([reference](https://github.com/openwrt/packages/blob/openwrt-23.05/lang/ruby/Makefile#L114-L118)).

### Supported Ruby version

Omega2 supports Ruby v3.2.2.

### Benefits of Ruby

- Great for web focused development with other libraries and frameworks like Ruby on Rails or Sinatra.
- Easily integrate with other languages and technologies. Extends its functionality by interfacing with C libraries or executing system commands.
- Clean and readable syntax, which promotes rapid development and easy maintenance.

### How to install Ruby

```Shell
opkg update
opkg install ruby ruby-gems
```

### How to run Ruby programs

To run a program stored on the local file system: `ruby <program-name>`.

## Perl

Perl is a high-level, interpreted programming language known for its flexibility and powerful text processing capabilities - thanks to its extensive support of regular expressions.

The language is suitable for system administration tasks, web development, network programming, and automation.

### Supported Perl version

Omega2 supports Perl v5.28.

### Benefits of Perl

- Strong text processing capabilities make it ideal for log file analysis, data parsing, and report generation.
- Versatile and powerful – allows for quick development.

### How to install Perl

```Shell
opkg update
opkg install perl
```

### How to run Perl programs

To run a program stored on the local file system: `perl <program-name>`.

<GiscusDocComment />
