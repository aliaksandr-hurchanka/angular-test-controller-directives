var webpack = require('webpack');

module.exports = {
	context: __dirname,
	entry: {
        'index': './app/index.js'
    },
    plugins: [    
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js",
        })
    ],
	output: {
		path: __dirname + '/app',
		filename: '[name].bundle.js',
        chunkFilename: "[id].chunk.js"
	}
};
