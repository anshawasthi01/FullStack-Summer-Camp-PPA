const express = require("express")
const cors = require("cors")
const jwt = require('jsonwebtoken')
const jwt = require('bcrypt')
const { User } = require('./db')

// Middleware
const app = express();
app.use(cors()) // Whitelisting | CORS
app.use(express.json())

function insertUserToDB (name, email, password) {
    return User.create({
        name: name,
        email: email,
        password: password
    })
}

async function addUserApi (req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let password = await bcrypt.hash(req.body.password, 10);
    let response = await insertUserToDB(name, email, password);
    res.status(201).send({"id": response.id})
}

async function loginApi(req, res){
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.findAll({
        where: {
            email: email,
        }
    })
    let matched = await bcrypt.compare(password, user.password);
    if (matched) {
        const token = jwt.sign(
            { 
                name: user.name,
                roles: [] 
            },
                "Ansh Awasthi", 
            { 
                expiresIn: "5m"
            })
        res.status(200).send({"Success": true})
    }
    else{
        res.status(402).send({"LoggedIn": false})
    }
}

async function getAllUsersApi(req, res){
    console.log("here");
    console.log(req.headers);
    let token = req.headers.token;
    console.log(token);
    let decoded_value = jwt.verify(token, "Ansh Awasthi")
    console.log(decoded_value)
    let response = await User.findAll({
        where: {
            name: "Ansh"
        }
    })
    res.status(200).send(response)
}

app.post('/addUser', addUserApi)
app.get('./getAllUsers', getAllUsersApi)
app.get('./loginApi', getAllUsersApi)


let port = 3050
app.listen(port, function() {
    console.log("I am listening");
})
