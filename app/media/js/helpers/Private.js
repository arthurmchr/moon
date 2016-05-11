export default class Private {

	constructor() {

		this.weakMap = new WeakMap();
	}

	set(ctx, params) {

		this.weakMap.set(ctx, params);

		return this.weakMap.get(ctx);
	}
}
