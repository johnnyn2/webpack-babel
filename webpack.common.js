const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    index: './src/js/pages/index.js',
    posts: './src/js/pages/posts.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.jpg|png|gif|svg$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[contenthash].[ext]',
          outputPath: 'assets/images/',
          esModule: false
        }
      }
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ['file-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index',
      template: './src/pages/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'posts',
      template: './src/pages/posts.html',
      inject: true,
      chunks: ['posts'],
      filename: 'posts.html'
    }),
    new CleanWebpackPlugin()
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  }
}
