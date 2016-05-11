import page from 'page';

import Private from '../helpers/Private';
import configRoutes from '../datas/routes.json!json';

const wm = new Private();
let _;

class RouterManager {

	constructor() {

		_ = wm.set(this, {
			ui: {

			},
			currentPage: null,
			currentPopin: null
		});

		for (const key in configRoutes) {

			page(configRoutes[key], this.switchView);
		}
	}

	start() {

		page();
	}

	switchView(event) {

		console.log(event);
	}
}

export default new RouterManager();
