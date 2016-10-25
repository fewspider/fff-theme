const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FileSystem = require('fs');

const indexPath = path.join(__dirname, 'src/js/');

module.exports = {
  // devtool: 'source-map',
  entry: {
    'vendor': ['bootstrap', 'jquery', 'underscore', 'fancybox'],
    'index': indexPath + 'index/index.js',
  },
  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'js/[name].[hash].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.bundle.[hash].js'),
    new ExtractTextPlugin('css/[name].[hash].css', {
      allChunks: true
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      '_': 'underscore'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false,
        // drop_console: true,
      }
    }),
    ()=> {
      this.plugin('done', function(stats) {
        const version = {};
        version['hash'] = stats.hash;
        FileSystem.writeFileSync(
          path.join(__dirname, '_includes', 'version.html'),
          JSON.stringify(version));
      });
    }
  ],

  module: {
    target: 'node',
    noParse: /node_modules\/json-schema\/lib\/validate\.js/,

    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!less-loader')
      },
      {
        test: /\.(eot|ttf|svg|png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=100000000'
      }
    ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
