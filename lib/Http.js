/*
* Http module class, load after class Package
* as we user XHR, we need start Http server befor XHR
*/
class Http {
	constructor () {
		this.severFn = null;
		this.pack = Package.getPackage();
	}
	creatServer (fn) {
		if (!euqalType('function', fn)) {
			throw new MSError('paramsError', 'arg must be a function with two params')
		}

		this.severFn = fn;
		this.pack.add(fn, true);
	}
}

class Request {
	constructor (send) {
		return send;
	}
}

class Response {
	constructor (clientCallBack) {
		this.res = [];
		this.clientCallBack = clientCallBack;
	}
	write (str) {
		this.res.push(isObject(str) ? JSON.stringify(str) : str);
	}
	end (str) {
		this.write(str);
		var responseText = this.res.join('');
		euqalType('function', this.clientCallBack) && this.clientCallBack(responseText);
	}
}