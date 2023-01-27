const webpack = require('webpack');
const { merge } = require('webpack-merge');

const { devPort } = require('./package.json');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  target: 'web',
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: process.env.PORT || devPort,
    allowedHosts: ['.localhost', 'tracks.local'],
    hot: true,
    proxy: {
      '/testing/api/v1': {
        target: process.env.API_BASE_URL ?? 'http://localhost:3007',
        secure: false,
        changeOrigin: true,
        headers: {
          Connection: 'keep-alive',
        },
      },
    },
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: JSON.stringify('development'),
      ...process.env,
    }),
  ],
});
