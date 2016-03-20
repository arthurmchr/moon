const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

const postcss = require('postcss');
const easyImport = require('postcss-easy-import');
const url = require('postcss-url');
const customProperties = require('postcss-custom-properties');
const nested = require('postcss-nested');
const mixins = require('postcss-mixins');
const customMedia = require('postcss-custom-media');
const simpleExtend = require('postcss-simple-extend');
const mediaMinMax = require('postcss-media-minmax');
const fontPath = require('postcss-fontpath');
const clearFix = require('postcss-clearfix');
const position = require('postcss-position');
const forLoop = require('postcss-for');
const size = require('postcss-size');
const singleCharset = require('postcss-single-charset');
const reporter = require('postcss-reporter');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const inputCss = path.join(__dirname, '../app/media/css/main.css');
const outputCss = path.join(__dirname, '../app/media/css/bundle.css');

const env = process.env.NODE_ENV;

const plugins = [
	easyImport({
		glob: true
	}),
	url,
	forLoop,
	mixins,
	customProperties,
	nested,
	customMedia,
	simpleExtend,
	mediaMinMax,
	fontPath,
	clearFix,
	position,
	size,
	autoprefixer({
		// browsers: '> 1%'
	}),
	singleCharset,
	reporter
];

if (env === 'production') plugins.push(cssnano);

const postCssBuilder = postcss(plugins);

function build() {
	const css = fs.readFileSync(inputCss, 'utf8');

	postCssBuilder.process(css, {
		from: inputCss,
		to: outputCss,
		map: {
			inline: false
		}
	})
	.then((result)=> {
		fs.writeFileSync(outputCss, result.css);
		if (result.map) fs.writeFileSync(`${outputCss}.map`, result.map);
	});
}

if (env === 'development')
	chokidar.watch(path.join(__dirname, '../app/media/css/**/*.css'), {
		ignored: outputCss
	}).on('all', build);
else if (env === 'production') build();
