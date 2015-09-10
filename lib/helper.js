var util = require('util');
var S = require('string');
var crypto = require('crypto');

module.exports = {

	inspect: function(d, prefix){
		if(prefix) console.log('-------' + prefix + '-------');
		console.log(util.inspect(d, false, null, true));
		if(prefix) console.log('------- end ' + prefix + '-------');
	},
	autoParse: function autoParse(body, response) {
		if (response.headers['content-type'] === 'application/json' || response.headers['content-type'] === 'application/json; charset=UTF-8' || response.headers['content-type'] === 'application/json; charset=utf-8') {
			var result;
			try{
				result = JSON.parse(body);
			}catch(error){
				result = JSON.parse(S(body).chompLeft(')]}\'').s);
			}
			return result;
		} else {
			return body;
		}
	},
	md5: function(value, prefix){
		var hash = crypto.createHash('md5').update(value.toString()).digest('hex');
		if(prefix){
			return prefix + hash;
		}else{
			return hash;
		}
	}

};
