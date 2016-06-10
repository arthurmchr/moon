SystemJS.config({
	paths: {
		"npm:": "jspm_packages/npm/",
		"github:": "jspm_packages/github/",
		"moon/": "media/js/"
	},
	browserConfig: {
		"baseURL": "/",
		"bundles": {
			"moon/bundle.js": [
				"moon/main.js",
				"moon/managers/AppManager.js",
				"moon/managers/RouterManager.js",
				"moon/views/HomeView.js",
				"moon/views/AbstractView.js",
				"moon/managers/EmitterManager.js",
				"npm:component-emitter@1.2.1/index.js",
				"npm:component-emitter@1.2.1.json",
				"npm:systemjs-plugin-babel@0.0.12.json",
				"moon/datas/events.json!github:systemjs/plugin-json@0.1.2/json.js",
				"github:systemjs/plugin-json@0.1.2.json",
				"npm:systemjs-plugin-babel@0.0.12/babel-helpers/createClass.js",
				"npm:systemjs-plugin-babel@0.0.12/babel-helpers/classCallCheck.js",
				"npm:systemjs-plugin-babel@0.0.12/babel-helpers/inherits.js",
				"npm:systemjs-plugin-babel@0.0.12/babel-helpers/get.js",
				"npm:systemjs-plugin-babel@0.0.12/babel-helpers/possibleConstructorReturn.js",
				"moon/datas/routes.json!github:systemjs/plugin-json@0.1.2/json.js",
				"npm:page@1.7.1/index.js",
				"npm:page@1.7.1.json",
				"github:jspm/nodelibs-process@0.2.0-alpha/process.js",
				"github:jspm/nodelibs-process@0.2.0-alpha.json",
				"npm:path-to-regexp@1.2.1/index.js",
				"npm:path-to-regexp@1.2.1.json",
				"npm:isarray@0.0.1/index.js",
				"npm:isarray@0.0.1.json",
				"moon/managers/LayoutManager.js",
				"moon/managers/ResizeManager.js"
			]
		}
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
