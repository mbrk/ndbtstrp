var pkg = require('./package.json');
var config = require('./config/config.js');
var logger = require('./lib/log.js')(config);
var h = require('./lib/helper.js');

logger.info('startup', {name: pkg.name, version: pkg.version});



