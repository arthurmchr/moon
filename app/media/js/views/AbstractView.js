import Private from '../helpers/Private';
import events from '../datas/events.json!json';
import EmitterManager from '../managers/EmitterManager';

const wm = new Private();
let _;

export default class AbstractView {

	constructor(selector, funcs) {

		for (const el of funcs) {

			this[el] = this[el].bind(this);
		}

		this.resizeHandler = this.resizeHandler.bind(this);

		_ = wm.set(this, {
			el: document.querySelector(`#${selector}`)
		});

		EmitterManager.on(events.RESIZE_MANAGER_RESIZE, this.resizeHandler);
	}

	resizeHandler() {

	}

	transitionIn() {

	}

	transitionOut() {

	}

	destroy() {

		EmitterManager.off(events.RESIZE_MANAGER_RESIZE, this.resizeHandler);
	}

	get el() {

		return _.el;
	}
}
