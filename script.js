// ===============================
// SUPABASE CONFIGURATION
// ===============================

const SUPABASE_URL =
"https://qypcjqijvevxngpopnja.supabase.co";

const SUPABASE_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5cGNqcWlqdmV2eG5ncG9wbmphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0MDE5MjYsImV4cCI6MjA5Nzk3NzkyNn0.f9BwaVKhb2cZm0bu4MFF2rvTAnBI_R6Jx7Xab9OAvaM";

const supabaseClient =
supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);

// ===============================
// AUTHENTICATION
// ===============================

function register(){

const email =
document.getElementById("regEmail").value.trim();

const password =
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

const email =
document.getElementById("email").value.trim();

const password =
document.getElementById("password").value.trim();

if(

email === localStorage.getItem("email") &&
password === localStorage.getItem("password")

){

localStorage.setItem(
"loggedInUser",
email
);

window.location =
"dashboard.html";

}
else{

alert("Invalid Email or Password");

}

}

function logout(){

localStorage.removeItem(
"loggedInUser"
);

window.location =
"login.html";

}
function submitProject(){

const business =
document.getElementById("business").value.trim();

const type =
document.getElementById("websiteType").value;

const prompt =
document.getElementById("aiPrompt").value.toLowerCase();

if(business === "" || prompt === ""){

alert("Please complete all fields.");
return;

}

let pages = [
"Home",
"About",
"Services",
"Contact"
];

let features = [];

let cost = 150;

if(type === "Restaurant"){

cost = 300;

pages.push(
"Menu",
"Reservations",
"Gallery"
);

features.push(
"Online Ordering",
"Table Booking"
);

}

if(type === "Portfolio"){

cost = 200;

pages.push(
"Projects",
"Skills"
);

features.push(
"Contact Form"
);

}

if(type === "E-Commerce"){

cost = 500;

pages.push(
"Shop",
"Cart",
"Checkout"
);

features.push(
"Online Payments",
"Order Tracking"
);

}

if(prompt.includes("whatsapp")){

features.push("WhatsApp Chat");

}

if(prompt.includes("booking")){

features.push("Booking System");

}

if(prompt.includes("blog")){

pages.push("Blog");

}

document.getElementById("projects").innerHTML = `

<div class="card">

<h3>AI Website Analysis</h3>

<p><strong>Business:</strong> ${business}</p>

<p><strong>Website Type:</strong> ${type}</p>

<p><strong>Recommended Pages</strong></p>

<ul>

${pages.map(page=>`<li>${page}</li>`).join("")}

</ul>

<p><strong>Recommended Features</strong></p>

<ul>

${features.map(feature=>`<li>${feature}</li>`).join("")}

</ul>

<h3>Estimated Cost: $${cost}</h3>

<p>Status: Pending Payment</p>

<button onclick="openPayment()">

Proceed To Payment

</button>

</div>

`;

}
