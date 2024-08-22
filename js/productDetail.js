getAll(urlProducts, showProduct);

function showProduct(data) {
   
     var product = data.find(element => element.id == localStorage.getItem("idDetail"));
    document.getElementById("img-detail").src = product.img;
    document.querySelector(".name").innerText = product.name;
    document.querySelector(".info").innerText = getNameCategories(product.categoryProduct);
    document.querySelector(".price").innerText = product. price;

}
function getNameCategories(id) {

    const category =  items[0].data.find(element => element.id == id);
    return category ? category.name : "no";
}