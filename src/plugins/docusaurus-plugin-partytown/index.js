module.exports = function (_, __) {
  const isProd = process.env.NODE_ENV === "production";

  return {
    name: "docusaurus-plugin-partytown",
    injectHtmlTags() {
      if (!isProd) {
        return {};
      }
      return {
        headTags: [
          {
            tagName: "script",
            attributes: {
              src: "/~partytown/debug/partytown.js",
              async: true,
            },
          },
        ],
      };
    },
  };
};
