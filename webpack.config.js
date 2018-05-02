const path = require('path');
const webpack = require('webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('./package.json');

const config = {
  entry: {
    'ue-scroll.min.js': './src/js/ue-scroll.js',
    'ue-scroll.min.css': './src/css/ue-scroll.css'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]',
    library: 'UeScroll',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }]
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        }, {
          loader: 'postcss-loader'
        }]
      })
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
    new ExtractTextPlugin('[name]'),
    new webpack.BannerPlugin({
      banner: `ue-scroll.js v${pkg.version}\n(c) 2018 ${pkg.author}\nReleased under the MIT license`,
      exclude: /\.css$/,
    }),
  ]
};

module.exports = config;
