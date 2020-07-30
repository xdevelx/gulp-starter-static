import { task, src } from 'gulp';
import ghPages from 'gulp-gh-pages';
import dayjs from 'dayjs';
import { build } from '../config';

const buildDateTime = dayjs().format('YYYY-MM-DD H:mm');

task('deploy', () => src(build + '**/*')
  .pipe(ghPages({force: true, message: 'The build compiled on' + buildDateTime})));
