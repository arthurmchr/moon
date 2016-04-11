export default class Private {

	constructor(ctx) {

		const weakMap = new WeakMap();
		weakMap.set(ctx, {});

		return weakMap.get(ctx);
	}
}
