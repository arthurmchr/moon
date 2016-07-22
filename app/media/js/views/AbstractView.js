import events from '../datas/events.json!json';

import EmitterManager from '../managers/EmitterManager';

export default class AbstractView {

	constructor(selector) {

		this.resizeHandler = this.resizeHandler.bind(this);

		this._el = document.querySelector(`#${selector}`);
		this._events = [];

		EmitterManager.on(events.RESIZE_MANAGER_RESIZE, this.resizeHandler);
	}

	addHandlers(events) {

		this._events = events;

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

		for (const event of this._events) {

			if (!event.el.length) event.el.removeEventListener(event.type, event.cb);
			else {

				for (const el of event.el) {

					el.removeEventListener(event.type, event.cb);
				}
			}
		}

		EmitterManager.off(events.RESIZE_MANAGER_RESIZE, this.resizeHandler);

		EmitterManager.emit(events.TRANSITION_END);
	}

	get el() {

		return this._el;
	}
}
