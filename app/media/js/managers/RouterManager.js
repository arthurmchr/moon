import routes from '../datas/routes.json';
// import routesRegex from '../datas/routes-regex.json';
// import routesPopin from '../datas/routes-popin.json';
import events from '../datas/events.json';

// import page from 'page';
import EmitterManager from './EmitterManager';
import HomeView from '../views/HomeView';

class RouterManager {

	constructor() {

		this.switchPage = this.switchPage.bind(this);
		// this.switchPopin = this.switchPopin.bind(this);

		this._currentPage = null;
		// this._currentPopin = null;
		// this._tabRegex = [];

		// for (const key in routes) {

		// 	page(routes[key], this.switchPage);
		// }

		// for (const key in routesRegex) {

		// 	this._tabRegex[key] = new RegExp(routesRegex[key]);
		// 	page(this._tabRegex[key], this.switchPage);
		// }

		EmitterManager.on(events.PAGE, this.switchPage);
		// EmitterManager.on(events.POPIN, this.switchPopin);
	}

	start() {

		// page();
		this.switchPage(routes.HOME);
	}

	switchPage(event, opts) {

		let target = event.pathname || event;
		let oldPage = null;

		if (this._currentPage) {

			oldPage = this._currentPage;

			EmitterManager.once(events.VIEW_NEXT, ()=> {

				this._currentPage.transitionIn({
					prvPageName: oldPage.constructor.className
				});
			});
		}

		switch (target) {

			case routes.HOME:
				this._currentPage = new HomeView(opts);
				break;

			default:
				console.error('No route found for', event.pathname || event);
		}

		if (oldPage) {

			oldPage.transitionOut({
				nxtPageName: this._currentPage.constructor.className
			});
		}
		else {

			this._currentPage.transitionIn({
				prvPageName: null
			});
		}
	}

	// switchPopin(popinName, opts) {

	// 	let oldPopin = null;

	// 	if (this._currentPopin) {

	// 		oldPopin = this._currentPopin;

	// 		EmitterManager.once(events.VIEW_NEXT, ()=> {

	// 			if (this._currentPopin) this._currentPopin.transitionIn();
	// 		});
	// 	}

	// 	switch (popinName) {

	// 		default:
	// 			this._currentPopin = null;
	// 	}

	// 	if (oldPopin) {

	// 		oldPopin.transitionOut({
	// 			nxtPageName: this._currentPopin ? this._currentPopin.constructor.className : null
	// 		});
	// 	}
	// 	else if (this._currentPopin) {

	// 		this._currentPopin.transitionIn({
	// 			prvPageName: null
	// 		});
	// 	}
	// }
}

export default new RouterManager();
