const uname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const submit = document.getElementById("submit");
const password = document.getElementById("password");

let users;

if (localStorage.getItem("users") === null){
    users = [];
}
else{
    users = JSON.parse(localStorage.getItem ("users"));
}
// console.log(users);

submit.addEventListener("click", ()=>{
    // alert("submitted");
    let user = {
        uname: uname.value,
        email: email.value,
        phone : phone.value ,
        password: password.value
    }
  
    users.push(user);
    console.log(users);
    
    localStorage.setItem("users", JSON.stringify(users));
    window.location="/login.html";
})

