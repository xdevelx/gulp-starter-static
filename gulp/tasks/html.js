import { task, dest, src } from 'gulp';
import gulpIf from 'gulp-if';
import args from 'yargs';
import plumber from 'gulp-plumber';
import twig from 'gulp-twig';
import htmlBeautify from 'gulp-html-beautify';
import stream from './serve';
import { html } from '../config';

const PRODUCTION = args.argv.prod;

task('html', () => src(html.src)
  .pipe(plumber())
  .pipe(twig({base: html.dir, errorLogToConsole: true}))
  .pipe(htmlBeautify({indent_size: 2, extra_liners: []}))
  .pipe(dest(html.dest))
  .pipe(gulpIf(!PRODUCTION, stream())));
