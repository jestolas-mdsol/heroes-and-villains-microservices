const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = (env) => {
  return {
    devtool: 'source-map',
    target: 'node',
    externals: nodeExternals(),
    mode: env,
    entry: path.resolve(__dirname, '../app/index.js'),
    output: {
      path: path.resolve(__dirname, '../build'),
      filename: 'villains.app.js',
    },
  };
}
