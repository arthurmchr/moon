import page from 'page';

import configRoutes from '../datas/routes.json!json';

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

		for (const key in configRoutes) {

			page(configRoutes[key], this.switchView);
		}

		page();
	}

	switchView(event) {

		console.log(event);
	}
}

export default new RouterManager();
