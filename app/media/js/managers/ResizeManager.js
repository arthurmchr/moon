import EmitterManager from './EmitterManager';

class ResizeManager {

	constructor() {

		this.resizeHandler = this.resizeHandler.bind(this);
	}

	start() {

		window.addEventListener('resize', this.resizeHandler);
	}

	resizeHandler() {

		EmitterManager.emit('resizemanager:resize', window.innerWidth, window.innerHeight);
	}
}

export default new ResizeManager();
