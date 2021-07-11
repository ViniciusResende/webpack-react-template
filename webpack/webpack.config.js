const { merge } = require('webpack-merge')
const commomConfig = require('./webpack.common.js')

module.exports = (envVars) => {
  const { env } = envVars
  const envConfig = require(`./webpack.${env}.js`)
  const config = merge(commomConfig, envConfig)

  return config
}
