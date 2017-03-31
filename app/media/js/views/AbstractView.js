import events from '../datas/events.json';

import {TimelineMax} from 'gsap';
import EmitterManager from '../managers/EmitterManager';
import PreloadManager from '../managers/PreloadManager';
import {autoBind} from '../utils/dom';


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
		else {

			this._events.push(events);
			events = [events];
		}

		events.forEach((evt)=> {

			if (!Array.isArray(evt.el) && !(evt.el instanceof NodeList)) evt.el.addEventListener(evt.type, evt.cb);
			else evt.el.forEach((el)=> el.addEventListener(evt.type, evt.cb));
		});
	}

	resizeHandler() {

	}

	transitionIn() {

		if (this.constructor.requiredAssets &&
		(!Array.isArray(this.constructor.requiredAssets) || Array.isArray(this.constructor.requiredAssets) && this.constructor.requiredAssets.length > 0) &&
		!PreloadManager.isFileLoaded(this.constructor.requiredAssets))
			return PreloadManager.add(this.constructor.requiredAssets).start(this.transitionIn);

		this._el.classList.add('is-visible');
	}

	transitionOut(opts) {

		this.next();
		this.destroy(opts);
	}

	next() {

		EmitterManager.emit(events.VIEW_NEXT);
	}

	removeHandlers() {

		this._events.forEach((evt)=> {

			if (!Array.isArray(evt.el) && !(evt.el instanceof NodeList)) evt.el.removeEventListener(evt.type, evt.cb);
			else evt.el.forEach((el)=> el.removeEventListener(evt.type, evt.cb));
		});

		this._events = [];
	}

	destroy(opts) {

		if (opts.nxtPageName !== this.constructor.className) this._el.classList.remove('is-visible');

		this.removeHandlers();

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
