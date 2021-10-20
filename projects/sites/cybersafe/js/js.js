"use strict"

let letsGoBtn = document.querySelector("#letsGo"),
	helloBlock = document.querySelector(".hello-block");

document.addEventListener("DOMContentLoaded",()=>{
	setTimeout(()=>{
		helloBlock.querySelector("header").classList.add("active");
		helloBlock.querySelector(".box.hello").classList.add("active");
		helloBlock.querySelector("footer").classList.add("active");
	},100)
})

letsGoBtn.onclick = ()=>{
	helloBlock.querySelector("header").classList.remove("active");
	helloBlock.querySelector(".box.hello").classList.remove("active");
	helloBlock.querySelector("footer").classList.remove("active");
	setTimeout(()=>{
		level1();
	},500)

}

function level1() {
	window.scrollTo(0,0);
	document.querySelector(".level1").classList.add('active');
	document.querySelector(".level1 .robot1").classList.add('active');
	setTimeout(()=>{
		document.querySelector(".level1 .robot1 .text").classList.add('active');
	},500)
	helloBlock.querySelector("header").style.display = "none";
	helloBlock.querySelector(".box.hello").style.display = "none";
	helloBlock.querySelector("footer").style.display = "none";
}