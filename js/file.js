function inputFile(fileInput,imgContainer) {
    fileInput.addEventListener("change", function (e) {
 
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (event) {
            document.getElementById(imgContainer).src = event.target.result;
          };
          reader.readAsDataURL(file);
        }
      });
}
function uploadImage(inputFile) {
    return new Promise((resolve, rejects) => {
      const file = document.getElementById(inputFile).files[0];
      if (file) {
        const imgPath = "images/" + file.name;
        const storageRef = storage.ref(imgPath);
        const uploadTask = storageRef.put(file);
    
        uploadTask.on("state_changed",
      //   function (snapshot) {
      //     // Quan sát trạng thái upload (progress, pause, resume)
      //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //     document.getElementById('status').innerText = 'Upload is ' + progress + '% done';
      //  }, 
        function () {
          // Thẻ hiển thị hoàn thành upload thành công
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
              resolve(downloadURL);
          });
        });
      } else {
        console.log("No file selected");
      }
    })
    
  }
