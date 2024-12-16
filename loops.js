for ( let i=1; i<= 5; i++ ){
    console.log ("Number" +i)
}

for(let i=0; i<10; i++){
    let evennumber =i * 2;
    console.log( evennumber)
}

let i = 0
while( i<5 ){
    console.log("count" +i)
    i++
}
 
let a = 0;
do{
    console.log("Iteration: " + a);
    a++;
}while(a<0)

    // let digit = prompt ("enter digit")
    // do{
    //     console.log("iteration. " + digit);
    //     digit++
    // } while(digit <= 10) {
    //     console.log("not valid")
    // }

    // let number;
    // do{
    //     number = parseInt (prompt ("enter number grater than 10"))
    // }while (number <= 10)
    //     console.log("you have entered." +number)

let person = {name: "Naima Noah", age: 24, city:"nairobi"}
for(let key in person) {
    console .log(key + ":" +person[key])        
}

let fruits = ["banana", "apple", "cherry"]
for(let fruit of fruits) {
    console .log(fruits)
}