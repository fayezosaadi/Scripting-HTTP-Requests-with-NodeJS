  var https = require('https');


  function getAndPrintHTML () {

    const requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };

  https.get(requestOptions, function (response) {

      // print out the HTTP response
      response.setEncoding('utf8');

      let responseString = '';
      response.on('data', function (data) {
        responseString += data;
      // console.log('Chunk Received: ', data.length);
      // console.log(data.toString() + '\n');
    });
      response.on('end', function() {
        console.log(responseString);
        console.log('Response stream complete.');
      });
    });
}
getAndPrintHTML ();

