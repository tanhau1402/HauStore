getAll(urlProducts,showProductSearch);

function showProductSearch(data) {
    var productSearch = data.filter(product => product.name.toLowerCase().includes(localStorage.getItem("inputSearch")));
    console.log(productSearch);

}