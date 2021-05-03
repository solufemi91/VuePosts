var path = require('path');

module.exports = {
    entry: './wwwroot/js/index.js',
    devtool: 'inline-source-map',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './wwwroot/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['*', '.js'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/
                //query: {
                //    presets: ['es2015']
                //}
            }
        ]
    }
};