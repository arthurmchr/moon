import events from '../datas/events.json';

import throttle from 'lodash.throttle';
import EmitterManager from './EmitterManager';

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
