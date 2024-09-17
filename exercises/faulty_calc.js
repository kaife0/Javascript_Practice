/* create a faukty calculator using JavaScript

this faulty calculator does following:
1. It takes two numbers as input from user
2. It performs wrong operations as follows:

+ --> -
* --> +
- --> /
/ --> **

it performs wrong operation 10% of the times */

let random =  Math.random()
let a = prompt("enter first number")
let b = prompt("enter second number")
let c = prompt("enter operation")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if(random>0.1){
   // perform correct operation
   alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}
else{
    //wrong operation
    c= obj(c)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}