// import Private from '../helpers/Private';

import './ResizeManager';
import './LayoutManager';
import RouterManager from './RouterManager';

// const wm = new Private();
// let _;

class AppManager {

	constructor() {

		// _ = wm.set(this, {});

		RouterManager.start();
	}
}

export default new AppManager();
