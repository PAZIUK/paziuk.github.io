let btn = document.querySelector("#sidebarbtn"),
	sidebar = document.querySelector(".sidebar");

btn.onclick = ()=>{
	sidebar.classList.toggle("active")
	btn.classList.toggle("bx-menu")
	btn.classList.toggle("bx-x-circle")
}
window.onscroll = ()=>{
	document.querySelectorAll(".tooltip").forEach(item=>{
		item.style.opacity = "0";
	})
}