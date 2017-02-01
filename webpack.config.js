var path = require("path");
var WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    outputPath: __dirname,
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
        new WriteFilePlugin()
    ],
};