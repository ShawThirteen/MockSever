/*
* all tool funtion, loaded before all class.
*/

function isObject (obj) {
	var result = null;
	result = euqalType('object', obj) || euqalType('array', obj);
	return result;
}

function euqalType (type, obj) {
	return '[object '+ type.toLowerCase() +']' == getType(obj).toLowerCase();
}

function getType (obj) {
	return Object.prototype.toString.call(obj);
}

function MS_URL (str) {
	var url = null;
	try {
		url = new URL(str, 'http://localhost');
	} catch (e) {
		throw new MSError('pathError', 'not a good path')
	}
	return url;
}

function MS_objCopy (obj) {
	var resultStr = JSON.stringify(obj, function (key, val) {
		if (val != 0 && !val) {
			return;
		}
		return val;
	})
	return JSON.parse(resultStr);
}

/*
* class MockServer Error as MSError
* @constructor params name [string] event name
* @constructor params message [string] event message
*/
class MSError extends Error {
	constructor (name, message) {
		super(name, message);
		this.name = name;
		this.message = message;
	}
}
