'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('watch', function () {
  gulp.watch('stripe/**/*.scss', gulp.series('sass'));
});


// 'use strict';

// // Include gulp
// var gulp = require('gulp'),
//     sass = require('gulp-sass'),
//    // concat = require('gulp-concat'),
//   //  uglify = require('gulp-uglify'),
//   //  rename = require('gulp-rename'),
//     copy = require('gulp-copy'),
//    clean = require('gulp-clean'),
//     del = require('del'),
//     scssPath = 'sass/**/*.scss',
//     browserSync = require('browser-sync').create(),
//     reload = browserSync.reload;
    

//     gulp.task('clean', function () {
//         del([
//             'dist/**'
//         ]);
//     });
//     // gulp.task('remove',['clean', 'copy'], function () {
//     //     del([
//     //         'dist/**/*.scss'
//     //         ])
//     // });
//   // Compile Our Sass
//   gulp.task('scss', function() {
//      gulp.src(scssPath)
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest(function(f) {
//          return f.base;
//       }))
//   });

//   // Watch Files For Changes
//   gulp.task('watch', function() {
//       gulp.watch('sass/**/*.scss', gulp.series('scss')).on('change', reload);
//   });

