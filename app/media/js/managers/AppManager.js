import './ResizeManager';
import './LayoutManager';

import RouterManager from './RouterManager';

class AppManager {

	constructor() {

	}

	start() {

		RouterManager.start();
	}
}

export default new AppManager();
