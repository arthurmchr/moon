const path = require('path');
const chokidar = require('chokidar');

const preprocessFileSync = require('preprocess').preprocessFileSync;

const inputHTML = path.join(__dirname, '../app/index.html.source');
const inputJS = path.join(__dirname, '../app/media/js/managers/RenderManager.js.source');

const env = process.env.NODE_ENV;

function buildHTML() {

	preprocessFileSync(inputHTML, path.join(__dirname, '../app/index.html'), {
		env
	}, {
		type: 'html'
	});
}

function buildJS() {

	preprocessFileSync(inputJS, path.join(__dirname, '../app/media/js/managers/RenderManager.js'), {
		env
	}, {
		type: 'javascript'
	});
}

if (env === 'development') {

	chokidar.watch(inputHTML).on('all', buildHTML);
	chokidar.watch(inputJS).on('all', buildJS);
}
else if (env === 'production') {

	buildHTML();
	buildJS();
}
