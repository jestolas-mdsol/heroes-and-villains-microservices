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
      filename: 'heroes.app.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@apis': path.resolve(__dirname, '../apis/'),
        '@utils': path.resolve(__dirname, '../utils'),
      }
    }
  };
}
