  var https = require('https');
  module.exports = function getHTML (options, callback) {

    if(typeof callback !== 'function') {
      throw new Error('Must provide a callback function');
    }
    https.get(options, function (response) {
    // print out the HTTP response
      response.setEncoding('utf8');
      let responseString = '';
      response.on('data', function (data) {
        responseString += data;
    });
      response.on('end', function() {
        callback(responseString);
      });
    });
  }
