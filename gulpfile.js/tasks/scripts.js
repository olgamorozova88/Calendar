const gulp = require("gulp");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const terser = require("gulp-terser");
const sourcemap = require("gulp-sourcemaps");
const gulpif = require("gulp-if");

// Config

const path = require("../config/path.js");
const app = require("../config/app.js");

const scripts = () => {
  return gulp.src(path.scripts.src)
    .pipe(plumber())
    .pipe(gulpif(app.isDev, sourcemap.init()))
    .pipe(terser())
    .pipe(gulp.dest(path.scripts.dest))
    .pipe(rename( {suffix: ".min"} ))
    .pipe(gulpif(app.isDev, sourcemap.write(".")))
    .pipe(gulp.dest(path.scripts.dest));
}

module.exports = scripts;