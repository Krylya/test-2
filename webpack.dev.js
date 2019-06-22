const merge = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies
const common = require('./webpack.common'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
});
