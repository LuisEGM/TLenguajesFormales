const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        app: "./src/app/index.jsx"
    },

    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js' 
    },

    resolve: {
        extensions: [".js",".jsx"]
    },

    devServer:{
        port: 3000
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ["style-loader","css-loader"]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options:{
                            sourceMap: true
                        }    
                    }
                ]
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]

}