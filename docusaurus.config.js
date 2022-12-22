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
        blog: {
          blogTitle: "Changelog",
          blogSidebarTitle: "Recent Changes",
          postsPerPage: "ALL",
          routeBasePath: "/changelog",
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
        gtag: {
          trackingID: "G-VYPYJZYKCB",
          anonymizeIP: false,
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
      hotjar: {
        applicationId: "3295610",
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
            docId: "example-dapps/evm/evm",
            position: "left",
            label: "Example dapps",
          },
          // position: Right
          {
            to: "changelog",
            position: "right",
            label: "Changelog",
          },
          {
            type: "dropdown",
            label: "References",
            position: "right",
            items: [
              {
                type: "html",
                value: 'API References',
              },
              {
                label: "Web3 Data API",
                type: "doc",
                docId: "web3-data-api/overview",
              },
              {
                label: "Streams API",
                type: "doc",
                docId: "web3-data-api/overview",
              },
              {
                label: "Authentication API",
                type: "doc",
                docId: "web3-data-api/overview",
              },
              {
                type: "html",
                value: 'SDK References',
              },
              {
                label: "JS SDK",
                href: "https://moralisweb3.github.io/Moralis-JS-SDK/",
                target: "_blank",
              },
              {
                label: "Python SDK",
                href: "https://moralisweb3.github.io/Moralis-Python-SDK/",
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
                value: "Archived versions",
              },
              {
                href: "https://v1docs.moralis.io/",
                label: "1.0",
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
        additionalLanguages: ["php","solidity"],
      },
    }),
  plugins: [
    ["docusaurus-plugin-hotjar", {}],
    ["@docusaurus/plugin-ideal-image", {}],
    ["docusaurus-plugin-dotenv", { path: "./.env", systemvars: true }],
  ],
};

module.exports = config;
