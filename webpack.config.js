const { VueLoaderPlugin } = require( 'vue-loader' );

module.exports = {

    entry: './src/app/index.js',
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node-modules/,
                user: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]

};