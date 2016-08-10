import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import uglify from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import image from 'rollup-plugin-image';

const plugins = [
	nodeResolve(),
	commonjs(),
	json(),
	image(),
	babel({
		presets: 'es2015-rollup',
		include: [
			'**/*.js'
		],
		exclude: [
			'node_modules/**',
			'app/media/js/vendors/**'
		]
	})
];

if (process.env.BUILD === 'production') plugins.push(uglify());

export default {
	entry: 'app/media/js/main.js',
	dest: 'app/media/js/bundle.js',
	format: 'iife',
	plugins
};
