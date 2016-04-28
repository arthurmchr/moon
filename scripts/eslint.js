const path = require('path');
const chokidar = require('chokidar');
const CLIEngine = require('eslint').CLIEngine;

const cli = new CLIEngine();
const formatter = cli.getFormatter();

chokidar.watch(path.join(__dirname, '../app/media/js/**/*.js'), {
	ignored: [
		path.join(__dirname, '../silex/public/media/js/bundle.js'),
		path.join(__dirname, '../silex/public/media/js/vendors')
	]
}).on('all', (event, file)=> {
	const report = cli.executeOnFiles([file]);
	const message = formatter(report.results);

	if (message) console.log(message);
	else console.log('Lint', file);
});
