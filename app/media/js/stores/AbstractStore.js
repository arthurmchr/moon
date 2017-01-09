export default class AbstractStore {

	constructor() {

		this._cache = [];
	}

	addToCache(key, obj) {

		this._cache[obj[key]] = obj;
	}

	getFromCache(key) {

		return this._cache[key];
	}
}
