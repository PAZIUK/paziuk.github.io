"use strict"
let color = document.getElementsByClassName("color_box").length;
let allColors = document.getElementById('allColors');
for (let i = 0; i != color + 1; i++) {
	allColors.innerHTML = color;
	allColors.style.color = "red";
};

function toggle() {
	document.querySelector('.toggleMenu').classList.toggle('active');
	document.querySelector('.mobile-bar').classList.toggle('active');
}