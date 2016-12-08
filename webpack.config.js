//webpack.config.js
var webpack = require('webpack');
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
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  }
};