const urlCategories = "http://localhost:3000/categories";

async function getAll(url, callback) {
    try{
        const response = await fetch(url);
        const data = await response.json();
        callback(data);
    } catch (error) {
        console.error( "lỗi:", error);
    }
}
function deleted(url,id) {
    fetch(`${url}/${id}`, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => {      
      })
      .catch(error => console.error('Lỗi khi cập nhật đơn hàng', error));
}