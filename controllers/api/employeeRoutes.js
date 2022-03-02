const router = require('express').Router();
const {
  Employee,
  Projects,
  Tasks,
  ProjectMembers,
} = require('../../models');

// get all employees

router.get('/', async (req, res) => {
  try {
    const employeeData = await Employee.findAll({
      include: [{ model: Tasks }]
    });
    res.status(200).json(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const data = await Employee.findByPk(req.params.id, {
      include: [{ model: Tasks }, { model: Projects, through: ProjectMembers, as: 'current_projects' }],
    });
    if (!data) res.status(404).json({ message: 'No Employee found with that id' });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Create new employee
router.post('/', async (req, res) => {
  try {
    const newUser = await Employee.create(req.body);
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;

      res.status(200).json(newUser);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await Employee.findOne({
      where: { email: req.body.email },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try agains' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

// delete employee
router.delete('/:id', async (req, res) => {
  try {
    const userData = await Employee.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!userData) {
      res.status(404).json({ message: 'No user found with this ID' });
      return;
    }

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
