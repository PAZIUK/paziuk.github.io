"use strict"

let li = document.getElementsByClassName("project_box");
let num1 = li.length;
let num2 = li.length + 1;
let allProjects = document.getElementById('allProjects');
for (let i = 0; i != num2; i++) {
	allProjects.innerHTML = num1;
	allProjects.style.color = "red";
};

let color = document.getElementsByClassName("color_box");
let color1 = color.length;
let color2 = color.length + 1;
let allColors = document.getElementById('allColors');
for (let i = 0; i != num2; i++) {
	allColors.innerHTML = num1;
	allColors.style.color = "red";
};

function toggle() {
	document.querySelector('.toggleMenu').classList.toggle('active');
	document.querySelector('.mobile-bar').classList.toggle('active');
}
