function login(event){

event.preventDefault();


let username =
document.getElementById("username").value;


let password =
document.getElementById("password").value;



if(username==="admin" && password==="1234"){

window.location.href="dashboard.html";

}

else{

alert("Wrong username or password");

}

}
