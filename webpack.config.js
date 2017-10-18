const path = require('path');
module.exports = {
  entry: "./src/components/client.jsx",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_module)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy']
        }
      }
    ],
  },
  resolve: {
    modules: [
			path.resolve('./src/components'),
      path.resolve('./node_modules')
    ]
  },  
  output: {
    path: path.resolve(__dirname, "app"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "app"),
    compress: true,
    inline: true,
  },
}