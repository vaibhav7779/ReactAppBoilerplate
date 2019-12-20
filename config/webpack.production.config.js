// Important modules this config uses
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const paths = require('./paths');
// const webpack = require('webpack')

module.exports = require('./webpack.base.config')({
  mode: 'production',
  // In production, we skip all hot-reloading stuff
  entry: {
    main: paths.appIndexJs,
    polyfills: paths.appPolyfillJs,
  },
  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: '[name].[chunkhash].min.js',
    chunkFilename: '[name].[chunkhash].chunk.min.js',
  },

  plugins: [
    new MinifyPlugin({}, { comments: false }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].chunk.css',
    }),
  ],

  performance: {
    assetFilter: assetFilename =>
      !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
  // Emit a source map for easier debugging
  // See https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'hidden-source-map', // 'cheap-module-source-map',
  optimization: {
    minimize: true,
  },
  cssOptions: {
    importLoaders: 1, // No of loaders before css-loder
    sourceMap: true,
  },
  cssModuleOptions: {
    importLoaders: 1, // No of loaders before css-loder
    sourceMap: true,
    modules: true,
    getLocalIdent: getCSSModuleLocalIdent, // ou can also specify the absolute path to your custom getLocalIdent function to generate classname based on a different schema. By default we use built-in function to generate a classname.
  },
  sassOptions: {
    importLoaders: 2, // No of loaders before css-loder
    sourceMap: true,
  },
  sassModuleOptions: {
    importLoaders: 2, // No of loaders before css-loder
    sourceMap: true,
    modules: true,
    getLocalIdent: getCSSModuleLocalIdent, // ou can also specify the absolute path to your custom getLocalIdent function to generate classname based on a different schema. By default we use built-in function to generate a classname.
  },
  sassSourceMap: true,
  cssSourceMap: true,
  HtmlWebpackPluginMinifyOptions: {
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    },
  },
});
