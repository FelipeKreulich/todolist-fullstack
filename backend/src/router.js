const express = require('express');

const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validateFieldTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksMiddleware.validateIdDelete, tasksController.deleteTask);
router.put('/tasks/:id', tasksMiddleware.validateFieldStatus, tasksMiddleware.validateFieldTitle, tasksController.updateTask);

module.exports = router;