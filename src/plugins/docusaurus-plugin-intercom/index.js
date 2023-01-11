module.exports = function (_, __) {
  const isProd = process.env.NODE_ENV === "production";

  return {
    name: "docusaurus-plugin-intercom",

    injectHtmlTags() {
      if (!isProd) {
        return {};
      }
      return {
        headTags: [
          {
            tagName: "script",
            attributes: {
              src: "/js/intercom-script.js",
              async: true,
            },
          },
        ],
      };
    },
  };
};
