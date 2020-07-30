import { dest, task, src} from 'gulp';
import sprite from 'gulp-svg-sprite';
import { svgSpriteCss, styles } from '../config';

task('svg-sprite-css', () => src(svgSpriteCss.src)
  .pipe(sprite({
    transform: [],
    mode: {css: {
      dest: '',
      bust: false,
      sprite: 'sprite.svg',
      render: {scss: {
        dest: '../../../' + styles.dir + 'sprites/_svg-css.sprite.scss',
        template: svgSpriteCss.template
      }}
   }}
  }))
  .pipe(dest(svgSpriteCss.dest)));
