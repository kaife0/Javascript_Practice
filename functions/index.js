// function nice(name) {
//     console.log("hey "  + name + " Your'e a rich guy");
//     console.log("hey "  + name + " Your'e a nice guy");
//     console.log("hey " + name + " Your'e a good guy");
// }

// nice("kaif");

// function sum(a,b){
//     console.log(a+b);
// }

// sum(33,23)

function sum(a,b){
    return a+b; //it gives a return value , console wont work here
}
result = sum(33,88)
console.log("the sum of numbers is : " +result);

const func1 = (x)=>{
    console.log("I am arrow function", x);
}
func1(33);
func1(87);