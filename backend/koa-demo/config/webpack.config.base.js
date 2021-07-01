const path = require('path');
const nodeExternals = require('webpack-node-externals'); 
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { APP_PATH, DIST_PATH } = require('./utils');

const webpackConfig = {
  entry: {
    server: path.join(APP_PATH, 'index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: DIST_PATH
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [path.join(__dirname, '/node_modules')]
      }
    ]
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      // 定義環境變數利於不同環境使用不同變數
      'process.env': {
        NODE_ENV: (process.env.NODE_ENV === 'production' || 
        process.env.NODE_ENV === 'prod') ? "'production" :
        "'development'"
      }
    })
  ],
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: true,
    __dirname: true,
    setImmediate: true,
    path: true
  }
};

module.exports = webpackConfig;
