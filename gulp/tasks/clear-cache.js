import { task } from 'gulp';
import cache from 'gulp-cache';

task('clear-cache', () => cache.clearAll());
