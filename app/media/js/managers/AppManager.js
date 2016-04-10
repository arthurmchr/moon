import RouterManager from './RouterManager';
import ResizeManager from './ResizeManager';
import LayoutManager from './LayoutManager';

const _ = new WeakMap();

class AppManager {

	constructor() {

		_.set(this, {});
	}

	start() {

		ResizeManager.start();
		LayoutManager.start();
		RouterManager.start();
	}
}

export default new AppManager();
