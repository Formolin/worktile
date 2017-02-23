/**
 * Created by Administrator on 2017/2/16 0016.
 */
var  gulp = require('gulp');
var less = require('gulp-less');

gulp.task('changeLess',function () {
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('html',function () {
    gulp.src('src/*.html')

        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('js',function () {
    gulp.src('src/js/*.js')

        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({stream:true}));
});
gulp.task('img',function () {
    gulp.src('src/img/*.*')

        .pipe(gulp.dest('dist/img'))
        .pipe(browserSync.reload({stream:true}));
});
gulp.task('fenye',function () {
    gulp.src('src/html/*.html')

        .pipe(gulp.dest('dist/html'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('css',function () {
    gulp.src('src/css/*.css')

        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream:true}));
});



var browserSync = require('browser-sync');
gulp.task('serve',function () {
    browserSync({
        server:{
            baseDir:['dist']
        }

    },function (err,bs) {
        console.log(bs.options.getIn(["urls","local"]));
    });

    gulp.watch('src/less/*.less',['changeLess']);
    gulp.watch('src/*.html',['html']);
    gulp.watch('src/html/*.html',['fenye']);
    gulp.watch('src/js/*.js',['js']);
    gulp.watch('src/img/*.*',['img']);
    gulp.watch('src/css/*.css',['css']);

});
