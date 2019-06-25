const webpack = require('webpack')
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(process.env.ASSET_PATH)
    })
  ]
}
