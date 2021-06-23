//timer
// let date, hours, minutes, seconds,
// 	timer = document.querySelector(".timer"),
// 	hoursBlock = document.querySelector(".hours"),
// 	minutesBlock = document.querySelector(".minutes"),
// 	secondsBlock = document.querySelector(".seconds");

// setInterval(() => {
// 	date = new Date()
// 	hours = date.getHours()
//     minutes = date.getMinutes()
//     seconds = date.getSeconds()

//     if(String(hours).length < 2){
//     	hours = "0" + hours
//     }
//     if(String(minutes).length < 2){
//     	minutes = "0" + minutes
//     }
//     if(String(seconds).length < 2){
//     	seconds = "0" + seconds
//     }

//     if((+hours) == 7||(+hours)>7){
//     	timer.style.display = "none";
//     } else if ((+hours)==0){
//     	timer.style.display = "flex";
//     } else {
//     	timer.style.display = "flex";
//     }


//     hoursBlock.innerHTML = hours;
//     minutesBlock.innerHTML = minutes;
//     secondsBlock.innerHTML = seconds;
// },1000)



//Seasons backgrounds
let month = new Date().getMonth()+1,
	backgroundBlock = document.querySelector(".main"),
	whatASeason;
if (month <= 2 || month == 12) whatASeason = "Winter"
else if (month >=3 && month <=5) whatASeason = "Spring"
else if (month >=6 && month <=8) whatASeason = "Summer"
else if (month >=9 && month <=11) whatASeason = "Autumn";
backgroundBlock.style.background = "url(img/seasons/"+whatASeason.toLowerCase()+".jpg) center";
backgroundBlock.style.backgroundSize = "cover";



//show or hide projects
let infoHeader = document.querySelector(".info-header"),
	blocks = document.querySelectorAll(".info-tabcontent"),
	whatAClassName = "project";

function categoriesFunctions(e) {
	if(e.target && e.target.classList.contains("info-header-tab")){
		blocks.forEach(function (item) {
			item.classList.add("hide");
			item.classList.remove("show");
		})
		if (document.querySelector(".btnMore")) {
			document.querySelector(".btnMore").remove();
		}
		if (document.querySelector(".btnNoMore")){
			document.querySelector(".btnNoMore").remove();
		}
		e.target.classList.remove("info-header-tab");
		whatAClassName = e.target.className;
		e.target.classList.add("info-header-tab");

		blocks.forEach(function (item) {
			item.classList.add("show")
			item.classList.remove("hide");
			if(!item.classList.contains(whatAClassName)){
				item.classList.remove("show");
				item.classList.add("hide");
			}
			if (item.classList.contains("project")) {
				item.classList.remove("project");
			}
			if (whatAClassName == "project") {
				item.classList.add("project");
				item.classList.add("show")
				item.classList.remove("hide");
			}
		})
		isBiggerThan10();
	}
}
infoHeader.addEventListener("click",categoriesFunctions);



//counter
let allProjects = document.querySelectorAll(".project").length-1,
sites = document.querySelectorAll(".site").length-1,
games = document.querySelectorAll(".game").length-1,
other = document.querySelectorAll(".other").length-1;

let allProjectsOut = document.querySelector(".info-header-tab.project span"),
	sitesOut = document.querySelector(".info-header-tab.site span"),
	gamesOut = document.querySelector(".info-header-tab.game span"),
	otherOut = document.querySelector(".info-header-tab.other span");

allProjectsOut.style.color = "white";
sitesOut.style.color = "white";
gamesOut.style.color = "white";
otherOut.style.color = "white";

allProjectsOut.innerHTML = allProjects;
sitesOut.innerHTML = sites;
gamesOut.innerHTML = games;
otherOut.innerHTML = other;


//hide bigger than 10 projects
function isBiggerThan10(){

	// console.log(whatAClassName);
	let whatBlocks = document.querySelectorAll("."+whatAClassName)
	// console.log(whatBlocks)
	if(whatBlocks.length-1 >= 10){
		whatBlocks.forEach((item)=>{
			if (!item.classList.contains("info-header-tab")) {
				item.classList.remove("show")
				item.classList.add("hide");
			}
		})
		for (let i = 1; i <= 10; i++) {
			whatBlocks[i].classList.add("show");
		}
		let btnImagesLink = "https://img.icons8.com/ios-filled/50/000000/down-squared--v1.png"
		let btnMore = document.createElement("button");
			btnMore.className = "btnMore";
			btnMore.innerHTML = '<img class="left" src='+btnImagesLink+'/>'+
							'View all projects'+
							'<img class="right" src='+btnImagesLink+'/>'
		let btnNoMore = document.createElement("button");
			btnNoMore.className = "btnNoMore";
			btnNoMore.innerHTML = '<img class="left" src='+btnImagesLink+'/>'+
							'View less projects'+
							'<img class="right" src='+btnImagesLink+'/>'
		if(document.querySelector(".btnMore") == null){
			whatBlocks[10].after(btnMore);
		}

		btnMore.onclick = ()=>{
			whatBlocks.forEach((item)=>{
				if (!item.classList.contains("info-header-tab")) {
					item.classList.add("show");
					item.classList.remove("hide");
				}
			})
			btnMore.style.display = "none";
			document.querySelector(".btnMore").remove();
			if(document.querySelector(".btnNoMore") == null){
				btnNoMore.style.display = "flex"; 
				whatBlocks[whatBlocks.length-1].after(btnNoMore);
			}
		}
		btnNoMore.onclick = ()=>{
			whatBlocks.forEach((item)=>{
				if (item.classList.contains("project")) {
					item.classList.remove("project");
				}
				if (!item.classList.contains("info-header-tab")) {
					item.classList.remove("show")
					item.classList.add("hide");
				}
			})
			for (let i = 1; i <= 10; i++) {
				whatBlocks[i].classList.add("show");
			}
			btnNoMore.style.display = "none";
			document.querySelector(".btnNoMore").remove();
			if(document.querySelector(".btnMore") == null){
				btnMore.style.display = "flex"; 
				whatBlocks[10].after(btnMore);
			}
		}
	} else {

	}
}
isBiggerThan10();


//checkImgHeight
function checkImgHeight() {
  let height = document.querySelectorAll(".photo");
  for (let i = 0; i < height.length; i++) {
   	if (height[i].querySelectorAll("img").length > 1) {
        height[i].style.overflowY = "scroll";
    }
  }
}
setTimeout(checkImgHeight,1000);