var opts = require('./example1');

opts.add([
    { short       : 'a'
        , long        : 'version2'
        , description : 'Show version and exit'
        , value: true
        , callback    : function () { console.log('v2.0');}
    },
    { short       : 'c'
        , long        : 'c'
        , description : 'Show version and exit'
        , value: true
        , required    : true
    }
])

console.log('Example 5');
console.log(`a: ${opts.get('a')}`);
console.log(`v: ${opts.get('v')}`);
process.exit(0);


