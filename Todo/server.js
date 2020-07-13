'use strict';

const express = require('express');
const PORT    = 3001
const app     = express();
const app_name = "todo";

//Index page (static HTML)
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  });
app.use("/static", express.static(process.cwd() + "/static"));

app.get('/add', (req, res)=> {
  res.json({app_name: app_name,location: 'add'});
});
app.get('/update', (req, res)=> {
  res.json({app_name: app_name,location: 'update'});
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
