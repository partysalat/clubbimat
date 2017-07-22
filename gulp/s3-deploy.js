let
  gulp = require('gulp'),
  awspublish = require('gulp-awspublish'),
  rename = require('gulp-rename');

gulp.task('_aws:deploy', () => {
  const publisher = awspublish.create({
    region: 'eu-west-1',
    params: {
      Bucket: 'dutrinkst',
      ACL: 'public-read',
    },
  }, {
    cacheFileName: './deploy-cache',
  });
  const headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public',
  };

  return gulp.src('./target/assets/**/*')
    .pipe(rename((path) => {
      path.dirname += '/assets';
    }))
    .pipe(publisher.publish(headers))
    .pipe(awspublish.reporter());
});

