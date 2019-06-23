/*
* all tool class, should be loaded after class Package, and before other class. 
*/
class XHR {
	constructor (request, callback) {
		this.pack = Package.getPackage();
		this.response = callback;
		this._options = {
			...this.pack.getServerDefaultOptions(),
			...request
		}

		this.sendClient();
	}
	sendClient () {
		var _this = this;
		var serverFn = _this.pack.getServer();

		setTimeout(function () {
			var req = new Request(_this._options);
			var res = new Response(_this.response);

			try {
				serverFn(req, res);
			} catch (e) {
				throw new MSError('serverError', '505: the server has disconnect');
			}
			
		}, 500)
	}
}
