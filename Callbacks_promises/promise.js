console.log("this is promises");
   
let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if (a<0.5){
        reject("No promise was not supported");
    }
    else{

        setTimeout (() =>{
            console.log("yes I am done");
            resolve("kaif");
        }, 2000);
    }
    })
let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if (a<0.5){
        reject("No promise was not supported 2");
    }
    else{

        setTimeout (() =>{
            console.log("yes I am done 2");
            resolve("kaif 2");
        }, 1000);
    }
    })

// prom1.then((a)=>{
//     console.log(a);
    
// }).catch((err)=> {
//     console.log(err);
// })


// let p3 = Promise.all([prom1, prom2])
// p3.then((a)=>{
//     console.log(a);
// }).catch(err=> {
//         console.log(err);
//     })

let p3 = Promise.allSettled([prom1, prom2])  //race in place of allSetteled.

p3.then((a)=>{
    console.log(a);
}).catch(err=> {
        console.log(err);
    })
 