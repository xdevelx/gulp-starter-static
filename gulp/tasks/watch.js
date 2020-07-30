import { series, task, watch } from 'gulp';
import { styles, scripts, html } from '../config';

task('watch', () => {
  watch(styles.watch, series('styles'));
  watch(scripts.watch, series('scripts'));
  watch(html.watch, series('html'));
});
