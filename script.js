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

let projectData = {
business:
document.getElementById("business").value,

type:
document.getElementById("websiteType").value,

transactionCode: code,

status: "Pending Review"
};

localStorage.setItem(
"latestProject",
JSON.stringify(projectData)
);

document.getElementById("projects").innerHTML += `
<div style="margin-top:20px;padding:15px;border-radius:10px;background:#d4edda;">
✅ Payment Submitted Successfully
<br><br>
Status: Pending Review
</div>
`;

closePayment();

}
function loadAdminProjects(){

let project =
localStorage.getItem("latestProject");

if(!project){
return;
}

project = JSON.parse(project);

document.getElementById(
"adminProjects"
).innerHTML = `

<div class="card">

<h3>${project.business}</h3>

<p>
Website Type:
${project.type}
</p>

<p>
Transaction Code:
${project.transactionCode}
</p>

<p>
Status:
${project.status}
</p>

<button onclick="approveProject()">
Approve Project
</button>

</div>

`;

}

function approveProject(){

alert(
"Project Approved. Status changed to In Progress."
);

}
