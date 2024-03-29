const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')
const TerserPlugin = require("terser-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpackConfig = require('./webpack.config')
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
    const watchMode = argv.liveReload || false
    const modeEnv = argv.mode || 'development'
    const isProd = modeEnv === 'production'
    const config = webpackConfig(modeEnv)
    console.log(config.resolve);
    const optimizations = {
        splitChunks: { // Чанки для нашего приложения. Все наши npm-пакеты вынесем в отдельный файл с определенным хешем, чтобы клиент каждый раз при изменениях не выкачивал все по-новой
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
        minimizer: [],
    }

    if (isProd) {
        optimizations.minimizer.push(new TerserPlugin())
    }

    return {
        devServer: {
            static: {
                directory: path.join(__dirname, "build"),
            },
            compress: true,
            port: 3000,
            client: {
                progress: true,
            },
            hot: true,
            open: true,
            historyApiFallback: true, // Не забудьте про этот параметр, ибо со значением false WDS будет «прямолинейно» обрабатывать ссылки для React Router'а. Т.е. он будет по путь->директория искать index.html, а он у нас один и в корне.
        },
        resolve: config.resolve,
        module: {
            rules: config.modules,
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './public/index.html', // Скармливаем наш HTML-темплейт
            }),
            new WebpackNotifierPlugin({alwaysNotify: false}),
            new webpack.ProvidePlugin({
                Buffer: ['buffer', 'Buffer'],
            }),
            new MiniCssExtractPlugin()
        ],
        entry: {
            main: './src/index.jsx', // Энтрипоинт-файл, с которого и начнется наша сборка
        },
        output: {
            filename: watchMode ? 'assets/[name].[hash].js' : 'assets/[name].[chunkhash].js', // небольшое условие, т.к. WDS не будет работать с chunkhash
            path: path.resolve(__dirname, 'build'), // Весь наш результат складываем в папку build
            publicPath: '/',
        },
        performance: {
            hints: false,
        },
        optimization: optimizations,
    }
}