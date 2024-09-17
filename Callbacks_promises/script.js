console.log("I am hAcker")

console.log("Kaif is a hacker")

setTimeout(() => {
    console.log("I am inside Timeout")
}, 0);
setTimeout(() => {
    console.log("I am inside Timeout 2")
}, 0);

console.log("The end");
//type anfn to create arrow function.

const callback = (arg) => {
    console.log(arg);

}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    screen.src = src;
    sc.onload = callback("kaif");
    document.head.append(sc);
}

// const loadScript = (src, callback) => {
//     let sc = document.createElement("script");
//     sc.src = src;
//     sc.onload = () => callback("kaif");
//     document.head.append(sc);
// }

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);
