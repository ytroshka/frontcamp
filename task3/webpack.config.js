const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: './scripts/main.js',
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/'
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: 'json-loader!./plugins/webpack-custom-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader'
        }]
    },
    devtool: NODE_ENV === 'development' ? 'source-map' : null,
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new UglifyJsPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};