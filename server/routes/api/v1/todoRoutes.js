// server/routes/api/v1/todoRoutes.js
const express = require('express');
const router = express.Router();

const todoController = require('../../../controllers/todoController');

router.get('/', todoController.getTodos);
router.post('/', todoController.addTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;