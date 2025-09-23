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
        throw new Error("Unable to find a Segment `apiKey` in `plugin` options or `themeConfig`.");
    }

    const isProd = process.env.NODE_ENV === "production";

    const contents = snippet.min(segment);

    const cdnHost =
        segment.useHostForBundles === true && segment.host ? segment.host : "cdn.segment.io";

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
                            src: "https://widget.intercom.io/widget/gy4tissf",
                            async: true,
                        },
                    },
                    {
                        tagName: "script",
                        attributes: {
                            type: "text/javascript",
                        },
                        innerHTML:
                            "window.intercomSettings={api_base:'https://api-iam.eu.intercom.io',app_id:'gy4tissf'};\n" +
                            "(function(){var w=window;var ic=w.Intercom;if(typeof ic==='function'){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/gy4tissf';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();" +
                            "\n",
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
