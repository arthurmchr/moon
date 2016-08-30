import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import uglify from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import image from 'rollup-plugin-image';
import autoTransform from 'rollup-plugin-auto-transform';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';

const plugins = [
	autoTransform(),
	globals(),
	builtins(),
	nodeResolve({
		jsnext: true,
		browser: true
	}),
	commonjs({
		ignoreGlobal: true
	}),
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
