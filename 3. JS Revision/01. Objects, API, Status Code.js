res.status(200).send({});

// Temporal Literal

let x = 123
console.log(`Trying template literals: ${x + 1}`)

// Objects
let person = {
	"first_name" : "Ansh",
	"last_name" : "Awasthi",
	"marks" : {
		"English" : 10,
		"Maths" : 15
	},
	"name" : function() {
		return this.first_name + " " + this.last_name;
	}
}

console.log(person["marks"]["Maths"])
console.log(person.name())

// Cloning Object

// let person2 = Object.assign({}, person) 

// let person2 = {
// 	...person
// };

// Shallow Copy
let person2 = {
	"first_name" : "abc",
	"age" : 27,
	...person
}
person2.marks.CSE = 50;

// Deep Copy(loadash)
let person2 = JSON.parse(JSON.stringify(person))


API
REST(Representational State Transfer) API
	 - API should not store own state

Frontend -> Backend -> DB

search keyword = "abc", page = 4

M = {
	"Ansh" : ["ans", 3],
	"Sam" : ["ans", 1]
}

Why REST?
	- Horizontal Scaling becomes easy
	- Failures!
	- Cloud

CRUD:
Create - POST
Read - GET, POST
Update - PUT, PATCH
Delete - DELETE

GET -> Query Params
		VS
POST -> Body Params

HTTPS = SSL Certificate

Encoding -> ??
ASCII, UTF - 8, UTF - 16

PUT -> Create or update vs PATCH - Update on only certain fields

Idempotency -> Multiple retries -> One Try!

200 -> 200, 201 (Success Scenarios)
300 -> Redirections
400 -> 400(Bad Request), 401(Authentucated), 403(unauthorized), 404(Client/Frontend Side)
500 -> Server Side issues 500 (Internal Server Error)

