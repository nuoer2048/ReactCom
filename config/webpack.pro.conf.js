const merge = require('webpack-merge');
const root = require('./webpack.config');
module.exports=merge(root,{
    mode: "production",
})