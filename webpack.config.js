//webpack.config.js

var path = require('path');

module.exports = {

  entry: ['./client/index.js'],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  }
};