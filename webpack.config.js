const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', //production
    entry: {
        main: path.resolve(__dirname, 'src/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    devtool: 'inline-source-map',
    devServer:{
        static: path.resolve(__dirname, 'dist'),
        port: 5000,
        open: false,
        hot: true,
    },
    // loaders 
    module:{
        rules:[
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
        ]
    },
    // plugins
    plugins: [
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/temp.html')
        })
    ]
}