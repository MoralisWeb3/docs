// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Moralis Web3 Documentation",
  url: "https://docs-gold-iota.vercel.app",
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

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

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
          remarkPlugins: [
            [require("remark-oembed"), { syncWidget: true }],
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
        },
        blog: false,
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
      image: "/img/moralis-social-card.jpg",
      metadata: [
        {
          name: "description",
          content:
            "Integrate Web3 into any tech stack. Follow Moralis’ documentation for step-by-step guides, tutorials, and API references for our powerful Web3 APIs.",
        },
        {
          name: "twitter:title",
          content: "Moralis Web3 Documentation",
        },
        {
          name: "twitter:description",
          content:
            "Integrate Web3 into any tech stack. Follow Moralis’ documentation for step-by-step guides, tutorials, and API references for our powerful Web3 APIs.",
        },
        {
          name: "twitter:image",
          content: "/img/moralis-social-card.jpg",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "og:title",
          content: "Moralis Web3 Documentation",
        },
        {
          name: "og:description",
          content:
            "Integrate Web3 into any tech stack. Follow Moralis’ documentation for step-by-step guides, tutorials, and API references for our powerful Web3 APIs.",
        },
        {
          name: "og:site_name",
          content: "Moralis Web3 Documentation",
        },
      ],
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
          href: "/",
          target: "_self",
        },
        items: [
          {
            type: "doc",
            docId: "web3-data-api/overview",
            position: "left",
            label: "Web3 Data API",
          },
          {
            type: "doc",
            docId: "streams-api/overview",
            position: "left",
            label: "Streams API",
          },
          {
            type: "doc",
            docId: "authentication-api/overview",
            position: "left",
            label: "Authentication API",
          },
          {
            type: "doc",
            docId: "example-dapps/overview",
            position: "left",
            label: "Example dapps",
          },
          // position: Right
          {
            type: "doc",
            docId: "introduction",
            position: "right",
            label: "API Reference",
          },
          {
            type: "dropdown",
            label: "SDK References",
            position: "right",
            items: [
              {
                label: "NodeJS",
                href: "/",
                target: "_blank",
              },
              {
                label: "Python",
                href: "/",
                target: "_blank",
              },
              {
                label: "C#",
                href: "/",
                target: "_blank",
              },
            ],
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
          {
            type: "html",
            position: "right",
            className: "dashboard-button",
            value:
              '<a class="button button--outline button--primary" href="https://admin.moralis.io/" target="_blank">Dashboard</a>',
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
