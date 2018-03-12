
module.exports = {
    entry: {
        "main":"./src/main.js"
    },
    output: {
        path: __dirname+"/dist/",
        filename: "bundle.js"
    },
	module: {
        //加载器配置
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
            {test: /\.css$/,loader: 'style-loader!css-loader' },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
            },
            {
              test: /\.js$/,       
              loader: 'babel-loader',
              exclude: /node_modules/ //排除掉node_modules下的js文件，即不解析这个文件夹下的js文件
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    }
};

