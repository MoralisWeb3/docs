// @ts-check

const dotenv = require("dotenv");

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/palenight");

dotenv.config();

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Moralis API Documentation",
    url: "https://docs.moralis.com",
    baseUrl: "/",
    onBrokenLinks: "ignore",
    onBrokenMarkdownLinks: "throw",
    favicon: "img/moralis-icon.svg",

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
                href: "https://docs.moralis.com/fonts/golos/Golos-Text_Bold.woff2",
                as: "font",
                type: "font/woff2",
                crossorigin: "anonymous",
            },
        },
        {
            tagName: "link",
            attributes: {
                rel: "preload",
                href: "https://docs.moralis.com/fonts/golos/Golos-Text_DemiBold.woff2",
                as: "font",
                type: "font/woff2",
                crossorigin: "anonymous",
            },
        },
        {
            tagName: "link",
            attributes: {
                rel: "preload",
                href: "https://docs.moralis.com/fonts/golos/Golos-Text_Medium.woff2",
                as: "font",
                type: "font/woff2",
                crossorigin: "anonymous",
            },
        },
        {
            tagName: "link",
            attributes: {
                rel: "preload",
                href: "https://docs.moralis.com/fonts/golos/Golos-Text_Regular.woff2",
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
            image: "img/moralis_developer_documentation.png",
            metadata: [
                {
                    name: "twitter:card",
                    content: "summary_large_image",
                },
                {
                    name: "og:site_name",
                    content: "Moralis API Documentation",
                },
            ],
            docs: {
                sidebar: {
                    autoCollapseCategories: true,
                    hideable: true,
                },
            },
            colorMode: {
                defaultMode: "light",
                disableSwitch: false,
                respectPrefersColorScheme: false,
            },
            navbar: {
                hideOnScroll: false,
                logo: {
                    alt: "Moralis Logo",
                    src: "img/moralis-logo.png",
                    srcDark: "img/moralis-logo-dark.png",
                    href: "/",
                    target: "_self",
                    height: "32",
                    width: "192",
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
                    // Temporarily hidden - Get Started section
                    // {
                    //   to: "/get-started",
                    //   label: "Get Started",
                    //   position: "left",
                    // },
                    {
                        to: "/web3-data-api/evm",
                        label: "EVM",
                        position: "left",
                    },
                    {
                        to: "/web3-data-api/solana",
                        label: "Solana",
                        position: "left",
                    },
                    {
                        type: "doc",
                        docId: "streams-api/evm/overview",
                        position: "left",
                        label: "Streams",
                    },
                    {
                        type: "doc",
                        docId: "rpc-nodes/overview",
                        position: "left",
                        label: "RPC Nodes",
                    },
                    {
                        type: "doc",
                        docId: "moralis-cortex/overview",
                        position: "left",
                        label: "Moralis Cortex",
                    },
                    // position: Right
                    {
                        type: "html",
                        position: "right",
                        value: '<a href="https://admin.moralis.com/register" target="_blank">Get API Key</a>',
                        className: "navbar__item--hide-on-mobile",
                    },
                    {
                        type: "html",
                        position: "right",
                        value: '<a class="button button--md button--outline button--primary" href="/web3-data-api/evm/reference/wallet-api/get-nfts-by-wallet" target="_blank">Test API Live</a>',
                        className: "navbar__item--hide-on-mobile navbar__item--login",
                    },
                    {
                        type: "html",
                        position: "right",
                        className: "navbar__item--linebreak",
                        value: "<hr>",
                    },
                    {
                        to: "changelog",
                        position: "right",
                        label: "Changelog",
                    },
                    {
                        to: "supported-chains",
                        position: "right",
                        label: "Supported Chains",
                    },
                    {
                        type: "dropdown",
                        label: "Resources",
                        position: "right",
                        items: [
                            {
                                type: "html",
                                value: "API References",
                                className: "dropdown-divider",
                            },
                            {
                                label: "EVM",
                                type: "doc",
                                docId: "web3-data-api/evm/reference/reference",
                            },
                            {
                                label: "Solana",
                                type: "doc",
                                docId: "web3-data-api/solana/reference/reference",
                            },
                            {
                                label: "Streams",
                                type: "doc",
                                docId: "streams-api/evm/reference/reference",
                            },
                            {
                                label: "Auth",
                                type: "doc",
                                docId: "authentication-api/evm/reference/reference",
                            },
                            {
                                type: "html",
                                value: "Swagger",
                                className: "dropdown-divider",
                            },
                            {
                                label: "EVM Swagger",
                                href: "https://deep-index.moralis.io/api-docs-2.2/",
                                target: "_blank",
                            },
                            {
                                label: "Solana Swagger",
                                href: "https://solana-gateway.moralis.io/api/#/",
                                target: "_blank",
                            },
                            {
                                label: "Streams Swagger",
                                href: "https://api.moralis-streams.com/api-docs/",
                                target: "_blank",
                            },
                            {
                                label: "Auth Swagger",
                                href: "https://authapi.moralis.io/api-docs/",
                                target: "_blank",
                            },
                        ],
                    },
                ],
            },
            footer: {
                logo: {
                    alt: "Moralis Logo",
                    src: "img/moralis-logo.png",
                    srcDark: "img/moralis-logo.png",
                    href: "/",
                    target: "_self",
                    height: "32",
                    width: "192",
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
                                href: "https://developers.moralis.com/pricing/",
                            },
                            {
                                label: "Careers",
                                href: "https://talent.moralis.io/",
                            },
                            {
                                label: "Blog",
                                href: "https://developers.moralis.com/blog/",
                            },
                            {
                                label: "Contact Support",
                                href: "https://developers.moralis.com/contact-support/",
                            },
                            {
                                label: "Status",
                                href: "https://status.moralis.io",
                            },
                            {
                                label: "FAQ",
                                href: "https://developers.moralis.com/faq/",
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
                                href: "https://developers.moralis.com/joindiscord/",
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
                                href: "https://x.com/moralisdevs",
                            },
                            {
                                label: "Youtube",
                                href: "https://www.youtube.com/@MoralisWeb3",
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
                                href: "https://developers.moralis.com/privacy-policy/",
                            },
                            {
                                label: "Terms",
                                href: "https://developers.moralis.com/terms/",
                            },
                            {
                                label: "Cookie Policy",
                                href: "https://developers.moralis.com/cookie-policy/",
                            },
                            {
                                label: "Security Policy",
                                href: "https://developers.moralis.com/security-policy/",
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
                apiKey: process.env.ALGOLIA_API_KEY || "dummy-key-for-build",
                indexName: "gold-iota",
                contextualSearch: true,
            },
        }),
    customFields: {
        specialApiKey: [],
    },
    plugins: [
        [
            "@docusaurus/plugin-google-tag-manager",
            {
                containerId: "GTM-WD3V6LS6",
            },
        ],
        // Temporarily disabled - Segment plugin
        [
            "./src/plugins/docusaurus-plugin-segment",
            { apiKey: process.env.SEGMENT_API_KEY || "dummy", host: "tr-cdn.moralis.io" },
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
    ],

    clientModules: [require.resolve("./src/noscript-gtm.js")],
};

module.exports = config;
