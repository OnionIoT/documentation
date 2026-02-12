// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'overview',
      label: '🔍 Overview',
    },
    {
      type: 'doc',
      id: 'getting-started',
      label: '🚀 Getting Started',
    },
    {
      type: 'doc',
      id: 'hw-design-guide/omega4-hardware-design-guide',
      label: '📐 Hardware Design Guide',
    },
    {
      type: 'category',
      label: '💾 Software',
      items: [
        'software/flashing',
      ],
    },
    
    {
      type: 'category',
      label: '📶 Networking',
      items: [
        'networking/wifi_ap',
        'networking/wifi_sta',
        'networking/bluetooth',
        'networking/bluetooth-gatt-provisioning',
      ],
    },
    {
      type: 'category',
      label: '🔌 Hardware Interfaces',
      items: [
        'hardware/spi-nand-flash',
        'hardware/sd-card',
        'hardware/i2c',
        'hardware/spi',
        'hardware/pwm',
        {
          type: 'doc',
          id: 'hardware/rtc',
          label: 'RTC',
        },
        'hardware/hpmcu',
        'hardware/audio-voice-input',
        'hardware/camera-csi',
        'hardware/usb-host',
        'hardware/usb-device-gadget',
      ],
    },
  ],
};

module.exports = sidebars;
