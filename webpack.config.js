module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "static/bundle.js"
  },
  resolve: {
    extensions: ['.js', '.marko']
  },
  module: {
    loaders: [
      {
        test: /\.marko$/,
        loader: 'marko-loader'
      }
    ]
  }
}