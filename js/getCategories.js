
const fileInput = document.getElementById('input-file-category');
const imageContainer = document.getElementById('image-container');
console.log(imageContainer);
const storage = firebase.storage();
let imgPath ;
getAll(urlCategories, displayCategories);
let idCategory ;

function displayCategories (data) {
    data.forEach((element) => {
        table_content.innerHTML += `
        <tr>
        <th scope="row">${element.id}</th>
        <td><img src="${element.logo}   " style="width: 40px; height:40px ;" alt=""></td>
        <td>${element.name}</td>
        <td>${element.brand}</td>
        <td>
          <button  class="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button>
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

document.getElementById("addCategory").addEventListener("submit", (e) => {
e.preventDefault();
if(!e.target.checkValidity()) {
  console.log("validate error");
  return
}
var logo = document.getElementById("img-category").src;
var name = document.getElementById("name").value;
var brand = document.getElementById("brand").value;

   var category = {
    logo: logo,
    name:  name,
    brand: brand
   }
   add(urlCategories,category);
   uploadImage();
});

fileInput.addEventListener('change', function() {
  var img = document.getElementById("img-category")
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            img.src = event.target.result;
            imageContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});


function uploadImage() {
  const file = document.getElementById("input-file-category").files[0];
  if (file) {
    imgPath = "images/" + file.name;
    const storageRef = storage.ref(imgPath);
    const uploadTask = storageRef.put(file);

    uploadTask.on("state_changed", function () {
      // Thẻ hiển thị hoàn thành upload thành công
      uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        console.log("Upload successful!");
      });
    });
  } else {
    console.log("No file selected");
  }
}