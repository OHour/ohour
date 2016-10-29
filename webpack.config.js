module.exports = {
  entry: './client/main.js',
  output: {
    path: './client',
    filename: 'bundle.js'
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  devServer: {
    inline: true,
    contentBase: './client',
    port: 8100,
    proxy: {
      '/submit': { target: 'http://localhost:3000', secure: false }
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}