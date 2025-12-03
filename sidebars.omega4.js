// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'overview',
    {
      type: 'category',
      label: 'Networking',
      items: [
        'networking/wifi_ap',
        'networking/wifi_sta',
        'networking/bluetooth',
      ],
    },
    {
      type: 'category',
      label: 'Hardware Interfaces',
      items: [
        'hardware/pwm',
      ],
    },
  ],
};

module.exports = sidebars;
