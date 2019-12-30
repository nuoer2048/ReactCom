const path = require('path');

module.exports={
    entry: path.resolve(__dirname,'../src/index.tsx'),
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
            }
        ]
    },
    externals:{
        "react": "React",
        "react-dom": "ReactDom",
    }


}