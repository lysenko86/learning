module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/public/assets',
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.map'
    },
    devtool: '#source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    optimization: {
        minimize: true,
        removeAvailableModules: true,
        concatenateModules: true
    }
}
