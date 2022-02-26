const router = require('express').Router();
const {
  Employee,
  Manager,
  Projects,
  Tasks,
  ProjectMembers,
} = require('../models');

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;