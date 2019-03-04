// const {existsSync}=require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}
/****************/
const webpackConfigBase = {
  entry: {
    client: resolve('../app/client.js'),
  },
  output: {
    path: resolve('../dist'),
    filename: '[name].[hash:4].js',
    chunkFilename: 'chunks/[name].[hash:4].js',//按需加载模块
    // publicPath:'http://localhost:3016/dist/'
  },
  resolve: {
    extensions: ['.js', '.json'],  //自动解析扩展,能够使用户在引入模块时不带扩展 
    alias: {
      components: path.join(__dirname, '/../app/components'),
      actions: path.join(__dirname, '/../app/actions'),
      api: path.join(__dirname, '/../app/api'),
      reducers: path.join(__dirname, '/../app/reducers'),
      utils: path.join(__dirname, '/../app/utils'),
      controllers: path.join(__dirname, '/../app/controllers'),
      style: path.join(__dirname, '/../app/style'),
      images: path.join(__dirname, '/../app/images'),
      base: path.join(__dirname, '/../app/base'),
      functions: path.join(__dirname, '/../app/functions'),
    },
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'css-loader',
          // 'postcss-loader',
          // 'less-loader',
          // { loader: 'style', options: { } },
          { loader: 'css', options: {sourceMap: true,modules:false } },
          // { loader: 'less', options: {sourceMap: true,modules:false } }
        ],
      },
      {
        test: /\.less$/,
        // exclude:[/\.custom.less/],
        // not:[
        //   path.resolve(__dirname, "./app/test"),
        //   path.resolve(__dirname, "./app/custom.less"),
        // ],
        use: [
          MiniCssExtractPlugin.loader,
          // 'css-loader',
          // 'postcss-loader',
          // 'less-loader',
          // { loader: 'style', options: { } },
          { loader: 'css', options: {sourceMap: true,modules:true } },
          { loader: 'less', options: {sourceMap: true,modules:false } }
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        options: {
          limit: 8192,
          name: 'img/[name].[hash:4].[ext]'
        }
      },
      {
        test: /\.(woff|eot|ttf|svg|gif)$/,
        loader: 'url',
        options: {
          limit: 8192,
          name: 'font/[name].[hash:4].[ext]'
        }
      },
    ],
  },
  plugins: [
    // 提取css
    // new ExtractTextPlugin('style.[hash:4].css'),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      // filename:  '[name].[hash].css',
      filename:  '[name].css',
      chunkFilename: 'css/[id].[hash].css',
      // filename:  'bundle.css',
      // filename: devMode ? '[name].css' : '[name].[hash].css',
      // chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    // 将打包后的资源注入到html文件内
    new HtmlWebpackPlugin({
      template: resolve('../app/index.html'),
    }),
    new webpack.SourceMapDevToolPlugin(),
    new ProgressBarPlugin()
  ],
}

module.exports = webpackConfigBase
