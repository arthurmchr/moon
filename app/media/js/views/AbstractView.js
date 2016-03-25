import EmitterManager from '../managers/EmitterManager';

const _ = new WeakMap();

export default class AbstractView {

	constructor(selector) {

		_.set(this, {
			el: document.querySelector(`#${selector}`)
		});

		this.resizeHandler = this.resizeHandler.bind(this);

		EmitterManager.on('resizemanager:resize', this.resizeHandler);
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

		EmitterManager.off('resizemanager:resize', this.resizeHandler);
	}
}
