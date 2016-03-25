export function clamp(value, min, max) {

	return Math.min(Math.max(value, min), max);
}

export function range(val, oldMin, oldMax, newMin, newMax) {

	return (val - oldMin) * (newMax - newMin) / (oldMax - oldMin) + newMin;
}

export function randomInt(min, max) {

	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomFloat(min, max, decimals = 1) {

	return (Math.random() * (min - max) + max).toFixed(decimals);
}

export function toDegree(radians) {

	return radians * 180 / Math.PI;
}

export function toRadian(degrees) {

	return degrees * Math.PI / 180;
}

export function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight, cover = true) {

	const fn = cover ? Math.max : Math.min;
	const ratio = fn(maxWidth / srcWidth, maxHeight / srcHeight);

	return {
		w: parseInt(srcWidth * ratio, 10),
		h: parseInt(srcHeight * ratio, 10),
		ratio : ratio
	};
}
