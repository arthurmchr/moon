export function clamp(value, min, max) {

	return Math.min(Math.max(value, min), max);
}

export function range(val, oldMin, oldMax, newMin, newMax) {

	return (val - oldMin) * (newMax - newMin) / (oldMax - oldMin) + newMin;
}

export function randomInt(min, max) {

	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function toDegree(radians) {

	return radians * 180 / Math.PI;
}

export function toRadian(degrees) {

	return degrees * Math.PI / 180;
}
