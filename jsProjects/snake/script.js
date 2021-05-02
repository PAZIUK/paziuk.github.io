//ANIMATION
function animation() {
  setTimeout(() => document.querySelector('.config-wrapper').classList.add('active'), 1);
  setTimeout(() => document.querySelector('.config-wrapper').style.transition = "all 5s ease 0s", 1000);
  if (window.innerWidth <= "480") {
    setTimeout(() => document.querySelector('.config-wrapper').height = "unset", 1);
  }
}
document.addEventListener("DOMContentLoaded", animation);

//SNAKE STYLE 
let snakeHead = document.querySelector('#resultHead');
let berryStyle = document.querySelector('#berryStyle');
let snakeTail = document.querySelector('#snake-parts').querySelector('.tail');
function snakeStyleHead() {
  let head = document.querySelector('#head').value;
  snakeHead.style.backgroundColor = head;
}
function snakeStyleTail() {
  let tail = document.querySelector('#tail').value;
  snakeTail.style.backgroundColor = tail;
}
function snakeStyleBerry() {
  let berry = document.querySelector('#berry').value;
  berryStyle.style.backgroundColor = berry;
};
function refresh() {
  let head = document.querySelector('#head');
  let berry = document.querySelector('#berry');
  let tail = document.querySelector('#tail');
  head.value = "#FA0556";
  tail.value = "#A00034";
  berry.value = "#ff0000";
  snakeStyleHead();
  snakeStyleTail();
  snakeStyleBerry();
}
function game() {
  document.querySelector('body').style.overflow = "hidden";
  document.querySelector(".config-wrapper").classList.toggle('noactive');
  setTimeout(() => document.querySelector('.config-wrapper').style.display = "none", 2000);
  setTimeout(() => document.querySelector("#game").style.display = "flex", 500);
  setTimeout(() => document.querySelector("#game").classList.toggle('active'), 1000);
}


window.onload = function () {
  //LOCAL STORAGE
  let nickname = document.querySelector('#nickname');
  let head = document.querySelector('#head');
  let tail = document.querySelector('#tail');
  let berry = document.querySelector('#berry');
  let snakeHead = document.querySelector('#resultHead');
  let snakeTail = document.querySelector('#snake-parts').querySelector('.tail');
  let berryStyle = document.querySelector('#berryStyle');

  if (localStorage.getItem("nickname")) {
    nickname.value = localStorage.getItem("nickname");
  }
  nickname.oninput = function () {
    localStorage.setItem("nickname", nickname.value);
  };

  if (localStorage.getItem("head")) {
    head.value = localStorage.getItem("head");
  }
  localStorage.head = head.value;
  snakeHead.style.backgroundColor = localStorage.head;
  head.oninput = function () {
    localStorage.setItem("head", head.value);
  };

  if (localStorage.getItem("tail")) {
    tail.value = localStorage.getItem("tail");
  }
  localStorage.tail = tail.value;
  snakeTail.style.backgroundColor = localStorage.tail;
  tail.oninput = function () {
    localStorage.setItem("tail", tail.value);
  };

  if (localStorage.getItem("berry")) {
    berry.value = localStorage.getItem("berry");
  }
  localStorage.berry = berry.value;
  berryStyle.style.backgroundColor = localStorage.berry;
  berry.oninput = function () {
    localStorage.setItem("berry", berry.value);
  };
};