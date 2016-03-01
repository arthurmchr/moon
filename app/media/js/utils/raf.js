import Modernizr from '../vendor/modernizr';

window.requestAnimFrame = Modernizr.prefixed('requestAnimationFrame', window) || function(callback) {

	setTimeout(callback, 1000 / 60);
};

window.cancelAnimationFrame = Modernizr.prefixed('cancelAnimationFrame', window) || function(id) {

	clearTimeout(id);
};
