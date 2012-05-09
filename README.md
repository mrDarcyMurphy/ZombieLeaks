Zombie leaks variables into the global name space as soon as browser.visit is called. Refer to issue [#332](https://github.com/iss/zombie/issues/332).

### Tip
Install the modules and the latest coffee-script within the zombie module

```
npm install && cd node_modules/zombie && npm install coffee-script
```

### Run The Test
```
./node_modules/mocha/bin/mocha test/zombie_leaks.js
```

### The Test
```javascript
var Browser = require('zombie');

describe('Zombie', function(){
  var browser = new Browser();
  it('should leak variables into the global scope', function(done){
    browser.visit('http://www.google.com', function(){
      done();
    });
  });
});
```

#### Expected Output

```
  ..

  ✖ 1 of 1 test failed:

  1) Zombie should leak variables into the global scope:
     Error: global leaks detected: k, chars, char, i, name
```
