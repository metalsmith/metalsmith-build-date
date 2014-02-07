
/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * A Metalsmith plugin that adds a build date to the metadata.
 *
 * @return {Function}
 */

function plugin(){
  return function(files, metalsmith, done){
    setImmediate(done);
    var data = metalsmith.metadata();
    data.date = new Date();
    metalsmith.metadata(data);
  };
}