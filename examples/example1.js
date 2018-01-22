var opts = require('..');

var options = [
  { short       : 'v'
  , long        : 'version'
  , description : 'Show version and exit'
  , callback    : function () { console.log('v1.0');  }
  }
];

opts.add(options);
console.log('Example 1');

module.exports = opts


