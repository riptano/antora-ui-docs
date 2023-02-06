const { src, dest, series, parallel } = require('gulp');
const concat = require('gulp-concat');
var clean = require('gulp-clean');
const rename = require('gulp-rename');
const zip = require('gulp-zip');

const cleanBuild = () => {
    return src('styles/build',{read:false,allowEmpty:true})
    .pipe(clean());
}

const bundleJSsrc = () =>
    src('styles/src/js/*.js')
    .pipe(concat('site.js'))
    .pipe(dest('styles/build/js'));

// Bundle a site.js for the 404 error page, excluding 01-nav.js
const bundleJS404 = () =>
    src(['styles/src/js/*.js','!styles/src/js/01-nav.js'])
    .pipe(concat('site404.js'))
    .pipe(dest('styles/build/js'));


const bundleJShelpers = () => {
    return src([
        'styles/src/helpers/**/*.js',
    ],  {base: 'styles/src/'}) 
    .pipe(dest('styles/build/'));
}

const bundleStencil = () => {
    return src([
        'styles/src/js/vendor/**/*.js',
    ],  {base: 'styles/src/'}) 
    .pipe(dest('styles/build/'));
}

const renameHighlight = () => {
    return src('styles/build/js/vendor/highlight.bundle.js')
    .pipe(rename("highlight.js"))
    .pipe(dest('styles/build/js/vendor'))
}

const cleanHighlight = () => {
    return src('styles/build/js/vendor/highlight.bundle.js')
    .pipe(clean({force:true}))
}

const bundleCSS = () =>
    src(['styles/src/css/**/*.css','!styles/src/css/**/helios-gcx.css','!styles/src/css/**/highlight.css'])
    .pipe(concat('siteTemp.css'))
    .pipe(dest('styles/build/css'));

const bundleHeliosCSS = () =>
    src(['styles/build/css/siteTemp.css',
    'styles/src/css/**/helios-gcx-alerts.css',
    'styles/src/css/**/helios-gcx-base.css',
    'styles/src/css/**/helios-gcx-content.css',
    'styles/src/css/**/helios-gcx-enlighter.css',
    'styles/src/css/**/helios-gcx-footer.css',
    'styles/src/css/**/helios-gcx-header.css',
    'styles/src/css/**/helios-gcx-sidebar.css',
    'styles/src/css/**/helios-gcx-styles.css'])
    .pipe(concat('site.css'))
    .pipe(dest('styles/build/css'));

const bundleHB = () => {
    return src([
        'styles/src/layouts/**/*.hbs',
        'styles/src/partials/**/*.hbs'
    ],  {base: 'styles/src/'}) 
    .pipe(dest('styles/build/'));
}

const bundleImg = () => {
    return src([
        'styles/src/img/**/*.*'
    ],  {base: 'styles/src/'}) 
    .pipe(dest('styles/build/'));
}

const zipBundle = () => {
    return src('styles/build/**/*.*')
    .pipe(zip('ui-bundle.zip'))
    .pipe(dest('styles/build/'));
}

exports.bundle = series(cleanBuild, bundleCSS, bundleHeliosCSS, bundleJS404, parallel(bundleJSsrc, bundleJShelpers, bundleStencil), renameHighlight, cleanHighlight, bundleHB, bundleImg, zipBundle);