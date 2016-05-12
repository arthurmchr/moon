import events from '../datas/events.json!json';

import Private from '../helpers/Private';
import EmitterManager from '../managers/EmitterManager';

const wm = new Private();
let _;

export default class AbstractView {

	constructor(selector, funcs) {

		if (funcs) {

			for (const el of funcs) {

				this[el] = this[el].bind(this);
			}
		}

		this.resizeHandler = this.resizeHandler.bind(this);

		_ = wm.set(this, {
			el: document.querySelector(`#${selector}`),
			events: []
		});

		EmitterManager.on(events.RESIZE_MANAGER_RESIZE, this.resizeHandler);
	}

	addHandlers(events) {

		_.events = events;

		for (const event of events) {

			if (!event.el.length) event.el.addEventListener(event.type, event.cb);
			else {

				for (const el of event.el) {

					el.addEventListener(event.type, event.cb);
				}
			}
		}
	}

	resizeHandler() {

	}

	transitionIn() {

	}

	transitionOut() {

	}

	destroy() {

		for (const event of _.events) {

			if (!event.el.length) event.el.removeEventListener(event.type, event.cb);
			else {

				for (const el of event.el) {

					el.addEventListener(event.type, event.cb);
				}
			}
		}

		EmitterManager.off(events.RESIZE_MANAGER_RESIZE, this.resizeHandler);
	}

	get el() {

		return _.el;
	}
}
