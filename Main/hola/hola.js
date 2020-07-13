'use strict';

module.exports = (app) => {
  app.route('/hola')
    .get(function (req, res){
      res.send('hola app');
    });
}
