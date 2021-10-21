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
		document.querySelector("#btn1").classList.add('active');
	},200)
	helloBlock.querySelector("header").style.display = "none";
	helloBlock.querySelector(".box.hello").style.display = "none";
	helloBlock.querySelector("footer").style.display = "none";
}

let btn1 = document.querySelector("#btn1");
btn1.onclick = ()=>{
	document.querySelector(".level1 h2").classList.add("active");
	let levels = document.querySelectorAll(".level1 .robot-choose .levels .level");
	let i = 0;
	let int = setInterval(()=>{
		if (levels[i]!=undefined) {
			levels[i].classList.add("active")
			i++;
		} else {
			clearInterval(int);
		}
	},200);
}

let lesson1Btn = document.querySelector("#lesson1");
lesson1Btn.onclick = ()=>{
	document.querySelector(".level1").classList.remove('active');
	document.querySelector(".level1 .robot1").classList.remove('active');
	document.querySelector(".level1 .robot1 .text").classList.remove('active');
	document.querySelector(".level2").classList.add("active");
	document.querySelector(".level2 .robot1").classList.add("active");
	document.querySelector(".level2 .robot1 .text").classList.add("active");
	document.querySelector(".level2 .robot1").style.alignItems = "flex-start";
	window.scrollTo(0,0);
}
