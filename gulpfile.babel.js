import { parallel, series } from 'gulp';
import './gulp/tasks/clean';
import './gulp/tasks/clear-cache';
import './gulp/tasks/deploy';
import './gulp/tasks/html';
import './gulp/tasks/images';
import './gulp/tasks/rev';
import './gulp/tasks/scripts';
import './gulp/tasks/serve';
import './gulp/tasks/styles';
import './gulp/tasks/svg-sprite-symbol';
import './gulp/tasks/watch';

export const build = series(
  'clean',
  parallel('images', 'scripts', 'svg-sprite-symbol'),
  parallel('html', 'styles'),
);

export default series(build, parallel('serve', 'watch'));
