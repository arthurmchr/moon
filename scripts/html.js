const path = require('path');
const chokidar = require('chokidar');

const preprocessFileSync = require('preprocess').preprocessFileSync;

const inputHTML = path.join(__dirname, '../app/index.html.source');

const env = process.env.NODE_ENV;

function build() {

	preprocessFileSync(inputHTML, path.join(__dirname, '../app/index.html'), {
		env
	}, {
		type: 'html'
	});
}

if (env === 'development') chokidar.watch(inputHTML).on('all', build);
else if (env === 'production') build();
