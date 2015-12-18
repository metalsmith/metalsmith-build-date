
var assert = require('assert');
var Metalsmith = require('metalsmith');
var date = require('..');

describe('metalsmith-build-date', function(){
  it('should add a build date', function(done){
    var m = Metalsmith('test/fixture');
    m
      .use(date())
      .build(function(err){
        if (err) return done(err);
        assert(m.metadata().date instanceof Date);
        done();
      });
  });

  it('should add a build date with the key dateBuilt', function(done){
    var m = Metalsmith('test/fixture');
    m
      .use(date({ key: 'dateBuilt' }))
      .build(function(err){
        if (err) return done(err);
        assert(m.metadata().dateBuilt instanceof Date);
        done();
      });
  });
});
