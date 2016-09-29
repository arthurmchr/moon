import AbstractView from './AbstractView';

export default class HomeView extends AbstractView {

	static get className() {

		return 'HomeView';
	}

	constructor() {

		super('home');
	}
}
