'use strict'

let li = document.getElementsByClassName("project_box");
let num1 = li.length;
let num2 = li.length + 1;
let allProjects = document.getElementById('allProjects');
for (let i = 0; i != num2; i++) {
	allProjects.innerHTML = num1;
	allProjects.style.color = "red";
};

function toggle() {
	document.querySelector('.toggleMenu').classList.toggle('active');
	document.querySelector('.mobile-bar').classList.toggle('active');
}
