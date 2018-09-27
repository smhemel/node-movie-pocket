const isLoggedIn = require('../middlewares/isLoggedIn');
const Top = require('../models/top');

module.exports = app => {
  app.get('/', async (req, res) => {
    const topMovies = await Top.find({}).limit(12).sort({hit: -1});
    res.render('index', { data: topMovies });
  })

  app.get('/secret', isLoggedIn, (req, res) => {
    res.render('secret');
  });
}