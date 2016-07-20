import events from '../datas/events.json!json';

import EmitterManager from '../managers/EmitterManager';
// import TweenMax from 'gsap';

class RafManager {

	constructor() {

		// TweenMax.ticker.addEventListener('tick', this.tickHandler.bind(this));
	}

	tickHandler() {

		EmitterManager.emit(events.RAF_MANAGER_TICK);
	}
}

export default new RafManager();
