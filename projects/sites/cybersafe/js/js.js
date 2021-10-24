"use strict"
let mark = 0;
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
let btn8 = document.querySelector("#btn8");
let btn9 = document.querySelector("#btn9");
let btn10 = document.querySelector("#btn10");
let btn11 = document.querySelector("#btn11");
let btn12 = document.querySelector("#btn12");
let btn13 = document.querySelector("#btn13");
let btn14 = document.querySelector("#btn14");
let btn15 = document.querySelector("#btn15");
let btn16 = document.querySelector("#btn16");
let btn17 = document.querySelector("#btn17");
let btn18 = document.querySelector("#btn18");
let btn19 = document.querySelector("#btn19");
let btn20 = document.querySelector("#btn20");
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
	let tosc = window.scrollY;
  	let intsc = setInterval(()=>{
  		if(sc>=tosc){
			tosc+=30;
			window.scrollTo(0,tosc)
		} else {
			clearInterval(intsc);
		}
	},30)
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
		mark +=5;
	} else {
		document.querySelector(".level3 .box.r3 .robot1 .text .test1 button.active").classList.add("noRight");
		setTimeout(()=>{
			document.querySelector(".level3 .box.r3 .robot1 .text .test1 button.active").classList.remove("active");
			document.querySelector(".level3 .box.r3 .robot1 .text .test1 button.active").classList.remove("noRight");
		},500);
		mark--;
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
btn8.onclick = ()=>{
	document.querySelector(".level4 .box.r2").classList.add("active");
	document.querySelector(".level4 .box.r2 .robot1").classList.add("active");
	document.querySelector(".level4 .box.r2 .robot1 .text").classList.add("active");
	document.querySelector(".level4 .box.r2 .robot1").style.alignItems = "flex-start";
	setTimeout(()=>{
		btn9.classList.add("active")
	},1000)
	let sc = 0;
  	let intsc = setInterval(()=>{
  		if(sc<=document.querySelector(".level4 .box.r1").offsetHeight){
			sc+=50;
			window.scrollTo(0,sc)
		} else {
			clearInterval(intsc);
		}
	},50)
}
btn9.onclick = ()=>{
	document.querySelector(".level4 .box.r3").classList.add("active");
	document.querySelector(".level4 .box.r3 .robot1").classList.add("active");
	document.querySelector(".level4 .box.r3 .robot1 .text").classList.add("active");
	document.querySelector(".level4 .box.r3 .robot1").style.alignItems = "flex-start";
	setTimeout(()=>{
		document.querySelector("#checkBtn2").classList.add("active")
		document.querySelector("#btn10").classList.remove("active")
	},1000)
	let sc = document.querySelector(".level4 .box.r1").offsetHeight + document.querySelector(".level4 .box.r2").offsetHeight;
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
let test2Btns = document.querySelectorAll(".level4 .box.r3 .robot1 .text .test1 button");
let isTest2 = false;
test2Btns.forEach((item)=>{
	item.onclick = ()=>{
		for (let i = 0; i < test2Btns.length; i++) {
			test2Btns[i].classList.remove("active");
		}
		item.classList.add("active");

		item.getAttribute("isRight")=="YES" ? isTest2=true : isTest2=false;
	}
})
document.querySelector("#checkBtn2").onclick = ()=>{
	if (isTest2) {
		document.querySelector("#checkBtn2").classList.remove("active");
		document.querySelector("#checkBtn2").style.display = "none";
		btn10.classList.add("active");
		document.querySelector(".level4 .box.r3 .robot1 .text .test1 button.active").classList.add("right");
		setTimeout(()=>{
			document.querySelector(".level4 .box.r3 .robot1 .text .test1 button.active").classList.remove("active");
		},1000);
		mark += 5;
	} else {
		document.querySelector(".level4 .box.r3 .robot1 .text .test1 button.active").classList.add("noRight");
		setTimeout(()=>{
			document.querySelector(".level4 .box.r3 .robot1 .text .test1 button.active").classList.remove("active");
			document.querySelector(".level4 .box.r3 .robot1 .text .test1 button.active").classList.remove("noRight");
		},500);
		mark--
	}
}
btn10.onclick = ()=>{
	document.querySelector(".level4").classList.remove('active');
	document.querySelector(".level5").classList.add("active");
	document.querySelector(".level5 .robot1").classList.add("active");
	setTimeout(()=>{
		document.querySelector(".level5 .robot1 .text").classList.add("active")
		document.querySelector("#btn11").classList.add("active")
	},200)
	document.querySelector(".level5 .robot1").style.alignItems = "flex-start";
	window.scrollTo(0,0);
}
btn11.onclick = ()=>{
	document.querySelector(".level5 .box.r2").classList.add("active");
	document.querySelector(".level5 .box.r2 .robot1").classList.add("active");
	document.querySelector(".level5 .box.r2 .robot1 .text").classList.add("active");
	document.querySelector(".level5 .box.r2 .robot1").style.alignItems = "flex-start";
	setTimeout(()=>{
		btn12.classList.add("active")
	},1000)
	let sc = 0;
  	let intsc = setInterval(()=>{
  		if(sc<=document.querySelector(".level5 .box.r1").offsetHeight){
			sc+=50;
			window.scrollTo(0,sc)
		} else {
			clearInterval(intsc);
		}
	},50)
}
btn12.onclick = ()=>{
	document.querySelector(".level5 .box.r3").classList.add("active");
	document.querySelector(".level5 .box.r3 .robot1").classList.add("active");
	document.querySelector(".level5 .box.r3 .robot1 .text").classList.add("active");
	document.querySelector(".level5 .box.r3 .robot1").style.alignItems = "flex-start";
	setTimeout(()=>{
		document.querySelector("#checkBtn3").classList.add("active")
		document.querySelector("#btn13").classList.remove("active")
	},1000)
	let sc = document.querySelector(".level5 .box.r1").offsetHeight + document.querySelector(".level5 .box.r2").offsetHeight;
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
let test3Btns = document.querySelectorAll(".level5 .box.r3 .robot1 .text .test1 button");
let isTest3 = false;
test3Btns.forEach((item)=>{
	item.onclick = ()=>{
		for (let i = 0; i < test3Btns.length; i++) {
			test3Btns[i].classList.remove("active");
		}
		item.classList.add("active");

		item.getAttribute("isRight")=="YES" ? isTest3=true : isTest3=false;
	}
})
document.querySelector("#checkBtn3").onclick = ()=>{
	if (isTest3) {
		document.querySelector("#checkBtn3").classList.remove("active");
		document.querySelector("#checkBtn3").style.display = "none";
		btn13.classList.add("active");
		document.querySelector(".level5 .box.r3 .robot1 .text .test1 button.active").classList.add("right");
		setTimeout(()=>{
			document.querySelector(".level5 .box.r3 .robot1 .text .test1 button.active").classList.remove("active");
		},1000);
		mark += 5;
		console.log(mark)
	} else {
		document.querySelector(".level5 .box.r3 .robot1 .text .test1 button.active").classList.add("noRight");
		setTimeout(()=>{
			document.querySelector(".level5 .box.r3 .robot1 .text .test1 button.active").classList.remove("active");
			document.querySelector(".level5 .box.r3 .robot1 .text .test1 button.active").classList.remove("noRight");
		},500);
		mark--;
	}
}
btn13.onclick = ()=>{
	document.querySelector(".level5").classList.remove('active');
	document.querySelector(".level6").classList.add("active");
	document.querySelector(".level6 .robot1").classList.add("active");
	setTimeout(()=>{
		document.querySelector(".level6 .robot1 .text").classList.add("active")
		document.querySelector("#btn14").classList.add("active")
	},200)
	document.querySelector(".level6 .robot1").style.alignItems = "flex-start";
	window.scrollTo(0,0);
}
btn14.onclick = ()=>{
	document.querySelector(".level6 .box.r2").classList.add("active");
	document.querySelector(".level6 .box.r2 .robot1").classList.add("active");
	document.querySelector(".level6 .box.r2 .robot1 .text").classList.add("active");
	document.querySelector(".level6 .box.r2 .robot1").style.alignItems = "flex-start";
	setTimeout(()=>{
		btn15.classList.add("active")
	},1000)
	let sc = 0;
  	let intsc = setInterval(()=>{
  		if(sc<=document.querySelector(".level6 .box.r1").offsetHeight){
			sc+=50;
			window.scrollTo(0,sc)
		} else {
			clearInterval(intsc);
		}
	},50)
}
btn15.onclick = ()=>{
	document.querySelector(".level6 .box.r3").classList.add("active");
	document.querySelector(".level6 .box.r3 .robot1").classList.add("active");
	document.querySelector(".level6 .box.r3 .robot1 .text").classList.add("active");
	document.querySelector(".level6 .box.r3 .robot1").style.alignItems = "flex-start";
	setTimeout(()=>{
		document.querySelector("#checkBtn4").classList.add("active")
		document.querySelector("#btn16").classList.remove("active")
	},1000)
	let sc = document.querySelector(".level6 .box.r1").offsetHeight + document.querySelector(".level6 .box.r2").offsetHeight;
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
let test4Btns = document.querySelectorAll(".level6 .box.r3 .robot1 .text .test1 button");
let isTest4 = false;
test4Btns.forEach((item)=>{
	item.onclick = ()=>{
		for (let i = 0; i < test4Btns.length; i++) {
			test4Btns[i].classList.remove("active");
		}
		item.classList.add("active");

		item.getAttribute("isRight")=="YES" ? isTest4=true : isTest4=false;
	}
})
document.querySelector("#checkBtn4").onclick = ()=>{
	if (isTest4) {
		document.querySelector("#checkBtn4").classList.remove("active");
		document.querySelector("#checkBtn4").style.display = "none";
		btn16.classList.add("active");
		document.querySelector(".level6 .box.r3 .robot1 .text .test1 button.active").classList.add("right");
		setTimeout(()=>{
			document.querySelector(".level6 .box.r3 .robot1 .text .test1 button.active").classList.remove("active");
		},1000);
		mark += 5;
		console.log(mark)
	} else {
		document.querySelector(".level6 .box.r3 .robot1 .text .test1 button.active").classList.add("noRight");
		setTimeout(()=>{
			document.querySelector(".level6 .box.r3 .robot1 .text .test1 button.active").classList.remove("active");
			document.querySelector(".level6 .box.r3 .robot1 .text .test1 button.active").classList.remove("noRight");
		},500);
		mark--;
	}
}
btn16.onclick = ()=>{
	document.querySelector(".level6").classList.remove('active');
	document.querySelector(".level7").classList.add("active");
	document.querySelector(".level7 .robot1").classList.add("active");
	setTimeout(()=>{
		document.querySelector(".level7 .robot1 .text").classList.add("active")
		document.querySelector("#btn17").classList.add("active")
	},200)
	document.querySelector(".level7 .robot1").style.alignItems = "flex-start";
	window.scrollTo(0,0);
}
btn17.onclick = ()=>{
	document.querySelector(".level7 .box.r2").classList.add("active");
	document.querySelector(".level7 .box.r2 .robot1").classList.add("active");
	document.querySelector(".level7 .box.r2 .robot1 .text").classList.add("active");
	document.querySelector(".level7 .box.r2 .robot1").style.alignItems = "flex-start";
	setTimeout(()=>{
		btn15.classList.add("active")
	},1000)
	let sc = 0;
  	let intsc = setInterval(()=>{
  		if(sc<=document.querySelector(".level7 .box.r1").offsetHeight){
			sc+=50;
			window.scrollTo(0,sc)
		} else {
			clearInterval(intsc);
		}
	},50)
}
btn18.onclick = ()=>{
	document.querySelector(".level7 .box.r3").classList.add("active");
	document.querySelector(".level7 .box.r3 .robot1").classList.add("active");
	document.querySelector(".level7 .box.r3 .robot1 .text").classList.add("active");
	document.querySelector(".level7 .box.r3 .robot1").style.alignItems = "flex-start";
	setTimeout(()=>{
		document.querySelector("#checkBtn5").classList.add("active")
		document.querySelector("#btn19").classList.remove("active")
	},1000)
	let sc = document.querySelector(".level7 .box.r1").offsetHeight + document.querySelector(".level7 .box.r2").offsetHeight;
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
let test5Btns = document.querySelectorAll(".level7 .box.r3 .robot1 .text .test1 button");
let isTest5 = false;
test5Btns.forEach((item)=>{
	item.onclick = ()=>{
		for (let i = 0; i < test5Btns.length; i++) {
			test5Btns[i].classList.remove("active");
		}
		item.classList.add("active");

		item.getAttribute("isRight")=="YES" ? isTest5=true : isTest5=false;
	}
})
document.querySelector("#checkBtn5").onclick = ()=>{
	if (isTest5) {
		document.querySelector("#checkBtn5").classList.remove("active");
		document.querySelector("#checkBtn5").style.display = "none";
		btn19.classList.add("active");
		document.querySelector(".level7 .box.r3 .robot1 .text .test1 button.active").classList.add("right");
		setTimeout(()=>{
			document.querySelector(".level7 .box.r3 .robot1 .text .test1 button.active").classList.remove("active");
		},1000);
		mark += 5;
		console.log(mark)
	} else {
		document.querySelector(".level7 .box.r3 .robot1 .text .test1 button.active").classList.add("noRight");
		setTimeout(()=>{
			document.querySelector(".level7 .box.r3 .robot1 .text .test1 button.active").classList.remove("active");
			document.querySelector(".level7 .box.r3 .robot1 .text .test1 button.active").classList.remove("noRight");
		},500);
		mark--;
	}
}
btn19.onclick = ()=>{
	document.querySelector(".level7").classList.remove('active');
	document.querySelector(".level8").classList.add("active");
	document.querySelector(".level8 .robot1").classList.add("active");
	setTimeout(()=>{
		document.querySelector(".level8 .robot1 .text").classList.add("active")
		document.querySelector("#btn20").classList.add("active")
	},200)
	document.querySelector(".level8 .robot1").style.alignItems = "flex-start";
	window.scrollTo(0,0);
}