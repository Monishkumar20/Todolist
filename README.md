# Ex03 To-Do List using JavaScript
## Date:

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Smart ToDo List</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<div class="container">

<h1>Good Morning ✨</h1>

<p style="text-align:center;color:#666;margin-bottom:20px;">
🌸 Plan your day softly and stay productive ✨
</p>

<input type="text" id="search" placeholder="Search a task..." onkeyup="searchTask()">

<div class="filters">
<button onclick="filterTasks('all')">All</button>
<button onclick="filterTasks('pending')">Pending</button>
<button onclick="filterTasks('completed')">Completed</button>
</div>

<div class="addTask">
<input type="text" id="taskInput" placeholder="Enter task">
<input type="datetime-local" id="taskTime">
<button onclick="addTask()">Add</button>
</div>

<ul id="taskList"></ul>

</div>

<script src="script.js"></script>

</body>
</html>
```

script.js
```
let tasks=[];

function addTask(){

let text=document.getElementById("taskInput").value;
let time=document.getElementById("taskTime").value;

if(text==="") return;

let task={
text:text,
time:time,
completed:false
};

tasks.push(task);

renderTasks();

document.getElementById("taskInput").value="";
}

function renderTasks(filter="all"){

let list=document.getElementById("taskList");
list.innerHTML="";

tasks.forEach((task,index)=>{

if(filter==="pending" && task.completed) return;
if(filter==="completed" && !task.completed) return;

let li=document.createElement("li");

if(task.completed) li.classList.add("completed");

li.innerHTML=`
<div>
<strong>${task.text}</strong><br>
<small>${task.time}</small>
</div>

<div>
<input type="checkbox" ${task.completed?"checked":""}
onclick="toggleTask(${index})">

<button onclick="deleteTask(${index})">X</button>
</div>
`;

list.appendChild(li);

});
}

function toggleTask(i){
tasks[i].completed=!tasks[i].completed;
renderTasks();
}

function deleteTask(i){
tasks.splice(i,1);
renderTasks();
}

function filterTasks(type){
renderTasks(type);
}

function searchTask(){

let search=document.getElementById("search").value.toLowerCase();

let list=document.getElementById("taskList").children;

for(let item of list){

let text=item.innerText.toLowerCase();

item.style.display=text.includes(search)?"flex":"none";
}
}
```

style.css
```
/* Page background */

body{
font-family:'Segoe UI', sans-serif;
margin:0;
min-height:100vh;

background: linear-gradient(
135deg,
#ffd6ec,
#c9e7ff,
#e0c3fc,
#b5d8ff
);

display:flex;
justify-content:center;
align-items:flex-start;

color:#333;
}

/* Main container */

.container{

width:90%;
max-width:850px;

margin-top:40px;
padding:40px;

background:rgba(255,255,255,0.4);
backdrop-filter:blur(12px);

border-radius:25px;

box-shadow:0 15px 35px rgba(0,0,0,0.15);

}

/* Title */

h1{

text-align:center;

color:#ff5fa2;

font-size:36px;

margin-bottom:10px;

letter-spacing:1px;

}

/* Search box */

#search{

width:100%;
padding:12px;

border:none;
border-radius:15px;

background:#fff;

margin-bottom:20px;

box-shadow:0 3px 10px rgba(0,0,0,0.1);

}

/* Filters */

.filters{

text-align:center;
margin-bottom:25px;

}

.filters button{

padding:8px 16px;
margin:6px;

border:none;
border-radius:20px;

background:linear-gradient(
45deg,
#ff8acb,
#7cc6ff
);

color:white;

font-weight:500;

cursor:pointer;

transition:0.3s;

}

.filters button:hover{

transform:scale(1.05);

}

/* Add task section */

.addTask{

display:flex;
gap:10px;
flex-wrap:wrap;
margin-bottom:30px;

}

.addTask input{

flex:1;

padding:12px;

border-radius:12px;

border:none;

background:white;

box-shadow:0 3px 8px rgba(0,0,0,0.1);

}

.addTask button{

background:linear-gradient(
45deg,
#ff6fb5,
#7ec8ff
);

border:none;

padding:12px 18px;

border-radius:12px;

color:white;

font-weight:600;

cursor:pointer;

}

/* Task list */

ul{

list-style:none;
padding:0;

}

/* Task cards */

li{

background:linear-gradient(
135deg,
#ffe0f2,
#d9f0ff
);

margin-bottom:15px;

padding:16px;

border-radius:16px;

display:flex;

justify-content:space-between;

align-items:center;

box-shadow:0 8px 20px rgba(0,0,0,0.1);

transition:0.3s;

}

/* Hover animation */

li:hover{

transform:translateY(-4px);

}

/* Completed task */

.completed{

text-decoration:line-through;

opacity:0.6;

}

/* Delete button */

li button{

background:#ff6fae;

border:none;

color:white;

padding:6px 10px;

border-radius:8px;

cursor:pointer;

}
```



## OUTPUT
<img width="1919" height="1011" alt="image" src="https://github.com/user-attachments/assets/c882d627-46b9-4b5f-b96b-d1e7ea01f8e6" />
<img width="1919" height="1006" alt="image" src="https://github.com/user-attachments/assets/ba684e4c-12d4-4fec-864e-17bdd86237ec" />
<img width="1919" height="1011" alt="image" src="https://github.com/user-attachments/assets/786cdf69-2c4c-453f-8ddc-48500ce17797" />



## RESULT
The program for creating To-do list using JavaScript is executed successfully.
