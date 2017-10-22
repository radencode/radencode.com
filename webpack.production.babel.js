import CleanWebpackPlugin from 'clean-webpack-plugin'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'
import merge from 'webpack-merge'
import config from './webpack.config.babel.js'
import webpack from 'webpack'

export default merge(config, {
    plugins: [
        new CleanWebpackPlugin(['app']),
        new UglifyJSPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'runtime'
        })      
    ]
})