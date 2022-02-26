const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/api', apiRoutes);

router.use('/', homeRoutes);
//Message whenever a user enters an unexisting route
router.use((req, res) => {
  res.send('<h1>Wrong Route!</h1>');
});

module.exports = router;
