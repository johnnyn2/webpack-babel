const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        test: './src/components/test.js',
        test1: './src/components/test1.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }, {
            test: /\.jpg|png|gif$/,
            use: {
                loader: 'url-loader',
                options: {
                    name: '[name]_[hash].[ext]',
                    outputPath: 'imgs/',
                    limit: 2048
                }
            }
        }, {
            test: /\.eot|ttf|svg|woff$/,
            use: {
                loader: 'file-loader'
            }
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2
                    }
                },
                'sass-loader',
                'postcss-loader'
            ]
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.ftl',
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/index1.ftl',
            inject: true,
            chunks: ['index'],
            filename: 'index1.html'
        }),
        new CleanWebpackPlugin()
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
}