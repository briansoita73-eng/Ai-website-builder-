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
