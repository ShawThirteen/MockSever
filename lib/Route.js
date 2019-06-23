class Route {
	constructor () {
		this.pack = Package.getPackage();
	}
	route (app) {
		app.get('/', function (req, res) {
			res.end('index');
		})
		app.get('/user', function (req, res) {
			res.end('this is user page')
		})
		app.post('/user', function (req, res) {
			res.write('你输入了: ');
			res.end(req.data);
		})
	}
}
