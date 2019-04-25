config = {
  entry: `${__dirname}/src/app.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },
  mode: 'development',
};

module.exports = config;
