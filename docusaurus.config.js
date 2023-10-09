// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Omega2 Beta Firmware Documentation',
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            'https://github.com/OnionIoT/documentation/tree/main/'
          // TODO: make sure above link works
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
        title: 'Omega2 Beta Firmware Documentation',
        logo: {
          alt: 'Onion Badge',
          src: 'img/onion-badge.png',
          // alt: 'Onion Logo',
          // src: 'img/Onion-Logo-Full.svg',
        },
        // items: [
        //   {
        //     type: 'docSidebar',
        //     sidebarId: 'docsSidebar',
        //     position: 'left',
        //     label: 'Tutorial',
        //   },
        //   {to: '/blog', label: 'Blog', position: 'left'},
        //   {
        //     href: 'https://github.com/facebook/docusaurus',
        //     label: 'GitHub',
        //     position: 'right',
        //   },
        // ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Beta Firmware Intro',
                to: '/docs/intro',
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
                // TODO: confirm above link is correct
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
};

module.exports = config;
