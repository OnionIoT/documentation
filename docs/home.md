---
id: home
title: Onion Documentation Hub
description: One place to choose your Omega hardware docs and related resources.
slug: /home
sidebar_position: 1
hide_table_of_contents: true
---

import ProductSelector from '@site/src/components/ProductSelector';

<!-- <div className="hero hero--primary">
  <div className="container">
    <h1>Build with Onion Hardware</h1>
    <p className="hero__subtitle">Pick your platform, prep the firmware, and start prototyping faster.</p>
  </div>
</div> -->


:::info Welcome
Welcome to the central hub for Onion hardware documentation built on OpenWrt 23.05. Use this page to jump into the right product docs, find compliance references, and keep track of the latest firmware guidance.
:::



## Choose a Platfrom

<ProductSelector products={[
  {
    name: 'Omega2 Family (OpenWrt 23.05)',
    description: 'Latest documentation for the Omega2/2S modules and dev boards',
    highlights: [
      'Product overviews, pinouts, and electrical specs',
      'Quickstart, networking, and package workflows',
      'Bootloader recovery plus firmware build guides'
    ],
    badge: 'Stable Release',
    status: 'Firmware 23.05.3 - Updated August 7, 2024',
    image: { src: '/img/Omega2-Family.jpg', alt: 'Omega2 Family modules' },
    action: { label: 'Enter Omega2 Docs', to: '/omega2-docs/' },
    secondaryAction: { label: 'Jump to hardware overview', to: '/omega2-docs/product-overview/omega2' }
  },
  {
    name: 'Omega2 Legacy (OpenWrt 18.06)',
    description: 'Archive of the original Omega2 documentation covering firmware v0.3.4 and older builds.',
    highlights: [
      'Legacy quickstart, console, and cloud guides',
      'Historical dock and expansion references',
      'Older package feeds and networking workflows'
    ],
    badge: 'Archive',
    status: 'Reference for firmware 0.3.x and earlier',
    image: { src: '/img/Omega2-Family.jpg', alt: 'Omega2 legacy modules' },
    action: { label: 'Open Legacy Docs', to: '/omega2-legacy/' },
    secondaryAction: { label: 'Start with quickstart', to: '/omega2-legacy/' }
  },
  {
    name: 'Omega4 Family  (OpenWrt 24.09)',
    description: 'Documentation for the forthcoming Omega4 platform is being authored.',
    highlights: [
      'Focus on the next-generation Linux module lineup',
      'Migrating projects from Omega2 to Omega4',
      'Launch content will include quickstarts and hardware guides'
    ],
    badge: 'Preview',
    status: 'Subscribe for updates as soon as drafts publish',
    comingSoon: true,
    secondaryAction: { label: 'Contact Onion', href: 'https://onion.io/contact', newTab: true }
  },
]} />

<!-- ## Step 1: Confirm Your Firmware Baseline

Start by matching the firmware on your device with the documentation. Reviewing the latest release notes ensures you pull in the right kernel, package feeds, and board support.

- Review the [firmware revision list](/omega2-docs/introduction/firmware-revision-list) to see what changed in each build.
- Skim [what's new](/omega2-docs/introduction/whats-new) when migrating prototypes or updating fielded devices.
- Understand differences against historical releases in the [comparison guide](/omega2-docs/introduction/comparison-of-firmware-old-and-new).

## Step 2: Bring the Hardware Online

Once the firmware version matches, power up the device and work through the essential connectivity tasks.

- Follow the [Quickstart intro](/omega2-docs/quickstart/intro) to unbox and power the hardware.
- Use the [serial command line guide](/omega2-docs/quickstart/serial-command-line) for early troubleshooting.
- Configure networking with [Wi-Fi setup](/omega2-docs/quickstart/setup-wifi) or the dedicated [networking section](/omega2-docs/networking/wifi).
- Recover devices through the [bootloader overview](/omega2-docs/bootloader/overview) if you encounter boot issues.

## Step 3: Build and Deploy Your Application

With a reliable connection established, configure the software stack that ships on your product.

- Discover supported languages in [Software -> Supported Languages](/omega2-docs/software/supported-languages).
- Learn how to [run commands on boot](/omega2-docs/software/running-command-on-boot) to start custom daemons.
- Manage packages with [opkg](/omega2-docs/packages/opkg-package-manager) and the [advanced package guide](/omega2-docs/packages/advanced-package-management).
- For custom features, follow the [package build workflow](/omega2-docs/packages/custom-package) and the [firmware build instructions](/omega2-docs/firmware/how-to-build-firmware). -->

## Compliance, Support, and Feedback

- [Compliance documentation](/compliance) collects declarations of conformity and export details for every SKU.
- Share bug reports or doc requests via the [feedback page](/feedback) or by opening a GitHub issue.
- All non-home articles host a comment box powered by Giscus - use it to suggest clarifications directly where feedback is needed.
