class ShareManager {

	constructor() {

		this._meta = {
			fbURL: document.querySelector('meta[property="og:url"]').getAttribute('content'),
			fbTitle: document.querySelector('meta[property="og:title"]').getAttribute('content'),
			fbDescription: document.querySelector('meta[property="og:description"]').getAttribute('content'),
			fbPicture: document.querySelector('meta[property="og:image"]').getAttribute('content'),
			twText: document.querySelector('meta[name="twitter:description"]').getAttribute('content'),
			twURL: document.querySelector('meta[name="twitter:site"]').getAttribute('content')
		};
	}

	twitter({
		text = this._meta.twText,
		url = this._meta.twURL
	} = {}) {

		const w = 600;
		const h = 300;

		window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, 'twitter', `width=${w},height=${h},top=${(window.innerHeight - h) / 2},left=${(window.innerWidth - w) / 2}`);
	}

	facebookShare(url = this._meta.fbURL) {

		window.FB.ui({
			method: 'share',
			href: url
		});
	}

	facebookDialog({
		title = this._meta.fbTitle,
		url = this._meta.fbURL,
		img = this._meta.fbPicture,
		description = this._meta.fbDescription
	} = {}) {

		window.FB.ui({
			method: 'feed',
			name: title,
			link: url,
			picture: img,
			description: description
		});
	}

	pinterest(text, url, media) {

		const w = 600;
		const h = 300;

		window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(media)}&description=${encodeURIComponent(text)}`, 'pinterest', `width=${w},height=${h},top=${(window.innerHeight - h) / 2},left=${(window.innerWidth - w) / 2}`);
	}
}

export default new ShareManager();
