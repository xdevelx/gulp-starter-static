import { task, dest, src} from 'gulp';
import path from 'path';
import gulpIf from 'gulp-if';
import args from 'yargs';
import plumber from 'gulp-plumber';
import webpack from 'webpack-stream';
import stream from './serve';
import { scripts } from '../config';

const PRODUCTION = args.argv.prod;

task('scripts', () => src(scripts.src)
  .pipe(plumber())
  .pipe(webpack({
    entry: './' + scripts.src,
    output: {path: path.resolve(__dirname, scripts.dest), filename: 'app.js'},
    devtool: PRODUCTION ? false : 'source-map',
    mode: PRODUCTION ? 'production' : 'development',
    module: {rules: [
      {test: /\.(js)$/, exclude: /(node_modules)/, loader: 'babel-loader'}
    ]}
  }))
  .pipe(dest(scripts.dest))
  .pipe(gulpIf(!PRODUCTION, stream())));
