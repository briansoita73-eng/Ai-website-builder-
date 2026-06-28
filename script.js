// ===============================
// SUPABASE CONFIGURATION
// ===============================

const SUPABASE_URL =
"https://qypcjqijvevxngpopnja.supabase.co";

const SUPABASE_KEY =
"YOUR_ANON_KEY_HERE";

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
