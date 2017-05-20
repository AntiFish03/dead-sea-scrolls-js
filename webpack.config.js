/* globals __dirname */
const webpack = require('webpack');
const path = require('path');
const PACKAGE = require('./package.json');
const banner = [
  PACKAGE.name + ' - ' + PACKAGE.description,
  '@version: ' + PACKAGE.version,
  '@link: ' + PACKAGE.homepage,
  '@license: ' + PACKAGE.license
].join('\n');

module.exports = {
  entry: {
    'dead-sea-scrolls.min' : [
      './src/index.js'
    ],
    'dead-sea-scrolls': [
      './src/index.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'deadSeaScrolls',
    libraryTarget: 'umd',
    umdNamedDefine: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'env']
          }
        }
      }
    ]
  },
  externals : {
    lodash : {
      amd: 'lodash',
      commonjs: 'lodash',
      commonjs2: 'lodash',
      root: '_' // indicates global variable
    },
    'js-cookie': {
      amd: 'js-cookie',
      commonjs: 'js-cookie',
      commonjs2: 'js-cookie',
      root: 'Cookies'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      test: /\.min\.js$/,
      compressor: { warnings: false },
      sourceMap: false
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: /\.min/
    }),
    new webpack.BannerPlugin(banner)
  ]
};
