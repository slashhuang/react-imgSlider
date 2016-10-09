var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var extend = require('extend');
var config = require('../package.json');

module.exports =extend({}, {
    devtool: "source-map",
    entry:[
        './example/src/index.js'
    ],
    output:{
        path:path.join(process.cwd(),'example/bundle'),
        filename:'bundle.js',
        publicPath:'/example/bundle',
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.sass/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader : 'file-loader'
            },
            {
                test: /\.html$/,
                loader: "handlebars-loader"
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=35000'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
});