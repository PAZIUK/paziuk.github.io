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

let backButton = document.querySelector(".classInfo img");
backButton.addEventListener("click",function(){
	localStorage.setItem('classCodeNow', window.location.pathname.split("/").pop().split(".")[0]);
	window.location.href = "../index.html"
})
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
		item.style.gridеemplateсolumns = "repeat(1,1fr)";
		item.style.gridGap = ".3rem";
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