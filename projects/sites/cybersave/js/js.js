"use strict"
let robot1btn = document.querySelector("button#robot1"); 
let robot1block = document.querySelector(".robot1"); 
let robot2btn = document.querySelector("button#robot2"); 
let robot2block = document.querySelector(".robot2"); 

robot1btn.onclick = ()=>{
	robot1block.classList.toggle("active");
}
robot2btn.onclick = ()=>{
	console.log(2)
}