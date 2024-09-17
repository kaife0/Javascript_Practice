async function sleep(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    }) 
}
//immeadietly invoked function.[IIFE]
(async function main(){
    // let a = await sleep()
    // console.log(a);
    // let b = await sleep()
    // console.log(b);
 
    //-->DESTRUCTURING
    // let [x, y, ...rest] = [1, 2, 5, 7, 8, 10]
    // console.log(x, y, rest);

    let obj ={
        a: 1, 
        b: 2,
        c: 5,
    }
    let {a, b} = obj;
    

})()