var {src, dest} = require("gulp");
var { reload } = require("gulp-connect");
var { init, write} = require("gulp-sourcemaps");
var cleancss = require("gulp-clean-css");
var sass = require("gulp-sass");

function processSass() {
    return src("./src/sass/**/*.scss")
        .pipe(init()) // maps the pages where code is written
        .pipe(sass())
        .pipe(cleancss({ compatibility: "ie9" })) //minifies css code in dist
        .pipe(write("."))
        .pipe(dest("./dist/assets/css"))
        .pipe(reload());
}

module.exports = processSass;