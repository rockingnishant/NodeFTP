const Client = require('ftp');
const fs = require('fs');

config = {
    host: 'localhost',
    port: 21,
    user: 'Nishant',
    password: 'laptop'
}

  var c = new Client();
  c.on('ready', function() {

    c.list(function(err, list) {
      if (err) throw err;
      console.dir(list);
     
    });

    c.get('/FS.csv', function(err, stream) {
        console.log("inside get")
        if (err) throw err;
        stream.once('close', function() { c.end(); });
        stream.pipe(fs.createWriteStream('FSV-local.csv'));
    });

  });
  // connect to localhost:21 as anonymous
  c.connect(config);
