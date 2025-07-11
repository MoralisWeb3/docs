const snakeToCamelCase = (str) => {
  return str.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};

module.exports = snakeToCamelCase;