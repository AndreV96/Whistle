const router = require('express').Router();
const withAuth = require('../utils/auth');
const {
  Employee,
  Projects,
  Tasks,
  ProjectMembers,
} = require('../models');

router.get('/', async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.render('homepage');
    } else {
      res.redirect('/projects');
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/projects', withAuth, async (req, res) => {
  try {
    const userData = await Employee.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });

    res.render('projectshomepage', {
      ...user,
      logged_in: true,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
