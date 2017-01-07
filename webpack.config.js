module.exports = {
    devtool: "sourcemap",
    entry: "./js/entry.js",
    output: {
        filename: "bundle.js"
    },
    // devServer: {
    //     historyApiFallback: true,
    //     hot: true,
    //     inline: true,
    //     progress: true,
    // },
    module: {
        loaders: [
	        {
	            test: /\.css$/,
	            loader: "style!css"
	        },
	        {
	            test: /\.js$/,
	            loader: "babel",
	            exclude: /node_modules/
	        }
        ]
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    }
};
