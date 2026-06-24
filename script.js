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

let cost = 150;

if(type === "E-Commerce"){
cost = 500;
}

if(type === "Restaurant"){
cost = 300;
}

if(type === "Portfolio"){
cost = 200;
}

document.getElementById("projects").innerHTML = `
<h3>AI Analysis</h3>

<p><strong>Business:</strong> ${business}</p>

<p><strong>Website Type:</strong> ${type}</p>

<p><strong>Recommended Pages:</strong></p>

<ul>
<li>Home</li>
<li>About</li>
<li>Contact</li>
<li>Services</li>
</ul>

<p><strong>Estimated Cost:</strong> $${cost}</p>

<p><strong>Status:</strong> Pending Payment</p>

<button onclick="openPayment()">
Proceed To Payment
</button>
`;

}
function openPayment(){

document.getElementById(
"paymentModal"
).style.display = "block";

}

function closePayment(){

document.getElementById(
"paymentModal"
).style.display = "none";

}

function confirmProjectPayment(){

let code =
document.getElementById("transactionCode").value;

if(code === ""){

alert("Please enter transaction code");

return;
}

document.getElementById("projects").innerHTML += `
<div style="margin-top:20px;padding:15px;border-radius:10px;background:#d4edda;color:#155724;">
✅ Payment Submitted Successfully

<br><br>

Transaction Code: ${code}

<br><br>

Status: Pending Review

<br><br>

Brian Soita will verify your payment and begin building your website.
</div>
`;

closePayment();

      }
