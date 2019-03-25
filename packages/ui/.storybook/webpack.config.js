module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.story\.js$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre'
  });

  config.devtool = 'cheap-module-eval-source-map';

  return config;
};
