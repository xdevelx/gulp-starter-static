import { dest, task, src} from 'gulp';
import sprite from 'gulp-svg-sprite';
import { svgSpriteSymbol } from '../config';

task('svg-sprite-symbol', () => src(svgSpriteSymbol.src)
  .pipe(sprite({
    transform: [{
      svgo: {
        plugins: [
          {cleanupListOfValues: {floatPrecision: 0}},
          {inlineStyles: {onlyMatchedOnce: false}},
          {removeAttrs: {attrs: ['stroke', 'data-name']}},
          {removeAttributesBySelector: {selector: ':not([fill="none"])', attributes: ['fill']}}
        ]
      }
    }],
    mode: {
      symbol: {
        dest: '',
        inline: true,
        sprite: 'symbols.svg'
      }
    }
  }))
  .pipe(dest(svgSpriteSymbol.dest)));
