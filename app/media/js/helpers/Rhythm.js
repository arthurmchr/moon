import events from '../datas/events.json';

import EmitterManager from '../managers/EmitterManager';

export default class Rhythm {

	constructor(el) {

		this.resize = this.resize.bind(this);

		if (Array.isArray(el) || el instanceof NodeList) this._els = el;
		else this._els = [el];

		EmitterManager.on(events.RESIZE_MANAGER_RESIZE, this.resize);
	}

	destroy() {

		EmitterManager.off(events.RESIZE_MANAGER_RESIZE, this.resize);
	}

	resize() {

		this._els.forEach((el)=> {

			el.style.height = '';
			const height = el.clientHeight;
			const inititalREM = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('font-size'), 10);
			el.style.height = `${2 * Math.ceil(height / inititalREM / 2)}rem`;
		});
	}
}
