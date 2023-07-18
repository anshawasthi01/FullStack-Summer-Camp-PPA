// Write an API that takes a string, an integer and a boolean (right/left shift).
// Rotate the string by that many characters and send it back as result

// Example: "abcde", 2, True should return. "deabc"
// "abcde", 1, False should return "bcdea"

const express = require('express');

const app = express();
app.use(express.json());

function rotateString(s,num,bool){
    let result;
    if(bool==true){
        result = s.slice(-num);
        result+=s.slice(0,-num);
       
    }else{
        result = s.slice(num);
        result+=s.slice(0,num);
    }

    return result;
}


function rotateApi(req,res){
    let bool = req.body.bool;
    let s = req.body.s;
    let num = req.body.num;
    let result = rotateString(s,num,bool);
    res.send({"Result = ":result});
}

app.get('/stringRotation',rotateApi);

let port = 3250;

app.listen(port,function(){
    console.log("Hi i'm port no. 3250");
})


let eg = rotateString("abcde",3,true);
console.log(eg);