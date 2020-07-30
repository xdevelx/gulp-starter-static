import { dest, series, src, task} from 'gulp';
import rev from 'gulp-rev';
import revRewrite from 'gulp-rev-rewrite';

task('rev:hash', () => src([
    'build/**/*.{css,js}',
    'build/img/sprites/*.{png,svg}',
  ], {base: 'build'})
  .pipe(rev())
  .pipe(dest('build'))
  .pipe(rev.manifest('rev.json'))
  .pipe(dest('build')));

task('rev:rewrite', () => src(['build/**/*.{html,css}'])
  .pipe(revRewrite({
    manifest: src('build/rev.json')
  }))
  .pipe(dest('build')));

task('rev', series(
  'rev:hash',
  'rev:rewrite',
));
