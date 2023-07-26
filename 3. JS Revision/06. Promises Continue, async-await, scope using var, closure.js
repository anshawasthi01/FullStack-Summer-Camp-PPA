// Promises => Data Type

function a(){
	return new Promise((res, rej) => {
		setTimeout(() => {
			console.log("a")
			res()
		}, 1000)
	});
}

function b(){
	return new Promise((res, rej) => {
		setTimeout(() => {
			console.log("b")
			res()
		}, 5000)
	});
}

function c(){
	return new Promise((res, rej) => {
		setTimeout(() => {
			console.log("c")
			res()
		}, 2000)
	});
}

funtion f() {
	a().then(() => {
		b().then(() => {
			c()
		})
	})
}

// OR
// ES6 - await

// await async fn k andr hi use hota h await - means this function returns a promise
async function f() {
	await a()
	await b()
	await c()
}

async function g() {
	await c()
	await a()
	await b()
}

// Scope | Execution Context | Variable Hoisting

for(var i = 0; i < 10; i++){
	var x = 10
}
console.log(i);
console.log(x);

// Funtion + Lexical Env == Closure
function f() {
	let name = "Ansh"
	function g (greeting) {
		console.log(greeting + " " + name)
	}
	return g;
}

g = f()
g("Hi")


// Try
for(var i = 1; i <= 5; i++) {
	setTimeout(() => {
		console.log("Run for ", i, " seconds")
	}, i * 1000)
}

for(let i = 1; i <= 5; i++) {
	setTimeout(() => {
		console.log("Run for ", i, " seconds")
	}, i * 1000)
}

