


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
  
  var product = items[1].data.find(element => element.id == id);
  console.log(product);

  var productContain = document.getElementById("product-info-new");
  product.forEach((element) => {
    productContain.innerHTML += `
            
    <!-- <div class="main-right p-3 col-12 col-lg-5 col-md-5">
    <div class="img-box">
      <img src="${element.img}" style="width: 100%" alt="" />
    </div>
  </div>
  <div class="main-left p-3 col-12 col-lg-7 col-md-7">
    <div class="name">
      ${element.name}
      <hr />
    </div>

    <div class="info">
      Thương hiệu: Đông A | Loại: ${getNameCategories(element.categoryProduct)} | Mã SP:
      8936203363302 |
      <hr />
    </div>
    <div class="price">
      ${element.price}
      <hr />
    </div>
    <div class="phone">
      Hotline hỗ trợ: 02438569367 |
      <hr />
    </div>
    <div class="button-group">
      <button type="button" class="btn">Mua ngay</button>
      <button type="button" class="btn">Thêm vòa giỏ hàng</button>
      <hr />
    </div>
    <div class="info-product">
      Thông tin sản phẩm <br />
      Thống khổ và phiêu linh <br />
      Tác giả: Irving Stone <br />
      Dịch giả: Nguyễn Minh <br />
      Số trang: 980 Kích thước: 16 x 24 cm Mã <br />
      ISBN: 978-604-394-346-7 <br />
      Mã vạch: 8936203363302 <br>
      Hình thức: bìa cứng, có bìa áo <br>
       Giá bìa: 500.000đ <br>
       Trọng lượng: 900gr <br>
       Sách do Công ty Văn hóa Đông A và 
      NXB Văn học liên kết xuất bản
    </div>
  </div>
</div> -->         
    `;
  });
  
  window.location.href = "box1.html";

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

