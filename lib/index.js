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
    
    today = new Date();
    
    //modified date to display EST
    options.timeZone = 'America/New_York';
    options.timeZoneName = 'short';
    today = today.toLocaleString('en-US', options);
    //

    data[options.key] = today;
    done();
  };
}
