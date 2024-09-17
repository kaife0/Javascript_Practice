console.log("I am a tutorial on Loops");

// let i= 0;
// let a = i;


// while(i<10){
//     console.log("value = " +i);
//     i++;
// }

// for (let i=0; i<=10; i++){
//     console.log("Value = " +i);
// }

let obj = {
    name: "kaif",
    role: "programmer",
    company: "coding",
}

for (const key in obj) { //use for object.
        const element = obj[key];
        console.log(key, element)
}

for (const c of "kaif") { //used for array.
    console.log(c)
}

let i=0;
do {
    console.log(i+1);
    i++;
}
while (i<10); //use for do while loop.

