// Postman URL : localhost:3050/countVowels


const express = require("express")

const app = express();
app.use(express.json())

// Req {"name" : "Ansh Awasthi"}
// Res {"vowels" : 4}

function countVowels(name) {
    name = name.toLowerCase();
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < name.length; i++) {
        if (vowels.includes(name[i])) count++;
    }
    return count;
}

function countVowelsApi(req, res) {
    let name = req.body.name;
    let count = countVowels(name);
    res.send({"vowels": count});
}

app.get('/countVowels', countVowelsApi)

let port = 3050

app.listen(port, function() {
    console.log("I am listening");
})