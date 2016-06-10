SystemJS.config({
	paths: {
		"npm:": "jspm_packages/npm/",
		"github:": "jspm_packages/github/",
		"moon/": "media/js/"
	},
	browserConfig: {
		"baseURL": "/"
	},
	devConfig: {
		"map": {
			"plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
		}
	},
	transpiler: "plugin-babel",
	packages: {
		"moon": {
			"main": "main.js",
			"format": "esm",
			"meta": {
				"*.js": {
					"loader": "plugin-babel"
				}
			}
		}
	}
});

SystemJS.config({
	packageConfigPaths: [
		"npm:@*/*.json",
		"npm:*.json",
		"github:*/*.json"
	],
	map: {
		"component-emitter": "npm:component-emitter@1.2.1",
		"json": "github:systemjs/plugin-json@0.1.2",
		"page": "npm:page@1.7.1",
		"process": "github:jspm/nodelibs-process@0.2.0-alpha"
	},
	packages: {
		"npm:page@1.7.1": {
			"map": {
				"path-to-regexp": "npm:path-to-regexp@1.2.1"
			}
		},
		"npm:path-to-regexp@1.2.1": {
			"map": {
				"isarray": "npm:isarray@0.0.1"
			}
		}
	}
});
