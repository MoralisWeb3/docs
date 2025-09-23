const path = require("path");

module.exports = function () {
    const isProd = process.env.NODE_ENV === "production";

    return {
        name: "vercel-vitals",

        contentLoaded() {
            console.log("process.env.VERCEL_ANALYTICS_ID", process.env.VERCEL_ANALYTICS_ID);
        },

        getClientModules() {
            return isProd ? [path.resolve(__dirname, "./vercel-vitals")] : [];
        },
    };
};
