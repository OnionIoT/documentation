---
title: Known Firmware Issues
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Known Firmware Issues

This page collects the outstanding bugs and regressions that affect the legacy Omega2 firmware stream. Each entry lists the current status plus any workarounds that keep a project on track.

### Issue Listing

- Cannot flash the Arduino Dock if `arduino-dock-2` is installed while the OpenWRT package repos are active.  
  **Root cause:** the OpenWRT feed ships `avrdude` v6.3, which blocks GPIO access.  
  **Resolution:** keep using the Onion feed `avrdude` v6.1 release by installing `arduino-dock-2` before enabling the OpenWRT feeds or by uninstalling `avrdude`, disabling the OpenWRT feeds, running `opkg update`, and reinstalling from the Onion repo. Reboot if the reinstall fails.
- ~~The Omega cannot successfully connect to the Onion Cloud~~ – **Fixed in b149.** The Onion Cloud was [decommissioned in October 2018](https://onion.io/onion-cloud-end-of-life-notice/).
- ~~The reset button does not work~~ – **Fixed in b146.**
- ~~Omega2+ cannot reboot~~ – **Fixed in b142.**
- ~~Omega2+ cannot mount MicroSD cards~~ – **Fixed in b143.**
- ~~Cannot successfully register a 1-Wire master in the filesystem~~ – **Fixed in b151.**
- ~~The `fast-gpio` program always crashes~~ – **Fixed in b160** after `/dev/mem` access was restored.
- WiFi issues:  
  – No support for enterprise WiFi that requires a username and password.  
  – ~~No automatic support for TKIP-encrypted networks~~ – **Fixed in v0.2.0** via the Onion WiFi Warp Core driver.  
  – ~~No automatic support for channels 13 and 14~~ – **Fixed in v0.2.0**; set the correct `country` in `/etc/config/wireless` and run `wifi`.

### Console Issue Listing

- Cannot change the account password in the Settings app.
- Cannot disable the WiFi AP from the UI.
- The OLED App does not properly save image files to the Omega.

<GiscusDocComment />
