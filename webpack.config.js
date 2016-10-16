var path = require('path');
var webpack = require('webpack');
var sassLintPlugin = require('sasslint-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/index.tsx',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8080/',
    filename: 'dist/bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'source-map-loader',
      exclude: /node_modules/,
      enforce: 'pre',
    }, {
      test: /\.tsx?$/,
      loader: 'tslint-loader',
      exclude: /node_modules/,
      enforce: 'pre',
    }, {
      test: /\.tsx?$/,
      loaders: [
        'react-hot-loader/webpack',
        'awesome-typescript-loader',
      ],
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      loaders: ['style', 'css'],
      exclude: /node_modules/,
    }],
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [
    new sassLintPlugin({
      glob: 'src/**/*.s?(a|c)ss',
      ignoreFiles: ['src/normalize.scss'],
      failOnWarning: false, // Do it.
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    contentBase: './',
  },
};