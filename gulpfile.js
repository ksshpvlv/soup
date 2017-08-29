"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var browserSync = require("browser-sync");
var prefixier = require("autoprefixer");
var watch = require("gulp-watch");

gulp.task("less", function() {
  gulp.src("less/style.less")
    .pipe(less())
    .pipe(gulp.dest("css"))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task("browser-sync", function() {
  browserSync({
    server: {
      baseDir: ["./"]
    },
    notify: false
  });
});

gulp.task("watch", ["browser-sync", "less"], function() {

gulp.watch("less/**/*.less", ["less"]);
});