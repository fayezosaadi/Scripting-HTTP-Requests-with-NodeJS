  var https = require('https');
  function getAndPrintHTML (options) {
    https.get(options, function (response) {
    // print out the HTTP response
      response.setEncoding('utf8');
      let responseString = '';
      response.on('data', function (data) {
        responseString += data;
    });
      response.on('end', function() {
        console.log(responseString);
        console.log('Response stream complete.');
      });
    });
}




var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML (requestOptions);