const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')
const sass = require('gulp-sass')
const nodemon = require('gulp-nodemon')

gulp.task('move', function () {
  gulp.src('./src/public/**/*.*')
    .pipe(gulp.dest('./build/public'))
})

gulp.task('sass', function () {
  gulp.src('./src/public/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/public'))
})

gulp.task('index_page', function () {
  gulp.src('./src/public/index.html')
    .pipe(gulp.dest('./build/public'))
})

gulp.task('templates', function () {
  gulp.src('./src/public/templates/*.html')
    .pipe(gulp.dest('./build/public/templates'))
})

gulp.task('babel', function () {
  gulp.src('./src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .on('error', function (e) {
      console.log('BABEL ERROR >>>> ', e.message)
      this.emit('end')
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build'))
})

gulp.task('develop', function () {
  nodemon({ script: './build/server.js',
            ext: 'html js',
            delay: 2000
         })
    .on('restart', function () {
      console.log('restarted!')
    })
})

gulp.task('watch', ['sass', 'index_page', 'templates', 'babel', 'move'], function () {
  gulp.watch('./src/**/*.scss', ['sass'])
  gulp.watch('./src/**/*.html', ['index_page', 'templates'])
  gulp.watch('./src/public/**/*.js', ['babel', 'move'])
})

gulp.task('default', ['watch', 'develop'])
