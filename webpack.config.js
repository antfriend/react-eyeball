var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/Eyeball.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'Eyeball.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}
