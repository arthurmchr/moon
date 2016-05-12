import page from 'page';

import routes from '../datas/routes.json!json';
import events from '../datas/events.json!json';

import Private from '../helpers/Private';
import EmitterManager from '../managers/EmitterManager';
import HomeView from '../views/HomeView';

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

		for (const key in routes) {

			page(routes[key], this.switchPage);
		}

		EmitterManager.on(events.ROUTER_PAGE, this.switchPage);
		EmitterManager.on(events.ROUTER_POPIN, this.switchPopin);
	}

	start() {

		page();
	}

	switchPage(event) {

		console.log(event);

		if (_.currentPage) {

			_.currentPage.transitionOut();
		}

		switch (event.pathname) {

			case routes.HOME:
				_.currentPage = new HomeView();
				break;
		}

		_.currentPage.transitionIn();
	}

	switchPopin(/*popinName*/) {

		// switch (popinName) {

		// }
	}
}

export default new RouterManager();
