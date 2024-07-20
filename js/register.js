
 const btnRegister = document.getElementById("form-register");



btnRegister.addEventListener("submit",(e) => {
    e.preventDefault();
    const emailRegister = document.getElementById("exampleInputEmail1").value;
    const passwordRegister = document.getElementById("exampleInputPassword1").value;
    const passwordRegister2 = document.getElementById("exampleInputPassword2").value;
      
    if(passwordRegister != passwordRegister2){
        alert("mat khau ko khop");
        return;
    }
    const account = {
        email : emailRegister,
        password : passwordRegister
    }
    localStorage.setItem("account",JSON.stringify(account));
    alert("dang ky thanh cong ! ")
    window.location.href = "login.html";

}
 )

