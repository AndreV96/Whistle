const router = require('express').Router();
const { Employee, Projects, Tasks, ProjectMembers } = require('../../models');
//Get All Projects complete information
router.get('/', async (req, res) => {
  try {
    const data = await Projects.findAll({
      include: [
        { model: Tasks },
        { model: Employee, through: ProjectMembers, as: 'project_member', attributes: { exclude: ['password'] } },
      ],
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Get Project complete information by id
router.get('/:id', async (req, res) => {
  try {
    const data = await Projects.findByPk(req.params.id, {
      include: [
        { model: Tasks },
        { model: Employee, through: ProjectMembers, as: 'project_member', attributes: { exclude: ['password'] } },
      ],
      //This below is not working, password is still showing
      attributes: { exclude: ['password'] },
    });
    if (!data)
      return res.status(404).json({ message: 'No project found with that id' });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
});
//Create New Project
router.post('/', async (req, res) => {
  // req.body should look like this:
  // {
  //   "title": "Employee Tracker",
  //   "description": "The Employee Tracker is an application that allows you to store employees information from your group or organization. It lets you store employee's information, role's information and department's information. All this inofrmation is stored in a mysql database that can be accesed and provided with new information at any time.",
  //   "employeeIds": [1,2,3,4]
  // }
  try {
    const newProject = await Projects.create(req.body);
    if (req.body.employeeIds.length) {
      const employeeProjectIdsArr = req.body.employeeIds.map((employee_id) => {
        return {
          project_id: newProject.id,
          employee_id,
        };
      });
      const projectMembersIds = await ProjectMembers.bulkCreate(
        employeeProjectIdsArr
      );
      res.status(200).json(projectMembersIds);
      return;
    }
    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err.message);
  }
});
//Update Existing Project information, works too for adding and/or eliminating project members
router.put('/:id', async (req, res) => {
  try {
    const project = await Projects.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!project) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }
    const projectMembers = await ProjectMembers.findAll({
      where: { project_id: req.params.id },
    });
    const projectMembersIds = projectMembers.map(
      ({ employee_id }) => employee_id
    );
    const newProjectMembers = req.body.employeeIds
      .filter((employee_id) => !projectMembersIds.includes(employee_id))
      .map((employee_id) => ({ project_id: req.params.id, employee_id }));
    console.log('here');
    const projectMembersToDelete = projectMembers
      .filter(({ employee_id }) => !req.body.employeeIds.includes(employee_id))
      .map(({ id }) => id);
    const updatedProjectMembers = await Promise.all([
      ProjectMembers.destroy({ where: { id: projectMembersToDelete } }),
      ProjectMembers.bulkCreate(newProjectMembers),
    ]);
    res.json(updatedProjectMembers);
  } catch (err) {
    res.status(400).json(err);
  }
});
//Delete Existing Project
router.delete('/:id', async (req, res) => {
  try {
    const projectData = await Projects.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!projectData) {
      res.status(404).json({ message: 'No projects found with this id!' });
      return;
    }
    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
