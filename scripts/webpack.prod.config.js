
// const webpack = require('webpack')
// const path = require('path')
const merge = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.config')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Copy = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
// const TerserPlugin = require('terser-webpack-plugin');//2019/01/22 添加

const webpackConfigProd = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  plugins: [
    // 定义环境变量为开发环境
    /* new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      // 'process.env.NODE_ENV': JSON.stringify('demonstrate'),
      IS_DEVELOPMETN: false,
    }), */
    // 提取css
    // 根据入口文件，提取重复引用的公共代码类库，打包到单独文件中
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.OccurrenceOrderPlugin(),
    /* 压缩优化代码开始*/
    // new webpack.optimize.UglifyJsPlugin({ minimize: true }),

    // 分析代码
    new BundleAnalyzerPlugin({ analyzerPort: 3011 }),
    new Copy([
      { from: './app/images', to: './images' },
      { from: './app/iconfont', to: './iconfont' },
    ]),
  ],
  optimization: {
    minimize:true,
    /* minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          beautify: false,
          compress: true,
          comments: false,
          mangle: false,
          toplevel: false,
          keep_classnames: true, // <-- doesn't exist, I guess. It's in harmony branch
          keep_fnames: true //
        }
      }),
      // new TerserPlugin({
      //   test: /\.js(\?.*)?$/i,
      // })
    ], */
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      chunks: 'async', // 只对入口文件处理 all initial async(default)
      minSize: 30000,  //形成一个新代码块最小的体积
      minChunks: 1,  //在分割之前，这个代码块最小应该被引用的次数
      maxAsyncRequests: 5,  //按需加载时候最大的并行请求数
      maxInitialRequests: 3, //个入口最大的并行请求数
      name: true,
      automaticNameDelimiter: '~',
      cacheGroups: {
          styles: {
            name: 'styles',
            test:  /\.css$/,
            chunks: 'all',// merge all the css chunk to one file
            enforce: true,
            priority: 30,
          },
          vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          /* vendor: { // split `node_modules`目录下被打包的代码到 `page/vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
              test: /node_modules\//,
              // name: 'page/vendor',
              priority: 10,
              enforce: true
          }, */
      }
    }
  },
}

module.exports = merge(webpackConfigBase, webpackConfigProd)
