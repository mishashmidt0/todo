const express = require('express');
const router = require("./routes/tasks.routes.js");
const cors = require('cors')

const PORT = process.env.PORT || 5000;

const app = express()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.listen(PORT, () => {
    console.log("Server started")
})

