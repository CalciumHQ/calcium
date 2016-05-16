import gulp from 'gulp';

const ES6 = '**/*.es6';
const TS = '**/*.ts';

gulp.task('server.watch', () => {
  
  var _watchable = [];
  
  _watchable.push(ES6);
  _watchable.push(TS);

  return gulp.watch(_watchable, ['server.compile_tsc']);
});
