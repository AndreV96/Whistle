const router = require('express').Router();
const employeeRoutes = require('./employeeRoutes');
const managerRoutes = require('./managerRoutes');
const projectsRoutes = require('./projectRoutes');
const tasksRoutes = require('./tasksRoutes');
const projectMembersRoutes = require('./ProjectMembersRoutes');

router.use('/employee', employeeRoutes);
router.use('/manager', managerRoutes);
router.use('/project', projectsRoutes);
router.use('/tasks', tasksRoutes);
router.use('/project-members', projectMembersRoutes);

module.exports = router;