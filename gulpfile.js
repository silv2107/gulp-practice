var { watch, task, parallel, series } = require("gulp"); //destructuring
var { server } = require("gulp-connect");

var moveHTML = require("./move-html");
var processSass = require("./process-sass")


// registeres changes without npm start
function watchEverything(){
    watch("./src/html/**/*.html", 
    { ignoreInitial: false },
    moveHTML);

    watch("./src/sass/**/*.scss",
    { ignoreInitial: false },
    processSass)
}

function serve(){
    return server({root:"dist", livereload: true, port: 3000});
}

task("default", parallel(serve, watchEverything));
task("build", series(moveHTML, processSass))