const path = require('path');

module.exports = function (context, options) {
  const isProd = process.env.NODE_ENV === 'production';
  
  return {
    name: 'vercel-vitals',

    async contentLoaded({actions}) {
      const {setGlobalData} = actions;

      const options = {
        debug: true,
        analyticsId: process.env.VERCEL_ANALYTICS_ID,
      };

      // Create friends global data
      setGlobalData({options});
    },

    getClientModules() {
        return isProd ? [path.resolve(__dirname, './vercel-vitals')] : [];
    },
  };
};