// .storybook/main.js
const path = require('path');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-postcss',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.js'),
    },
  },
  staticDirs: ['../public'],
  /**
   * When chromatic hosts your stories it will not have access
   * to your enviroment variables. So in chromatic, your storybook will have errors.
   * If any component needs environment variables to function properly include them here.
   *
   * Return an object of key-value pairs
   */
  env: () => ({}),
  docs: {
    autodocs: true,
  },
};
