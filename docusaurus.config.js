// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const oembed = require("remark-oembed");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Moralis Web3 Documentation - Step-by-Step Web3 API Tutorials",
  url: "https://docs.moralis.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Moralis", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          lastVersion: "current",
          versions: {
            current: {
              label: "2.0",
              path: "",
            },
          },
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          remarkPlugins: [[oembed, { syncWidget: true }]],
        },
        blog: false,
        pages: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      image: "img/docusaurus-social-card.jpg",
      algolia: {
        appId: "NC1LK93TN5",
        apiKey: "b36064a11a9ce260d626a095a8ff2693",
        indexName: "moralis-docs",
      },
      navbar: {
        hideOnScroll: false,
        logo: {
          alt: "Moralis Logo",
          src: "img/logo.svg",
          srcDark: "img/logo-dark.svg",
          href: "https://docs.moralis.io",
          target: "_self",
        },
        items: [
          {
            type: "doc",
            docId: "getting-started",
            position: "left",
            label: "Guides",
          },
          {
            type: "doc",
            docId: "reference/introduction",
            position: "left",
            label: "API Reference",
          },
          {
            type: "dropdown",
            label: "SDK References",
            position: "left",
            items: [
              {
                label: "NodeJS",
                href: "https://docs.moralis.io/",
                target: "_blank",
              },
              {
                label: "Python",
                href: "https://docs.moralis.io/",
                target: "_blank",
              },
              {
                label: "C#",
                href: "https://docs.moralis.io/",
                target: "_blank",
              },
            ],
          },
          // Right
          {
            position: "right",
            label: "Dashboard",
            href: "https://admin.moralis.io/",
            target: "_blank",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              {
                type: "html",
                value: '<hr class="dropdown-separator">',
              },
              {
                type: "html",
                className: "dropdown-archived-versions",
                value: "<b>Archived versions</b>",
              },
              {
                href: "https://v1docs.moralis.io/",
                label: "1.0",
              },
              {
                type: "html",
                value: '<hr class="dropdown-separator">',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["php"],
      },
    }),
  plugins: [
    ["@docusaurus/plugin-ideal-image", {}],
    ["docusaurus-plugin-dotenv", { path: "./.env", systemvars: true }],
  ],
};

module.exports = config;
