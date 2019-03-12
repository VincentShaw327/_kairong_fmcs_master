
const path = require( 'path' )
const webpack = require( 'webpack' )
const merge = require( 'webpack-merge' )
const webpackConfigBase = require( './webpack.base.config' )
const OpenBrowserPlugin = require( 'open-browser-webpack-plugin' )

const PORT = 3016
function resolve( relatedPath ) {
  return path.join( __dirname, relatedPath )
}
const webpackConfigDev = {
  mode: 'development',
  plugins: [
    new OpenBrowserPlugin( {
      // url: `http://localhost:${PORT}/#/login`,
      url: `http://localhost:${PORT}/#/`,
    } ),
    new webpack.HotModuleReplacementPlugin( {
      // Options...
      // multiStep:true
    } ),
  ],
  // devtool: 'source-map',
  // devtool: 'inline-source-map',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    // contentBase: resolve('../app'),
    historyApiFallback: false,
    hot: true,
    host: '0.0.0.0',
    port: PORT,
  },
}

module.exports = merge( webpackConfigBase, webpackConfigDev )
