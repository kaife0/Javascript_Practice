function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let viewStr;
    if (views<1000){
         viewStr = views;
}
else if (views >1000000){
     viewStr = views/1000000 + "M";
}
else {
     viewStr = views/100 + "K";
}
    let  html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="Thumbnail">
                <div class="capsule"> ${duration} </div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr}views . ${monthsOld}months ago</p>
            </div>
        </div>`

        document.querySelector(".container").innerHTML =  document.querySelector(".container").innerHTML + html;
}

createCard("Introduction to backend | sigma web dev video", "CodewithKaif", 760000, 7, "32:07","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDWfGPsuQKuWateaRbWeBo1MDhM3A")
