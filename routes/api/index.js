const router = require('express').Router();
const employeeRoutes = require('./employeeRoutes');
const managerRoutes = require('./managerRoutes');
const projectsRoutes = require('./projectRoutes');
const tasksRoutes = require('./tasksRoutes');
const projectMembersRoutes = require('./ProjectMembersRoutes');

router.use('/employeeRoutes', employeeRoutes);
router.use('/managerRoutes', managerRoutes);
router.use('/projectRoutes', projectsRoutes);
router.use('/tasksRoutes', tasksRoutes);
router.use('/ProjectMembersRoutes', projectMembersRoutes);

module.exports = router;