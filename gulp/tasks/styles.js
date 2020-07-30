import { dest, task, src } from 'gulp';
import gulpIf from 'gulp-if';
import args from 'yargs';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import sass from 'gulp-sass';
import csso from 'gulp-csso';
import glob from 'gulp-sass-glob';
import stream from './serve';
import { styles } from '../config';

const PRODUCTION = args.argv.prod;

task('styles', () => src(styles.src, {sourcemaps: !PRODUCTION})
  .pipe(plumber())
  .pipe(glob())
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(postcss())
  .pipe(gulpIf(PRODUCTION, csso({comments: false})))
  .pipe(dest(styles.dest, {sourcemaps: !PRODUCTION}))
  .pipe(gulpIf(!PRODUCTION, stream())));
