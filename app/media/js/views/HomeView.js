import AbstractView from './AbstractView';

export default class HomeView extends AbstractView {

	constructor() {

		super('home');
	}

	transitionOut() {

		super.transitionOut();
		super.destroy();
	}
}
