const pg = require('pg');
require('dotenv').config();

const Pool = pg.Pool

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
});

pool.connect();

const tableTodos = ` 
 create TABLE todos(
   id SERIAL PRIMARY KEY,
   name VARCHAR(255),
   shortDesc VARCHAR(255),
   description VARCHAR(255),
   isDone boolean,
   date DATE
);
 `;


pool.query(tableTodos, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Table is successfully created');
});

const state = [
    {
        name: 'JS',
        shortDesc: 'Изучение методов Массива',
        description: 'Открыть Доку прочитать методы массива',
        isDone: false,
        date: '2022-05-28'
    },
    {
        name: 'CSS',
        shortDesc: 'Изучение scss ',
        description: 'Открыть Доку прочитать scss',
        isDone: false,
        date: '2022-05-28'
    },
    {
        name: 'React',
        shortDesc: 'Изучение UseEffect',
        description: 'Открыть YouTube посмотреть ',
        isDone: false,
        date: '2022-05-28'
    },
    {
        name: 'Кино',
        shortDesc: 'Посмотреть комедию',
        description: 'Посмотреть вечером фильм, посоветовали Ночные игры или Полтора Шпиона',
        isDone: true,
        date: '2022-05-28',
    },
]

state.forEach((obj) => {

    const createTask = `INSERT INTO todos (name, shortDesc, description, isDone,date) VALUES ( '${obj.name}', '${obj.shortDesc}' ,'${obj.description}', ${obj.isDone}, '${obj.date}')`;

    pool.query(createTask, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Task is successfully created');
    });
})


module.exports = pool
