/*
Microtask Queue - Callback Queue
(more Prioritize)

Any object we create in JS. It uses prototypal(blueprint) inheritance. 
*/

function User (first_name, last_name) {
	this.first_name = first_name
	this.last_name = last_name
}

// let user1 = new User("Ansh", "Awasthi")
// let user2 = new User("Mohit", "Awasthi")

// user1.greet = function() {
// 	console.log(this.first_name + " " + this.last_name)
// }

// console.log(user1)
// console.log(user2)
// console.log(typeof(User))
// console.log(typeof(user1))
// console.log(typeof(user2))

// console.log(typeof(String))
// console.log(typeof(Number))
// console.log(typeof(Object))

let user1 = new User("Ansh", "Awasthi")
// Shadowing
let user1.greet = funtion() {
	console.log("Hello")
}
let user2 = new User("Mohit", "Awasthi")

// User.prototype.greet = funtion () {
// 	console.log(this.first_name + " " + this.last_name)
// }

// Dunder Funtions
user1.__proto__.greet = funtion () {
	console.log(this.first_name + " " + this.last_name) 
}

user1.greet()
user2.greet()
console.log(User)


// New Concept
Object.prototype.greet = funtion () {
	console.log(this.name)
}

let obj = {
	name: "Bharat",
	role: "SDE"
}

obj.greet()

// ES6 // Class uses prototyping not oops wala class 
class User {
	constructor(first_name, last_name) {
		this.first_name = first_name;
		this.last_name = last_name;
	}
}

let user1 = new User("Ansh", "Awasthi");
console.log(user1)




