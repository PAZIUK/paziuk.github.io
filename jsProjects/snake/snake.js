//SNAKE
let scoreBlock;
let score = 0;

const config = {
  step: 0,
  maxStep: 6,
  sizeCell: 16,
  sizeBerry: 16 / 4
}

const snake = {
  x: -160,
  y: 160,
  dx: 0,
  dy: -config.sizeCell,
  tails: [],
  maxTails: 3
}

let berry = {
  x: 0,
  y: 0
}


let canvas = document.querySelector("#game-canvas");
let context = canvas.getContext("2d");
let record = 0;
scoreBlock = document.querySelector(".game-score .score-count");
recordBlock = document.querySelector(".game-max .max-count");
drawScore();

function gameLoop() {

  requestAnimationFrame(gameLoop);
  if (++config.step < config.maxStep) {
    return;
  }
  config.step = 0;

  context.clearRect(0, 0, canvas.width, canvas.height);

  drawBerry();
  drawSnake();
}
requestAnimationFrame(gameLoop);

function drawSnake() {
  snake.x += snake.dx;
  snake.y += snake.dy;

  collisionBorder();

  // todo бордер
  snake.tails.unshift({ x: snake.x, y: snake.y });

  if (snake.tails.length > snake.maxTails) {
    snake.tails.pop();
  }

  snake.tails.forEach(function (el, index) {
    if (index == 0) {
      context.fillStyle = document.querySelector('#head').value;
    } else {
      context.fillStyle = document.querySelector('#tail').value;
    }
    context.fillRect(el.x, el.y, config.sizeCell, config.sizeCell);

    if (el.x === berry.x && el.y === berry.y) {
      snake.maxTails++;
      incScore();
      randomPositionBerry();
    }

    for (let i = index + 1; i < snake.tails.length; i++) {

      if (el.x == snake.tails[i].x && el.y == snake.tails[i].y) {
        refreshGame();
      }

    }

  });
}

function collisionBorder() {
  if (snake.x < 0) {
    snake.x = canvas.width - config.sizeCell;
  } else if (snake.x >= canvas.width) {
    snake.x = 0;
  }

  if (snake.y < 0) {
    snake.y = canvas.height - config.sizeCell;
  } else if (snake.y >= canvas.height) {
    snake.y = 0;
  }
}
function refreshGame() {
  score = 0;
  drawScore();

  snake.x = -160;
  snake.y = -160;
  snake.tails = [];
  snake.maxTails = 3;
  snake.dx = 0;
  snake.dy = -config.sizeCell;

  randomPositionBerry();
}

function drawBerry() {
  context.beginPath();
  context.fillStyle = document.querySelector('#berry').value;
  context.arc(berry.x + (config.sizeCell / 2), berry.y + (config.sizeCell / 2), config.sizeBerry, 0, 2 * Math.PI);
  context.fill();
}

function randomPositionBerry() {
  berry.x = getRandomInt(0, canvas.width / config.sizeCell) * config.sizeCell;
  berry.y = getRandomInt(0, canvas.height / config.sizeCell) * config.sizeCell;
}

function incScore() {
  score++;
  drawScore();
}


function drawScore() {
  scoreBlock.innerHTML = score;
  if (localStorage.getItem('record') === null) {
    localStorage.setItem("record", 0);
  } else {
    record = localStorage.getItem("record");
    recordBlock.innerHTML = "Record: " + record;
    if (score >= record) {
      recordBlock.innerHTML = "Record: " + record++;
      if (--record > localStorage.record) {
        localStorage.setItem("record", --record);
      }
    }
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

document.addEventListener("keydown", function (e) {
  if (e.code == "KeyW" || e.code == "ArrowUp") {
    snake.dy = -config.sizeCell;
    snake.dx = 0;
  } else if (e.code == "KeyA" || e.code == "ArrowLeft") {
    snake.dx = -config.sizeCell;
    snake.dy = 0;
  } else if (e.code == "KeyS" || e.code == "ArrowDown") {
    snake.dy = config.sizeCell;
    snake.dx = 0;
  } else if (e.code == "KeyD" || e.code == "ArrowRight") {
    snake.dx = config.sizeCell;
    snake.dy = 0;
  }
});

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;
let x2 = null;

function handleTouchStart(event) {
  let firstTouch = event.touches[0];
  x1 = firstTouch.clientX;
  y1 = firstTouch.clientY;
}
function handleTouchMove(event) {
  if (!x1 || !y1) {
    return false;
  }
  let x2 = event.touches[0].clientX;
  let y2 = event.touches[0].clientY;

  let xDiff = x2 - x1;
  let yDiff = y2 - y1;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      //right
      snake.dx = config.sizeCell;
      snake.dy = 0;
    } else {
      //left
      snake.dx = -config.sizeCell;
      snake.dy = 0;
    }
  } else {
    if (yDiff > 0) {
      //down
      snake.dy = config.sizeCell;
      snake.dx = 0;
    } else {
      //top
      snake.dy = -config.sizeCell;
      snake.dx = 0;
    }
  }
}
