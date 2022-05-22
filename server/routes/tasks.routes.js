const Router = require('express');
const TodoController = require("../controller/tasks.controller.js");

const todoController = new TodoController()
const router = new Router()

router.post('/todos', todoController.createTask)
router.post('/todos/find/:id', todoController.searchTodo)

router.get('/todos/date', todoController.getTodos)
router.get('/todos/find/:id', todoController.updateTodo)

router.delete('/todos/:id', todoController.deleteTodo)

module.exports = router
