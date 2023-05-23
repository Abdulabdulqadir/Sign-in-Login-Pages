function login() {
    var user = JSON.parse(localStorage.getItem("users"))
    var email = document.getElementById("emial2").value
    var password = document.getElementById("password2").value
    var flag = false;
    for (i = 0; i < user.length; i++) {

        if (user[i].email == email && user[i].password == password) {
            flag = true;
            alert("Wellcome to quiz")
            window.location.href = "./quiz.html"
            break;
        }
        
    }
    if (flag ===false) {
        alert("Please Enter Right Email or Password")
    }
console.log(user);
    
}
