const pool = require('../bdPostgres/dataBase.js')

class TodoController {
    async createTask(req, res) {
        const {name, description, isDone, date} = req.body

        const newTask = await pool.query(`INSERT INTO todos (name, description,isDone,date) 
        values ($1,$2,$3,$4) RETURNING *`, [name, description, isDone, date])
        res.json(newTask)
    }

    async getTodos(req, res) {
        const todos = await pool.query('SELECT * FROM todos')
        res.json(todos.rows)

    }

    async deleteTodo(req, res) {
        const id = req.params.id;
        const task = await pool.query(`DELETE FROM todos where id = $1`, [id])
        res.json(task.rows[0])
    }

    async searchTodo(req, res) {
        const id = req.params.id;
        const task = await pool.query(`DELETE FROM todos where id = $1`, [id])
        res.json(task.rows[0])
    }

    async updateTodo(req, res) {
        const id = req.params.id;
        const task = await pool.query(`DELETE FROM todos where id = $1`, [id])
        res.json(task.rows[0])
    }
}

module.exports = TodoController
