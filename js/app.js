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
function openForm(){

document.getElementById("roadForm")
.style.display="flex";

}



function closeForm(){

document.getElementById("roadForm")
.style.display="none";

}




function addRoad(){


let no =
document.getElementById("roadNo").value;


let name =
document.getElementById("roadName").value;


let length =
document.getElementById("length").value;



let table =
document.getElementById("roadsTable");



let row =
table.insertRow();



row.innerHTML =
`
<td>${no}</td>
<td>${name}</td>
<td>New</td>
<td>${length}</td>
<td class="good">Good</td>
`;



closeForm();


}




function searchRoad(){


let value =
document.getElementById("search")
.value.toLowerCase();



let rows =
document.querySelectorAll(
"#roadsTable tr"
);



rows.forEach(row=>{


if(row.innerText
.toLowerCase()
.includes(value)){

row.style.display="";

}

else{

row.style.display="none";

}


});


}
