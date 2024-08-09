// import { displayPaginationControls,displayPagination } from '../js/pagination' ;
var tableProductContent = document.getElementById("table-content-products");
const fileInputProduct = document.getElementById("input-file-product");
const imgProductContainer = document.getElementById("img-product");
var nameSearch;

function getNameCategories(id) {
  
     const category =  items[0].data.find(element => element.id == id);
     return category ? category.name : "no";
 }
// inputFile(fileInputProduct,imgProductContainer);
function inputFile(fileInputProduct, imgProductContainer) {
  fileInputProduct.addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        document.getElementById(imgProductContainer).src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
}
// uploadImage(fileInput1);

document.getElementById("button-add-product").addEventListener("click", () => {
  idProduct = null;
  document.getElementById("addProduct").reset();
  var imgPath = document.getElementById("img-product");
  imgPath.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png";
  var titleProduct = document.getElementById("title-add-product");
  titleProduct.innerText = "ADD PRODUCT";
  var btnAddProduct = document.getElementById("btn-add-product");
  btnAddProduct.innerText = "Add";
});

document.getElementById("addProduct").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!e.target.checkValidity()) {
    console.log("validate error");
    return;
  }

  var nameProduct = document.getElementById("name-product").value;
  var price = document.getElementById("price-product").value;
  var categoryProduct = document.getElementById("inputCategory").value;

  var imgPath_1 = await uploadImage("input-file-product");
  var product = {
    img: imgPath_1,
    name: nameProduct,
    price: price,
    categoryProduct: categoryProduct,
  };

  if (idProduct) {
    edit(urlProducts, idProduct, product);
  } else {
    add(urlProducts, product);
  }
});
getAll(urlProducts, getAllProducts);
let idProduct;

function getAllProducts(data) {
  items[1].data = data;
  displayProducts(data);
}
//  inputFile(fileInput,imageContainer);
fileInputProduct.addEventListener("change", function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      imgProductContainer.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});
function displayProducts(data) {
  tableProductContent.innerHTML = "";
  let dataFilter;
  if (nameSearch) {
    dataFilter = items[1].data.filter((product) =>
      product.name.toLowerCase().includes(nameSearch)
    );
  } else {
    dataFilter = data;
  }
  const dataPage2 = displayPagination(dataFilter, items[1].currentPage);

  displayPaginationControls(dataFilter, items[1]);
  dataPage2.forEach((element) => {
    tableProductContent.innerHTML += `
        <tr>
        <th scope="row">${element.id}</th>
        <td><img src="${element.img}   " style="width: 40px; height:40px ;" alt=""></td>
        <td>${element.name}</td>
        <td>${getNameCategories(element.categoryProduct)}</td>
        <td>${element.price}</td>
        <td>
          <button data-bs-toggle="modal" onclick="editByIdProduct(${element.id})"  data-bs-target="#modalAddProduct1"  class="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button>
          <button onclick="deleteById(${element.id})"  data-bs-toggle="modal" data-bs-target="#modalDeleteProduct" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
        </td>
      </tr>
      
        `;
  });
}

function deleteById(id) {
  idProduct = id;
}

function deleteProduct() {
  deleted(urlProducts, idProduct);
}
function editByIdProduct(id) {
  idProduct = id;
  var newProduct = items[1].data.find((element) => element.id == id);

  var name = document.getElementById("name-product");
  name.value = newProduct.name;
  var imgPath = document.getElementById("img-product");
  imgPath.src = newProduct.img;
  var categoryP = document.getElementById("inputCategory");
  categoryP.value = newProduct.categoryProduct;
  var price = document.getElementById("price-product");
  price.value = newProduct.price;
  var titleProduct = document.getElementById("title-add-product");

  titleProduct.innerText = "EDIT PRODUCT";
  var btnAddProduct = document.getElementById("btn-add-product");

  btnAddProduct.innerText = "Update";
}
