const express = require("express")
const cors = require("cors")

const { User } = require('./db')

// Middleware
const app = express();
app.use(cors()) // Whitelisting | CORS
app.use(express.json())

function insertUserToDB (name, email, college) {
    return User.create({
        name: name,
        email: email,
        college: college
    })
}

async function addUserApi (req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let college = req.body.college;
    let response = await insertUserToDB(name, email, college);
    res.status(201).send({"id": response.id})
}

async function getAllUsersApi(req, res){
    let response = await User.findAll({
        where: {
            name: "Ansh"
        }
    })
    res.status(200).send(response)
}

app.post('/addUser', addUserApi)
app.get('./getAllUsers', getAllUsersApi)


let port = 3050
app.listen(port, function() {
    console.log("I am listening");
})
