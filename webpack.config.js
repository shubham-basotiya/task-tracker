var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          }
        ]
    } 
};