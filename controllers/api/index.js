const router = require('express').Router();
const employeeRoutes = require('./employeeRoutes');
const projectsRoutes = require('./projectsRoutes');
const taskRoutes = require('./taskRoutes');
const projectMembersRoutes = require('./projectMembersRoutes');

router.use('/employees', employeeRoutes);
router.use('/projects', projectsRoutes);
router.use('/tasks', taskRoutes);
router.use('/project_members', projectMembersRoutes);

module.exports = router;
