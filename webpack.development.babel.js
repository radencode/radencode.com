import merge from 'webpack-merge';
import config from './webpack.config.babel.js';

export default merge(config ,{
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dev',
        compress: true,
        inline: true,
        port: 8080,
        stats: {
            chunkModules: false
        }
    }
});