import './ResizeManager';
import './LayoutManager';
import './VisibilityManager';

import RouterManager from './RouterManager';

class AppManager {

	constructor() {

		RouterManager.start();
	}
}

export default new AppManager();
