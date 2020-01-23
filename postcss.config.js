/* eslint-disable @typescript-eslint/no-var-requires */

const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.tsx',
    './src/**/*.ts',
    './src/**/*.js',
    // etc.
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // only include postcss in prod
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
