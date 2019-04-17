config = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: './build'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module:{
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-class-properties']
        }
      }
    ]
  },
  devtool: 'source-map'
}

module.exports = config;
