'use strict';

var winston = require('winston');

module.exports = function(config) {
	var logger = new (winston.Logger)({
		transports: [
			new (winston.transports.Console)({
				timestamp: true,
				displayLevel: true,
				logstash: config.logstash,
				level: config.loglevel,
				colorize: true
			})
		]
	});
	return logger;
};