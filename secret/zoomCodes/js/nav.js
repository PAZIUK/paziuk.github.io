"use strict"

let loadBlock = document.querySelector(".load");
let aIG = 0;
window.onload = () => {
  let link = window.location.href.split("#")
  if (link.length > 1) {
    let whatADay = link[1];
    showDay(whatADay);
    let int = setInterval(() => {
      if (loadBlock.classList.contains("active")) {
        aIG += 45;
        loadBlock.querySelector("img").style.transform = `rotate(${aIG}deg)`;
      } else {
        clearInterval(int);
      }
    }, 200);
  } else {
    let int = setInterval(() => {
      if (loadBlock.classList.contains("active")) {
        aIG += 45;
        loadBlock.querySelector("img").style.transform = `rotate(${aIG}deg)`;
      } else {
        clearInterval(int);
      }
    }, 200);
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
          header.querySelector(".name").textContent = i.textContent.toUpperCase();
          header.classList.add("active");
        }
      })
      let inc = 1;
      item.querySelectorAll(".btns .lesson").forEach(it=>{
        it.querySelector(".lessonBtn .lessonNumber").textContent = inc+".";
        inc++;      
      })
    }
  })

}

// const schedule = {
//   1: [["09:00:00"],["09:30:00"]],
//   2: [["09:45:00"],["10:15:00"]],
//   3: [["10:30:00"],["11:00:00"]],
//   4: [["11:15:00"],["11:45:00"]],
//   5: [["12:00:00"],["12:30:00"]],
//   6: [["12:45:00"],["13:15:00"]],
//   7: [["13:30:00"],["14:00:00"]],
// }

// let scheduleLessonsNumbers = Object.keys(schedule);
// let scheduleLessonsTime = Object.values(schedule);

// window.addEventListener("load",startTimer)
// function startTimer(){
//   let nowTime = new Date(),
//       day = nowTime.getDate(),
//       hours = nowTime.getHours()-13;
//   if(hours<14&&hours>=9){
//     if ((day>0)) {
//       document.querySelector(".nowLesson").classList.add("active");
//       let nowMinutes = nowTime.getMinutes();
//       let nowSeconds = nowTime.getSeconds();
//       for (let i = 0; i < scheduleLessonsNumbers.length; i++) {
//         let lessonStart = scheduleLessonsTime[i][0][0];
//         let lessonEnd = scheduleLessonsTime[i][1][0];
//         let nextLessonStart;
//         if(scheduleLessonsTime[i+1]) {
//           nextLessonStart = scheduleLessonsTime[i+1][0][0];
//         }
//         let isLesson = checkTime(lessonStart, lessonEnd, hours, nowMinutes, nowSeconds);
//         let isBreak;
//         if(nextLessonStart) isBreak = checkTime(lessonEnd, nextLessonStart, hours, nowMinutes, nowSeconds);
//         // console.log(isLesson)
//         // console.log(isBreak)
//         if(isLesson == true) {
//           changeTimer("lesson",lessonEnd);
//         } 
//         if(isBreak&&isBreak == true){
//           changeTimer("break",nextLessonStart);
//         }
//       }
//     }
//   }
// }
// function changeTimer(whatTime,toTime){

//   if (whatTimer=="lesson") {
    
//     console.log("lesson")
//   } else if(whatTimer=="break"){
//     console.log("break")
//   }

// }
// function checkTime (start, end, hours, minutes, seconds){
//   let s = 60,
//       d = ':',
//       b = start.split (d);
//       b = b[0]* s * s + b [1] * s + +b[2];
//   let e = end.split (d);
//       e = e[0]* s * s + e [1] * s + +e[2];
//   let t = new Date;
//       t = hours * s * s + minutes * s + seconds;
//       t = t.getHours() * s * s + t.getMinutes() * s + t.getSeconds();

//   return (t >= b && t <= e);
// }

// document.querySelector(".nowLesson .cross").addEventListener("click",function(){
//   this.parentElement.classList.remove("active");
// })