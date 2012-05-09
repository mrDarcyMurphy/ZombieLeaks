var Browser = require('zombie');

describe('Zombie', function(){
  var browser = new Browser();
  it('should leak variables into the global scope', function(done){
    browser.visit('http://www.google.com', function(){
      done();
    });
  });
});
