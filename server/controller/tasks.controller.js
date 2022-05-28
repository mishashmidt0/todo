const pool = require('../bdPostgres/dataBase.js')

class TodoController {
    // async createTask(req, res) {
    //     const {name, shortDesc, description, isDone, date} = req.body
    //
    //     const newTask = await pool.query(`INSERT INTO todos (name, shortDesc, description, isDone,date)
    //     values ($1,$2,$3,$4,$5) RETURNING *`, [name, shortDesc, description, isDone, date])
    //     res.json(newTask)
    // }

    async getTodos(req, res) {
        const todos = await pool.query('SELECT * FROM todos ORDER BY date')
        res.json(todos.rows)
    }

    async getTodosSortDate(req, res) {
        const todos = await pool.query('SELECT * FROM todos ORDER BY date DESC')
        res.json(todos.rows)
    }

    async upDate(req, res) {
        const id = req.params.id;
        const isDone = req.params.isDone;
        const todos = await pool.query(`UPDATE todos SET isDone = ${isDone} WHERE id = ${id}`)
        res.json(todos.rows)
    }

    async getTodosDate(req, res) {
        const date1 = req.params.date1;
        const date2 = req.params.date2;
        const todos = await pool.query(`SELECT * FROM todos WHERE date BETWEEN '${date1}' and '${date2}' ORDER BY date`)
        res.json(todos.rows)
    }

    async getTodosToday(req, res) {
        const date = req.params.date;
        const todos = await pool.query(`SELECT * FROM todos WHERE date = '${date}' ORDER BY date`)
        res.json(todos.rows)
    }

    async getActiveTodos(req, res) {
        const todos = await pool.query('SELECT * FROM todos WHERE isdone = false ORDER BY date')
        res.json(todos.rows)
    }

    // async deleteTodo(req, res) {
    //     const id = req.params.id;
    //     const task = await pool.query(`DELETE FROM todos where id = $1`, [id])
    //     res.json(task.rows[0])
    // }

    async searchTodo(req, res) {
        const str = req.params.str;
        const todos = await pool.query(`SELECT * FROM todos WHERE name iLIKE '${str}%' OR shortDesc iLIKE '${str}%'`)
        res.json(todos.rows)
    }

}

module.exports = TodoController
