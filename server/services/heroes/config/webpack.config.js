const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  devtool: 'source-map',
  target: 'node',
  externals: nodeExternals(),
  mode: 'production',
  entry: path.resolve(__dirname, '../app/index.js'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'heroes.app.js',
  },
};
