const MinifyPlugin = require("babel-minify-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const contents = ['index', 'docs'];

const config = {
  entry: {
    'js/app.min.js': './src/js/app.js',
    'css/style.min.css': './src/css/style.css',
  },
  output: {
    filename: '[name]',
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
    }]
  },
  plugins: [
    new MinifyPlugin(),
    new ExtractTextPlugin('[name]'),
  ].concat(contents.map((name) => {
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: `src/${name}.html`,
      inject: false,
      minify: {
        caseSensitive: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
      },
    });
  }))
};

module.exports = config;
