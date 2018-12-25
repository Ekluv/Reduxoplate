const merge = require('webpack-merge');
const base = require('./webpack.base.config');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(base, {
  plugins: [
    new CleanWebpackPlugin('../build', { allowExternal: true }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new OptimizeCssAssetsPlugin(),
  ],
});
