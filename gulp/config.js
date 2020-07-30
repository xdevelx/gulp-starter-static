const src = 'src/';
const build = 'build/';

const html = {
  watch: `${src}views/**/*.twig`,
  src: `${src}views/*.twig`,
  dest: build,
  dir: `${src}views/`,
};

const styles = {
  watch: `${src}scss/**/*.scss`,
  src: `${src}scss/style.scss`,
  dest: `${build}css/`,
  dir: `${src}scss/`,
};

const scripts = {
  watch: `${src}js/**/*.js`,
  src: `${src}js/main.js`,
  dest: `${build}js/`,
};

const img = {
  watch: [
    `${src}img/**/*.{jpg,jpeg,png,svg}`,
    `!${src}img/icons{,/**/*}`,
  ],
  src: [
    `${src}img/**/*.{jpg,jpeg,png,svg}`,
    `!${src}img/icons{,/**/*}`,
  ],
  dest: `${build}img/`,
  pngquant: {
    dithering: 0.4,
    speed: 1,
    strip: true,
    quality: [0, 1]
  },
  mozjpeg: {quality: 75, smooth: 10}
};

const svgSpriteSymbol = {
  src: `${src}img/icons/svg-symbol/*.svg`,
  dest: `${img.dest}sprites/`,
};

const svgSpriteCss = {
  src: `${src}img/icons/svg-css/*.svg`,
  dest: `${img.dest}sprites/`,
  template: './gulp/sprite-templates/svg-css.mustache',
};

const pngSprite = {
  src: `${src}img/icons/png/*.png`,
  dest: `${img.dest}sprites/`,
  template: './gulp/sprite-templates/png.mustache',
};

const copy = {
  watch: `${src}copy/**/*`,
  src: `${src}copy/**`,
  dest: build,
};

export {
 build, html, styles, scripts, img, svgSpriteSymbol, svgSpriteCss, pngSprite, copy
};
