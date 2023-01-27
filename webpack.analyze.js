const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const prod = require('./webpack.prod.js');

module.exports = merge(prod, {
  mode: 'production',
  plugins: [new BundleAnalyzerPlugin()],
});
