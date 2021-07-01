'use strict'
function toggle() {
	document.querySelector('.toggleMenu').classList.toggle('active');
	document.querySelector('.mobile-bar').classList.toggle('active');
	if(document.querySelector('.toggleMenu').classList.contains('active')){
		document.querySelector('.toggleMenu').style.top = 
		document.querySelector("header").offsetHeight+"px";
	}
}
window.addEventListener('scroll',()=>{
	if(document.querySelector('.toggleMenu').classList.contains('active')){
		document.querySelector('.toggleMenu').classList.remove('active');
		document.querySelector('.mobile-bar').classList.remove('active');
	}
})

//secret
let keyBoard = "";
let secret = true;
let secretBlock = document.createElement("div");
secretBlock.className = "secret";
let inputSecret = document.createElement("input");
inputSecret.id = "secret";
inputSecret.type = "text";
secretBlock.appendChild(inputSecret);





document.addEventListener("keydown", function (e) {
	if(e.code == "KeyS"){
		keyBoard += e.code.substr(3).toLowerCase();	
	}
	if (e.code == "KeyE" && keyBoard == "s") {
		keyBoard += e.code.substr(3).toLowerCase();
	}
	if (e.code == "KeyR" && keyBoard == "se") {
		keyBoard += e.code.substr(3).toLowerCase();
	}
	if (e.code == "KeyH" && keyBoard == "ser") {
		keyBoard += e.code.substr(3).toLowerCase();
	}
	if (e.code == "KeyI" && keyBoard == "serh") {
		keyBoard += e.code.substr(3).toLowerCase();
	}
	if (e.code == "KeyY" && keyBoard == "serhi") {
		keyBoard += e.code.substr(3).toLowerCase();
	}
	if (keyBoard == "serhiy") {
		keyBoard = "";
		if (secret) {
			document.body.appendChild(secretBlock);
			document.querySelector(".secret").addEventListener("keydown", function(e){
				if(e.code == "Enter"){
					secretCommands();
				}
				document.querySelector("#secret").oninput = ()=>{
					let secret = document.querySelector("#secret");
					if (secret.value.split("")[0] == "/") {
						if(e.code == "Backslash"){
							changeTypeOfInput();
							secret.value = secret.value.substring(0, secret.value.length - 1);
						}
					}
					else {
						if (keyBoard == "serhi") keyBoard = "";
						secret.value = "";
					}
				}
			})
			document.querySelector("#secret").value = "";
			secret = false;
		} else {
			document.body.removeChild(secretBlock);
			secret = true;
		}
	}

	//to null
	if (e.code == "Backspace") {
		keyBoard = "";
	}
})


function changeTypeOfInput(){
	let type = document.querySelector("#secret").getAttribute("type");
	if (type == "text") document.querySelector("#secret").type = "password"
	else document.querySelector("#secret").type = "text";
}






















let commands = {
	dilema:{
		type:"link",
		link:"projects/sites/dilemaclothes/index.html",
	}
}

function secretCommands(){
	let secret = document.querySelector("#secret");
	let command = secret.value.substring(1, secret.value.length);
	for(let i = 0; i<Object.keys(commands).length;i++){
		if (command == (Object.keys(commands)[i])) {
			if(Object.values(commands)[i].type == "link"){
				window.open(Object.values(commands)[i].link,"_self")
			}
		}
	}
}