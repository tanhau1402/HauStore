const itemsPerPage = 5; // Number of items per page
let currentPage = 1; // Current page number
let totalPageCount = 1; // Total number of pages

getAll(urlCategories, getAllCategories);

function getAllCategories(data) {
    items[0].data = data ;
}
const  items = [
    {   
        id : 1,
        nameFunction: "displayCategories",
        namePagination: "p-categories",
        currentPage : 1,
        data : []
    },
    {   
        id : 2,
        nameFunction: "displayProducts",
        namePagination: "p-products",
        currentPage : 1,
        data : []
    }
]


function displayPagination(data,current) {
    // Calculate start and end index of items to display on current page
    console.log(data,current);
    // [0,1,2,3,4,5]
    const startIndex = (current - 1) * itemsPerPage; // 
    const endIndex = startIndex + itemsPerPage; // 5
    const paginatedItems = data.slice(startIndex, endIndex);
    return paginatedItems;
}

// Function to display pagination controls
function displayPaginationControls(data,item) {
   
    totalPageCount = Math.ceil(data.length / itemsPerPage);
    const paginationContainer = document.getElementById(item.namePagination);
    paginationContainer.innerHTML = ""; // Clear previous pagination controls

    // Previous button
    paginationContainer.innerHTML += `
    <li class="page-item ${item.currentPage === 1 ? 'disabled' : ''}">
        <a class="page-link" href="#" onclick="changePage(${currentPage - 1}, ${item.id})" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
        </a>
    </li>`;

    // Page numbers
    for (let i = 1; i <= totalPageCount; i++) {
        paginationContainer.innerHTML += `
        <li class="page-item ${item.currentPage === i ? 'active' : ''}">
            <a class="page-link" href="#" onclick="changePage(${i},${item.id})">${i}</a>
        </li>`;
    }

    // Next button
    paginationContainer.innerHTML += `
    <li class="page-item ${item.currentPage === totalPageCount ? 'disabled' : ''}">
        <a class="page-link" href="#" onclick="changePage(${currentPage + 1}, ${item.id})" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
        </a>
    </li>`;
}

// Function to handle page change
function changePage(page,id) {
    console.log(page,id);
    let item = items.find(item => item.id === id);
   
     if (page < 1) {
         page = 1;
     } else if (page > totalPageCount) {
         page = totalPageCount;
     }
     item.currentPage = page;
     console.log("item",item);
     window[item.nameFunction](item.data); // Dynamically call the function
     // 
 }
