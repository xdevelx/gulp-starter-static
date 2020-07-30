import { task } from 'gulp';
import browserSync from 'browser-sync';
import { build } from '../config';

const server = browserSync.create();
const { stream } = server;

task('serve', (done) => {
  server.init({
    notify: true,
    port: 3000,
    server: build,
  });
  done();
});

export default stream;
