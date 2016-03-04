var Express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config');
var path = require('path');

var port = 3000;
var host = 'localhost';

var webpackServerOptions = {
	contentBase: 'http://' + host + ':' + port,
	quiet: false,
	noInfo: true,
	hot: true,
	inline: true,
	lazy: false,
	publicPath: webpackConfig.output.publicPath,
	headers: {'Access-Control-Allow-Origin': '*'},
	stats: {colors: true}
};

var app = new Express();
var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, webpackServerOptions));
app.use(webpackHotMiddleware(compiler));

app.get("/", function (req, res) {
	res.sendFile(path.resolve(__dirname + '/src/index.html'));
});

var server = app.listen(port, function (error) {
	if (error) {
		console.error(error);
	} else {
		console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
	}
});
