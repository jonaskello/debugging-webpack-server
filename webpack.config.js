module.exports = {
	entry: "./src/app/main.js",
	output: {
		path: __dirname + "/build",
		filename: "bundle.js",
		publicPath: '/static/'
	},
	devtool: "source-map"
};