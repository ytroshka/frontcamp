const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    "main": ["react-hot-loader/patch", "./src/index.js"]
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
    ]
  },
  devtool: '#source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    disableHostCheck: true,
  },
}