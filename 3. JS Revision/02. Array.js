let x = arr.pop() // which returns pop element
let x = arr.shift() // starting

let x = arr.push("123") // which returns lens of array after insertion
let x = arr.unshift("123") // starting

const arr = [10,12, "ansh", 15]
arr[10] = "awasthi" // it is possible it include empty items in between

arr.length = 100

arr.slice(1, 4)

const arr2 = [...arr]

// CREATE READ UPDATE DELETE
arr.splice(where, how many ele , replace with)
arr.splice(1, 2, ...["a", "b", "c"])
arr.splice(1, 0, ...["a", "b", "c"])  

// first convert in string sort lexicographically
arr.sort() 

arr.sort(function compare(a, b){
	return a - b;
})

// Sets
const s = new Set(["a", "b"])
a.add("a")
a.delete("a")

// Map
const m = Map([
	["a", 120],
	["def", 130]
	])

m.set(["as", 1233])
m.get("a")

// Loops
for(let i = 1; i <= 10; i++){
}

while ( i <=n ) {
	console.log()
	i++;
}

let obj = {
	"name" : "anhs",
	"age" : 87,
	"add" : "rmu"
}

// Order of keys is not fixed
for (key in obj) {
	console.log(obj[key])
	console.log(Object.keys(obj))
	console.log(Object.values(obj))
}

let arr = [120, "ansh"]
for (key in arr) {
	console.log(arr[key])
}

// Iterate over iterable
for ( val of arr) {
	console.log(val)
}