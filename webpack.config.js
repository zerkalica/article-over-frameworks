// webpack.config.js example
module.exports = {
  output: {
    publicPath: '/article-over-frameworks/',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
};
