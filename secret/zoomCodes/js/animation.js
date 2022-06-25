"use strict"
const loadingLines = document.querySelectorAll(".loading .lines .line")
if(loadingLines){
    let i = 0
    let int = setInterval(()=>{
        if(loadingLines[i]){
            loadingLines[i].classList.add("active")
            i++
        } else {
            clearInterval(int)
        }
    },250)
}

const loading = document.querySelector("section.hello")
if(loading){
    setTimeout(()=>{
        let i = 100
        let int = setInterval(()=>{
            i--;
            loading.style.opacity = i/100
            if(i==0){
                clearInterval(int);
            }
        },5)
    },2000)
}
