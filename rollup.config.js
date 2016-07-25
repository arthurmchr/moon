import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import uglify from 'rollup-plugin-uglify';

const plugins = [
	babel({
		babelrc: false,
		presets: 'es2015-rollup',
		include: [
			'**/*.js'
		],
		exclude: [
			'node_modules/**',
			'app/media/js/vendors/**'
		]
	}),
	json()
];

if (process.env.BUILD === 'production') plugins.push(uglify());

export default {
	entry: 'app/media/js/main.js',
	dest: 'app/media/js/bundle.js',
	format: 'cjs',
	plugins
};
