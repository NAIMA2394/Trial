// pure functions they do not have side effects
// Q: write a pure funtcion that multiplies two numbers and logs the result
// function multiply (n, m){
//         console.log( n * m )
//     }
//     multiply(10,12)

//     // if it is a pure function or not 
//     let result = 0
//     result=32;
//     function impureAdd(a,b) {
//         result = a + b;
//         return result;
//     }
//     console.log(impureAdd(2,3))

// // high order functions 
// function greet(callback) {
//     callback();
// }
// function sayHello() {
//     console.log("hello!")
// }
// greet(sayHello);
// function fetchData(Callback) {
//    setTimeout(("Data Fetched") => {
//     console.log("")
//    },1000);
// }

function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched")
        // callback()
    }, 1000);
}
function processData() {
    console.log("Process data");
}
fetchData(processData)

// let numbers = [5,3,8,1];
// numbers.sort(function(b , a) {
//     numbers.sort()
//     return b-a;
// })
// console.log(numbers)


// let numbers = [5,3,8,1];
// numbers.sort(function(b , a) {
//     numbers.sort()
//     return b-a;
// });
// function numbers(Callback) {
//        setTimeout(("numbers") => {
//        },1000);
//     }
// console.log(numbers)

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));
// q: write a function that takes a function to filter number from an array 
// q:implement a high-order function that returns a function for incrementing a number by a specified value 


