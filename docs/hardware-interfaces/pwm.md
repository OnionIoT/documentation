---
title: Hardware PWM
---

# Hardware PWM

Using the Omega's hardware PWM channels is supported as for firmware `22.03.3-20230626`.

The Omega’s SoC has a number of PWM modules. The Omega2 exposes two (2) PWM hardware modules on its pin headers while the Omega2S exposes all four (4).

> The hardware PWM modules have a frequency range of 39Hz to 40MHz. For lower frequencies it is recommended to consider an external hardware PWM generator or the use of a software generated PWM signal from a GPIO pin.

## Enabling Hardware PWM 

To enable the use of hardware PWM, a kernel module needs to be installed:

```
opkg update
opkg install kmod-pwm-mediatek-ramips
```

## Enabling PWM Pins
The Omega's pins are multiplexed allowing the exposed pins to be used for a number of different functions.


| PWM Channel | GPIO   | Pin | Notes          |
|-------------|--------|-----|----------------|
| 0           | GPIO18 |     |                |
| 1           | GPIO19 |     |                |
| 2           | GPIO20 | 51  | `Omega2S only` |
| 3           | GPIO21 | 52  | `Omega2S only` |

The pin multiplexing configuration can be easily changed from the command line using `omega2-ctrl`.

For GPIO18:
```
omega2-ctrl gpiomux set pwm0 pwm
```

For GPIO19:
```
omega2-ctrl gpiomux set pwm1 pwm
```

For GPIO20 (Omega2S only):
```
omega2-ctrl gpiomux set uart2 pwm23
```

For GPIO21 (Omega2S only):
```
omega2-ctrl gpiomux set uart2 pwm23
```

**This multiplexing configuration will need to be repeated after each reboot of the Omega.**

## Generating PWM Signals

To start, we'll need to install the `omega2-script` package:

```
opkg update
opkg install omega2-script
```

Once the pins have been configured for PWM usage, we can configure the PWM hardware module to generate a pwm signal using the following command:

```
onion pwm <CHANNEL> <DUTY CYCLE> <FREQUENCY>
```

Where:

* CHANNEL is 0 (GPIO18), 1 (GPIO19), 2 (GPIO20), or 3 (GPIO21)
  * Remember, Channels 2 & 3 are exposed on the Omega2S only
* DUTY_CYCLE is the percentage of time the signal is `ON`, expressed 0-100
* FREQUENCY is the signal frequency, expressed in Hz

## Stopping the PWM signal

To stop and disable the PWM signal:

```
onion pwm <CHANNEL> disable
```




## Writing your own script to generate PWM signals

The following explains how the `onion pwm` script command works behind the scenes. In case you're interested in writing your own script.

### Generating PWM Signals

To start, we'll need to install the `bc` program to help us run the math needed for PWM:

```
opkg update
opkg install bc
```

***Once the selected pin has been configured for PWM**, we can configure the PWM hardware module to generate the pwm signal using the following commands. 

For this example, we'll generate a PWM signal on GPIO18 with a 35% duty cycle (signal is high 35% of the time, low 65% of the time) at a frequency of 60Hz 

```
# setup your PWM signal using these 3 variables
channel="0"    # options are 0 (GPIO18), 1 (GPIO19), 2 (GPIO20 on Omega2S only), or 3 (GPIO21 on Omega2S only)
dutyCycle="35"  # percentage of time the signal is ON, expressed 0-100
frequency="60"  # signal frequency, expressed in Hz

period=$(echo "1/${frequency} * 1000000000" | bc -l)
period=$(echo "scale=0; $period/1" | bc -l)
pulseWidth=$(echo "$period * ${dutyCycle} / 100" | bc -l)
pulseWidth=$(echo "scale=0; $pulseWidth/1" | bc -l)

# set the PWM
echo "${channel}" > /sys/class/pwm/pwmchip0/export
echo "$period" > /sys/class/pwm/pwmchip0/pwm${channel}/period
echo "$pulseWidth" > /sys/class/pwm/pwmchip0/pwm${channel}/duty_cycle
echo "1" > /sys/class/pwm/pwmchip0/pwm${channel}/enable
echo "${channel}" > /sys/class/pwm/pwmchip0/unexport
```

### Stopping the PWM signal

To disable the PWM channel:

```
channel="0"

echo "${channel}" > /sys/class/pwm/pwmchip0/export
echo "0" > /sys/class/pwm/pwmchip0/pwm${channel}/enable
echo "${channel}" > /sys/class/pwm/pwmchip0/unexport
```
