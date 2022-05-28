const pool = require('../bdPostgres/dataBase.js')

class TodoController {
    async createTask(req, res) {
        const {name, shortDesc, description, isDone, date} = req.body

        const newTask = await pool.query(`INSERT INTO todos (name, shortDesc, description, isDone,date) 
        values ($1,$2,$3,$4,$5) RETURNING *`, [name, shortDesc, description, isDone, date])
        res.json(newTask)
    }

    async getTodos(req, res) {
        const todos = await pool.query('SELECT * FROM todos')
        res.json(todos.rows)
    }

    async upDate(req, res) {
        const todos = await pool.query('SELECT * FROM todos')
        res.json(todos.rows)
    }

    async getTodosDate(req, res) {
        const {date, date1} = req.body
        const todos = await pool.query(`SELECT * FROM todos WHERE date BETWEEN ${date} and ${date1}`)
        res.json(todos.rows)
    }

    async getActiveTodos(req, res) {
        const todos = await pool.query('SELECT * FROM todos WHERE isDone="true"')
        res.json(todos.rows)

    }

    async deleteTodo(req, res) {
        const id = req.params.id;
        const task = await pool.query(`DELETE FROM todos where id = $1`, [id])
        res.json(task.rows[0])
    }

    async searchTodo(req, res) {
        const {str} = req.body
        const task = await pool.query(`SELECT * FROM todos WHERE shortDesc iLIKE ${str}%`)
        res.json(task.rows[0])
    }

}

module.exports = TodoController
