const {src, dest, parallel, watch } = require('gulp');
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
    return src('src/js/**/*.js', { sourcemaps: true })
        .pipe(dest('build/js', { sourcemaps: true }))
}

function blockly() {
    src([`${GoogleFolder}blockly_compressed.js`, `${GoogleFolder}blocks_compressed.js`, `${GoogleFolder}javascript_compressed.js`])
        .pipe(dest('build/js'));

    return src(`${GoogleFolder}msg/js/*.js`)
        .pipe(dest('build/js/lang'));
}

exports.build = parallel(js, css, html, blockly);

exports.watch = function() {
    watch(['src/**/*.html', 'src/**/*.css', 'src/js/**/*.js'], {events: 'all'}, function(cb) {
        js();
        css();
        html();
        blockly();
        cb();
    })
}