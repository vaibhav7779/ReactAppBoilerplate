// Important modules this config uses
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const webpack = require('webpack')

module.exports = require('./webpack.base.babel')({
  mode: 'production',
  // In production, we skip all hot-reloading stuff
  entry: [
    path.join(process.cwd(), 'app/app.js')
  ],

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js'
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].chunk.css'
    }),
  ],

  performance: {
    assetFilter: (assetFilename) => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)),
  },
  optimization: {
    minimize: true
  },
  cssOptions: {
    importLoaders: 1,// No of loaders before css-loder
    sourceMap: true,
  },
  cssModuleOptions: {
    importLoaders: 1,// No of loaders before css-loder
    sourceMap: true,
    modules: true,
    getLocalIdent: getCSSModuleLocalIdent, //ou can also specify the absolute path to your custom getLocalIdent function to generate classname based on a different schema. By default we use built-in function to generate a classname.
  },
  sassOptions: {
    importLoaders: 2,// No of loaders before css-loder
    sourceMap: true,
  },
  sassModuleOptions: {
    importLoaders: 2, // No of loaders before css-loder
    sourceMap: true,
    modules: true,
    getLocalIdent: getCSSModuleLocalIdent, //ou can also specify the absolute path to your custom getLocalIdent function to generate classname based on a different schema. By default we use built-in function to generate a classname.
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
  }
});
