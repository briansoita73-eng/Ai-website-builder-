function startChat(){
alert("AI Assistant Started");
}

function generatePreview(){
document.getElementById("previewStatus").innerHTML =
"Website Preview Generated Successfully";
}

function openPayment(){
document.getElementById("paymentModal").style.display =
"block";
}

function closePayment(){
document.getElementById("paymentModal").style.display =
"none";
}

function confirmPayment(){
alert(
"Payment submitted. Brian Soita will review your order."
);

closePayment();
}
function register(){

let email =
document.getElementById("regEmail").value;

let password =
document.getElementById("regPassword").value;

localStorage.setItem("email",email);
localStorage.setItem("password",password);

alert("Registration Successful");

window.location="login.html";
}

function login(){

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

if(
email===localStorage.getItem("email")
&&
password===localStorage.getItem("password")
){
window.location="dashboard.html";
}
else{
alert("Invalid Login");
}
}

function submitProject(){

let business =
document.getElementById("business").value;

let type =
document.getElementById("websiteType").value;

let project =
business + " - " + type;

localStorage.setItem(
"project",
project
);

document.getElementById("projects")
.innerHTML =
"<p>"+project+"</p>";

alert("Project Submitted");
}
