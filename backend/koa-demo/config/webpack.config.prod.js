const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
const TerserPlugin = require('terser-webpack-plugin');

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  stats: { children: false },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: false,
            drop_debugger: false,
            dead_code: false
          },
          mangle: true, // Note `mangle.properties` is `false` by default.
          output: {
            comments: false,
            beautify: false
          },
          parallel: true,
          sourceMap: false
        }
      }),
    ],
    // avoid duplicated dependencies
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3,
          enforce: true
        }
      }
    }
  }
});

module.exports = webpackConfig;
