/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * A Metalsmith plugin that adds a build date to the metadata.
 *
 * @return {Function}
 */

function plugin(options) {

  options = options || {
    key: 'date'
  };

  return function(files, metalsmith, done){
    var data = metalsmith.metadata();
    data[options.key] = new Date();
    done();
  };
}
