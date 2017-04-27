/// <binding ProjectOpened='tscript:watch' />
var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

var PATHS = {
    'ts':'./src'
}
gulp.task("default", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dev"));
});

gulp.task('tscript:watch', function () {
    gulp.watch(PATHS.ts + '/**/*.ts', ['default']);
});
