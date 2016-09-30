import AbstractView from './AbstractView';

export default class HomeView extends AbstractView {

	static get className() {

		return __filename.match(new RegExp(/.*\/([a-z]+)\.js$/i))[1];
	}

	constructor() {

		super('home');
	}
}
