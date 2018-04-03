import merge from 'webpack-merge';
import config from './webpack.config.babel.js';

export default merge(config ,{
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dev',
        compress: true,
        inline: true,
        port: 8080,
        host: '0.0.0.0',
        proxy: {
            '/radencode': {
                target: 'http://localhost:3001',
            }
        },
        stats: {
            chunkModules: false
        }
    }
});