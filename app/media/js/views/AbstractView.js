import events from '../datas/events.json';

import EmitterManager from '../managers/EmitterManager';

export default class AbstractView {

	constructor(selector) {

		this.resizeHandler = this.resizeHandler.bind(this);

		this._el = document.querySelector(`#${selector}`);
		this._isPopin = this.constructor.name.indexOf('Popin') > -1 ? true : false;

		this._events = [];

		EmitterManager.on(events.RESIZE_MANAGER_RESIZE, this.resizeHandler);
	}

	addHandlers(events) {

		this._events = events;

		for (const event of events) {

			if (!event.el.length) event.el.addEventListener(event.type, event.cb);
			else for (const el of event.el) el.addEventListener(event.type, event.cb);
		}
	}

	resizeHandler() {

	}

	transitionIn() {

		this._el.classList.add('is-visible');
	}

	transitionOut() {

		EmitterManager.emit(events.TRANSITION_START_NEXT);
	}

	destroy() {

		this._el.classList.remove('is-visible');

		for (const event of this._events) {

			if (!event.el.length) event.el.removeEventListener(event.type, event.cb);
			else for (const el of event.el) el.removeEventListener(event.type, event.cb);
		}

		EmitterManager.removeListener(events.RESIZE_MANAGER_RESIZE, this.resizeHandler);
	}

	get el() {

		return this._el;
	}
}
