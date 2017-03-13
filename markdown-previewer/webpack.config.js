const webpack = require('webpack');

module.exports = {
  entry: './index.js',

  output: {
    path: './',
    filename: 'bundle.js'
  },
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=react&presets[]=es2015' }
    ]
  }
}
