
import gulp from 'gulp';
import {tasks} from './client/const';

gulp.task('default', [tasks.CLIENT_WATCH,'server.watch']);

require('require-dir')('client');


require('require-dir')('server');

