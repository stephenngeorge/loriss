const gulp = require('gulp')
const combine = require('gulp-scss-combine')
const concat = require('gulp-concat')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')

sass.compiler = require('node-sass')

gulp.task('genSass', () => 
    gulp.src('./src/index.scss')
        .pipe(combine())
        .pipe(concat('index.scss'))
        .pipe(gulp.dest('./dist'))
)

gulp.task('genCss', () =>
    gulp.src('./src/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: "compressed"})
            .on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./css'))
)

exports.default = gulp.series('genSass', 'genCss')
