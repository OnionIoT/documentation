// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'overview',
    'getting-started',
    {
      type: 'category',
      label: 'Software',
      items: [
        'software/flashing',
      ],
    },
    
    {
      type: 'category',
      label: 'Networking',
      items: [
        'networking/wifi_ap',
        'networking/wifi_sta',
        'networking/bluetooth',
        'networking/bluetooth-gatt-provisioning',
      ],
    },
    {
      type: 'category',
      label: 'Hardware Interfaces',
      items: [
        'hardware/spi-nand-flash',
        'hardware/sd-card',
        'hardware/pwm',
        'hardware/usb-host',
        'hardware/usb-device-gadget',
      ],
    },
  ],
};

module.exports = sidebars;
