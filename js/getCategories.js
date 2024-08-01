const storage = firebase.storage();

const fileInput = document.getElementById('input-file-category');
const imageContainer = document.getElementById('image-container');
 var tableProductContent = document.getElementById("table-content-products");


getAll(urlCategories, displayCategories);
let idCategory ;
let categories ;
function displayCategories (data) {
       categories = data ;
    data.forEach((element) => {
        table_content.innerHTML += `
        <tr>
        <th scope="row">${element.id}</th>
        <td><img src="${element.logo}   " style="width: 40px; height:40px ;" alt=""></td>
        <td>${element.name}</td>
        <td>${element.brand}</td>
        <td>
          <button data-bs-toggle="modal" onclick="editById(${element.id})"  data-bs-target="#modalAdd"  class="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button>
          <button onclick="deletedById(${element.id})"  data-bs-toggle="modal" data-bs-target="#modalDelete" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
        </td>
      </tr>
      
        `
    });
}

function deletedById(id) {
   idCategory = id;
}

function deletedCategory () {
    deleted(urlCategories,idCategory);
}

document.getElementById("addCategory").addEventListener("submit", async (e) => {
e.preventDefault();
if(!e.target.checkValidity()) {
  console.log("validate error");
  return
}

var name = document.getElementById("name").value;
var brand = document.getElementById("brand").value;
 var imgPath = await uploadImage("input-file-category");
   var category = {
    logo: imgPath,
    name:  name,
    brand: brand
   }
   if(idCategory) {
      edit(urlCategories,idCategory,category);
   }else {
     add(urlCategories,category);
   }

});


inputFile(fileInput,imageContainer);
uploadImage(fileInput);

function editById(id) {
   idCategory = id ;
  var newCategory = categories.find(element => element.id == id);
  console.log(newCategory);
  var name = document.getElementById("name");
  name.value = newCategory.name ;
  var brand = document.getElementById("brand");
  brand.value = newCategory.brand ;
  var imgPath = document.getElementById("img-category");
  imgPath.src = newCategory.logo;
  var title = document.getElementById("title-add");
  title.innerText = "EDIT CATEGORY";
  var buttonAdd = document.getElementById("button-add");
  buttonAdd.innerText = "Update";

}

document.getElementById("add-Category").addEventListener( "click", () => {
    idCategory = null ;
    document.getElementById("addCategory").reset();
    var imgPath = document.getElementById("img-category");
    imgPath.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png";
    var title = document.getElementById("title-add");
  title.innerText = "ADD CATEGORY";
  var buttonAdd = document.getElementById("button-add");
  buttonAdd.innerText = "Add";
})





