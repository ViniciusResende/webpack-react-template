const webpck = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpck.DefinePlugin({
      'process.env.name': JSON.stringify('Vishwas'),
    }),
  ],
};
