import { resolve } from 'path'

export default {
  entry: "./src/components/app.jsx",
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
      },
      {
        test: /\.sass?$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(jpe?g|png|otf)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/'
        }
      },
    ],
  },
  resolve: {
    modules: [
			resolve('./src'),
      resolve('./node_modules')
    ]
  },  
  output: {
    path: resolve(__dirname, "app"),
    filename: "app.bundle.js",
  },
  devServer: {
    contentBase: resolve(__dirname, "src"),
    compress: true,
    inline: true,
  },
}