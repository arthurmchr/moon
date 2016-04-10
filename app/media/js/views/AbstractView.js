import events from '../datas/events.json!json';
import EmitterManager from '../managers/EmitterManager';

const _ = new WeakMap();

export default class AbstractView {

	constructor(selector) {

		_.set(this, {
			el: document.querySelector(`#${selector}`)
		});

		this.resizeHandler = this.resizeHandler.bind(this);

		EmitterManager.on(events.RESIZE_MANAGER_RESIZE, this.resizeHandler);
	}

	get el() {

		return _.get(this).el;
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
}
