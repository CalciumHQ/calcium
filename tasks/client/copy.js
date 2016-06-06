import gulp from 'gulp';
import {path, tasks} from './const';

gulp.task(tasks.CLIENT_COPY, () => {
  return gulp.src(path.DEV + '**/*.{css,js,html,jpg,png,svg}')
             .pipe(gulp.dest(path.DIST));
});
