const Router = require('express');
const TodoController = require("../controller/tasks.controller.js");

const todoController = new TodoController()
const router = new Router()

// router.post('/todos', todoController.createTask)
// router.post('/todos/update/:id:isDone', todoController.upDate)

router.get('/todos/find/:str', todoController.searchTodo)

// router.get('/todos/date', todoController.getTodosDate)

router.get('/todos', todoController.getTodos)

// router.get('/todos/active', todoController.getActiveTodos)

// router.delete('/todos/:id', todoController.deleteTodo)

module.exports = router
