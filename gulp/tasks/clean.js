import { task } from 'gulp';
import del from 'del';
import { build } from '../config';

task('clean', () => del([build]));
