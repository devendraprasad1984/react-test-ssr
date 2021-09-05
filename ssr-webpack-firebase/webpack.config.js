const path = require('path')

module.exports = {
    mode: 'development', //production development none
    entry: './src/index.js',
    devServer: {
        inline: true,
        port: 3001
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {loader: 'babel-loader'},
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                use: {loader: 'babel-loader'},
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
    }
}
