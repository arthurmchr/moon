// import EmitterManager from '../managers/EmitterManager';
import AbstractStore from '../stores/AbstractStore';

class ArticleStore extends AbstractStore {

	constructor() {

		super();
	}

	getAPI() {

		return new Promise((resolve)=> {

			resolve(3);
		});
	}

	async getByID(opts) {

		const res = await this.getAPI(opts);

		console.log(res);
	}
}

export default new ArticleStore();
