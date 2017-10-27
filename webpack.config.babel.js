import { resolve } from 'path';
import WebpackProgressBarPlugin from 'progress-bar-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    entry: {
                app: './src/components/app.jsx',
                aos: './src/animations/aos.js',
				vendor: ['react', 'typed.js', 'react-particles-js', 'react-responsive', 'aos']
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
                test: /\.json?$/,
                loader: 'json-loader'
            },
            {
                test: /\.css?$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.sass?$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'url-loader',
                options: {
                    name: './assets/images/[name]-[hash].[ext]',
                    limit: 100000
                }
            },
            {
                test: /\.(woff|otf|woff2|ttf|eot|svg)$/,
                loader: 'url-loader',
                options: {
                    name: './assets/fonts/[name]-[hash].[ext]',
                    limit: 100000
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.sass', '.css', '.jpg'],
        modules: [
            resolve(__dirname, 'src', 'components'),
            resolve(__dirname, 'src', 'styles'),
            resolve(__dirname, 'src', 'images'),
            resolve(__dirname, 'src', 'animations'),
            resolve(__dirname, 'src', 'particles'),
            resolve(__dirname, 'src', 'icons'),
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
};