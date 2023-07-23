const express = require("express")
const cors = require("cors")
const mysql = require("mysql")

// Middleware
const app = express();
app.use(cors()) // Whitelisting | CORS
app.use(express.json())

function insertUserToDB (name, email, college) {
    let conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Ppa@123',
        database: 'tutorial'
    });
    let query = `insert into users (name, email, college) values ('${name}', '${email}', '${college}')`
    conn.query(query);
}

function addUserApi (req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let college = req.body.college;
    insertUserToDB(name, email, college);
    res.status(201).send({"Success": true})
}

app.post('/addUser', addUserApi)

let port = 3050

app.listen(port, function() {
    console.log("I am listening");
})
