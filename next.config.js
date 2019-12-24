/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

const withAll = config => withCss(withSass(withMDX(config)));

const isDev = process.env.NODE_ENV === "development";

module.exports = withAll({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2,
    localIdentName: "[local]___[hash:base64:5]"
  },

  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  exportTrailingSlash: !isDev,

  webpack(config) {
    // needed to allow for root imports
    config.resolve.modules.push(path.resolve("./"));

    // add SASS global + module support - https://github.com/zeit/next-plugins/issues/149#issuecomment-526881653
    config.module.rules.forEach(rule => {
      if (rule.test.test(".sass") || rule.test.test(".scss")) {
        rule.rules = rule.use.map(useRule => {
          if (typeof useRule === "string") {
            return { loader: useRule };
          }

          if (useRule.loader.startsWith("css-loader")) {
            return {
              oneOf: [
                {
                  test: /\.module\.s[ac]ss$/,
                  loader: useRule.loader,
                  options: useRule.options
                },
                {
                  loader: useRule.loader,
                  options: {}
                }
              ]
            };
          }
          return useRule;
        });
        delete rule.use;
      }
    });

    return config;
  }
});
