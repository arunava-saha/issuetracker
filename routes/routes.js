const express = require('express');
const { home, createProject } = require('../controllers/controller');
const router = express.Router();

router.get('/', home);
router.post('/project', createProject);

module.exports = router;