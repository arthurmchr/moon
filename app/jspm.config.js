SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "moon": "media/js/",
    "moon/": "src/"
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
      "main": "media/js/main.js",
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
    "babel-polyfill": "npm:babel-polyfill@6.9.1",
    "component-emitter": "npm:component-emitter@1.2.1",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "json": "github:systemjs/plugin-json@0.1.2",
    "page": "npm:page@1.7.1",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha"
  },
  packages: {
    "npm:babel-polyfill@6.9.1": {
      "map": {
        "regenerator-runtime": "npm:regenerator-runtime@0.9.5",
        "core-js": "npm:core-js@2.4.0",
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-runtime@6.9.2": {
      "map": {
        "core-js": "npm:core-js@2.4.0",
        "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
      }
    },
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
