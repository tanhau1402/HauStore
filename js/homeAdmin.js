var icon = document.querySelector(".icon");
var p = Array.from(document.getElementsByTagName("p"));
var leftMain = document.querySelector(".left-main");
var list = document.querySelectorAll(".content");





icon.addEventListener("click", () => {
     p.forEach(element => element.classList.toggle("hidden"));
     list.forEach(element => element.classList.toggle("justify-content-center"));
     leftMain.classList.toggle("left-main");
});

var list_box = document.querySelectorAll(".box");
console.log(list_box);
list.forEach((element,index) => element.addEventListener("click", () => {
     list.forEach(element => element.style.color = "white");
     list_box.forEach(element => element.style.display = "none")

     element.style.color = "black";
     
     list_box[index].    style.display = "block";
     localStorage.setItem("index",index );
}))

function display()  {
     var index = parseInt(localStorage.getItem("index"));
     list[index].style.color  = "black";
     list_box[index].style.display = "block";
}


display();