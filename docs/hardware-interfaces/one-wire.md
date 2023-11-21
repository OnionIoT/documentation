---
title: One-Wire
---

# One-Wire

The One-Wire protocol is a bus-based protocol that, as the name implies, uses just one data wire to transmit data between devices. It allows controllers and processors like the Omega2 to easily communicate with peripheral devices like:

* Sensors, such as temperature, humidity
* Programmable Input/Output chips
* Small relays

## Connecting the Hardware

One-Wire devices will have three available connectors:

* Vcc (usually 3.3V)
* GND
* Data Line

Take a look at your specific sensor's datasheet to identify the pins and determine the recommended voltage.

Make the following connections to your Omega:


| Pin  | Omega Connection |
|------|------------------|
| Vcc  | 3.3V             |
| GND  | GND              |
| Data | GPIO19           |

> Note that making these connections is very easy if you have a [Expansion](#expansion-dock), [Power](#power-dock), or [Arduino](#arduino-dock-2) Dock since they all expose the Omega's GPIOs.

Some One-Wire devices will require a **pull-up resistor** on the Data line. For example, the popular DS18B20 temperature sensor, requires a 4.7 kΩ pull-up resistor on the Data line to operate properly. Some One-Wire devices have built-in pull-up resistors or can require different resistance values, check the datasheet of your device to be sure!

> A pull-up resistor is a connection between, in this case, the data line and the voltage line. When the Data line is inactive, the pull up resistor will "pull" the signal to a logical high. Then when the Data line goes active, it will override the pull-up. It essentially ensures the logical level is always valid.

<!-- TODO: expand on pull up resistors -->


## Registering the One-Wire Master

To enable the use of one-wire, a dts overlay packages needs to be installed.

Make sure your Omega2 is connected to the internet, and install the `onion-dt-overlay-w1-gpio` package  using opkg:

```
opkg update
opkg install onion-dt-overlay-w1-gpio
```

After package is successfully installed, GPIO19 will acts as a One-Wire Master.

```
/sys/devices/w1_bus_master1
```

Take a look inside this directory, it will be our One-Wire command centre!

<!-- TODO: test and then add a note about persistence after reboot -->


### Finding One-Wire Slave Devices

Now let's use the new `/sys/devices/w1_bus_master1` directory to find our slave devices.

First let's check to see if there are any slave devices at all:

```
cat /sys/devices/w1_bus_master1/w1_master_slave_count
```

The output will be a number that will tell us how many slave devices are connected:

* If it is a `1`, you already have your device plugged in and you're good to go.
* If you see a `0`, go ahead and plug in your device.
  * The One-Wire bus master kernel module scans the data pin every 10 seconds for new devices so wait a little while and try again

#### Finding your Specific Device

If your check of the slave count file reads `1`, your device has been detected. Run `ls /sys/devices/w1_bus_master1` and you should see a directory that looks something like this: `28-000123456789`. That's the directory of your slave device and it is based on the slave's unique serial number.

Note that each device will have a different serial number, so yours might look a little different. This makes it a little difficult to use One-Wire devices programmatically, but don't worry there's a solution!

Running:
```
cat /sys/devices/w1_bus_master1/w1_master_slaves
```
will print a (newline delimited) list of the serial numbers of all connected One-Wire slaves!


### Reading from a One-Wire Device

Reading from an attached One-Wire device is very simple, just run the following:

```
cat /sys/devices/w1_bus_master1/<DeviceID>/w1_slave
```

where `<DeviceID>` is the serial number of your One-Wire device.

Using the DS18B20 temperature sensor from the section above the command would be:

```
cat /sys/devices/w1_bus_master1/28-000123456789/w1_slave
```

And it will print something like:

```
b1 01 4b 46 7f ff 0c 10 d8 : crc=d8 YES
b1 01 4b 46 7f ff 0c 10 d8 t=27062
```

Where the final `t=27062` indicates the temperature is 27.062 ˚C.

To trim and format the output so just the temperature is returned:

```
root@Omega-2970:/# awk -F= '/t=/ {printf "%.03f\n", $2/1000}' /sys/devices/w1_bus_master1/28-000123456789/w1_slave
27.062
```
