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
    const data = await Tasks.findAll({
      include: [{ model: Employee }, { model: Projects }],
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const data = await Tasks.findByPk(req.params.id, {
      include: [{ model: Employee }, { model: Projects }],
    });
    if (!data) res.status(404).json({ message: 'No task found with that id' });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
