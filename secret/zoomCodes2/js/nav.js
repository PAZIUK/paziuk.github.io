"use strict"
let loadBlock = document.querySelector(".load");
let aIG = 0;
let int = setInterval(() => {
  if (loadBlock != null) {
    aIG += 45;
    loadBlock.querySelector("img").style.transform = `rotate(${aIG}deg)`;
  } else {
    clearInterval(int);
  }
}, 200);
window.onload = () => {
  let link = window.location.href.split("#")
  if (link.length > 1) {
    let whatADay = link[1];
    showDay(whatADay);
  } else {
    document.querySelector(".days").classList.add("active")
    let daysBtns = document.querySelectorAll(".days button");
    setTimeout(
      daysBtns.forEach(item => {
        item.classList.add("active");
        item.addEventListener("click", function () {
          showDay(this.getAttribute('id'));
          window.location.reload();
        })
      })
      , 100)
  }
}

let daysBtns = document.querySelectorAll(".days button");
daysBtns.forEach(item => {
  item.addEventListener("click", function () {
    let href = item.getAttribute("id");
    window.location.href = `#${href}`;
    showDay(href);
  })
})

function showDay(day) {
  document.querySelector(".days").classList.remove("active")
  document.body.classList.add("active");
  loadBlock.classList.add("active");
  let btnsBlocks = document.querySelectorAll(".btns");

  btnsBlocks.forEach(item => {
    if (item.classList.contains(day)) {
      item.classList.add("active");
      let header = document.querySelector("header.classInfo");
      document.querySelectorAll(".days button").forEach(i => {
        if (i.getAttribute("id") == day) {
          header.querySelector(".name").textContent = i.textContent;
          header.classList.add("active");
        }
      })
    }
  })

}
