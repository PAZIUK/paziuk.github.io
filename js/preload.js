//preload
let preload = document.querySelectorAll(".preload");

let howManyPreload=0;
let int = setInterval(()=>{
howManyPreload+=100;
},100)
function hidePreload(){
	preload.forEach(item=>{item.classList.add("none")})
	if (document.body.clientHeight>window.innerHeight) {
		setTimeout(()=>document.body.style.overflowY = "scroll",1);
	}
}
document.addEventListener("DOMContentLoaded",()=>{
	if (howManyPreload>=5300) {
		hidePreload();
	} else {
		setTimeout(()=>{
			hidePreload();
			clearInterval(int)
		},5300-howManyPreload)
	}

	// hidePreload();
	
})