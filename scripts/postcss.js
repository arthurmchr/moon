const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

const postcss = require('postcss');
const atImport = require('postcss-import');
const url = require('postcss-url');
const customProperties = require('postcss-custom-properties');
const nested = require('postcss-nested');
const mixins = require('postcss-mixins');
const customMedia = require('postcss-custom-media');
const mediaMinMax = require('postcss-media-minmax');
const fontPath = require('postcss-fontpath');
const clearFix = require('postcss-clearfix');
const position = require('postcss-position');
const size = require('postcss-size');
const singleCharset = require('postcss-single-charset');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const inputCss = path.join(__dirname, '../app/media/css/main.css');
const outputCss = path.join(__dirname, '../app/media/css/bundle.css');

const env = process.env.NODE_ENV;

const plugins = [
    atImport({
        glob: true
    }),
    url,
    customProperties,
    nested,
    mixins,
    customMedia,
    mediaMinMax,
    fontPath,
    clearFix,
    position,
    size,
    autoprefixer({
        browsers: '> 1%'
    }),
    singleCharset
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

        process.exit();
    });
}

if (env === 'development') {
    chokidar.watch(path.join(__dirname, '../app/media/css/**/*.css'), {
        ignored: outputCss
    }).on('all', build);
} else if (env === 'production') build();
