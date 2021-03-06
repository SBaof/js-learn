var debug = process.env.NODE_ENV !== 'production';

module.exports = {
    devtool: debug ? "sourcemap" : null,
    entry: "./js/entry.js",
    output: {
        filename: "bundle.js"
    },
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
	        },
	        {
	        	test: /\.vue$/,
	        	loader: "vue"
	        }
        ]
    },
    resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	},
    plugins: debug ? [] : [
    	new webpack.BannerPlugin('This file is created by Bao'),
    	new webpack.optimize.DedupePlugin(),
    	new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})

    ],
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    }
};
