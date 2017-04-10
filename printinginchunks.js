  var https = require('https');

  function getAndPrintHTMLChunks () {

    const requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    };

    /* Add your code here */
    https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Chunk Received: ', data.length);
      console.log(data.toString() + '\n');
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

      });
  }

getAndPrintHTMLChunks ();



