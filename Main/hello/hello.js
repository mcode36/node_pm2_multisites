'use strict';

module.exports = (app) => {
  app.route('/hello')
    .get(function (req, res){
      res.send('hello app');
    });
}
