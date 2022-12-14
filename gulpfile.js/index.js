const gulp = require("gulp");
const browsersync = require("browser-sync").create();

// Config

const path = require("./config/path.js");
const app = require("./config/app.js");

// Watcher

const watcher = () => {
  gulp.watch(path.html.watch, html).on("all", browsersync.reload);
  gulp.watch(path.style.watch, style).on("all", browsersync.reload);
  gulp.watch(path.scripts.watch, scripts).on("all", browsersync.reload);
}
exports.watcher = watcher;

// Server

const server = () => {
  browsersync.init({
    server: {
      baseDir: path.root
    }
  });
}
exports.server = server;

// Tasks

const html = require("./tasks/html.js");
exports.html = html;

const clean = require("./tasks/clean.js");
exports.clean = clean;

const style = require("./tasks/style.js");
exports.style = style;

const copyfonts = require("./tasks/copyfonts.js");
exports.copyfonts = copyfonts;

const scripts = require("./tasks/scripts.js");
exports.scripts = scripts;

const build = gulp.series(
  clean,
  gulp.parallel(html, style, copyfonts, scripts)
);

const dev = gulp.series(
  build,
  gulp.parallel(watcher, server)
);

// Gulp

exports.default = app.isProd ? build : dev
