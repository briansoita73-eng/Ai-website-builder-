const SUPABASE_URL =
"https://qypcjqijvevxngpopnja.supabase.co";

const SUPABASE_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5cGNqcWlqdmV2eG5ncG9wbmphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0MDE5MjYsImV4cCI6MjA5Nzk3NzkyNn0.f9BwaVKhb2cZm0bu4MFF2rvTAnBI_R6Jx7Xab9OAvaM";

const supabaseClient =
supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);

loadProjects();

async function loadProjects(){

const { data, error } =
await supabaseClient
.from("projects")
.select("*")
.order("id",{ascending:false});

if(error){

document.getElementById(
"adminProjects"
).innerHTML =
"Error loading projects";

return;

}

let html = "";

data.forEach(project=>{

html += `

<div class="card">

<h3>${project.business}</h3>

<p>
Website:
${project.website_type}
</p>

<p>
Transaction:
${project.transaction_code}
</p>

<p>
Status:
<span id="status${project.id}">
${project.status}
</span>
</p>

<button
onclick="approveProject(${project.id})">
Approve
</button>

</div>

`;

});

document.getElementById(
"adminProjects"
).innerHTML = html;

}

async function approveProject(id){

const { error } =
await supabaseClient
.from("projects")
.update({
status:"In Progress"
})
.eq("id",id);

if(!error){

alert("Project Approved");

loadProjects();

}

}
