const _ = new WeakMap();

class RouterManager {

	constructor() {

		_.set(this, {
			ui: {
				container: document.querySelector('#ajaxContainer')
			},
			currentPage: null,
			currentPopin: null
		});
	}

	start() {

	}
}

export default new RouterManager();
