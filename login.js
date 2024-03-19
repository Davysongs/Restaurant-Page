const users = JSON.parse(localStorage.getItem("users"));
console.log(users);
const username = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

submit.addEventListener("click", ()=>{
    const user = {
        email: username.value,
        password: password.value
    };

    let correctDetails = false;

    for (let i=0; i < users.length; i++) {
        if (user.email === user[i].email&& user.password=== users[i].password){
            alert("correct Password")
         }else{
            alert("Incorrect password")
         }
    }
    if (correctDetails == true) {
        window.location="./homepage.html"
    }
    console.log(user);
})