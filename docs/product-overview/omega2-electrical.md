---
title: Omega2 Electrical Specifications
---

import { GiscusDocComment } from '/src/components/GiscusComment';

The following tables provide detailed information on the electrical specifications for the Omega2/2+ embedded modules.

## Absolute maximum ratings

| Parameter                                                | Symbol | Min         | Max         | Units |
| :------------------------------------------------------- | :----- | :---------- | :---------- | :---- |
| Power supply voltage                                     | Vcc    |             | 3.63        | V     |
| Input pin voltage                                        | Vin    | GND - 0.3 V | Vcc + 0.3 V | V     |
| DC current through any digital I/O pin (except supplies) | Ipin   |             | 8           | mA    |
| Storage temperature                                      | Tstg   | -20         | 80          | °C    |

## Operating conditions

Operation beyond the specified operating conditions can affect device reliability.

| Parameter                             | Symbol | Min  | Typical | Max  | Units |
| :------------------------------------ | :----- | :--- | :------ | :--- | :---- |
| Power supply voltage                  | Vcc    | 2.97 | 3.3     | 3.63 | V     |
| Input pin voltage range               | Vin    | -0.3 |         | 3.3  | V     |
| Digital pin low level input voltage   | Vil    | -0.3 |         | 0.8  | V     |
| Digital pin high level input voltage  | Vih    | 2    |         | 3.6  | V     |
| Digital pin low level output voltage  | Vol    |      |         | 0.4  | V     |
| Digital pin high level output voltage | Voh    | 2.4  |         | 3.3  | V     |
| Operating temperature                 | Topr   | -10  |         | 55   | °C    |

## Power consumption

| State                                                     | Peak Current | Typical Current | Units |
| :-------------------------------------------------------- | :----------- | :-------------- | :---- |
| Booting                                                   | 180          | 170             | mA    |
| Idle & connected to WiFi network                          | 190          | 170             | mA    |
| Idle & WiFi radio turned off                              | 130          | 130             | mA    |
| Actively downloading files through WiFi                   | 310          | 260             | mA    |
| Actively downloading files through WiFi, CPU at full load | 400          | 310             | mA    |

:::note

All current measurements correspond to Vcc of 3.3V.

:::

<GiscusDocComment />