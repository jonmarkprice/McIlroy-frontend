const path = require('path');

const config = {
  entry: {
    app: [
      path.join(__dirname, './src/index.js')
    ]
  },
  module: {
    loaders: [
      {
        include: [
          path.resolve(__dirname, './src'),
        ],
        loader: 'babel-loader',
        test: /\.js$/
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  }
};

module.exports = config;
