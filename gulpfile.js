const { src, dest, parallel } = require('gulp');
const minifyCSS = require('gulp-csso');

const GoogleFolder = 'vendor/google-blockly-ba6dfd8/';

function html() {
    return src('src/**/*.html')
        .pipe(dest('build/'))
}

function css() {
    return src('src/**/*.css')
        .pipe(minifyCSS())
        .pipe(dest('build/css'))
}

function js() {
    return src('src/**/*.js', { sourcemaps: true })
        .pipe(dest('build/js', { sourcemaps: true }))
}

function blockly() {
    return src([`${GoogleFolder}blockly_compressed.js`, `${GoogleFolder}blocks_compressed.js`, `${GoogleFolder}python_compressed.js`, `${GoogleFolder}msg/**/*.js`])
        .pipe(dest('build/js'))
}

exports.js = js;
exports.css = css;
exports.html = html;

exports.build = parallel(js, css, html, blockly);