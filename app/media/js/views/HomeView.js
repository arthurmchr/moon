import AbstractView from './AbstractView';
import Private from '../helpers/Private';

const wm = new Private();
let _;

export default class HomeView extends AbstractView {

	constructor() {

		super('home');

		_ = wm.set(this, {});
	}

	transitionOut() {

		super.destroy();
	}
}
