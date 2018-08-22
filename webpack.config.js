module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devServer:{
        contentBase:__dirname,
        historyApiFallback:true,
        inline:true,
        port:8765,
        openPage: ''
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
};