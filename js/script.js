//scroll progress bar
let progressLine = document.querySelector(".scrollLine"),
	totalHeight;

window.onscroll = ()=>{
	totalHeight = document.body.scrollHeight - window.innerHeight;
	let progress = (window.pageYOffset / totalHeight) * 100;
	console.log(progress)
	progressLine.style.width = progress+"vw";
}

//to main page link
document.querySelector(".sidebar .logo_content .logo").addEventListener("click",()=>{
	if(window.location.href.split("/").pop().substr(0,13)=="projects.html") window.location.href = "../index.html"
	if(window.location.href.split("/").pop().substr(0,10)=="index.html") window.location.href = "";
})




//show percent of soft skills
let skillbars = document.querySelectorAll(".about .skills .soft_skills .skillbars .skillbar");
let percentbars = document.querySelectorAll(".about .skills .soft_skills .skillbars .skillbar .percent");
let linebars = document.querySelectorAll(".about .skills .soft_skills .skillbars .skillbar .linebar .line");
for(let i = 0; i<skillbars.length;i++){

	linebars[i].style.width = percentbars[i].textContent;
}


//link to saved projects
window.onload = ()=>{
	if(window.location.href.split("/").pop().split("#").pop()=="saved"){
		setInterval(window.location.href="#",10000)
		savedShow()
	}
}
function savedShow(){
	document.querySelectorAll("ul.btns button")[4].click()
};

//show info on hover projects block
let projectsBlocks = document.querySelectorAll(".project");
projectsBlocks.forEach(item=>{
	item.addEventListener("mouseenter",function(){
		this.querySelector(".info").classList.add("active")
	})
	item.addEventListener("mouseleave",function(){
		this.querySelector(".info").classList.remove("active")
	})
})

function saved(){
	let projects = document.querySelectorAll(".project");
	projects.forEach(item=>{
		item.querySelector(".info i.bx").addEventListener("click",function(e){
			if(this.classList[1] == "bx-heart"){
				e.path[2].classList.remove("show");
			}
			if (this.classList[1] == "bxs-heart") {
				e.path[2].classList.add("saved");
				if (document.querySelector("ul.btns button[type='saved']").classList.contains("active")&&
					window.location.href.split("/").pop().substr(0,13)=="projects.html") {
					e.path[2].classList.remove("show");
					e.path[2].classList.add("hide");
				}
			}

		})
	})
}
if(window.location.href.split("/").pop().substr(0,13)=="projects.html") saved();


//counter
if(window.location.href.split("/").pop().substr(0,13)=="projects.html"){
	setInterval(()=>{
		let allProjects = document.querySelectorAll(".project").length,
			sites = document.querySelectorAll(".site").length,
			games = document.querySelectorAll(".game").length,
			program = document.querySelectorAll(".program").length,
			savedProjects = document.querySelectorAll(".saved").length;

		let allProjectsOut = document.querySelector("ul.btns button[type='project'] span"),
			allTechOut = document.querySelector("ul.tech button[type='ALL'] span"),
			sitesOut = document.querySelector("ul.btns button[type='site'] span"),
			gamesOut = document.querySelector("ul.btns button[type='game'] span"),
			programOut = document.querySelector("ul.btns button[type='program'] span"),
			savedOut = document.querySelector("ul.btns button[type='saved'] span"),
			errorSaved = document.querySelector("#projects h1");

		allProjectsOut.textContent = allProjects;
		// allTechOut.textContent = allProjects;
		sitesOut.textContent = sites;
		gamesOut.textContent = games;
		programOut.textContent = program;
		savedOut.textContent = savedProjects;

		if (savedProjects==0&&document.querySelectorAll("ul.btns button")[4].classList.contains("active")) {
			errorSaved.style.display = "flex"
		} else {
			errorSaved.style.display = "none"
		}
	},100)
}


//
// let allProjectsType = document.querySelectorAll(".project");
// let counterHTML = 0;
// let counterCSS = 0;
// let counterJS = 0;
// let counterTypeScript = 0;
// let counterReact = 0;
// let counterPython = 0;

// allProjectsType.forEach(item=>{
// 	let type = item.getAttribute("tech").split("+");
// 	for (let i = 0; i < type.length; i++) {
// 		if (type[i]=="HTML5") counterHTML++;
// 		if (type[i]=="CSS3") counterCSS++;
// 		if (type[i]=="JS") counterJS++;
// 		if (type[i]=="TypeScript") counterTypeScript++;
// 		if (type[i]=="React") counterReact++;
// 		if (type[i]=="Python") counterPython++;
// 	}
// })

// let counterHTMLOut = document.querySelector("ul.tech button[type='HTML5'] span");
// let counterCSSOut = document.querySelector("ul.tech button[type='CSS3'] span");
// let counterJSOut = document.querySelector("ul.tech button[type='JS'] span");
// let counterTypeScriptOut = document.querySelector("ul.tech button[type='TypeScript'] span");
// let counterReactOut = document.querySelector("ul.tech button[type='React'] span");
// let counterPythonOut = document.querySelector("ul.tech button[type='Python'] span");

// counterHTMLOut.textContent = counterHTML;
// counterCSSOut.textContent = counterCSS;
// counterJSOut.textContent = counterJS;
// counterReactOut.textContent = counterReact;
// counterTypeScriptOut.textContent = counterTypeScript;
// counterPythonOut.textContent = counterPython;

// if (counterHTML==0) counterHTMLOut.parentElement.remove()
// if (counterCSS==0) counterCSSOut.parentElement.remove()
// if (counterJS==0) counterJSOut.parentElement.remove()
// if (counterReact==0) counterReactOut.parentElement.remove()
// if (counterTypeScript==0) counterTypeScriptOut.parentElement.remove()
// if (counterPython==0) counterPythonOut.parentElement.remove()



let btns = document.querySelectorAll("ul.btns button");
// let tech = document.querySelectorAll("ul.tech button");
btns.forEach(item=>{
	item.addEventListener("click",function(){
		for (let i = 0; i < btns.length; i++) {
			btns[i].classList.remove("active");
		}
		// for (let i = 1; i < tech.length; i++) {
		// 	tech[i].classList.remove("active");
		// }
		// tech[0].classList.add("active")
		this.classList.add("active");
		typeFun(this.getAttribute("type"))
		if (document.body.scrollHeight<=window.innerHeight) {
			document.body.style.overflow = "hidden"; 
		} else {
			document.body.style.overflowY = "scroll";
		}
	})
})
// tech.forEach(item=>{
// 	item.addEventListener("click",function(e){
// 		e.path[0].classList.toggle("active");
// 		if (e.path[0].textContent.substr(0,3)=="ALL") {
// 			for (let i = 1; i < tech.length; i++) {
// 				tech[i].classList.remove("active");
// 			}
// 		}
// 		let buttons = document.querySelectorAll("ul.tech button.active");
// 		if (buttons.length<1) {
// 			tech[0].classList.add("active")
// 		} else if(buttons.length>1){
// 			tech[0].classList.remove("active");
// 		}
// 		setTimeout(techFun(),500)
// 	})
// })
function typeFun(type){
	let whatAClassName = type;
	let blocks = document.querySelectorAll(".project")
	blocks.forEach(function (item) {
		item.classList.add("show");
		item.classList.add("active");
		item.classList.remove("hide");
		if(!item.classList.contains(whatAClassName)){
			item.classList.remove("show");
			item.classList.remove("active");
			item.classList.add("hide");
		}
		if (whatAClassName == "project") {
			item.classList.add("project");
			item.classList.add("show")
			item.classList.add("active")
			item.classList.remove("hide");
		}
	})
	// techCounter();
}
function techFun(){
	let active = document.querySelectorAll("ul.tech button.active");
	let activeType = document.querySelectorAll(".project.active");
	let type = "";
    for(let i = 0;i<active.length;i++){
      if (i!=active.length) {
        type += active[i].getAttribute("type")+"+";
      }
    }
    type = type.substr(0,type.length-1).split("+");
    console.log(type)
    activeType.forEach(item=>{
    	let activeIncludes = item.getAttribute("tech").split("+");
    	console.log(activeIncludes)
    	for (let it = 0; it < type.length; it++) {
    		if(!activeIncludes.includes(type[it])) {
    			item.classList.remove("show")
    			item.classList.add("hide")
    		} else {
    			item.classList.remove("hide");
    			item.classList.add("show");
    		}
    	}
    })
}
function techCounter(){
	let activeType = document.querySelectorAll(".project.show");
	let allTechOut = document.querySelector("ul.tech button[type='project'] span")
	allTechOut.textContent = activeType.length;

	let counterHTML = 0;
	let counterCSS = 0;
	let counterJS = 0;
	let counterTypeScript = 0;
	let counterReact = 0;
	let counterPython = 0;

	activeType.forEach(item=>{
		let type = item.getAttribute("tech").split("+");
		for (let i = 0; i < type.length; i++) {
			if (type[i]=="HTML5") counterHTML++;
			if (type[i]=="CSS3") counterCSS++;
			if (type[i]=="JS") counterJS++;
			if (type[i]=="TypeScript") counterTypeScript++;
			if (type[i]=="React") counterReact++;
			if (type[i]=="Python") counterPython++;
		}
	})

	counterHTMLOut.textContent = counterHTML;
	counterCSSOut.textContent = counterCSS;
	counterJSOut.textContent = counterJS;
}
