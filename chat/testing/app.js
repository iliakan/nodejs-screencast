var config = require('config');
var log = require('lib/log')(module);
var server = require('lib/app');

server.listen(config.get('port'), function(){
  log.info('Express server listening on port ' + config.get('port'));
});
