import events from '../datas/events.json';

import EmitterManager from './EmitterManager';

class VisibilityManager {

	constructor() {

		this.onVisibilityChange = this.onVisibilityChange.bind(this);

		this._hidden = '';

		let visibilityChange;

		if (typeof document.hidden !== 'undefined') {

			this._hidden = 'hidden';
			visibilityChange = 'visibilitychange';
		}
		else if (typeof document.mozHidden !== 'undefined') {

			this._hidden = 'mozHidden';
			visibilityChange = 'mozvisibilitychange';
		}
		else if (typeof document.msHidden !== 'undefined') {

			this._hidden = 'msHidden';
			visibilityChange = 'msvisibilitychange';
		}
		else if (typeof document.webkitHidden !== 'undefined') {

			this._hidden = 'webkitHidden';
			visibilityChange = 'webkitvisibilitychange';
		}

		document.addEventListener(visibilityChange, this.onVisibilityChange);
	}

	onVisibilityChange() {

		EmitterManager.emit(events.VISIBILITY_MANAGER_SWITCH, document[this._hidden]);
	}
}

export default new VisibilityManager();
