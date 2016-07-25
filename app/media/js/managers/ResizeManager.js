import events from '../datas/events.json';

import EmitterManager from './EmitterManager';

class ResizeManager {

	constructor() {

		this.resizeHandler = this.resizeHandler.bind(this);

		window.addEventListener('resize', this.resizeHandler);
	}

	resizeHandler() {

		EmitterManager.emit(events.RESIZE_MANAGER_RESIZE, window.innerWidth, window.innerHeight);
	}
}

export default new ResizeManager();
