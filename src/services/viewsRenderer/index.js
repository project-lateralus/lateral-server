'use strict';

// TODO use pug instead http://expressjs.com/en/guide/using-template-engines.html
module.exports = function() {
  const app = this;

  app.set('view engine', 'jade');
  app.set('views', __dirname + '/views');

  app.get('/auth/facebook_success', (req, res) => res.render('facebookSuccess'));
};
