const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

const postcss = require('postcss');
const easyImport = require('postcss-easy-import');
const customProperties = require('postcss-custom-properties');
const nested = require('postcss-nested');
const mixins = require('postcss-mixins');
const extend = require('postcss-simple-extend');
const customMedia = require('postcss-custom-media');
const vars = require('postcss-simple-vars');
const mediaMinMax = require('postcss-media-minmax');
const objectFit = require('postcss-object-fit-images');
const hexRGBA = require('postcss-hexrgba');
const forLoop = require('postcss-for');
const math = require('postcss-math');
const map = require('postcss-map');
const calc = require('postcss-calc');
const singleCharset = require('postcss-single-charset');
const reporter = require('postcss-reporter');
const functions = require('postcss-functions');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const inputCSS = path.join(__dirname, '../app/media/css/main.css');
const outputCSS = path.join(__dirname, '../app/media/css/bundle.css');
const ymlCSS = path.join(__dirname, '../app/media/css');

const env = process.env.NODE_ENV;

const plugins = [
	easyImport({
		glob: true
	}),
	map({
		basePath: ymlCSS,
		maps: [
			'cap-height.yml'
		]
	}),
	forLoop,
	customProperties,
	vars,
	mixins,
	customMedia,
	math,
	nested,
	mediaMinMax,
	extend,
	objectFit,
	hexRGBA,
	calc,
	functions({
		functions: {
			rem: function(val, base) {

				return `${parseFloat(val, 10) / parseFloat(base, 10)}rem`;
			}
		}
	}),
	autoprefixer({
		// browsers: 'last 2 versions'
	}),
	singleCharset,
	reporter
];

if (env === 'production') plugins.push(cssnano);

const postCssBuilder = postcss(plugins);

function build() {

	const css = fs.readFileSync(inputCSS, 'utf8');

	postCssBuilder.process(css, {
		from: inputCSS,
		to: outputCSS,
		map: {
			inline: false
		}
	})
	.then((result)=> {

		fs.writeFileSync(outputCSS, result.css);

		if (result.map) fs.writeFileSync(`${outputCSS}.map`, result.map);
	});
}

if (env === 'development') {

	chokidar.watch(path.join(__dirname, '../app/media/css/**/*.css'), {
		ignored: outputCSS,
		ignoreInitial: true
	}).on('all', build);

	build();
}
else if (env === 'production') build();
