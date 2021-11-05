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
backButton.addEventListener("click", function () {
  let arrayOfLinks = window.location.pathname.split("/");
  localStorage.setItem('classCode', arrayOfLinks[arrayOfLinks.length - 2]);
  window.location.href = "nav.html"
})
let lessons = document.querySelectorAll(".lesson");
let time = 0;
let intLessons = setInterval(() => {
  lessons.forEach(item => {
    let blockHeight = item.querySelector(".btn").offsetHeight + 8;
    item.style.height = blockHeight + "px";
    item.setAttribute("myHeight", blockHeight);
    if (item.querySelector(".btn").offsetHeight != 0 && time >= 1000) {
      document.querySelector(".load").classList.remove("active");
      clearInterval(intLessons)
    }
    // let marginForImg = (item.querySelector(".btn").offsetHeight - item.querySelector(".btn img").offsetHeight) / 2;
    // console.log(marginForImg)
    // document.querySelector(".btn img.btnImg").style.top = marginForImg+"px";
  })
  time += 100;
}, 100)
let lessonBtns = document.querySelectorAll('button.lessonBtn');
window.onresize = () => {
  lessonBtns.forEach(item => {
    anim(item.parentElement, item.parentElement.parentElement, 2)
    setTimeout(item.parentElement.classList.remove('active'), 1000)
    item.parentElement.querySelector('img').classList.remove('active')
    item.parentElement.parentElement.querySelector('.teachers').classList.remove('active')
  })
}
lessonBtns.forEach(item => {
  item.addEventListener('click', function () {
    anim(this.parentElement, this.parentElement.parentElement, 1)
    setTimeout(this.parentElement.classList.toggle('active'), 1000)
    this.parentElement.querySelector('img').classList.toggle('active')
    this.parentElement.parentElement.querySelector('.teachers').classList.toggle('active')
  });
})
let lessonImgs = document.querySelectorAll('.btn img.btnImg');
lessonImgs.forEach(item => {
  item.addEventListener('click', function () {
    anim(this.parentElement, this.parentElement.parentElement, 1)
    setTimeout(this.parentElement.classList.toggle('active'), 1000)
    this.parentElement.querySelector('img').classList.toggle('active')
    this.parentElement.parentElement.querySelector('.teachers').classList.toggle('active')
  });
})

//check 1 or a lot teachers in one block
let teachers = document.querySelectorAll('.teachers');
teachers.forEach(item => {
  if (item.children.length == 1) {
    item.style.gridеemplateсolumns = "repeat(1,1fr)";
    item.style.gridGap = ".3rem";
  }
})

//animation
function anim(btn, block, num) {
  if (num && num == 1) {
    if (btn.classList.contains("active")) {
      //друге нажаття
      let blockHeight = block.getAttribute("myHeight");
      let nowHeight = block.offsetHeight;
      let int = setInterval(() => {
        nowHeight -= 5;
        block.style.height = nowHeight + "px";
        if (blockHeight == nowHeight) {
          clearInterval(int);
        } else if (blockHeight > nowHeight) {
          block.style.height = blockHeight + "px";
          clearInterval(int);
        }
      }, 1)
    } else {
      //перше нажаття
      let descHeight = block.querySelector(".teachers").offsetHeight;
      let btnHeight = block.querySelector(".btn").offsetHeight;
      let fullHeight = btnHeight + descHeight;
      let nowHeight = block.offsetHeight;
      let int = setInterval(() => {
        nowHeight += 5;
        block.style.height = nowHeight + "px";
        if (fullHeight <= nowHeight) {
          clearInterval(int);
        }
      }, 1)
      block.style.height = block.querySelector(".btn").offsetHeight + 8 + "px";
    }
  } else if (num && num == 2) {
    if (btn.classList.contains("active")) {
      let btnHeight = block.querySelector(".btn").offsetHeight + 8;
      let nowHeight = block.offsetHeight;
      let int = setInterval(() => {
        nowHeight -= 5;
        block.style.height = nowHeight + "px";
        if (btnHeight >= nowHeight) {
          clearInterval(int);
        }
      }, 1)
    }
  }
}