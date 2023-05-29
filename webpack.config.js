const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      '@config': path.resolve(__dirname, 'src/config/'),
      '@view': path.resolve(__dirname, 'src/view/'),
    }
  }
};
