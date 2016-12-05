import AbstractView from './AbstractView';

export default class HomeView extends AbstractView {

	static get className() {

		return __filename.match(new RegExp(/.*\/([A-z]+)\.js$/))[1];
	}

	static get requiredAssets() {

		return [];
	}

	constructor() {

		super('home');
	}
}
