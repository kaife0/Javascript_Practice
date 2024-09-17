// let obj = {
//     a: 1,
//     b: "Kaif",
// }
// console.log(obj)

// let animal = {
//     eats: true
// };
// let rabbit ={
//     jumps: true
// };
// rabbit.__proto__ = animal; //sets rabbit.[[Prototype]] = animal;

class Animal{
    constructor(name){
        this.name = name;
        console.log("object is created...");
    }
    eats(){
        console.log("Khana Khata h");
    }
    jumps(){
        console.log("Can Jump");
    }
}

class lion extends Animal{
    // roars(){
    //     // return true;
    //     // console.log("Roars");
    // }
    constructor(name){
        super(name);
        this.name = name;
        console.log("object is created and is A Sher!...");
    }   
    eats(){
        console.log("Khana nonVeg Khata h");
    }
}
let a = new Animal("bunny");
console.log(a);
let l = new lion("shera");
console.log(l);