const express = require("express")
const cors = require("cors")
const mysql = require("mysql")

// Middleware
const app = express();
app.use(cors()) // Whitelisting | CORS
app.use(express.json())

function insertUserToDB (name, email, college) {
    let pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'Ppa@123',
        database: 'tutorial',
        connectionLimit : 10
    });
    // SQL Injecttion means agr kisi ne input mein name email ke sath sath query hi de di to db k sath kuch b ho skta h to protect this we use MVC(Model, View, Controller)
    let query = `insert into users (name, email, college) values ('${name}', '${email}', '${college}')`
    return new Promise((res, rej) => {
        pool.query(query, (err, res) => {
            resolve(res.insertId)
    })

    })
    console.log("Done Inserting")
    conn.end()
}

async function addUserApi (req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let college = req.body.college;
    let id = await insertUserToDB(name, email, college);
    
    res.status(201).send({"id": id})
}

app.post('/addUser', addUserApi)

let port = 3050

app.listen(port, function() {
    console.log("I am listening");
})
