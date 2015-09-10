var util = require('util');
var config = require('../config/config.js');
var logger = require('./log.js')(config);
module.exports = {

	inspect: function(obj){
		console.log(util.inspect(obj, { colors:true, showHidden: true, depth: null }));
	}

}
