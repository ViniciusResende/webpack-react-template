const webpck = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    port: 3792,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpck.DefinePlugin({
      'process.env.name': JSON.stringify('Vishwas'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
