// // Functional Programming Paradigms - Imperative (Step by step instructions - How?) vs Declarative (SQL)

// // Imperative -> Procedyral (Fortran) -> Structural (C) -> OOPS (Java)
// // Declarative -> Functional Paradigm (Haskell)
// // Python, C++, JS (Functional Programming) 

// //Pure Functions! Input -> Output

// let count = 0
// // Impure Function
// function incrementCount(){
// 	count += 1
// }


// // Pure Function
// function square(x){
// 	return x * x
// }

// // Funtions as first class citizens means functions can be used as a variable
// // ES 6 => Arrow Functions
// let square = (x) => {
// 	return x * x
// }

// // Higher Order Functions (HoF)
// function f(l, g) {
// 	let sum = 0
// 	for (let i of l) {
// 		sum += i
// 	}
//   console.log(sum)
// 	return g(sum)
// }

// console.log(f([2, 3, 0,1], square))

// // Annonymous Function
// console.log(f([2, 3, 0, 1], (x) => {
//   return 2 * x
// }))

// // Currying
// // Factory
// let getAreaFunction = (shape_type) => {
//   if (shape_type == "circle") {
//     return (r) => {
//       return 3.14 * r * r
//     }
//   } else if (shape_type == "square") {
//     return (side) => {
//       return side * side
//     }
//   } else if (shape_type == "rectangle") {
//     return (l, b) => {
//       return l * b
//     }
//   }
// }

// console.log(getAreaFunction("circle")(5))

function* getOddNums(limit) {
  let i = 1
  while (i <= limit) {
    yield i // it saves that from where the function return amd when calling next time resume from the position of return
    i = i + 2
  }
}

// Stream Processing 
let x = getOddNums(10) // Generator

console.log(x.next().value)
console.log(x.next().value)
console.log(x.next().value)





