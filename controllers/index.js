// Import express router
const express = require('express');
const router = express.Router();

// Import routes
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api-routes');

// Use routes
router.use('/', homeRoutes)
router.use('/api', apiRoutes)

module.exports = router;

