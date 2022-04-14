const del = require('del');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const sassLint = require('gulp-sass-lint');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('clean.styles', () => del([
    './markup/css/*',
]));

gulp.task('lint.styles', () =>
    gulp.src('./markup/scss/**/*.s+(a|c)ss')
        .pipe(sassLint({
            configFile: 'sasslint.yml',
        }))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
);

gulp.task('build.styles', () => {
    const prod = 'production' === process.env.NODE_ENV;
    const options = {
        outputStyle: prod ? 'compressed' : 'expanded'
    };

    return gulp.src('./markup/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(options).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./markup/css'))
});

gulp.task('styles', gulp.series('clean.styles', 'lint.styles', 'build.styles'));

gulp.task('build', gulp.series('styles'));
