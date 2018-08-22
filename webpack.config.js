const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')


const path = require('path');
const resolve = path.resolve.bind(path, __dirname);
let output;

output = {
  path: resolve('dist/'),
  filename: '[name].js',
  publicPath: '/dist/'
};

// if (process.env.NODE_ENV === 'production') {
//   output['path'] = resolve('dist/');
//   output['publicPath'] = '/dist/prod/';
// }

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: output,
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader"
        })
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: '../index.html',
      template: 'index_src.html'
    })
  ]
};