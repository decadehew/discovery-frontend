const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  stats: { children: false }
});

module.exports = webpackConfig;
