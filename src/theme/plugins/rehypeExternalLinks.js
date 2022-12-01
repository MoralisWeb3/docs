// Inspired by https://github.com/rehypejs/rehype-external-links
// Couldn't use the original module as it's ESM only

const visit = require("unist-util-visit");

const rehypeExternalLinks = () => (tree) => {
  visit(tree, "element", (node) => {
    if (
      node.tagName !== "a" ||
      !node.properties ||
      typeof node.properties.href !== "string" ||
      !/^https?:\/\//.test(node.properties.href)
    ) {
      return;
    }

    node.properties.target = "_blank";
    node.properties.rel = ["nofollow", "noopener", "noreferrer"];
  });
};

module.exports = rehypeExternalLinks;
