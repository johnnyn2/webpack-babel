const webpack = require('webpack')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const path = require('path')

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    open: true,
    hot: true,
    port: 9000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(commonConfig, devConfig)
