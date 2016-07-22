import events from '../datas/events.json!json';

import EmitterManager from '../managers/EmitterManager';
// import TweenMax from 'gsap';

class RafManager {

	constructor() {

		// this.tickHandler = this.tickHandler.bind(this);

		// TweenMax.ticker.addEventListener('tick', this.tickHandler);
	}

	tickHandler() {

		EmitterManager.emit(events.RAF_MANAGER_TICK);
	}
}

export default new RafManager();
