import gulp from 'gulp';

const ES6 = 'server/**/*.es6';
const TS = 'server/**/*.ts';

gulp.task('server.watch', () => {
  
  var _watchable = [];
  
  _watchable.push(ES6);
  _watchable.push(TS);

  return gulp.watch(_watchable, ['server.compile_tsc']);
});
