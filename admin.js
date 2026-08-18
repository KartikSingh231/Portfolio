const messages = [

{

name:"Rahul",

email:"rahul@gmail.com",

subject:"Website",

message:"Need a portfolio website."

},

{

name:"Aman",

email:"aman@gmail.com",

subject:"Project",

message:"Let's collaborate."

}

];

const table=document.getElementById("messageTable");

messages.forEach(msg=>{

table.innerHTML +=`

<tr>

<td>${msg.name}</td>

<td>${msg.email}</td>

<td>${msg.subject}</td>

<td>${msg.message}</td>

</tr>

`;

});

document
.getElementById("logoutBtn")
.addEventListener("click",function(){

    localStorage.removeItem("adminLogin");

    window.location.href="index.html";

});