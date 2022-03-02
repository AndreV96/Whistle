const router = require('express').Router();
const {
  Employee,
  Projects,
  Tasks,
  ProjectMembers,
} = require('../../models');
const Task = require('../../models/Tasks');

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

router.post('/', async (req, res) => {
  try {
    const taskData = await Tasks.create(req.body);
    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.patch("/:id", async (req, res) => {
//   try {
//     const taskData = await Task.update(req.body, {
//       where: {
//         id:req.params.id
//       }
//     })
//     if (!taskData[0]) {
//       res.status(404).json({ message: 'No category with this id' });
//       return;
//     }
//     res.status(200).json(taskData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.delete('/:id', async (req, res) => {
  try {
    const taskData = await Tasks.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!taskData) {
      res.status(404).json({ message: 'No task found with this id!' });
      return;
    }
    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
