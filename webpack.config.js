var sassLintPlugin = require('sasslint-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: './dist/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
      exclude: /node_modules/
    }],
    preLoaders: [{
      test: /\.js$/,
      loader: 'source-map-loader',
      exclude: /node_modules/
    }, {
      test: /\.tsx?$/,
      loader: 'tslint-loader',
      exclude: /node_modules/
    }]
  },
  tslint: {
    failOnHint: false // Do it.
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new sassLintPlugin({
      glob: 'src/**/*.s?(a|c)ss'
    })
  ]
};