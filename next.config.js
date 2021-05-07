/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const isDev = process.env.NODE_ENV === "development";
const isSourceMapsEnabled = !!process.env.ENABLE_SOURCEMAPS;

const buildEnv = (keys) => keys.reduce((acc, key) => ({ ...acc, [key]: process.env[key] }), {});

const withAll = (config) => {
  let builtUpConfig = config;
  return builtUpConfig;
};

module.exports = withAll({
  // Public (client-side) env vars go here
  // Do NOT put private env vars in this `env` key. Put them in `serverRuntimeConfig` instead
  env: buildEnv([
    'SITE_NAME',
    'SUPABASE_API_URL',
    'SUPABASE_CLIENT_KEY',
  ]),
  // Private (server-side only) env vars go here
  serverRuntimeConfig: buildEnv([
    'SUPABASE_SERVICE_KEY',
  ]),

  // see https://github.com/netlify/next-on-netlify#1-set-nextjs-target-to-serverless
  // might need to be changed if binaries are need (e.g. something like Prisma)
  target: "serverless",

  pageExtensions: ["js", "jsx", "ts", "tsx"],

  trailingSlash: !isDev,
  productionBrowserSourceMaps: isSourceMapsEnabled,

  future: {
    webpack5: true,
  },

  webpack(config) {
    // needed to allow for root imports
    config.resolve.modules.push(path.resolve("./"));

    return config;
  },
});
