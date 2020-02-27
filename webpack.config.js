const path = require('path');
const HtmlWebpack = require('html-webpack-plugin')

module.exports = {

    entry : './src/index.js',
    output : {
        path : path.join(__dirname , '/dist') ,
        filename : 'bundle.js',
    },
    devServer : {
        port : 8080
    },
    resolve : {
        extensions : ['.js' , '.jsx']
    },
    module : {
        rules : [
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