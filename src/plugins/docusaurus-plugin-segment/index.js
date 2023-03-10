const path = require("path");
const snippet = require("@segment/snippet");

module.exports = function (context, fromOptions) {
  const { siteConfig } = context;
  const { themeConfig } = siteConfig;
  const { segment: fromThemeConfig } = themeConfig || {};

  const segment = {
    ...fromThemeConfig,
    ...fromOptions,
  };

  const { apiKey } = segment;

  if (!apiKey) {
    throw new Error(
      "Unable to find a Segment `apiKey` in `plugin` options or `themeConfig`."
    );
  }

  const isProd = process.env.NODE_ENV === "production";

  const contents = snippet.min(segment);

  const cdnHost =
    segment.useHostForBundles === true && segment.host
      ? segment.host
      : "cdn.segment.io";

  return {
    name: "docusaurus-plugin-segment",

    getClientModules() {
      return isProd ? [path.resolve(__dirname, "./segment")] : [];
    },

    injectHtmlTags() {
      if (!isProd) {
        return {};
      }
      return {
        headTags: [
          {
            tagName: "script",
            attributes: {
              type: "text/javascript",
              charset: "UTF-8",
              src: "https://geo.cookie-script.com/s/56721ba44cd3f4b0527240dceef70f8b.js?state=ca&region=eu",
              async: true,
            },
          },
          {
            tagName: "script",
            attributes: {
              type: "text/javascript",
              charset: "UTF-8",
              src: "https://widget.intercom.io/widget/gy4tissf",
              async: true,
            },
          },
          {
            tagName: "link",
            attributes: {
              rel: "preconnect",
              href: `https://geo.cookie-script.com`,
            },
          },
          {
            tagName: "link",
            attributes: {
              rel: "preconnect",
              href: `https://widget.intercom.io`,
            },
          },
          {
            tagName: "link",
            attributes: {
              rel: "preconnect",
              href: `https://${cdnHost}`,
            },
          },
          {
            tagName: "script",
            attributes: {
              type: "text/plain",
              async: true,
              "data-cookiescript": "accepted",
              "data-cookiecategory": "targeting",
            },
            innerHTML: contents + "\n",
          },
        ],
      };
    },
  };
};
