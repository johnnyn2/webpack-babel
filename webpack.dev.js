const webpack = require('webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
    mode: 'development',
    devtool: false,

    // 起個服務器
    devServer: {
        // 這個意思是服務器要生成在哪個文件夾下
        contentBase: './dist',
        // 啟動的時候自動打開瀏覽器，然後自動訪問這個服務器地址
        open: true,
        // 開啟Hot Module Replacement
        hot: true,
        port: 9000
    },
    // HtmlWebpackPlugin會在打包結束後，自動生成一個html文件，並把打包生成的js自動引入到這個html文件中
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(commonConfig, devConfig);