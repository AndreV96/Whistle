const router = require('express').Router();
const {
  Employee,
  Projects,
  Tasks,
  ProjectMembers,
} = require('../../models');

router.get('/', async (req, res) => {
  try {
    const data = await Projects.findAll({
      include: [ { model: Tasks }],
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const data = await Projects.findByPk(req.params.id, {
      //This does not work when you include employee model, check why in documentation: https://sequelize.org/v7/manual/advanced-many-to-many.html
      include: [{ model: Tasks },],
    });
    if (!data) res.status(404).json({message: "No project found with that id"});
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
