const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  devtool: 'source-map',
  target: 'node',
  externals: nodeExternals(),
  mode: 'production',
  entry: path.resolve(__dirname, '../../server/app.js'),
  output: {
    path: path.resolve(__dirname, '../../build/server'),
    filename: 'app.bundle.js',
  },
};
