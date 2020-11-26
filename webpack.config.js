const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['babel-preset-env', 'babel-preset-react'],
              },
            },
          },
          {
            test: /\.css$/,
            exclude: /(node_modules)/,
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader' },
            ],
          },
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],
}