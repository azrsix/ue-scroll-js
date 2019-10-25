const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json');

const siteUrl = pkg.homepage;
const langs = ['en', 'ja'];
const contents = ['index', 'docs'];
const config = {
  mode: 'production',
  entry: ['./src/js/app.js', './src/css/style.css'],
  output: {
    path: path.resolve(__dirname),
    filename: 'js/app.min.js'
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
      test: /\.pug$/,
      loader: 'pug-loader'
    }]
  },
  plugins: [
    new MinifyPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/style.min.css'
    })
  ].concat(langs.map((lang) => {
    const dir = (lang === 'en')
      ? { file: '.',  link: '' }
      : { file: lang, link: `${lang}/` };
    const langFile = require(`./src/locales/${lang}.json`);
    const relativePath = (lang === 'en') ? '' : '../';
    return contents.map((name) => {
      const indexOrOtherwise = (name === 'index') ? '' : `${name}.html`;
      const permalink = `${siteUrl}${dir.link}${indexOrOtherwise}`;
      return new HtmlWebpackPlugin({
        filename: `${dir.file}/${name}.html`,
        template: `src/${name}.pug`,
        inject: false,
        minify: {
          caseSensitive: true,
          collapseInlineTagWhitespace: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          removeComments: true
        },
        templateVars: {
          lang: langFile,
          relativePath : relativePath,
          siteUrl: siteUrl,
          permalink: permalink,
        }
      })
    });
  }).reduce((arr, x) => arr.concat(x), []))
};

module.exports = config;
