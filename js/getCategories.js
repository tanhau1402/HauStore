const fileInput = document.getElementById('fileInput');
const imageContainer = document.getElementById('image-container');

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


fileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = document.createElement('img');
            img.src = event.target.result;
            imageContainer.innerHTML = '';
            imageContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});