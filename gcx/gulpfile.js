const { src, dest, series, parallel } = require('gulp');
const concat = require('gulp-concat');
var clean = require('gulp-clean');
const rename = require('gulp-rename');
const zip = require('gulp-zip');
const unzip = require('gulp-unzip');

// cleans up the tempBuild folder
const cleanTempBuild = () => {
    return src('tempBuild', { read: false, allowEmpty: true })
        .pipe(clean());
}

// unzips the antora ui-bundle into the tempBuild folder
const unzipBundle = () => {
    return src('../build/ui-bundle.zip')
        .pipe(unzip())
        .pipe(dest('./tempBuild'));
};

const cleanImg = () => {
    return src('tempBuild/img', { read: false, allowEmpty: true })
        .pipe(clean());
}

const cleanHBLayouts = () => {
    return src(['tempBuild/layouts','tempBuild/partials'],{read:false,allowEmpty:true})
    .pipe(clean());
}

const cleanBuild = () => {
    return src('styles/build',{read:false,allowEmpty:true})
    .pipe(clean());
}

const bundleJSsrc = () =>
    src('styles/src/js/*.js')
    .pipe(concat('site.js'))
    .pipe(dest('styles/build/js'));

const mergeJS = () => {
    return src(['tempBuild/js/site.js',
    'styles/src/js/06-tabs-block.js',
    'styles/src/js/07-copy-to-clipboard.js',
    'styles/src/js/08-gcx-helios.js',])
    .pipe(concat('site.js'))
    .pipe(dest('build/js'));
}

const bundleJShelpers = () => {
    return src([
        '../src/helpers/**/*.js',
    ],  {base: '../src/'}) 
    .pipe(dest('build/'));
}

const bundleStencil = () => {
    return src([
        'styles/src/js/vendor/**/*.js',
    ],  {base: 'styles/src/'}) 
    .pipe(dest('build/'));
}

const renameHighlight = () => {
    return src('styles/build/js/vendor/highlight.bundle.js')
    .pipe(rename("highlight.js"))
    .pipe(dest('build/js/vendor'))
}

const cleanHighlight = () => {
    return src('build/js/vendor/highlight.bundle.js')
    .pipe(clean({force:true}))
}

const cleanCSS = () => {
    return src('build/css/site.css',{force:true,allowEmpty:true})
    .pipe(clean())
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
    .pipe(dest('build/css'));

const bundleHB = () => {
    return src([
        'styles/src/layouts/**/*.hbs',
        'styles/src/partials/**/*.hbs'
    ],  {base: 'styles/src/'}) 
    .pipe(dest('build/'));
}

const bundleImg = () => {
    return src([
        'styles/src/img/**/*.*'
    ],  {base: 'styles/src/'}) 
    .pipe(dest('build/'));
}

const zipBundle = () => {
    return src('build/**/*.*')
    .pipe(zip('ui-bundle.zip'))
    .pipe(dest('build/'));
}

exports.bundle = series(cleanTempBuild,unzipBundle,cleanImg,cleanHBLayouts,cleanBuild,cleanCSS,bundleCSS,bundleHeliosCSS, parallel(bundleStencil), bundleJShelpers, mergeJS, cleanHighlight, bundleHB, bundleImg, zipBundle, cleanTempBuild);