"use strict"
document.addEventListener("DOMContentLoaded",function(){
	setTimeout(()=>{
		document.querySelector(".PASSWORD input").classList.add("active")
		document.querySelector(".PASSWORD button").classList.add("active")
	},200)
})
document.querySelector(".PASSWORD input").addEventListener("input",function(){
	if (this.value.length>5) {
		let value = this.value.substr(0,5);
		this.value = value;
	}
})
let checkPasswordBtn = document.querySelector("#checkPassword");
checkPasswordBtn.addEventListener("click",()=>checkPassword(checkPasswordBtn));

let PASSWORDS = [
	"05042",
	"10031",
]

function checkPassword(btn){
	let PASSWORD = btn.parentElement.querySelector("input").value;
	if(PASSWORDS.includes(PASSWORD)){
		console.log(1);
	} else {
		btn.parentElement.querySelector(".errorText").classList.add("active")
		setTimeout(()=>{
			btn.parentElement.querySelector(".errorText").classList.remove("active");
		},2000);
	}
}
// let loadBlock = document.querySelector(".load");
// let loadTime = 0;
// let loadImgDeg = 0;
// let int = setInterval(()=>{
// 	loadTime += 50
// 	loadImgDeg += 20;
// 	loadBlock.querySelector("img").style.transform = `rotate(${loadImgDeg}deg)`
// 	if (loadTime>1000) {
// 		clearInterval(int)
// 	}
// }
// ,50)
// document.addEventListener("DOMContentLoaded",function(){
// 	if (loadTime>1000) {
// 		loadBlock.classList.remove("active");
// 	} else {
// 		setTimeout(()=>{
// 			loadBlock.classList.remove("active");
// 		},1000-loadTime)
// 	}
// })
let lessons = document.querySelectorAll(".lesson");
lessons.forEach(item=>{
	item.style.height = item.querySelector(".btn").offsetHeight+8+"px";
})
let lessonBtns = document.querySelectorAll('button.lessonBtn');
window.onresize = ()=>{
	lessonBtns.forEach(item=>{
		anim(item.parentElement,item.parentElement.parentElement,2)
		setTimeout(item.parentElement.classList.remove('active'),1000)
		item.parentElement.querySelector('img').classList.remove('active')
		item.parentElement.parentElement.querySelector('.teachers').classList.remove('active')
	})
}
lessonBtns.forEach(item=>{
	item.addEventListener('click', function(){
		anim(this.parentElement,this.parentElement.parentElement,1)
		setTimeout(this.parentElement.classList.toggle('active'),1000)
		this.parentElement.querySelector('img').classList.toggle('active')
		this.parentElement.parentElement.querySelector('.teachers').classList.toggle('active')
	});
})
let lessonImgs = document.querySelectorAll('.btn img.btnImg');
lessonImgs.forEach(item=>{
	item.addEventListener('click', function(){
		anim(this.parentElement,this.parentElement.parentElement,1)
		setTimeout(this.parentElement.classList.toggle('active'),1000)
		this.parentElement.querySelector('img').classList.toggle('active')
		this.parentElement.parentElement.querySelector('.teachers').classList.toggle('active')
	});
})

//check 1 or a lot teachers in one block
let teachers = document.querySelectorAll('.teachers');
teachers.forEach(item=>{
	if(item.children.length==1){
		item.style.display = "flex";
		item.style.justifyContent = "center";
	}
})

//animation
function anim(btn,block,num){
	if(num&&num==1) {
		if(btn.classList.contains("active")) {
			//друге нажаття
			let btnHeight = block.querySelector(".btn").offsetHeight+8;
			let nowHeight = block.offsetHeight;
			let int = setInterval(()=>{
				nowHeight-=5;
				block.style.height = nowHeight+"px";
				if (btnHeight>=nowHeight) {
					clearInterval(int);
				}
			},1)
		} else {
			//перше нажаття
			let descHeight = block.querySelector(".teachers").offsetHeight;
			let btnHeight = block.querySelector(".btn").offsetHeight;
			let fullHeight = btnHeight + descHeight;
			let nowHeight = block.offsetHeight;
			let int = setInterval(()=>{
				nowHeight+=5;
				block.style.height = nowHeight+"px";
				if (fullHeight<=nowHeight) {
					clearInterval(int);
				}
			},1)
			block.style.height = block.querySelector(".btn").offsetHeight+8+"px";
		}
	} else if(num&&num==2){
		if (btn.classList.contains("active")) {
			let btnHeight = block.querySelector(".btn").offsetHeight+8;
			let nowHeight = block.offsetHeight;
			let int = setInterval(()=>{
				nowHeight-=5;
				block.style.height = nowHeight+"px";
				if (btnHeight>=nowHeight) {
					clearInterval(int);
				}
			},1)
		}
	}
}