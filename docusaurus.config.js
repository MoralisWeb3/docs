// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Moralis Web3 Documentation",
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

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "https://docs.moralis.io/fonts/golos/Golos-Text_Bold.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "https://docs.moralis.io/fonts/golos/Golos-Text_DemiBold.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "https://docs.moralis.io/fonts/golos/Golos-Text_Medium.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "https://docs.moralis.io/fonts/golos/Golos-Text_Regular.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
  ],

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
          editUrl: "https://github.com/MoralisWeb3/docs/edit/main/",
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
          customCss: [require.resolve("./src/css/custom.css")],
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
      image: "img/moralis-social-card.jpg",
      metadata: [
        {
          name: "twitter:card",
          content: "summary_large_image",
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
      navbar: {
        hideOnScroll: false,
        logo: {
          alt: "Moralis Logo",
          src: "img/logo.svg",
          srcDark: "img/logo-dark.svg",
          href: "/",
          target: "_self",
          height: "32",
          width: "133",
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
            type: "search",
            position: "left",
          },
          // position: Right
          {
            type: "doc",
            docId: "example-dapps/evm/evm",
            position: "right",
            label: "Demos",
          },
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
                value: "API References",
              },
              {
                label: "Web3 Data API",
                type: "doc",
                docId: "reference/web3-data-api/overview",
              },
              {
                label: "Streams API",
                type: "doc",
                docId: "reference/streams-api/overview",
              },
              {
                label: "Authentication API",
                type: "doc",
                docId: "reference/authentication-api/overview",
              },
              {
                type: "html",
                value: "SDK References",
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
            value:
              '<a class="button button--md button--outline button--primary" href="https://admin.moralis.io/" target="_blank">Login</a>',
          },
        ],
      },
      footer: {
        logo: {
          alt: "Moralis Logo",
          src: "img/logo.svg",
          srcDark: "img/logo-dark.svg",
          href: "/",
          target: "_self",
          height: "32",
          width: "133",
        },
        links: [
          {
            title: "Moralis",
            items: [
              {
                label: "Moralis Academy",
                href: "https://academy.moralis.io/",
              },
              {
                label: "Pricing",
                href: "https://moralis.io/pricing/",
              },
              {
                label: "Careers",
                href: "https://talent.moralis.io/",
              },
              {
                label: "Blog",
                href: "https://moralis.io/blog/",
              },
              {
                label: "Contact Support",
                href: "https://moralis.io/contact-support/",
              },
              {
                label: "Status",
                href: "https://status.moralis.io",
              },
              {
                label: "FAQ",
                href: "https://moralis.io/faq/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Forum",
                href: "https://forum.moralis.io/",
              },
              {
                label: "Discord",
                href: "https://moralis.io/joindiscord/",
              },
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/moralis",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/MoralisWeb3",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/channel/UCgWS9Q3P5AxCWyQLT2kQhBw",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/company/moralisweb3/",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Privacy",
                href: "https://moralis.io/privacy-policy/",
              },
              {
                label: "Terms",
                href: "https://moralis.io/terms/",
              },
              {
                label: "Cookie Policy",
                href: "https://moralis.io/cookie-policy/",
              },
              {
                label: "Security Policy",
                href: "https://moralis.io/security-policy/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Moralis Web3 Technology`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["php", "solidity"],
      },
      algolia: {
        appId: "K26H89KJU5",
        apiKey: "e87aff4960989251c8cbf3cccd24d785",
        indexName: "gold-iota",
        contextualSearch: true,
      },
    }),
  plugins: [
    [
      "./src/plugins/docusaurus-plugin-segment",
      { apiKey: "YcdRMoR4AjWlz236XSYBGlj4AnTEn86e", host: "tr-cdn.moralis.io" },
    ],
    ["./src/plugins/vercel-vitals", {}],
    ["@docusaurus/plugin-ideal-image", {}],
  ],
};

module.exports = config;
