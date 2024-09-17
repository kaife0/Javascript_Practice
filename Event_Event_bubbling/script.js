let button = document.getElementById("btn");
console.log("running");

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "Yay! You were clicked";

})

button.addEventListener("contextmenu", ()=>{
    alert ("Dont right click motherfucker!");

})

document.addEventListener("keydown", (e)=>{
    console.log(e);

})