const gulp = require('gulp');
const sass = require('gulp-sass');

function compile(done) {
    gulp.src("sass/**/*.scss")
        .pipe(sass())
        .on("Error", sass.logError)
        .pipe(gulp.dest("css"));
}

exports.default = compile;