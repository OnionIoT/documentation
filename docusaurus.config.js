// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// added valid placeholder definitions for future work to implement variable use in markdown
const globalVariables = {
  current: {
    'OPENWRT_VERSION': '23.05',
    'OPENWRT_VERSION_RELEASE_YEAR': '2024',
    'OPENWRT_RELEASE': '23.05.3',
    'KERNEL_VERSION': '5.15',
    'ONION_FW_VERSION': '23.05.3-20240807',
    'ONION_FW_BUILDDATE': '20240807',
    'ONION_FW_BUILDDATE_TEXT': 'August 7, 2024',
    'NODE_VERSION': 'v18',
    'NODE_FULL_VERSION': 'v18.19.1'
  },
  '23.05.3': {
    'OPENWRT_VERSION': '23.05',
    'OPENWRT_VERSION_RELEASE_YEAR': '2024',
    'OPENWRT_RELEASE': '23.05.3',
    'KERNEL_VERSION': '5.15',
    'ONION_FW_VERSION': '23.05.3-20240807',
    'ONION_FW_BUILDDATE': '20240807',
    'ONION_FW_BUILDDATE_TEXT': 'August 7, 2024',
    'NODE_VERSION': 'v18',
    'NODE_FULL_VERSION': 'v18.19.1'
  }
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Onion Omega2 Documentation',
  tagline: 'Everything you need to know',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://documentation.onioniot.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OnionIoT', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo: done!
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/OnionIoT/documentation/tree/main/'
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/onion-badge.png',
      navbar: {
        title: 'Onion Omega2 Documentation',
        logo: {
          alt: 'Onion Badge',
          src: 'img/onion-badge.png',
          // alt: 'Onion Logo',
          // src: 'img/Onion-Logo-Full.svg',
        },
        items: [
          {
            type: 'doc',
            sidebarId: 'docsSidebar',
            position: 'right',
            docId: 'introduction/intro',
            label: 'Docs',
          },
          {
            type: 'docSidebar',
            position: 'right',
            sidebarId: 'guides',
            label: 'Guides',
          },
        //   {to: '/blog', label: 'Blog', position: 'left'},
        //   {
        //     href: 'https://github.com/facebook/docusaurus',
        //     label: 'GitHub',
        //     position: 'right',
        //   },
        ],
      },
      announcementBar: {
        id: 'announcementBar-1', // Increment on change
        content: `<strong>⚠️This documentation is for firmware based on OpenWRT 23.05 only!⚠️</strong> For information on firmware v0.3.4 and earlier, visit our <a target="_blank" rel="noopener noreferrer" href="https://docs.onion.io">legacy documentation site.</a>`
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Beta Firmware Intro',
                to: '/',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Onion Main Site',
                href: 'https://onion.io',
              },
              {
                label: 'Onion Community Forum',
                href: 'https://community.onion.io',
              },
              {
                label: 'Where to buy Onion products',
                href: 'https://onion.io/buy',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Onion Blog',
                href: 'https://onion.io/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/OnionIoT/documentation',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Onion Corporation<br>Built with Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-NT5DN7NR5L',
        anonymizeIP: true,
      },
    ],
  ],
};

module.exports = config;
