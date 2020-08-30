const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        app: "./src/app/app.js"
    },

    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js' 
    },

    devServer:{
        port: 3000
    },

    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /.css$/,
                loader: ["style-loader","css-loader"]
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]

}