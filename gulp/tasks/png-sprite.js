import { dest, task, src} from 'gulp';
import merge from 'merge-stream';
import buffer from 'vinyl-buffer';
import spritesmith from 'gulp.spritesmith';
import cache from 'gulp-cache';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import { pngSprite, styles, img } from '../config';

task('png-sprite', () => {
  // Generate spritesheet
  const spriteData = src(pngSprite.src)
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: '_png.sprite.scss',
      cssTemplate: pngSprite.template,
      imgPath: '../img/sprites/sprite.png'
    }));

  // Pipe image stream through image optimizer and onto disk
  const imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
    .pipe(buffer())
    .pipe(cache(imagemin([pngquant(img.pngquant)]), {verbose: true}))
    .pipe(dest(pngSprite.dest));

  // Pipe CSS stream through CSS optimizer and onto disk
  const cssStream = spriteData.css.pipe(dest(`${styles.dir}sprites`));

  // Return a merged stream to handle both `end` events
  return merge(imgStream, cssStream);
});
