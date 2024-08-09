function search(searchInput1,item) {
    const searchInput = document.getElementById(searchInput1).value.toLowerCase();
    nameSearch = searchInput;
    console.log(searchInput);
    window[item.nameFunction](item.data);
  }