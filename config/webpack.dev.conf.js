const merge = require('webpack-merge');
const root = require('./webpack.config');
module.exports=merge(root,{
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
    contentBase: './dist',
    port: '9999'
  }
})