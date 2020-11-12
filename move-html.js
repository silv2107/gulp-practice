var { init, write } = require("gulp-sourcemaps");
var { reload } = require("gulp-connect");
var { src, dest } = require("gulp");
var minify = require("gulp-htmlmin");
var rename = require("gulp-rename");



// leverer ændringerne i html til dist mappen
function moveHTML() {
    return src("./src/html/**/*.html")
        .pipe(init())
        .pipe(minify({ collapseWhitespace: true })) //minifies and improves performance
        .pipe(rename(function(path){
            console.log(path);
            if(path.basename != "index"){
                path.dirname = path.dirname + "/" + path.basename;
                path.basename = "index";
            }
        }))
        .pipe(write("."))
        .pipe(dest("./dist"))
        .pipe(reload());
}

module.exports = moveHTML;