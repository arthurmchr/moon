export function toArray(els) {

	return Array.prototype.slice.call(els);
}

export function getAncestor(el, className) {

	while ((el = el.parentElement) && !el.classList.contains(className));

	return el;
}

export function getIndex(el, parent) {

	return toArray(parent.children).indexOf(el);
}
