const SUPABASE_URL =
"https://qypcjqijvevxngpopnja.supabase.co";

const SUPABASE_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5cGNqcWlqdmV2eG5ncG9wbmphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0MDE5MjYsImV4cCI6MjA5Nzk3NzkyNn0.f9BwaVKhb2cZm0bu4MFF2rvTAnBI_R6Jx7Xab9OAvaM";

const supabaseClient =
supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);
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
document.getElementById("regEmail").value.trim();

let password =
document.getElementById("regPassword").value.trim();

if(email === "" || password === ""){
alert("Please fill in all fields.");
return;
}

localStorage.setItem("email", email);
localStorage.setItem("password", password);

alert("Registration Successful!");

window.location = "login.html";

}

function login(){

let email =
document.getElementById("email").value.trim();

let password =
document.getElementById("password").value.trim();

if(
email === localStorage.getItem("email") &&
password === localStorage.getItem("password")
){

localStorage.setItem("loggedInUser", email);

alert("Login Successful!");

window.location = "dashboard.html";

}
else{

alert("Invalid Email or Password");

}

}

function submitProject(){

let business =
document.getElementById("business").value;

let type =
document.getElementById("websiteType").value;
let prompt =
document.getElementById("aiPrompt").value.toLowerCase();
let email = localStorage.getItem("email");
let pages = [
"Home",
"About",
"Contact",
"Services"
];

let features = [];

if(prompt.includes("restaurant")){
pages.push("Menu");
pages.push("Reservations");
pages.push("Gallery");

features.push("Online Ordering");
features.push("Table Booking");
}

if(prompt.includes("shop") || prompt.includes("e-commerce")){
pages.push("Shop");
pages.push("Cart");
pages.push("Checkout");

features.push("Online Payments");
}

if(prompt.includes("portfolio")){
pages.push("Projects");
pages.push("Skills");

features.push("Contact Form");
}  
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
${pages.map(page => `<li>${page}</li>`).join("")}
</ul>

<p><strong>Recommended Features:</strong></p>

<ul>
${features.map(feature => `<li>${feature}</li>`).join("")}
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
async function confirmProjectPayment(){

let code =
document.getElementById("transactionCode").value;

if(code === ""){
alert("Please enter transaction code");
return;
}

let business =
document.getElementById("business").value;

let type =
document.getElementById("websiteType").value;

let prompt =
document.getElementById("aiPrompt").value;

let email =
localStorage.getItem("email");

const { error } =
await supabaseClient
.from("projects")
.insert([
{
business: business,
website_type: type,
description: prompt,
email: email,
transaction_code: code,
status: "Pending Review"
}
]);

if(error){
alert("Database Error");
console.log(error);
return;
}

alert("Payment Submitted Successfully");

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
loadProjectStatus();

async function loadProjectStatus(){

const { data, error } =
await supabaseClient
.from("projects")
.select("*")
.order("id", { ascending: false })
.limit(1);

if(error || data.length === 0){
return;
}

let project = data[0];

document.getElementById("projectStatus").innerHTML = `
<h3>${project.business}</h3>

<p><strong>Website Type:</strong> ${project.website_type}</p>

<p><strong>Status:</strong> ${project.status}</p>

<p><strong>Admin Note:</strong></p>

<p>${project.admin_note || "No updates yet."}</p>
`;

}
