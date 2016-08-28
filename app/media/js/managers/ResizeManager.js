import events from '../datas/events.json';

import EmitterManager from './EmitterManager';
import throttle from 'lodash.throttle';

class ResizeManager {

	constructor() {

		this.resizeHandler = throttle(this.resizeHandler.bind(this), 100, {
			leading: false
		});

		window.addEventListener('resize', this.resizeHandler);
	}

	resizeHandler() {

		EmitterManager.emit(events.RESIZE_MANAGER_RESIZE, window.innerWidth, window.innerHeight);
	}
}

export default new ResizeManager();
