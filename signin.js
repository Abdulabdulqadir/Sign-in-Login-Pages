function nextpage1 () {
    
    let users = [];
      let obj = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        roll: document.getElementById("roll").value,
      };
      users = JSON.parse(localStorage.getItem("users"))
        ? JSON.parse(localStorage.getItem("users"))
        : [];
      users.push(obj);
    
      localStorage.setItem("users", JSON.stringify(users));
      window.location.href="./login.html"
      
    }
    
    
    