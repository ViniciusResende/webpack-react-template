const webpck = require('webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpck.DefinePlugin({
      'process.env.name': JSON.stringify('Codevolution'),
    }),
  ],
}
