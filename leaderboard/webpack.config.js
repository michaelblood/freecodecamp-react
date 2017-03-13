const webpack = require('webpack');

module.exports = {
  entry: ['whatwg-fetch', './src/index.js'],

  output: {
    path: './public',
    filename: 'bundle.js',
  },
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-2',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],

      },
    ],
  }
}
