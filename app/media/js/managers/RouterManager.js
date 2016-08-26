// import page from 'page';

import routes from '../datas/routes.json';
// import popins from '../datas/popins.json';
import events from '../datas/events.json';

import EmitterManager from './EmitterManager';
import HomeView from '../views/HomeView';

class RouterManager {

	constructor() {

		this.switchPage = this.switchPage.bind(this);
		// this.switchPopin = this.switchPopin.bind(this);

		this._currentPage = null;
		// this._currentPopin = null;

		// for (const key in routes) {

		// 	page(routes[key], this.switchPage);
		// }

		EmitterManager.on(events.ROUTER_PAGE, this.switchPage);
		// EmitterManager.on(events.ROUTER_POPIN, this.switchPopin);
	}

	start() {

		// page();
		this.switchPage(routes.HOME);
	}

	switchPage(event) {

		let oldPage = null;

		if (this._currentPage) {

			oldPage = this._currentPage;

			EmitterManager.once(events.TRANSITION_START_NEXT, ()=> {

				this._currentPage.transitionIn();
			});
		}

		switch (event.pathname || event) {

			case routes.HOME:
				this._currentPage = new HomeView();
				break;

			default:
				console.error('No route found for', event.pathname || event);
		}

		if (oldPage) oldPage.transitionOut();
		else this._currentPage.transitionIn();
	}

	// switchPopin(popinName) {

	// 	let oldPopin = null;

	// 	if (this._currentPopin) {

	// 		oldPopin = this._currentPopin;

	// 		EmitterManager.once(events.TRANSITION_START_NEXT, ()=> {

	// 			if (this._currentPopin) this._currentPopin.transitionIn();
	// 		});
	// 	}

	// 	switch (popinName) {

	// 		default:
	// 			this._currentPopin = null;
	// 	}

	// 	if (oldPopin) oldPopin.transitionOut();
	// 	else if (this._currentPopin) this._currentPopin.transitionIn();
	// }
}

export default new RouterManager();
