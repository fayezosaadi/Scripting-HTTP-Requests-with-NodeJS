  var https = require('https');
  function getHTML (options, callback) {
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

  /* Add your code here */

  }

  function printHTML (html) {
    console.log(html);
  }

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };


  getHTML(requestOptions, printHTML);