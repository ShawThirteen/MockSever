/*
* description class Package
* save client callbace and server response function.
* almost class use this class, so we must load this class first
*/

class Package {
	constructor () {
		this.clientPool = [];	// memory client function
		this.serverPool = [];	// memeor server response
		this.defaultServerOptions = {
			ip: '127.0.0.1',
			method: 'get',
			data: '',
			url: '/'
		}
	}

	add (obj, isServer) {
		this[isServer && 'serverPool' || 'clientPool'].push(obj);
	}

	get () {
		return this['clientPool'].shift();
	}

	getServer () {
		return this.serverPool[0];
	}

	getServerDefaultOptions () {
		return this.defaultServerOptions;
	}
	/*
	* create single instance, keep global unique
	*/
	static getPackage () {
		if (!this.instance) {
			this.instance = new Package();
		}
		return this.instance;
	}
}