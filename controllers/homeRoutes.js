const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Employee, Projects, Tasks, ProjectMembers } = require('../models');

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
      include: [
        { model: Tasks },
        {
          model: Projects,
          through: ProjectMembers,
          as: 'current_projects',
          include: {
            model: Employee,
            through: ProjectMembers,
            as: 'project_member',
            attributes: {
              exclude: ['password'],
            },
          },
        },
      ],
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });

    res.render('projectshomepage', {
      ...user,
      logged_in: true,
    });
    console.log(user);
    console.log(user.current_projects.project_member);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/projects/:id', withAuth, async (req, res) => {
  try {
    const data = await Projects.findByPk(req.params.id, {
      include: [
        { model: Tasks },
        {
          model: Employee,
          through: ProjectMembers,
          as: 'project_member',
          attributes: { exclude: ['password'] },
        },
      ],
    });

    const project = data.get({ plain: true });
    console.log(project);
    res.render('projects', {
      ...project,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
