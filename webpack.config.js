var path = require('path');
var webpack = require('webpack');

module.exports = {
  devServer: {
    inline: true,
    contentBase: path.join(__dirname, 'src'),
    port: 3003
  },
  devtool: 'cheap-module-eval-source-map',
  entry: './dev/js/index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.s?css/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  output: {
    path: path.join(__dirname, './src'),
    filename: 'js/bundle.min.js'
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ]
};