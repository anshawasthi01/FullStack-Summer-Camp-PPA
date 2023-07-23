// // How JS Works!

// // JS => Browser based Language
// // V8 Engine => Runs JS 
// // Node => Runtime Env for JS to run

// // DOM (Document Object Model) Manipulation
// // JS is a single threaded synchronous language
// // It means that only one thread can execute at any given time, and all other threads have to

// // Hoisting

// // Execution Context 
// // Memory - x = undefined, y = undefined
// // Code 

// // Creation Phase
// // Executiong Phase

// function f() {  // Execution Context 
//     var x = 3;
//     var y = 4;
//     console.log(x +y);
// }

// // Global Execution Context 
// let x = 5;
// let y = 3;
// f();
// console.log(x +y);

// // DOM Manipulation
// // Events => User Interactions

// let onClick = () => {
//     let curr = new Number(document.getElementsByTagName("span")[0].innerText);
//     curr = curr + 1;
//     document.getElementsByTagName("span")[0].innerHTML = curr;
//     document.getElementsByTagName("body")[0].style.backgroundColor = "red";

// }

// document.getElementsByTagName("button")[0].addEventListener(
//     "click", onClick
// )



// TOP to Bottom(Event Propagation or Event Capturing body->div->button) then (Event Bubbling button->div->body)
// but default case button->div->body but we can change it using true or false

document.getElementsByTagName("body")[0].addEventListener(
    "click", () => {
        console.log("body")
    }, false
)

document.getElementsByTagName("div")[0].addEventListener(
    "click", () => {
        console.log("div")
    }, true
)

document.getElementsByTagName("button")[0].addEventListener(
    "click", (e) => {
        console.log("button")
        e.stopPropagation()
    }, false
)


// only div->button coz stopPropagation
// div -> button -> body

