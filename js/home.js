


getAll(urlProducts, getAllProducts);

function getAllProducts(data) {
  
  items[1].data = data;
  displayProducts(data);
  displayCollection(data);
  
}

 function getNameCategories(id) {

     const category =  items[0].data.find(element => element.id == id);
     return category ? category.name : "no";
 }
function displayProducts (data) {
    var bestSellerContainer = document.querySelector(".listSeller");
    
    data.forEach((element) => {
      bestSellerContainer.innerHTML += `           
                 <div class="card  mb-3" onclick="productDetail(${element.id})"  style="max-width: 540px;">
                    <div class="row g-0">
                      <div class="col-md-4">
                      <img src="${element.img}" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">${element.name}</h5>
                          <p class="card-text">
                          <small class="text-muted">${getNameCategories(element.categoryProduct)}</small>
                            
                        </p>
                          <p class="card-text">${element.price}</p>

                          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                      </div>
                    </div>
                  </div>             
      `;
    });
}

function productDetail(id) {
   localStorage.setItem("idDetail",id);
   window.location.href = "box1.html";

}
function productSearch() {
  const input = document.getElementById("input-3").value ;
  localStorage.setItem("inputSearch",input);
  window.location.href = "box2.html";

}

function displayCollection(data) {
  var collectionContainer = document.querySelector(".listCollection");
  
  data.forEach((element) => {
    collectionContainer.innerHTML += `
    <div class="col">
    <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-12 col-lg-12 col-12">
                      <img
                        src="${element.img}"
                        class=" rounded-start" alt="..." />
                    </div>
                    <div class="col-md-12 col-lg-12 col-12">
                      <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-price">${element.price}</p>
                        <p class="card-text">
                          <small class="text-muted">${getNameCategories(element.categoryProduct)}</small>
                            
                        </p>
                      </div>
                      <div class="button-group mt-2">
                        <button type="button" class="btn btn-outline-secondary p-2">
                        <i class="fa-solid fa-cart-shopping"></i>
                        </button>
                        <button type="button" class="btn btn-outline-secondary p-2 ms-3">
                        <i class="fa-solid fa-bag-shopping"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
    `
  })

}

