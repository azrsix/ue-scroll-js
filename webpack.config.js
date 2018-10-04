const path = require('path');
const webpack = require('webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const pkg = require('./package.json');

const config = {
  mode: 'production',
  entry: ['./src/css/ue-scroll.css', './src/js/ue-scroll.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ue-scroll.min.js',
    library: 'UeScroll',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }]
    }, {
      test: /\.css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      }, {
        loader: 'postcss-loader'
      }]
    }, {
      test: /\.(?:jpe?g|png|gif|svg|ico)(?:\?.+)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: './img/[name].[ext]'
        }
      }]
    }]
  },
  plugins: [
    new MinifyPlugin(),
    new MiniCssExtractPlugin({
      filename: 'ue-scroll.min.css'
    }),
    new webpack.BannerPlugin({
      banner: `ue-scroll.js v${pkg.version}\n(c) 2018 ${pkg.author}\nReleased under the MIT license`,
      exclude: /\.css$/,
    })
  ]
};

module.exports = config;
