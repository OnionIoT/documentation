---
title: One-Wire Devices
---

One-wire devices including but not limited to temperature loggers, battery monitors, humidity sensors, voltage and current sensors can be used with a wide range of controllers and processors in the Omega2 family like Omega2, Omega2+, Omega2S, and more through One-wire communication protocol. 

The following is the scope of this documentation:

<ul>
  <li><a href="#one-wire">What is a One-Wire Device</a></li>
  <li><a href="#protocol">What is a One-Wire Protocol</a></li>
  <li><a href="#connect">Connect a One-Wire Device to the Omega2</a></li>
  <li><a href="#enable">Enable One-Wire Device Support</a></li>
  <li><a href="#find">Find Connected One-Wire Devices</a></li>
  <li><a href="#read">Read Data from a Connected One-Wire Device</a></li>
  <li><a href="#common">Common Pitfalls and Precautions</a></li>
</ul>

Let’s get started 🚀

<h2 id="one-wire">What is a One-Wire Device</h2>

A One-Wire device is an electronic component that communicates using the One-Wire protocol, enabling communication with a host system using a single data line. These components are specifically designed to function on a One-Wire bus and can contain an array of integrated circuits (ICs) such as sensors, memory chips, or other peripherals.

Every One-Wire device connected to a network has its unique 64-bit address (a.k.a ROM code), enabling the host system to communicate with any specific device(s) on the One-Wire bus.

<h2 id="protocol">What is a One-Wire Protocol</h2>

The One-Wire protocol is a communication protocol that establishes a low-speed communication bridge between One-Wire Devices and processors/micro-controllers over a single data line. With a single data line as a communication methodology, the wiring process is tremendously simplified and the number of pins required to bridge the connection is also reduced. 

One Wire protocol follows a master-slave architecture with each bus allowing for one master, in this case, an Omega2 board, and a slave device like the DS18B20 temperature sensor.

<h2 id="connect">Connect a One-Wire Device to the Omega2</h2>

This section covers a three-stage process for establishing the physical wiring connection of your One-Wire device to GPIO19, where the latter will serve the role of the One-Wire master.

### Stage 1: Identify the Connectors

One-Wire devices have three available connectors/wires as illustrated in the table below: 

| Wire            | Connection                                                      |
|-----------------|-----------------------------------------------------------------|
| VCC             | Connect this wire to the 3.3V power source on the Omega2 board. |  
| GND             | Connect this wire to the ground pin on the Omega2 board.        |  
| DQ              | Connect this wire to the GPIO19 pin on the Omega2 board.        | 

![one wire device circuit diagram](../static/img/one-wire-device-circuit-diagram-1.png)

**NOTE:** Please refer to your specific One-Wire device's datasheet to identify the pins and determine the recommended voltage. 

**TIP:** Building these connections is relatively easy if you have an Expansion, Power, or Arduino Dock since they all expose the Omega’s GPIOs. 

**WARNING:** Some One-Wire devices will require a pull-up resistor on the Data line (DQ). For example, the popular DS18B20 temperature sensor requires a 4.7 kΩ pull-up resistor on the DQ to operate properly.

### Stage 2: Connect Power & Ground

Connect the power and ground wires belonging to your One-Wire device to the corresponding power and ground pins on the Omega2 board. 

### Stage 3: Connect the DQ

Connect the DQ from your One-Wire device to the GPIO19 pin on the Omega2 board. 

<h2 id="enable">Enable One-Wire Device Support</h2>


Once the physical connections are made, install dts overlay package to register a one-wire master in Linux associated with GPIO19 to communicate with the one-wire slave device.  

**Step 1:**  Install the `onion-dt-overlay-w1-gpio` package using opkg

<pre>
<code>opkg update
opkg install onion-dt-overlay-w1-gpio</code>
</pre>

**Step 2:** After the package is successfully installed, GPIO19 will act as a One-Wire Master. 

<pre>
<code>/sys/devices/w1_bus_master1</code>
</pre>

<h2 id="find">Find Connected One-Wire Devices</h2>

**Step 1:** Navigate to the relevant directory where One-Wire devices are listed. This is under `/sys/devices/w1_bus_master1`

<pre>
<code>cd /sys/devices/w1_bus_master1
ls</code>
</pre>

**Step 2:** Perform a check to find if slave devices are connected or not. 

<pre>
<code>cat /sys/devices/w1_bus_master1/w1_master_slave_count</code>
</pre>

**Step 3:** The command in step 2 will return the count of the number of slave devices connected. 

| Result            | Interpretation                            |
|-------------------|-------------------------------------------|
| 1                 | A slave device is connected               |
| 0                 | A slave device is connected               |

**NOTE:** The One-Wire bus master kernel module scans the data pin every 10 seconds for new devices connected, if any, hence, it is recommended to wait a little while and try again. 

**Step 4:** If a slave device is connected, run the following command: 

<pre>
<code>cat/sys/devices/w1_bus_master1/w1_master_slaves </code>
</pre>

This will return a (newline delimited) list of your slave device ID(s). The Device ID is the serial number of your One-Wire device. Example of a device ID: 28-000123456789. 

**NOTE:** Each device will have a different serial number, making it complex to use One-Wire devices programmatically. 

<h2 id="read">Read Data from a Connected One-Wire Device</h2>

**Step 1:** Navigate to the specific slave device directory and access the data from the __w1_slave file__ by running the following command: 

<pre>
<code>cat /sys/devices/w1_bus_master1/DeviceID/w1_slave</code>
</pre>

The `<DeviceID>` in the aforesaid command is the serial number of your One-Wire device. Please refer to **Step 4** of the aforesaid section "Find Connected One-Wire Devices" to learn more about finding the "DeviceID". 

Assuming the slave device is a temperature sensor "DS18B20", having a serial number- 28-000123456789, the command will be: 

<pre>
<code>cat /sys/devices/w1_bus_master1/28-000123456789/w1_slave</code>
</pre>

**Step 2:** The command executed in **Step 1** will return the raw data from the connected One-Wire device. 

Example of the raw data from the connected temperature sensor like the DS18B20: 

<pre>
<code>b1 01 4b 46 7f ff 0c 10 d8 : crc=d8 YES
b1 01 4b 46 7f ff 0c 10 d8 t=27062</code>
</pre>

In the sample raw data above, the final `t=27062` indicates the temperature is 27.062 ˚C.

<h2 id="common">Common Pitfalls and Precautions</h2>

☑️ Cross-check your wiring to make sure that VCC, GND, and DQ lines are correctly connected because incorrect wiring might lead to communication issues.  

☑️ Please ensure that the One-wire device’s dataline is connected to GPIO19. 

☑️ While connecting the One-Wire device to the Omega2 board, refer to the datasheet and documentation for your specific One-Wire device for detailed wiring and configuration instructions.

☑️ Some One-Wire devices will require a pull-up resistor on the Data line (DQ). For example, the popular DS18B20 temperature sensor requires a 4.7 kΩ pull-up resistor on the DQ to operate properly
