'use strict';

const express     = require('express');
const apiRoutes_hello = require('./hello/hello.js')
const apiRoutes_hola = require('./hola/hola.js')
const PORT = 3000

var app = express();

// Routing for apps
apiRoutes_hello(app);
apiRoutes_hola(app);

//Index page (static HTML)
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/index.html');
  });
app.route('/env')
  .get(function (req, res) {
    if (process.env.DB_STRING) {
      res.send(process.env.DB_STRING);
    }
    else {
      res.send('Not defined');
    }
  });

//404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

//Start our server and tests!
app.listen(PORT, function () {
  console.log("Listening on port " + PORT);
});

module.exports = app; //for testing
