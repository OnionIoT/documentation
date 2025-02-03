/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docsSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/intro',
        'introduction/firmware-revision-list',
        'introduction/whats-new',
        'introduction/comparison-of-firmware-old-and-new',
        'introduction/revert-to-old-fw',
      ],
    },
    {
      type: 'category',
      label: 'Product Overview',
      items: [
        {
          type: 'category',
          label: 'Omega2',
          collapsed: false,
          items: [
            'product-overview/omega2',
            'product-overview/omega2-mechanical',
            'product-overview/omega2-electrical',
          ]
        },
        {
          type: 'category',
          label: 'Omega2S',
          collapsed: false,
          items: [
            'product-overview/omega2s',
            'product-overview/omega2s-mechanical',
            'product-overview/omega2s-electrical',
          ]
        },
        'product-overview/omega2-eval-board',
      ],
    },
    {
      type: 'category',
      label: 'Quickstart',
      items: [
        'quickstart/intro',
        'quickstart/power-up',
        'quickstart/serial-command-line',
        'quickstart/setup-wifi',
        'quickstart/hello-world-demo',
        'quickstart/reference-material',
      ],
    },
    {
      type: 'category',
      label: 'Networking',
      items: [
        'networking/wifi',
        'networking/ethernet',
        'networking/wifi-ethernet',
        'networking/find-ip-address',
        'networking/ip-address-collisions',
      ],
    },
    {
      type: 'category',
      label: 'Hardware Interfaces',
      items: [
        'hardware-interfaces/pinouts',
        'hardware-interfaces/gpio',
        'hardware-interfaces/pin-multiplexing',
        'hardware-interfaces/special-pins',
        'hardware-interfaces/uart',
        'hardware-interfaces/spi',
        'hardware-interfaces/i2c',
        'hardware-interfaces/one-wire',
        'hardware-interfaces/pwm',
        'hardware-interfaces/usb',
        'hardware-interfaces/sdio',
        'hardware-interfaces/ethernet',
        'hardware-interfaces/wifi-antenna',
        {
          type: 'category',
          label: 'Device Tree Overlay',
          items: [
              'device-tree-overlay/intro',
              'device-tree-overlay/software-spi',
              'device-tree-overlay/one-wire-devices',
          ],
        },
        {
          type: 'category',
          label: 'Additional Hardware',
          collapsed: false,
          items: [
            'hardware-interfaces/ledchain',
            'hardware-interfaces/lte-modem',
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Software',
      items: [
        'software/supported-languages',
        'software/running-command-on-boot',
      ],
    },
    {
      type: 'category',
      label: 'Packages',
      /*link: {
        type: 'doc',
        id: 'packages/intro'
      },*/
      items: [
        'packages/intro',
        'packages/opkg-package-manager',
        'packages/advanced-package-management',
        'packages/custom-package',
        'packages/compile-package',
        'packages/deploy-package-repo',
      ],
    },
    {
      type: 'category',
      label: 'Firmware',
      items: [
        'firmware/installing-firmware',
        'firmware/how-to-build-firmware',
        'firmware/how-onion-builds-firmware',
      ],
    },
    'feedback',
  ],
  guides: [
    'guides/intro',
    {
      type: 'category',
      label: 'Packages',
      collapsed: false,
      items: [
        'guides/packages/c-package-example',
        'guides/packages/python-package-example',
      ],
    },
  ]
};

module.exports = sidebars;
