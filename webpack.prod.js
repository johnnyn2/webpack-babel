const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const prodConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            }
          },
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  devtool: 'nosources-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].min.css'
    })
  ]
}
module.exports = merge(commonConfig, prodConfig)
