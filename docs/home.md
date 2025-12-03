---
id: home
title: Onion Documentation Hub
description: One place to choose your Omega hardware docs and related resources.
slug: /home
sidebar_position: 1
hide_table_of_contents: true
---

import ProductSelector from '@site/src/components/ProductSelector';

:::info Welcome
Welcome to the central hub for Onion hardware documentation. Use this page to jump into the right product docs, find compliance references, and keep track of the latest firmware guidance.
:::



## Choose a Platfrom

<ProductSelector products={[
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
    name: 'Omega4 Family (OpenWrt 24.09)',
    description: 'Preview documentation for the Omega4 platform, focused on bring-up and design planning.',
    highlights: [
      'Next-generation Linux module lineup',
      'Early quickstart, hardware overview, and design guidance',
      'Migration notes for Omega2 users'
    ],
    badge: 'Preview',
    status: 'Draft docs available; hardware and firmware still in flux',
    action: { label: 'Open Omega4 Docs', to: '/omega4/' },
    secondaryAction: { label: 'Dev kit quickstart', to: '/omega4/' }
  },
]} />

## Compliance, Support, and Feedback

- [Compliance documentation](/compliance) collects declarations of conformity and export details for every SKU.
- Share bug reports or doc requests via the [feedback page](/feedback) or by opening a GitHub issue.
- All non-home articles host a comment box powered by Giscus - use it to suggest clarifications directly where feedback is needed.
