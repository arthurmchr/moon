const path = require('path');
const chokidar = require('chokidar');

const preprocessFile = require('preprocess').preprocessFile;

const inputHTML = path.join(__dirname, '../app/index.html.source');

const env = process.env.NODE_ENV;

function build() {

	preprocessFile(inputHTML, path.join(__dirname, '../app/index.html'), {
		env
	});
}

if (env === 'development') chokidar.watch(inputHTML).on('all', build);
else if (env === 'production') build();
