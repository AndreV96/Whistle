const router = require('express').Router();
const {
  Employee,
  Manager,
  Projects,
  Tasks,
  ProjectMembers,
} = require('../../models');

router.get('/', async (req, res) => {
  try {
    const data = Tasks.findAll({
      include: [{ model: Employee }, { model: Projects }],
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
