export function shuffleArray(o) {

	for (let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);

	return o;
}

export function getAncestor(el, className) {

	while ((el = el.parentElement) && !el.classList.contains(className));

	return el;
}

export function getIndex(el) {

	return Array.from(el.parentNode.children).indexOf(el);
}

export function getURLParameters() {

	const params = {};

	if (location.search) {

		const parts = location.search.substring(1).split('&');

		for (let i = 0; i < parts.length; i++) {

			const nv = parts[i].split('=');

			if (!nv[0]) continue;

			params[nv[0]] = nv[1] || true;
		}
	}

	return params;
}

export function isTouch() {

	return 'ontouchstart' in window || navigator.maxTouchPoints;
}

export function isFacebookApp() {

	const ua = navigator.userAgent || navigator.vendor || window.opera;

	return ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1;
}
