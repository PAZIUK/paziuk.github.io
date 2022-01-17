//add liked projects
let hearths = document.querySelectorAll(".info .bx");
hearths.forEach(item=>{
	item.addEventListener("click",function(){
		if(item.classList.contains("bx-heart")){
			this.classList.remove("bx-heart");
			this.classList.add("bxs-heart");
			this.parentElement.parentElement.classList.add("saved")
			addProjectToSaved(this.parentElement.parentElement.lastChild.id.substr(1));
		} else if(item.classList.contains("bxs-heart")){
			this.classList.remove("bxs-heart");
			this.parentElement.parentElement.classList.remove("saved");
			this.classList.add("bx-heart");
			removeProjectToSaved(this.parentElement.parentElement.lastChild.id.substr(1));
		}
	})
})
function addProjectToSaved(id){
	let saved;
	if (localStorage.getItem("saved")) {
		saved = localStorage.getItem("saved").split(",").map( s => +s );
	} else {
		saved = [];
	}
	if (!saved.includes(+id)) {
		saved.push(+id);
	}
	localStorage.setItem("saved",saved);
}
function removeProjectToSaved(id){
	let saved = localStorage.getItem("saved").split(",").map( s => +s );
	let index = saved.indexOf(+id);
	if (index > -1) {
	  saved.splice(index, 1);
	}
	localStorage.setItem("saved",saved);
}