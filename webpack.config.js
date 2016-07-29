var path = require('path');
var webpack = require('webpack');
//自动打开浏览器插件
var openBrowserPlugin = require('open-browser-webpack-plugin');
//产出html模板
var HtmlWebpackPlugin = require('html-webpack-plugin');
//产出单独样式文件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//添加css浏览器前缀
var AutopreFixer = require('autoprefixer');


var node_modules = path.resolve(__dirname, 'node_modules');

//var definePlugin = new webpack.DefinePlugin({
//    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
//    __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
//});

module.exports = {

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: './build',
        port: 8080,
        stats: {
            colors: true
        }
    },
    entry: {
        index: path.resolve(__dirname, "src/app.js"),
        vendor: ['angular']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extension: ['', '.js', '.json'],
        alias: { }
    },
    devtool: 'source-map',
    //使用externals可分离第三方包，然后用script标签引入
    externals: [],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    },
    postCss: [
        AutopreFixer({
            browsers: ['last 2 version']
        })
    ],
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin(),
        //definePlugin,
        new webpack.optimize.CommonsChunkPlugin('vender', 'vendor.js'),
        new HtmlWebpackPlugin({
            title: 'demo',
            template: './src/index.html'
        }),
        new openBrowserPlugin({ url: 'http://localhost:8080' }),
        new ExtractTextPlugin("main.css",{
            allChunks: true,
            disable: false
        })

    ]
};