import { dest, task, src } from 'gulp';
import cache from 'gulp-cache';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import { img } from '../config';

task('images', () => src(img.src)
  .pipe(cache(imagemin([
    pngquant(img.pngquant),
    imagemin.mozjpeg(img.mozjpeg),
    imagemin.svgo({plugins: [
      {inlineStyles: {
        onlyMatchedOnce: false,
        removeMatchedSelectors: true,
        useMqs: ['', 'screen'],
        usePseudos: [''],
      }},
      {removeAttrs: {attrs: ['data-name']}},
      {removeViewBox: false},
    ]}),
  ], {verbose: true})))
  .pipe(dest(img.dest)));
