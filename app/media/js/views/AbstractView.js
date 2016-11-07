import events from '../datas/events.json';

import autoBind from 'auto-bind';
import {TimelineMax} from 'gsap';
import EmitterManager from '../managers/EmitterManager';

export default class AbstractView {

	constructor(selector) {
		console.log(this.constructor.className);
		autoBind(this);

		this._el = document.querySelector(`#${selector}`);
		this._isPopin = this.constructor.className.indexOf('Popin') > -1 ? true : false;

		this._events = [];

		this._tl = new TimelineMax();

		EmitterManager.on(events.RESIZE_MANAGER_RESIZE, this.resizeHandler);
	}

	addHandlers(events) {

		if (Array.isArray(events)) this._events = this._events.concat(events);
		else this._events.push(events);

		if (!Array.isArray(events)) events = [events];

		for (const evt of events) {

			if (!Array.isArray(evt.el)) evt.el.addEventListener(evt.type, evt.cb);
			else for (const el of evt.el) el.addEventListener(evt.type, evt.cb);
		}
	}

	resizeHandler() {

	}

	transitionIn() {

		this._el.classList.add('is-visible');
	}

	transitionOut(opts) {

		this.next();
		this.destroy(opts);
	}

	next() {

		EmitterManager.emit(events.VIEW_NEXT);
	}

	destroy(opts) {

		if (opts.nxtPageName !== this.constructor.className) this._el.classList.remove('is-visible');

		for (const evt of this._events) {

			if (!Array.isArray(evt.el)) evt.el.removeEventListener(evt.type, evt.cb);
			else for (const el of evt.el) el.removeEventListener(evt.type, evt.cb);
		}

		EmitterManager.removeListener(events.RESIZE_MANAGER_RESIZE, this.resizeHandler);

		this._tl.kill();

		EmitterManager.emit(events.VIEW_DESTROYED);
	}

	get el() {

		return this._el;
	}

	get tl() {

		return this._tl;
	}
}
