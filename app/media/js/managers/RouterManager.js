import page from 'page';

import routes from '../datas/routes.json!json';
import events from '../datas/events.json!json';

import EmitterManager from '../managers/EmitterManager';
import HomeView from '../views/HomeView';

class RouterManager {

	constructor() {

		this.switchPage = this.switchPage.bind(this);
		this.switchPopin = this.switchPopin.bind(this);

		this._currentPage = null;
		this._currentPopin = null;

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

		if (this._currentPage) {

			this._currentPage.transitionOut();
		}

		switch (event.pathname) {

			case routes.HOME:
				this._currentPage = new HomeView();
				break;
		}

		this._currentPage.transitionIn();
	}

	switchPopin(/*popinName*/) {

		// switch (popinName) {

		// }
	}
}

export default new RouterManager();
