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

function add(url,object) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    })
      .then(response => response.json())
      .then(data => {
        // After successful creation, refresh the post list
        fetchPosts();
      })
      .catch(error => console.error('Error creating post:', error));
  }