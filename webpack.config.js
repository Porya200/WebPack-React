const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');
const Minify_css = require('mini-css-extract-plugin');

module.exports = {
    mode : 'development',
    entry : './src/index.js',
    output : {
        path : path.join(__dirname , '/dist') ,
        filename : 'bundle.js',
    },
    devServer : {
        port : 8080,
        contentBase : path.resolve(__dirname , 'build'),
        writeToDisk : true,
    },
    resolve : {
        extensions : ['.js' , '.jsx']
    },
    module : {
        rules : [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [ 'style-loader', 'css-loader' ]
            },
           {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[path][name].[hash].[ext]",
                    },
                },
            },
            {
                test: /\.(woff|woff2|ttf)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]?[contenthash]',
                    },
                  },
                ],
            },
            {
                test : /\.(js|jsx)$/,
                use : ['babel-loader'],
                exclude : /node_modules/
            },
        ]
    },
    plugins : [
        new HtmlWebpack ({
            template : './src/index.html'
        })
    ]

}