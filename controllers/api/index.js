const router = require('express').Router();
const employeeRoutes = require('./employeeRoutes');

router.use('/users', employeeRoutes);

module.exports = router;
