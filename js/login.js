const btnLogin = document.getElementById("form-login");

btnLogin.addEventListener("submit", (e)  => {
    e.preventDefault();
   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;
   var account = JSON.parse(localStorage.getItem("account"));

   if(account.email != email || account.password != password) {
      alert("Sai tai khoan hoac mat khau !");
    return;
   }
    window.location.href = "HomeAdmin.html";
})