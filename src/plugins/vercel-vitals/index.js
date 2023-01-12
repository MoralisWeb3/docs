const path = require('path');

module.exports = function (context, options) {
  const isProd = process.env.NODE_ENV === 'production';
  return {
    name: 'vercel-vitals',
    getClientModules() {
        return isProd ? [path.resolve(__dirname, './vercel-vitals')] : [];
    },
  };
};