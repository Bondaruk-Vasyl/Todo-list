const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    hot: true,
    open: true,
    port: 3000,
  },
  devtool: 'eval-source-map',
  output: {
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss)|(css)$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|otf|eot|png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './static/media',
        },
      },
    ],
  },

  plugins: [
    new LiveReloadPlugin({
      port: 35729,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
