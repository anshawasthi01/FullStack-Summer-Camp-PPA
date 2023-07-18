// Postman : localhost:4850/checkParity
// {
//     "num" : "4"
// }

const express = require('express')

const app = express();
app.use(express.json());

function checkParity(num){
    return num % 2 === 0 ? "even" : "odd";
}

function checkParityApi(req, res) { 
    let num = req.body.num;
    let result = checkParity(num); 
    res.send({"parity":result});
}

app.get('/checkParity', checkParityApi);

let port = 4850;

app.listen(port, function(){
    console.log("hi i'm port 4058 speaking");
})
