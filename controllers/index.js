const router = require('express').Router();
// const apiRoutes = require('./api');
// const homeRoutes = require('./homeRoutes');

router.use('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (error) {
    res.status(500).json(error);
  }
});
// router.use('/api', apiRoutes);

module.exports = router;