import { resolve } from 'path'
import WebpackProgressBarPlugin from 'progress-bar-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
    entry: {
				app: './src/components/app.jsx',
				vendor: ['react']
    },
    output: {
        filename: 'js/[name].bundle.[chunkhash].js',
        path: resolve(__dirname, 'app'),
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
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
                test: /\.(jpe?g|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/images/[name]-[hash].[ext]'
                }
            },
            {
                test: /\.(woff|otf|woff2|ttf)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/fonts/[name]-[hash].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.sass', '.jpg'],
        modules: [
            resolve(__dirname, 'src', 'components'),
            resolve(__dirname, 'src', 'styles'),
            resolve(__dirname, 'src', 'images'),
            resolve(__dirname, 'node_modules')
        ]
    },
    plugins: [
				new WebpackProgressBarPlugin(),
				new HtmlWebpackPlugin({
            template: resolve(__dirname, 'src/index.html'),
            filename: 'index.html'
        })  
    ]
}