const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const extractCss = new ExtractTextPlugin('stylesheets/[name]-one.css');
const extractLess = new ExtractTextPlugin('stylesheets/[name]-two.css');
module.exports={
    entry: path.resolve(__dirname,'../public/index.tsx'),
    output: {
       filename: 'bundle.js',
       path: path.resolve(__dirname,'../dist')
    },
    resolve: {
      extensions:[".ts",'.tsx','.js','.json']
    },
    module:{
        rules:[
            {
            test: /\.(js|jsx)$/,
            loader:"babel-loader",
            exclude:/(node_modules|bower_components)/,
            },
            {
                test: /\.(tsx|ts)$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.css$/,
                use: extractCss.extract({
                    fallback:"style-loader",
                    use: "css-loader",
                })
            },
            {
                test: /\.less$/,
                use: extractLess.extract(
                    {
                        fallback: "style-loader",
                        use:['css-loader','less-loader']
                    }
                )
            },
        ]
    },
    plugins: [
        extractCss,
       extractLess,
       new HtmlWebpackPlugin({
           filename: path.resolve(__dirname,'../dist/index.html'),
           template: path.resolve(__dirname,"../public/index.html")
       }),
       new CleanWebpackPlugin(),
    ]


}