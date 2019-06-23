var http = new Http();
var app = new App();
var route = new Route();
route.route(app);

http.creatServer(function (req, res) {
	app.use(req, res);
	app.resolve(function (res) {
		res.end('404: the page lost');
	});
})




