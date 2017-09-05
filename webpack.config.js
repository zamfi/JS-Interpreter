const path = require('path')

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader?presets[]=es2015',
            },
        ],
    },
    entry: {
        index: [path.join(__dirname, 'interpreter.js')],
    },
    output: {
        library: 'js-interpreter',
        libraryTarget: 'umd',
        path: path.join(__dirname, 'lib'),
        filename: '[name].js',
    },
};