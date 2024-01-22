// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const dotenv = require("dotenv");

dotenv.config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Moralis Web3 Documentation",
  url: "https://docs.moralis.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",

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
              label: "2.2",
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
            type: "search",
            position: "left",
          },
          {
            type: "html",
            position: "left",
            className: "navbar__item--linebreak",
            value: "<hr>",
          },
          {
            type: "doc",
            docId: "web3-data-api/evm/reference/reference",
            position: "left",
            label: "Web3 Data API",
          },
          {
            type: "doc",
            docId: "streams-api/evm/overview",
            position: "left",
            label: "Streams API",
          },
          {
            type: "doc",
            docId: "market-insights-api/overview",
            position: "left",
            label: "Market Insights API",
          },
          {
            to: "changelog",
            position: "left",
            label: "Changelog",
          },
          {
            to: "web3-data-api/evm/all-faqs",
            position: "left",
            label: "FAQ",
          },
          // position: Right
          {
            type: "html",
            position: "right",
            value:
              '<a href="https://admin.moralis.io/register" target="_blank">Get API Key</a>',
            className: "navbar__item--hide-on-mobile",
          },
          {
            type: "html",
            position: "right",
            value:
              '<a class="button button--md button--outline button--primary" href="/web3-data-api/evm/reference/wallet-api/get-nfts-by-wallet" target="_blank">Test API Live</a>',
            className: "navbar__item--hide-on-mobile navbar__item--login",
          },
          {
            type: "html",
            position: "right",
            className: "navbar__item--linebreak",
            value: "<hr>",
          },
          {
            type: "doc",
            docId: "supported-chains/overview",
            position: "right",
            label: "Supported Chains",
          },
          {
            type: "doc",
            docId: "guides/overview",
            position: "right",
            label: "Guides",
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
                docId: "web3-data-api/evm/reference/reference",
              },
              {
                label: "Streams API",
                type: "doc",
                docId: "streams-api/evm/reference/reference",
              },
              {
                label: "Authentication API",
                type: "doc",
                docId: "authentication-api/evm/reference/reference",
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
        additionalLanguages: ["php", "solidity", "csharp"],
      },
      algolia: {
        appId: "K26H89KJU5",
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: "gold-iota",
        contextualSearch: true,
      },
    }),
  customFields: {
    specialApiKey: [],
  },
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'GTM-T5T6X6FS',
        anonymizeIP: true,
      },
    ],
    [
      "./src/plugins/docusaurus-plugin-segment",
      { apiKey: process.env.SEGMENT_API_KEY, host: "tr-cdn.moralis.io" },
    ],
    ["./src/plugins/vercel-vitals", {}],
    ["@docusaurus/plugin-ideal-image", {}],
    async function pluginTailwindCSS(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        injectHtmlTags() {
          return {
            headTags: [
              {
                tagName: "link",
                attributes: {
                  rel: "stylesheet",
                  href: "/css/preflight.min.css",
                },
              },
            ],
          };
        },
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
  scripts: [
    {
      src: "/custom.js",
      async: true,
    },
  {
    src: "/js/index.js",
    async: true,
  },
  ],
};

module.exports = config;
