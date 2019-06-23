class App {
	constructor () {
		this.req = null;
		this.res = null;
		this.except = ['/favicon.ico'];
		this.getRoute = {};
		this.postRoute = {};
		this.pack = Package.getPackage();
	}
	use (req, res) {
		this.res = res;
		this.req = {
			...this.pack.getServerDefaultOptions(), 
			...req
		}
	}
	
	get (url, response) {
		this.getRoute[url] = {
			response: response
		};
	}
	post (url, response) {
		this.postRoute[url] = {
			response: response
		};
	}
	resolve (error) {
		var pathName = this.req.url;
		var type = this.req.method.toLowerCase() || 'get';

		if (pathName in this[type + 'Route']) {
			this[type + 'Route'][pathName].response(this.req, this.res);
		} else {
			error(this.res);
		}
	}
}