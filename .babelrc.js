module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
      },
    ],
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '',
      },
    ],
  ],
};
