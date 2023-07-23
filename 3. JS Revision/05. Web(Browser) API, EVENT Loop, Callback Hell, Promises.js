// Callbacks 

// Web API (Browser API) - Location of user 

// Web API -> Callback Queue => {} -> EVENT LOOP -> Call Stack(f)
// Event Loop : queue se callstack mein laata h function call ko

setTimeout(
    () => {console.log("Timeout")}, 2000
)
console.log("xyz")


// 1. User is valid & authorized
// 2. Fetch video Progress
// 3. Fetch question Progress
// 4. Combine total return

// Callback Hell 

let checkUser = (email, cb, cb2) => {
    setTimeout(() => {
       cb(user, cb2);
    }, 2000)
}

let fetchProg1 = (user, cb) => {
    setTimeout(() => {
        cb();
    }, 5000)
}

let fetchProg2 = (user) => {
    setTimeout(() => {
        return prog2;
    }, 4000)
}

let combine = (prog1, prog2) => {
    setTimeout(() => {
        return prog;
    }, 2000)
}

// user m undefined aa jaayega
let user = checkUser("anshawasthi@gmail.com", fetchProg1, fetchProg2)
// let prog1 = fetchProg1(user);
let prog2 = fetchProg2(user);
let prog = combine(prog1, prog2);

            OR 

let checkUser = (email) => {
    setTimeout(() => {
        let user = {}
        setTimeout(() => {
            let progress1 = []
            setTimeout(() => {
                let progress2 = []
            }, 2000)
        }, 3000)
    }, 2000)
}

// PROMISE 

let checkUser = (email) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({"Name" : "Bharat"})
        }, 2000)
    })
}

let x = checkUser("ansh@gmail.com");
console.log(typeof(x))
console.log(x)

x.then((res) => {
    console.log(res);
}).catch((err) => {
    
})





