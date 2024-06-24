// synchronous programming / behaveiour

// console.log("One");
// console.log("Two");
// console.log("Three");
// console.log("Four");
// console.log("Five");


// asynchronous programming

console.log("One");
console.log("Two");
setTimeout(()=>{
    console.log("Three");
}, 2000)
console.log("Four");
console.log("Five");