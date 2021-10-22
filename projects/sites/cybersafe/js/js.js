"use strict"

let letsGoBtn = document.querySelector("#letsGo"),
	helloBlock = document.querySelector(".hello-block");

document.addEventListener("DOMContentLoaded",()=>{
	setTimeout(()=>{
		helloBlock.querySelector("header").classList.add("active");
		helloBlock.querySelector(".box.hello").classList.add("active");
		helloBlock.querySelector(".box.hello .btns button").classList.add("active");
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
	setTimeout(()=>{
		document.querySelector(".level2 .robot1 .text").classList.add("active")
		document.querySelector("#btn2").classList.add("active")
	},200)
	document.querySelector(".level2 .robot1").style.alignItems = "flex-start";
	window.scrollTo(0,0);
}

let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
// let btn = document.querySelector("#btn");
// let btn = document.querySelector("#btn");
// let btn = document.querySelector("#btn");
// let btn = document.querySelector("#btn");
// let btn = document.querySelector("#btn");
// let btn = document.querySelector("#btn");
// let btn = document.querySelector("#btn");
// let btn = document.querySelector("#btn");

btn2.onclick = ()=>{
	document.querySelector(".level2 .box.r2").classList.add("active");
	document.querySelector(".level2 .box.r2 .robot2").classList.add("active");
	document.querySelector(".level2 .box.r2 .robot2 .text").classList.add("active");
	setTimeout(()=>{
		btn3.classList.add("active")
	},1000)
	document.querySelector(".level2 .robot2").style.alignItems = "flex-start";
	let sc = 0;
  	let intsc = setInterval(()=>{
  		if(sc<=document.querySelector(".level2 .box.r1").offsetHeight){
			sc+=50;
			window.scrollTo(0,sc)
		} else {
			clearInterval(intsc);
		}
	},50)
}

btn3.onclick = ()=>{
	document.querySelector(".level2 .box.r3").classList.add("active");
	document.querySelector(".level2 .box.r3 .robot1").classList.add("active");
	document.querySelector(".level2 .box.r3 .robot1 .text").classList.add("active");
	setTimeout(()=>{
		btn4.classList.add("active")
	},1000)
	let sc = document.querySelector(".level2 .box.r1").offsetHeight + document.querySelector(".level2 .box.r2").offsetHeight;
	let tosc = document.body.scrollHeight-document.querySelector(".level2 .box.r2").offsetHeight;
  	let intsc = setInterval(()=>{
  		if(sc<=tosc){
			sc+=20;
			window.scrollTo(0,sc)
		} else {
			clearInterval(intsc);
		}
	},70)
}
btn4.onclick = ()=>{
	document.querySelector(".level2").classList.remove('active');
	document.querySelector(".level3").classList.add("active");
	document.querySelector(".level3 .robot1").classList.add("active");
	setTimeout(()=>{
		document.querySelector(".level3 .robot1 .text").classList.add("active")
		document.querySelector("#btn5").classList.add("active")
	},200)
	document.querySelector(".level3 .robot1").style.alignItems = "flex-start";
	window.scrollTo(0,0);
}
btn5.onclick = ()=>{
	document.querySelector(".level3 .box.r2").classList.add("active");
	document.querySelector(".level3 .box.r2 .robot1").classList.add("active");
	document.querySelector(".level3 .box.r2 .robot1 .text").classList.add("active");
	document.querySelector(".level3 .box.r2 .robot1").style.alignItems = "flex-start";
	setTimeout(()=>{
		btn6.classList.add("active")
	},1000)
	let sc = 0;
  	let intsc = setInterval(()=>{
  		if(sc<=document.querySelector(".level3 .box.r1").offsetHeight){
			sc+=50;
			window.scrollTo(0,sc)
		} else {
			clearInterval(intsc);
		}
	},50)
}
btn6.onclick = ()=>{
	document.querySelector(".level3 .box.r3").classList.add("active");
	document.querySelector(".level3 .box.r3 .robot1").classList.add("active");
	document.querySelector(".level3 .box.r3 .robot1 .text").classList.add("active");
	document.querySelector(".level3 .box.r3 .robot1").style.alignItems = "flex-start";
	setTimeout(()=>{
		document.querySelector("#checkBtn1").classList.add("active")
		document.querySelector("#btn7").classList.remove("active")
	},1000)
	let sc = document.querySelector(".level3 .box.r1").offsetHeight + document.querySelector(".level3 .box.r2").offsetHeight;
	let tosc =window.scrollY;
  	let intsc = setInterval(()=>{
  		if(sc>=tosc){
			tosc+=30;
			window.scrollTo(0,tosc)
		} else {
			clearInterval(intsc);
		}
	},30)
}
let test1Btns = document.querySelectorAll(".level3 .box.r3 .robot1 .text .test1 button");
let isTest1 = false;
test1Btns.forEach((item)=>{
	item.onclick = ()=>{
		for (let i = 0; i < test1Btns.length; i++) {
			test1Btns[i].classList.remove("active");
		}
		item.classList.add("active");

		item.getAttribute("isRight")=="YES" ? isTest1=true : isTest1=false;
	}
})
document.querySelector("#checkBtn1").onclick = ()=>{
	if (isTest1) {
		document.querySelector("#checkBtn1").classList.remove("active");
		document.querySelector("#checkBtn1").style.display = "none";
		btn7.classList.add("active");
		document.querySelector(".level3 .box.r3 .robot1 .text .test1 button.active").classList.add("right");
		setTimeout(()=>{
			document.querySelector(".level3 .box.r3 .robot1 .text .test1 button.active").classList.remove("active");
		},1000);
	} else {
		document.querySelector(".level3 .box.r3 .robot1 .text .test1 button.active").classList.add("noRight");
		setTimeout(()=>{
			document.querySelector(".level3 .box.r3 .robot1 .text .test1 button.active").classList.remove("active");
			document.querySelector(".level3 .box.r3 .robot1 .text .test1 button.active").classList.remove("noRight");
		},500);
	}
}
btn7.onclick = ()=>{
	document.querySelector(".level3").classList.remove('active');
	document.querySelector(".level4").classList.add("active");
	document.querySelector(".level4 .robot1").classList.add("active");
	setTimeout(()=>{
		document.querySelector(".level4 .robot1 .text").classList.add("active")
		document.querySelector("#btn8").classList.add("active")
	},200)
	document.querySelector(".level4 .robot1").style.alignItems = "flex-start";
	window.scrollTo(0,0);
}