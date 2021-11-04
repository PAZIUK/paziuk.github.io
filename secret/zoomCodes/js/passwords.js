"use strict"
let PASSWORDS = {
	"05042" : "5-Б КЛАС",
	"10031" : "10-А КЛАС",
}
let PASSWORDKeys = Object.keys(PASSWORDS);
let PASSWORDValues = Object.values(PASSWORDS);

function checkPassword(btn){
	let PASSWORD = btn.parentElement.querySelector("input").value;
	if(PASSWORDKeys.includes(PASSWORD)){
		localStorage.setItem('classCode', PASSWORD);
		window.location.href = `classes/${PASSWORD}.html`;
	} else {
		btn.parentElement.querySelector(".errorText").classList.add("active")
		setTimeout(()=>{
			btn.parentElement.querySelector(".errorText").classList.remove("active");
		},2000);
	}
}

function login(){
	let checkPasswordBtn = document.querySelector("#checkPassword");
	checkPasswordBtn.addEventListener("click",()=>checkPassword(checkPasswordBtn));
}

function settings(){
	document.addEventListener("DOMContentLoaded",function(){
		setTimeout(()=>{
			document.querySelector(".PASSWORD input").classList.add("active")
			document.querySelector(".PASSWORD button").classList.add("active")
		},200)
		let input = document.querySelector(".PASSWORD input");
		if (PASSWORDKeys.includes(input.value)) {
			let ind = PASSWORDKeys.indexOf(input.value);
			document.querySelector(".PASSWORD .className").textContent = Object.values(PASSWORDS)[ind];
			document.querySelector(".PASSWORD .className").classList.add("active");
		} else {
			document.querySelector(".PASSWORD .className").classList.remove("active");
		}
	})
	document.querySelector(".PASSWORD input").addEventListener("input",function(){
		if (PASSWORDKeys.includes(this.value)) {
			let ind = PASSWORDKeys.indexOf(this.value);
			document.querySelector(".PASSWORD .className").textContent = Object.values(PASSWORDS)[ind];
			document.querySelector(".PASSWORD .className").classList.add("active");
		} else {
			document.querySelector(".PASSWORD .className").classList.remove("active");
		}
		if (this.value.length>5) {
			let value = this.value.substr(0,5);
			this.value = value;
		}
	})
}

let classId = localStorage.getItem('classCodeNow');
if (classId) {
	document.querySelector(".PASSWORD input").value = classId;
	document.querySelector(".PASSWORD .className").classList.add("active");
	settings();
	login();
} else {
	if (localStorage.getItem('classCode')) {
		let classCode = localStorage.getItem('classCode');
		window.location.href = `classes/${classCode}.html`;
	} else {
		document.querySelector(".PASSWORD .className").classList.add("active");
		login();
		settings();
	}
}