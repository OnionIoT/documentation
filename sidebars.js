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
    'intro',
    'installing-firmware',
    'firmware-revision-list',
    {
      type: 'category',
      label: 'Networking',
      items: [
        'networking/wifi',
        'networking/ethernet',
        'networking/wifi-ethernet',
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
        'software/node',
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
        'packages/custom-package',
        'packages/compile-package',
        'packages/deploy-a-package',
      ],
    },
    {
      type: 'category',
      label: 'Firmware',
      items: [
        'firmware/how-to-build-firmware',
      ],
    },
    'feedback',
  ],
};

module.exports = sidebars;
