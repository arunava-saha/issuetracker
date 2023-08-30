const express = require('express');
const { home, createProject, createIssue, project } = require('../controllers/controller');
const router = express.Router();


router.get('/', home);
router.post('/project', createProject);
router.get('/project/:id', project);
router.post('/project/:id', createIssue);

module.exports = router;