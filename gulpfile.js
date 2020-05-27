const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const csscomb = require("gulp-csscomb");
const browserSync = require("browser-sync").create(),
  reload = browserSync.reload;
const rename = require("gulp-rename");
const cleanCss = require("gulp-clean-css");
const imagemin = require("gulp-imagemin");
const terser = require("gulp-terser");

gulp.task("sass", () => {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(csscomb())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(cleanCss())
    .pipe(gulp.dest("dist/css"));
});

gulp.task("js", () => {
  return gulp
    .src("src/js/**/*.js")
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(terser())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("html", () => {
  gulp.src("*.html").pipe(gulp.dest("."));
});

gulp.task("image", () => {
  return gulp.src("src/img/**/*").pipe(imagemin()).pipe(gulp.dest("dist/img"));
});
gulp.task("watch", () => {
  browserSync.init({
    server: {
      baseDir: ".",
    },
  });
  gulp.watch("src/scss/**/*.scss", gulp.series("sass")).on("change", reload);
  gulp.watch("src/js/**/*.js", gulp.series("js")).on("change", reload);
  gulp.watch("*.html", gulp.series("html")).on("change", reload);
  gulp.watch("src/img/**/*", gulp.series("image")).on("change", reload);
});
