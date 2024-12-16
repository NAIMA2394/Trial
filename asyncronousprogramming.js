//  const delay = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Task completed after 4 seconds")
//     },4000);
//  });
//  delay.then((message) => console.log(message));

//  const message = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("error message")
//     },3000);
//  })
//  message.catch((message) => console.log(message))

//  let fetchData = new Promise((resolve, reject) => {
//     let success = false;
//     if(success) {
//         resolve("Data fetched")
//     } else ( 
//         reject("Data fetched failed")
//     )
//  });
//  fetchData.then(message => {
//     console.log(message)}
// ).catch(error => {
//     console.log(error)
// })

// // how do you write an async function that awaits for a promise to resolve 
// const call = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("welcome in")
//         },2000);
//      });
//      call.then((message) => console.log(message));

//    async function timeDelay() {
//     let delayedPromise = new Promise ((resolve,) => {
//         setTimeout(() => {
//         },3000)
//     })

//     let result =await delayedPromise;
//     console.log(result)
//    }
//    timeDelay()

// class car {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }
// }

// const myCar = new car("Toyota", "Corolla");
// console.log(myCar);

// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const Student1 = new Student("naima", 20);
// const Student2 = new Student("kassim", 20);
// console.log(Student);
 

// class BankAccount{
//     #balance;
//     constructor(initialBalance) {
//         this.#balance = initialBalance;
//     }
//     deposit(amount){
//         this.#balance += amount;
//     }
//     getBalance() {
//         return this.#balance;
//     }
// }
// const account = new BankAccount(100);
// account.deposit(50);
// console.log(account.getBalance());

// // inheritance: it allows a class to inherit properties and behaviours from another class
// class car{
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }
// }
// class ElectricCar extends car{
//     constructor(make, model, batteryCapacity){
//         super(make, model)
//         constructor
//             this.batteryCapacity = batteryCapacity
//     }
// }
// const tesla = new ElectricCar("tesla", "Models", "100kwh")
// console.log(tesla)

// // abstraction: hiding unnecessary details and focusing on the essential aspects of an object
// class CoffeMachine {
//     brew() {
//         console.log("Brewing coffe....")                    
//     }
// }
//  let machine = new CoffeMachine()
//  machine.brew()
// // explanation: the coffemachine has a new brew method that hides the detais of the coffe making process

// polymorphism: allows objects of different classes to be treated as objects of a common superclass
class Animal{
    speak() {
        console.log("Animal sound");
    }
}
class Dog extends Animal {
    speak() {
        console.log("Woof!")
    }
}
class Cat extends Animal {
    speak() {
        console.log("Meow!")
    }
}
const animals = [new Dog, new Cat()]
animals.forEach(animal => animal.speak())