var icon = document.querySelector(".icon");
var p = Array.from(document.getElementsByTagName("p"));
var leftMain = document.querySelector(".left-main");
var table_content =  document.getElementById("table-content");

icon.addEventListener("click", () => {
     p.forEach(element => element.classList.toggle("hidden"));
     leftMain.classList.toggle("left-main");
});
var list = document.querySelectorAll(".content");
var list_box = document.querySelectorAll(".box");

console.log(list_box);
list.forEach((element,index) => element.addEventListener("click", () => {
     list.forEach(element => element.style.color = "white");
     list_box.forEach(element => element.style.display = "none")

     element.style.color = "black";
     
     list_box[index].style.display = "block";
}))

   
